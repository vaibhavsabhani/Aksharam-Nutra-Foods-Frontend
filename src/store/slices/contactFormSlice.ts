import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ContactFormValues } from "@/types";
import { API_URL } from "@/lib/api";

export type { ContactFormValues };

export type SubmitStatus = "idle" | "loading" | "succeeded" | "failed";

export interface ContactFormState {
  values: ContactFormValues;
  status: SubmitStatus;
  error: string | null;
}

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const initialState: ContactFormState = {
  values: initialValues,
  status: "idle",
  error: null,
};

export const submitContactForm = createAsyncThunk<
  { message: string },
  ContactFormValues,
  { rejectValue: string }
>("contactForm/submit", async (values, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        message: values.message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = Array.isArray(data?.message)
        ? data.message.join(", ")
        : (data?.message || data?.error || "Failed to send message");
      return rejectWithValue(errorMessage);
    }

    return data;
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Something went wrong. Please try again.";
    return rejectWithValue(message);
  }
});

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    setField(
      state,
      action: PayloadAction<{ field: keyof ContactFormValues; value: string }>
    ) {
      state.values[action.payload.field] = action.payload.value;
      if (state.status === "failed") {
        state.error = null;
        state.status = "idle";
      }
      if (state.status === "succeeded") {
        state.status = "idle";
      }
    },
    resetForm(state) {
      state.values = initialValues;
      state.status = "idle";
      state.error = null;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      if (action.payload) {
        state.status = "failed";
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = "succeeded";
        state.values = initialValues;
        state.error = null;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? "Something went wrong. Please try again.";
      });
  },
});

export const { setField, resetForm, setError } = contactFormSlice.actions;
export default contactFormSlice.reducer;

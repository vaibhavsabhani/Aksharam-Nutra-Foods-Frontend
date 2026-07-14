import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "succeeded" | "failed";

interface ContactFormState {
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
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (!res.ok) {
      return rejectWithValue(data?.error ?? "Something went wrong. Please try again.");
    }

    return data;
  } catch {
    return rejectWithValue("Network error. Please try again.");
  }
});

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    setField(
      state,
      action: { payload: { field: keyof ContactFormValues; value: string } }
    ) {
      state.values[action.payload.field] = action.payload.value;
    },
    resetForm(state) {
      state.values = initialValues;
      state.status = "idle";
      state.error = null;
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
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? "Something went wrong. Please try again.";
      });
  },
});

export const { setField, resetForm } = contactFormSlice.actions;
export default contactFormSlice.reducer;

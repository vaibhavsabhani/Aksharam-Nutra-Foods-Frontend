import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface NavState {
  mobileMenuOpen: boolean;
  activeDropdown: string | null;
}

const initialState: NavState = {
  mobileMenuOpen: false,
  activeDropdown: null,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    openMobileMenu(state) {
      state.mobileMenuOpen = true;
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false;
      state.activeDropdown = null;
    },
    setMobileMenuOpen(state, action: PayloadAction<boolean>) {
      state.mobileMenuOpen = action.payload;
      if (!action.payload) state.activeDropdown = null;
    },
    setActiveDropdown(state, action: PayloadAction<string | null>) {
      state.activeDropdown = action.payload;
    },
  },
});

export const {
  openMobileMenu,
  closeMobileMenu,
  setMobileMenuOpen,
  setActiveDropdown,
} = navSlice.actions;
export default navSlice.reducer;

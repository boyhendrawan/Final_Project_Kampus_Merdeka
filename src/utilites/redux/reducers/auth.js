import { createSlice } from "@reduxjs/toolkit";

function getUuidFromToken(token) {
  // Implementasikan logika untuk mendapatkan UUID dari token
  // Bergantung pada format token yang digunakan

  // Contoh sederhana jika UUID ada pada token yang berformat "UUID:DataLainnya"
  const parts = token.split(":");
  if (parts.length > 1) {
    const uuid = parts[0];
    return uuid;
  }

  // Kembalikan null jika tidak dapat menemukan UUID pada token
  return null;
}

const initialState = {
  dataUser: { uuid: "" },
  isLoggedIn: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }
      state.token = action.payload;
    },
    logout(state, action) {
      state.dataUser = null;
    },
    setUser(state, action) {
      const uuid = getUuidFromToken(action.payload);
      state.dataUser = { uuid };
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { login, logout, setUser, setIsLoggedIn } = tokenSlice.actions;
export default tokenSlice.reducer;

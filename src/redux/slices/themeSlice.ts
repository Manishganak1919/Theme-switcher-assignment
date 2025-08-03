import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeType = 'default' | 'theme2' | 'theme3';

export interface ThemeState {
  currentTheme: ThemeType;
}

const persistedTheme = (localStorage.getItem('theme') as ThemeType) || 'default';

const initialState: ThemeState = {
  currentTheme: persistedTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.currentTheme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

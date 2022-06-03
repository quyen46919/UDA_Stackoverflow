const { createSlice } = require('@reduxjs/toolkit');

const adminSlice = createSlice({
    name: 'filterState',
    initialState: {
        searchText: '',
        themeMode: 'black'
    },
    reducers: {
        updateSearchText(state, action) {
            state.searchText = action.payload;
        },
        toggleThemeMode(state) {
            state.themeMode = state.themeMode === 'dark' ? 'light': 'dark';
        }
    }
});

const { actions, reducer } = adminSlice;
export const { updateSearchText, toggleThemeMode } = actions;
export default reducer;
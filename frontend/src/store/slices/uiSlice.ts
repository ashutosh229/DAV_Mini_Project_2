import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
    activeTab: 'query' | 'history';
    sidebarOpen: boolean;
    darkMode: boolean;
}

const UiInitialState: UiState = {
    activeTab: 'query',
    sidebarOpen: false,
    darkMode: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: UiInitialState,
    reducers: {
        setActiveTab: (state, action: PayloadAction<'query' | 'history'>) => {
            state.activeTab = action.payload;
        },
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },
        setSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.sidebarOpen = action.payload;
        },
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { setActiveTab, toggleSidebar, setSidebarOpen, toggleDarkMode } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentQueryState {
    class: string;
    subject: string;
    question: string;
    answer: string | null;
    loading: boolean;
    error: string | null;
}

const currentQueryInitialState: CurrentQueryState = {
    class: '',
    subject: '',
    question: '',
    answer: null,
    loading: false,
    error: null,
};

const currentQuerySlice = createSlice({
    name: 'currentQuery',
    initialState: currentQueryInitialState,
    reducers: {
        setClass: (state, action: PayloadAction<string>) => {
            state.class = action.payload;
        },
        setSubject: (state, action: PayloadAction<string>) => {
            state.subject = action.payload;
        },
        setQuestion: (state, action: PayloadAction<string>) => {
            state.question = action.payload;
        },
        setAnswer: (state, action: PayloadAction<string>) => {
            state.answer = action.payload;
            state.loading = false;
        },
        resetQuery: (state) => {
            state.question = '';
            state.answer = null;
            state.error = null;
        },
        resetAll: () => currentQueryInitialState,
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    setClass,
    setSubject,
    setQuestion,
    setAnswer,
    resetQuery,
    resetAll,
    setLoading,
    setError,
} = currentQuerySlice.actions;
export const currentQueryReducer = currentQuerySlice.reducer;
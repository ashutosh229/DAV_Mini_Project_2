import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QueryRecord {
    id: string;
    class: string;
    subject: string;
    question: string;
    answer: string;
    timestamp: string;
}

interface QueryHistoryState {
    records: QueryRecord[];
    loading: boolean;
    error: string | null;
}

const queryHistoryInitialState: QueryHistoryState = {
    records: [],
    loading: false,
    error: null,
};

const queryHistorySlice = createSlice({
    name: 'queryHistory',
    initialState: queryHistoryInitialState,
    reducers: {
        setQueryHistory: (state, action: PayloadAction<QueryRecord[]>) => {
            state.records = action.payload;
            state.loading = false;
            state.error = null;
        },
        addQueryRecord: (state, action: PayloadAction<QueryRecord>) => {
            state.records.unshift(action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { setQueryHistory, addQueryRecord, setLoading, setError } = queryHistorySlice.actions;
export const queryHistoryReducer = queryHistorySlice.reducer;
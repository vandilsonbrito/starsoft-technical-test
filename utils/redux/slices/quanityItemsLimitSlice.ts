import { createSlice  } from '@reduxjs/toolkit';


interface LimitState {
    value: number;
}

const initialState: LimitState = {
    value: 20,
};

const quanityItemsLimit = createSlice({
    name: 'page',
    initialState, 
    reducers: {
        increment(state: { value: number }) {
            state.value += 10
        }
    }
});

export const { increment } = quanityItemsLimit.actions;
export default quanityItemsLimit.reducer;

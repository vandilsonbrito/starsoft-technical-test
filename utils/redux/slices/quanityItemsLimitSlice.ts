import { LimitState } from '@/utils/types/types';
import { createSlice  } from '@reduxjs/toolkit';

const initialState: LimitState = {
    value: 20,
};

const quanityItemsLimit = createSlice({
    name: 'page',
    initialState, 
    reducers: {
        increment(state: LimitState) {
            state.value += 10
        }
    }
});

export const { increment } = quanityItemsLimit.actions;
export default quanityItemsLimit.reducer;

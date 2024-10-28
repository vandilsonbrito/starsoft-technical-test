import { IsCheckoutOpen } from '@/utils/types/types';
import { createSlice  } from '@reduxjs/toolkit';

const initialState: IsCheckoutOpen = {
    value: false
}

const isCheckoutOpen = createSlice({
    name: 'isCheckoutOpen',
    initialState,
    reducers: {
        toggleState(state: IsCheckoutOpen) {
            state.value = !state.value
        }
    }
});

export const { toggleState } = isCheckoutOpen.actions
export default isCheckoutOpen.reducer;
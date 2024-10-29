import { IsThereAPIdata } from '@/utils/types/types';
import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

const initialState: IsThereAPIdata = {
    value: true
}

const isThereAPIdata = createSlice({
    name: 'isThereAPIdata',
    initialState,
    reducers: {
        setIsThereData(state, action: PayloadAction<boolean>) {
            state.value = action.payload;
        }
    }
});

export const { setIsThereData } = isThereAPIdata.actions
export default isThereAPIdata.reducer;
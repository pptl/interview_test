import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Keyword = string | boolean;

interface HomeState {
    keyword: Keyword,
}
const initialState: HomeState = {
    keyword: false,
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setKeyword: (state, action: PayloadAction<string>) => {
            state.keyword = action.payload
        },
    },
})

export const { setKeyword } = homeSlice.actions;

export default homeSlice.reducer;
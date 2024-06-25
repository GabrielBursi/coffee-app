import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	example: true,
}

export const slice = createSlice({
	name: 'slice',
	initialState,
	reducers: {
		setExample: (state, { payload }: PayloadAction<boolean>) => {
			state.example = payload
		},
	},
})

export const { setExample } = slice.actions

export const SliceReducer = slice.reducer

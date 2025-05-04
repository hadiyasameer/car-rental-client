import { createSlice } from '@reduxjs/toolkit'

const initialState = {
dealer:{}
}

export const dealerSlice = createSlice({
  name: 'dealer',
  initialState,
  reducers: {
    saveDealer: (state,action) => {
      state.dealer=action.payload
    },
    clearDealer: (state) => {
        state.dealer={}
      }
    
  },
})
export const { saveDealer,clearDealer } = dealerSlice.actions

export default dealerSlice.reducer
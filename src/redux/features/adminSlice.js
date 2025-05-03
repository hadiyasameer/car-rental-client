import { createSlice } from '@reduxjs/toolkit'

const initialState = {
admin:{}
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    saveAdmin: (state,action) => {
      state.admin=action.payload
    },
    clearAdmin: (state) => {
        state.admin={}
      }
    
  },
})

// Action creators are generated for each case reducer function
export const { saveAdmin,clearAdmin } = adminSlice.actions

export default adminSlice.reducer
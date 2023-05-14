import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initial: State = { data: [], last_key: 0 }

const formSlice = createSlice({
  name: 'data',
  initialState: initial,
  reducers: {
    addData: (state, action: PayloadAction<FormData>) => {
      state.data.push(action.payload)
      state.last_key += 1
      localStorage.setItem('data', JSON.stringify(state))
    },
    loadData: (state) => {
      let data = localStorage.getItem('data')
      if (data) {
        let savedData = JSON.parse(data)
        state.data = savedData.data
        state.last_key = savedData.last_key
      } else {
        state.data = []
        state.last_key = 0
      }
    },
    removeData: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((data) => data.key !== action.payload)
      localStorage.setItem('data', JSON.stringify(state))
    },
  },
})

export type FormData = {
  key: number
  name_prefix: 'mr' | 'mrs' | 'miss'
  firstname: string
  surname: string
  birthday: string
  nationality: string
  id_card?: string
  gender: 'na' | 'male' | 'female'
  phone: { country: 'string'; number: 'string' }
  passport?: string
  expect_salary: string
}
export type State = { data: FormData[]; last_key: number }
export const { addData, loadData, removeData } = formSlice.actions
export default formSlice.reducer

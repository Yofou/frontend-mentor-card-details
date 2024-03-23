import { createStore } from "kaioken";

export const useFormStore = createStore({
  name: 'moosie goosie',
  number: '',
  month: '06',
  year: '12',
  cvc: '123',
}, (set) => ({
  setName: (value: string) => set((state) => {
    state['name'] = value
    return state
  }),
  setNumber: (value: string) => set((state) => {
    state['number'] = value
    return state
  }),
  setMonth: (value: string) => set((state) => {
    state['month'] = value
    return state
  }),
  setYear: (value: string) => set((state) => {
    state['year'] = value
    return state
  }),
  setCVC: (value: string) => set((state) => {
    state['cvc'] = value
    return state
  }),
}))

import { createStore } from "kaioken";
import { z } from "zod";

const formValidation = z.object({
  name: z.string().min(1, "Name is required"),
  number: z.string().min(19, "Must be valid card number"),
  month: z.string().min(2, "Can't be blank"),
  year: z.string().min(2, "Can't be blank"),
  cvc: z.string().min(3, "Must be valid CVC"),
})

type fieldErrors = {
    number?: string[] | undefined;
    name?: string[] | undefined;
    month?: string[] | undefined;
    year?: string[] | undefined;
    cvc?: string[] | undefined;
}

export const useFormStore = createStore({
  name: '',
  number: '',
  month: '',
  year: '',
  cvc: '',
  errors: null as fieldErrors | null,
}, (set, get) => ({
  validate: () => {
    const state = get()
    const result = formValidation.safeParse(state)

    if (!result.success) {
      const zodErrors = result.error.flatten()
      set((_state) => {
        _state['errors'] = zodErrors.fieldErrors
        return _state
      })
    } else {
      set((_state) => {
        _state['errors'] = null
        return _state
      })
    }

    return result.success
  }
}))

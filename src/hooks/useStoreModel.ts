import { useEffect, useModel, type Store, MethodFactory } from "kaioken"

export const useStoreModel = <
  U extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, 
  A extends string | number | boolean, 
  T
>(store: Store<T, MethodFactory<T>>, key: keyof T) => {
  const storeHook = store()

  const [ref, value, setValue] = useModel<U, A>(storeHook.value[key] as any)

  useEffect(() => {
    store.setState((_state) => {
      _state[key] = value as any
      return _state
    })
  }, [value])

  useEffect(() => {
    setValue(storeHook.value[key] as A)
  }, [storeHook.value[key]])

  return [ref, value, setValue] as const
}

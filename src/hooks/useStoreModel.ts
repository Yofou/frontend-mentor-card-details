// @ts-ignore

import { useEffect, useModel } from "kaioken"


type GetKeys<T> = keyof ReturnType<T>['value']

export const useStoreModel = <T,>(store: T, key: GetKeys<T>) => {
  const storeHook = store()
  const [ref, value, setValue] = useModel(storeHook.value[key])

  useEffect(() => {
    store.setState((_state) => {
      _state[key] = value
      return _state
    })
  }, [value])

  return [ref, value, setValue]
}

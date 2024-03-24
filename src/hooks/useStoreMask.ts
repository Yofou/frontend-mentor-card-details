import { useEffect, type Store, MethodFactory } from "kaioken"
import useMask from "./useMask"
import { type FactoryOpts } from 'imask'

export const useStoreMask = <T,>(store: Store<T, MethodFactory<T>>, key: keyof T, maskOptions: FactoryOpts = {}) => {
  const storeHook = store((s) => s[key])
  const {ref, value, setUnmaskedValue} = useMask(storeHook.value as any, maskOptions)

  useEffect(() => {
    if (value !== undefined) {
      store.setState((_state) => {
        _state[key] = value as any
        return { ..._state }
      })
    }
  }, [value])

  return [ref, value, setUnmaskedValue] as const
}

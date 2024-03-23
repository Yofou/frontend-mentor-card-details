export type MethodFactory<T> = (
  setState: (setter: Kaioken.StateSetter<T>) => void,
  getState: () => T
) => Record<string, (...args: any[]) => void>

export type Store<T, U extends MethodFactory<T>> = {
  <R>(sliceFn: (state: T) => R): { value: R } & ReturnType<U>
  <R>(
    sliceFn: (state: T) => R,
    equality: (prev: R, next: R, compare: typeof shallowCompare) => boolean
  ): { value: R } & ReturnType<U>
  (): { value: T } & ReturnType<U>
  getState: () => T
  setState: (setter: Kaioken.StateSetter<T>) => void
  methods: ReturnType<U>
  subscribe: (fn: (value: T) => void) => () => void
}

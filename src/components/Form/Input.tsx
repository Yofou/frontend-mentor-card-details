import { useMemo } from "kaioken";

type InputProps = Kaioken.FCProps<{
  className?: string;
  ref: Kaioken.Ref<unknown>;
  error?: string;
  placeholder?: string;
}>;

export const Input = (props: InputProps) => {
  const hasError = useMemo(() => (props.error?.length ?? 0) > 0, [props.error]);
  return (
    <label className={`w-full flex flex-col gap-[.56rem] ${props.className}`}>
      {props.children && (
        <span className="text-body-m text-deep-violet font-medium uppercase">
          {props.children}
        </span>
      )}
      <input
        className="border w-full rounded-[.5rem] border-light-grey px-4 py-[.69rem] text-heading-l font-medium placeholder:text-deep-violet/25 text-deep-violet"
        placeholder={props.placeholder}
        ref={props.ref}
        type="text"
      />
      {hasError ? (
        <span className="text-body-s text-red font-medium">{props.error}</span>
        ) : null}
    </label>
  );
};

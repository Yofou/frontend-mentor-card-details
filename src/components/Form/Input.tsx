type InputProps = Kaioken.FCProps<{
  className?: string;
  ref: Kaioken.Ref<unknown>;
}>;

export const Input = (props: InputProps) => {
  return (
    <label className={`w-full flex flex-col gap-[.56rem] ${props.className}`}>
      {props.children && (
        <span className="text-body-m text-deep-violet font-medium uppercase">
          {props.children}
        </span>
      )}
      <input
        className="border w-full rounded-[.5rem] border-light-grey px-4 py-[.69rem] text-heading-l font-medium placeholder:text-deep-violet/25 text-deep-violet"
        ref={props.ref}
        type="text"
      />
    </label>
  );
};

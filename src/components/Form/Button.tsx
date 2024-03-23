
type ButtonProps = Kaioken.FCProps<{
  className?: string
}>;

export const Button = (props: ButtonProps) => {
  return <button className={`w-full bg-deep-violet rounded-[0.5rem] py-[.94rem] text-heading-l text-white font-medium ${props.className}`} type="submit">
    {props.children}
  </button>
}

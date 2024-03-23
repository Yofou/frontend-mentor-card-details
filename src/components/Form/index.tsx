import { Button } from "./Button";
import { Input } from "./Input";
import { useFormStore } from "$/store/useFormStore";
import { useStoreModel } from "$/hooks/useStoreModel";

type FormProps = Kaioken.FCProps<{
  className?: string;
}>;

export const Form = (props: FormProps) => {
  const [cardNameRef] = useStoreModel(useFormStore, "name");
  const [cardNumberRef] = useStoreModel(useFormStore, "number");
  const [expireMonthRef] = useStoreModel(useFormStore, "month");
  const [expireYearRef] = useStoreModel(useFormStore, "year");
  const [CVCRef] = useStoreModel(useFormStore, "cvc");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form
      className={`grid grid-cols-2 max-w-[23.8rem] gap-x-5 gap-y-[1.62rem] ${props.className}`}
      onsubmit={handleSubmit}
    >
      <Input className="col-start-1 col-end-3" ref={cardNameRef}>
        Cardholder Name
      </Input>
      <Input className="col-start-1 col-end-3" ref={cardNumberRef}>
        Cardholder Number
      </Input>
      <div className="flex flex-col">
        <span className="text-body-m text-deep-violet font-medium uppercase">
          Exp. Date (MM/YY)
        </span>
        <div className="flex gap-2">
          <Input ref={expireMonthRef} />
          <Input ref={expireYearRef} />
        </div>
      </div>
      <Input ref={CVCRef}>CSV</Input>
      <Button className="col-start-1 col-end-3">Confirm</Button>
    </form>
  );
};
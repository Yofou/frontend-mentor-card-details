import { Button } from "./Button";
import { Input } from "./Input";
import { useFormStore } from "$/store/useFormStore";
import { useStoreModel } from "$/hooks/useStoreModel";
import { useStoreMask } from "$/hooks/useStoreMask";
import { useMemo } from "kaioken";

type FormProps = Kaioken.FCProps<{
  className?: string;
}>;

export const Form = (props: FormProps) => {
  const [cardNameRef] = useStoreModel(useFormStore, "name");
  const [cardNumberRef] = useStoreMask(useFormStore, "number", {
    mask: "0000 0000 0000 0000",
  });
  const [expireMonthRef] = useStoreMask(useFormStore, "month", {
    mask: "00",
  });
  const [expireYearRef] = useStoreMask(useFormStore, "year", {
    mask: "00",
  });
  const [CVCRef] = useStoreMask(useFormStore, "cvc", {
    mask: "000",
  });
  const { value: errors } = useFormStore((state) => state["errors"]);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const result = useFormStore.methods.validate();
    console.log(result, errors);
  };

  const dateError = useMemo(() => {
    const hasMonth = (errors?.month?.[0]?.length ?? 0) > 0;
    if (hasMonth) {
      return errors?.month?.[0] ?? null
    }
    const hasYear = (errors?.year?.[0]?.length ?? 0) > 0;
    if (hasYear) {
      return errors?.year?.[0] ?? null
    }
    
    return null
  }, [errors?.year, errors?.month]);

  const hasDateError = useMemo(() => {
    return dateError != null;
  }, [dateError]);

  return (
    <form
      className={`grid grid-cols-2 max-w-[23.8rem] gap-x-5 gap-y-[1.62rem] ${props.className}`}
      onsubmit={handleSubmit}
    >
      <Input
        className="col-start-1 col-end-3"
        ref={cardNameRef}
        error={errors?.name?.[0]}
      >
        Cardholder Name
      </Input>
      <Input
        className="col-start-1 col-end-3"
        ref={cardNumberRef}
        error={errors?.number?.[0]}
      >
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
        {hasDateError && (
          <span className="text-body-s text-red font-medium">
            {dateError}
          </span>
        )}
      </div>
      <Input ref={CVCRef} error={errors?.cvc?.[0]}>
        CSV
      </Input>
      <Button className="col-start-1 col-end-3">Confirm</Button>
    </form>
  );
};

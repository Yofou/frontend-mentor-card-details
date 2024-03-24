import { Button } from "./Button";
import { Input } from "./Input";
import { useFormStore } from "$/store/useFormStore";
import { useStoreModel } from "$/hooks/useStoreModel";
import { useStoreMask } from "$/hooks/useStoreMask";
import { useMemo, useState } from "kaioken";

type FormProps = Kaioken.FCProps<{
  className?: string;
}>;

export const Form = (props: FormProps) => {
  const [isSuccessful, setIsSuccessful] = useState(false);
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
  const dateError = useMemo(() => {
    const hasMonth = (errors?.month?.[0]?.length ?? 0) > 0;
    if (hasMonth) {
      return errors?.month?.[0] ?? null;
    }
    const hasYear = (errors?.year?.[0]?.length ?? 0) > 0;
    if (hasYear) {
      return errors?.year?.[0] ?? null;
    }

    return null;
  }, [errors?.year, errors?.month]);

  const hasDateError = useMemo(() => {
    return dateError != null;
  }, [dateError]);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const result = useFormStore.methods.validate();
    setIsSuccessful(result);
  };

  if (isSuccessful) {
    return (
      <div className="flex flex-col items-center max-w-[23.8rem] w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_0_318)" />
          <path
            d="M28 39.9199L36.0801 48L52.0801 32"
            stroke="white"
            stroke-width="3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_318"
              x1="-23.0143"
              y1="11.5071"
              x2="1.03143e-06"
              y2="91.5071"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6348FE" />
              <stop offset="1" stop-color="#610595" />
            </linearGradient>
          </defs>
        </svg>
        <h2 className="mt-8 text-heading-xl text-deep-violet font-medium uppercase">Thank you!</h2>
        <p className="mt-4 text-heading-l font-medium text-purplish-grey">We've added your card details</p>
        <Button className="mt-12">Continue</Button>
      </div>
    );
  }

  return (
    <form
      className={`grid grid-cols-2 max-w-[23.8rem] gap-x-5 gap-y-[1.62rem] ${props.className}`}
      onsubmit={handleSubmit}
    >
      <Input
        className="col-start-1 col-end-3"
        ref={cardNameRef}
        error={errors?.name?.[0]}
        placeholder="e.g. Jane Appleseed"
      >
        Cardholder Name
      </Input>
      <Input
        className="col-start-1 col-end-3"
        ref={cardNumberRef}
        error={errors?.number?.[0]}
        placeholder="e.g. 1234 5678 9123 0000"
      >
        Cardholder Number
      </Input>
      <div className="flex flex-col">
        <span className="text-body-m text-deep-violet font-medium uppercase">
          Exp. Date (MM/YY)
        </span>
        <div className="flex gap-2">
          <Input ref={expireMonthRef} placeholder="MM" />
          <Input ref={expireYearRef} placeholder="YY" />
        </div>
        {hasDateError && (
          <span className="text-body-s text-red font-medium">{dateError}</span>
        )}
      </div>
      <Input ref={CVCRef} error={errors?.cvc?.[0]} placeholder="e.g. 123">
        CSV
      </Input>
      <Button className="col-start-1 col-end-3">Confirm</Button>
    </form>
  );
};

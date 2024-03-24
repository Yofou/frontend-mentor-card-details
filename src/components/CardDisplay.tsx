import { useFormStore } from "$/store/useFormStore";
import { ElementProps, useMemo } from "kaioken";

const CardDisplayIcon = (props: ElementProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="84"
      height="47"
      viewBox="0 0 84 47"
      fill="none"
      className={props.className}
    >
      <ellipse cx="23.4783" cy="23.5" rx="23.4783" ry="23.5" fill="white" />
      <path
        d="M83.5 23.5C83.5 29.0647 78.9932 33.575 73.4348 33.575C67.8764 33.575 63.3696 29.0647 63.3696 23.5C63.3696 17.9353 67.8764 13.425 73.4348 13.425C78.9932 13.425 83.5 17.9353 83.5 23.5Z"
        stroke="white"
      />
    </svg>
  );
};

const CardDisplayBG = (props: ElementProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="423"
      height="245"
      viewBox="0 0 423 245"
      fill="none"
      className={`w-full ${props.className}`}
    >
      <g opacity="0.847405" filter="url(#filter0_f_1_53)">
        <ellipse
          cx="248.655"
          cy="61.6554"
          rx="65.5"
          ry="181.5"
          transform="rotate(45 248.655 61.6554)"
          fill="#D53AFF"
        />
      </g>
      <g opacity="0.847405" filter="url(#filter1_f_1_53)">
        <ellipse
          cx="347.655"
          cy="56.6554"
          rx="65.5"
          ry="181.5"
          transform="rotate(45 347.655 56.6554)"
          fill="#FF834A"
        />
      </g>
      <g opacity="0.847405" filter="url(#filter2_f_1_53)">
        <ellipse
          cx="216.655"
          cy="213.655"
          rx="65.5"
          ry="181.5"
          transform="rotate(45 216.655 213.655)"
          fill="#47A2FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_53"
          x="32.1768"
          y="-154.823"
          width="432.957"
          height="432.957"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="40"
            result="effect1_foregroundBlur_1_53"
          />
        </filter>
        <filter
          id="filter1_f_1_53"
          x="131.177"
          y="-159.823"
          width="432.957"
          height="432.957"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="40"
            result="effect1_foregroundBlur_1_53"
          />
        </filter>
        <filter
          id="filter2_f_1_53"
          x="0.176819"
          y="-2.82318"
          width="432.957"
          height="432.957"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="40"
            result="effect1_foregroundBlur_1_53"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const CardDisplay = () => {
  const { value } = useFormStore();
  const month = useMemo(() => {
    if (value.month.length === 0) return "00";
    return value.month;
  }, [value.month]);

  const year = useMemo(() => {
    if (value.year.length === 0) return "00";
    return value.year;
  }, [value.year]);

  const number = useMemo(() => {
    if (value.number.length === 0) return "0000 0000 0000 0000";
    return value.number;
  }, [value.number]);

  const name = useMemo(() => {
    if (value.name.length === 0) return "JANE APPLESEED";
    return value.name;
  }, [value.name]);

  const cvc = useMemo(() => {
    if (value.cvc.length === 0) return "000";
    return value.cvc;
  }, [value.cvc]);

  return (
    <div className="relative w-full h-full card-bg">
      <div className="bg-gradient w-[17.8rem] h-[9.763rem] md:w-[447px] md:h-[245px] rounded-[.375rem] md:rounded-[.625rem] z-10 top-[7.9rem] transition-all left-[10%] sm:left-[35%] overflow-hidden md:left-[10.25rem] md:top-[11.69rem] absolute shadow">
        <div className="absolute top-[1.1rem] left-[1.19rem] md:top-[1.75rem] md:left-8">
          <CardDisplayIcon className="w-[54px] h-[30px] md:w-[84px] md:h-[47px]" />
        </div>

        <div className="w-full absolute top-0 left-0 right-0">
          <CardDisplayBG className="w-[17.8rem] h-[9.763rem] md:w-[447px] md:h-[245px]" />
        </div>

        <p className="absolute top-[5.29rem] left-[1.19rem] md:top-[8.69rem] md:left-8 font-grotesk text-[1.125rem] md:text-heading-xl text-white font-medium">
          {number}
        </p>
        <p className="absolute top-[7.79rem] left-[1.19rem] md:top-[12.53rem] md:left-8 text-white font-grotesk text-[0.5625rem] tracking-[0.08038rem] md:text-body-l font-medium uppercase">
          {name}
        </p>
        <p className="absolute top-[7.79rem] right-[1.31rem] md:top-[12.53rem] md:right-8 text-white font-grotesk text-[0.5625rem] tracking-[0.08038rem] md:text-body-l font-medium uppercase">
          {month}/{year}
        </p>
      </div>

      <div className="bg-grey-gradient transition-all w-[17.8rem] h-[9.763rem] md:w-[447px] md:h-[245px] rounded-[.375rem] md:rounded-[.625rem] top-8 left-[20%] sm:left-[40%] md:left-[16.12rem] md:top-[29.31rem] absolute shadow">
        <div className="mt-[0.9rem] md:mt-[1.44rem] w-full h-[2.1rem] md:h-[3.375rem] bg-[#2F2F2F]"></div>
        <p className="mt-[1.5rem] rounded-[0.25rem] w-[14.43rem] h-[1.85rem] md:w-[22.56rem] md:h-[2.375rem] pr-[0.67rem] md:pr-4 py-[.63rem] font-grotesk text-[0.5625rem] tracking-[0.08038rem] md:text-body-l font-medium text-white bg-[#ADB6BE] mx-auto text-right">
          {cvc}
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="186"
          height="26"
          viewBox="0 0 186 26"
          fill="none"
          className="hidden md:block absolute top-[10.75rem] left-[8.25rem]"
        >
          <rect width="115" height="4" rx="2" fill="#ADB5BE" />
          <rect x="121" width="22" height="4" rx="2" fill="#ADB5BE" />
          <rect x="149" width="22" height="4" rx="2" fill="#ADB5BE" />
          <rect x="177" width="9" height="4" rx="2" fill="#ADB5BE" />
          <rect
            width="115"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 186 22)"
            fill="#ADB5BE"
          />
          <rect
            width="22"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 65 22)"
            fill="#ADB5BE"
          />
          <rect
            width="22"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 37 22)"
            fill="#ADB5BE"
          />
          <rect
            width="9"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 9 22)"
            fill="#ADB5BE"
          />
          <rect x="42" y="11" width="60" height="4" rx="2" fill="#ADB5BE" />
          <rect x="14" y="11" width="22" height="4" rx="2" fill="#ADB5BE" />
          <rect x="108" y="11" width="46" height="4" rx="2" fill="#ADB5BE" />
          <rect x="160" y="11" width="9" height="4" rx="2" fill="#ADB5BE" />
        </svg>
      </div>
    </div>
  );
};

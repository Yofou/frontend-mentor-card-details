import { useFormStore } from "$/store/useFormStore";
import { useMemo } from "kaioken";

const CardDisplayIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="84"
      height="47"
      viewBox="0 0 84 47"
      fill="none"
    >
      <ellipse cx="23.4783" cy="23.5" rx="23.4783" ry="23.5" fill="white" />
      <path
        d="M83.5 23.5C83.5 29.0647 78.9932 33.575 73.4348 33.575C67.8764 33.575 63.3696 29.0647 63.3696 23.5C63.3696 17.9353 67.8764 13.425 73.4348 13.425C78.9932 13.425 83.5 17.9353 83.5 23.5Z"
        stroke="white"
      />
    </svg>
  );
};

const CardDisplayBG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="423"
      height="245"
      viewBox="0 0 423 245"
      fill="none"
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

  return (
    <div className="relative w-full h-full [background:url(/card-display-bg.svg)_#21092F_no-repeat]">
      <div className="bg-gradient w-[447px] h-[245px] rounded-[.625rem] left-[10.25rem] top-[11.69rem] absolute">
        <div className="absolute top-[1.75rem] left-8">
          <CardDisplayIcon />
        </div>

        <div className="absolute top-0 left-0">
          <CardDisplayBG />
        </div>

        <p className="absolute top-[8.69rem] left-8 text-heading-xl text-white font-medium">
          {value.number}
        </p>
        <p className="absolute top-[12.53rem] left-8 text-white text-body-l font-medium uppercase">
          {value.name}
        </p>
        <p className="absolute top-[12.53rem] right-8 text-white text-body-l font-medium uppercase">
          {month}/{year}
        </p>
      </div>
    </div>
  );
};

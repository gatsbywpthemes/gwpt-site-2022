import * as React from "react"

export const HeroGradient = ({ width, height, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_1369_6243)">
        <path fill="#212338" d="M0 900h1440V0H0z" />
        <g filter="url(#prefix__filter0_f_1369_6243)">
          <path
            d="M249.2 636.372c84.905 178.189 257.284 271.553 479.51 323.818 272.02 63.98 959.43 164.47 1091.1-67.852 90.64-159.94-130.94-268.595-314.49-293.488-513.449-69.633-831.746-380.4-1078.873-339.528-175.346 29-259.307 204.834-177.247 377.05z"
            fill="url(#prefix__paint0_linear_1369_6243)"
          />
        </g>
        <g filter="url(#prefix__filter1_f_1369_6243)">
          <circle r={255} transform="matrix(1 0 0 -1 879 341)" fill="#FF29A8" />
        </g>
        <g filter="url(#prefix__filter2_f_1369_6243)">
          <circle
            r={398.5}
            transform="matrix(1 0 0 -1 644.5 -127.5)"
            fill="#FF4473"
          />
        </g>
        <g filter="url(#prefix__filter3_f_1369_6243)">
          <ellipse
            rx={632.5}
            ry={449.5}
            transform="matrix(1 0 0 -1 1440.5 177.5)"
            fill="#FF3D00"
          />
        </g>
        <g filter="url(#prefix__filter4_f_1369_6243)">
          <ellipse
            rx={574.5}
            ry={408}
            transform="matrix(1 0 0 -1 1498.5 30)"
            fill="#FB0"
          />
        </g>
        <g filter="url(#prefix__filter5_f_1369_6243)">
          <ellipse
            rx={547.53}
            ry={216.86}
            transform="scale(1 -1) rotate(-16.186 -2867.5 -4563.492)"
            fill="#4C1D95"
          />
        </g>
      </g>
      <defs>
        <filter
          id="prefix__filter0_f_1369_6243"
          x={-82.453}
          y={-44.367}
          width={2223.23}
          height={1382.07}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={150}
            result="effect1_foregroundBlur_1369_6243"
          />
        </filter>
        <filter
          id="prefix__filter1_f_1369_6243"
          x={374}
          y={-164}
          width={1010}
          height={1010}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={125}
            result="effect1_foregroundBlur_1369_6243"
          />
        </filter>
        <filter
          id="prefix__filter2_f_1369_6243"
          x={-54}
          y={-826}
          width={1397}
          height={1397}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={150}
            result="effect1_foregroundBlur_1369_6243"
          />
        </filter>
        <filter
          id="prefix__filter3_f_1369_6243"
          x={458}
          y={-622}
          width={1965}
          height={1599}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={175}
            result="effect1_foregroundBlur_1369_6243"
          />
        </filter>
        <filter
          id="prefix__filter4_f_1369_6243"
          x={624}
          y={-678}
          width={1749}
          height={1416}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={150}
            result="effect1_foregroundBlur_1369_6243"
          />
        </filter>
        <filter
          id="prefix__filter5_f_1369_6243"
          x={329.075}
          y={421.98}
          width={1658.68}
          height={1116.44}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={150}
            result="effect1_foregroundBlur_1369_6243"
          />
        </filter>
        <linearGradient
          id="prefix__paint0_linear_1369_6243"
          x1={358.126}
          y1={534.077}
          x2={1475.32}
          y2={544.469}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.423} stopColor="#8900C9" />
          <stop offset={1} stopColor="#FCF" />
        </linearGradient>
        <clipPath id="prefix__clip0_1369_6243">
          <path
            fill="#fff"
            transform="matrix(1 0 0 -1 0 900)"
            d="M0 0h1440v900H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

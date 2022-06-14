import * as React from "react"
import { SVGProps } from "react"

export const CheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 13.231c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13Zm-6.41-3.495a1 1 0 0 0-1.414-1.414L10.48 16.02l-2.655-2.655a1 1 0 0 0-1.414 1.414l3.362 3.362a1 1 0 0 0 1.414 0l8.404-8.405Z"
      fill="#fff"
    />
  </svg>
)

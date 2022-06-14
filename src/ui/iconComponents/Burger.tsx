import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={44}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      d="M14 15h16M14 22h16M14 29h16"
    />
  </svg>
)

export default SvgComponent

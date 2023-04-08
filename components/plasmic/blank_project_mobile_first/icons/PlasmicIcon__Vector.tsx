// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.42.49v4.257c0 1.381-1.095 2.5-2.447 2.5h-.036c-.678-.005-1.289 0-1.289 0-.115 0-.242-.013-.353 0-.761.08-1.423.433-1.979 1.06a.51.51 0 00-.043.053c-.448.591-.694 1.357-.694 2.183v.04c0 .531.107 1.038.301 1.491.195.454.095.98-.277 1.296-.365.312-.798.677-1.087.916a5.574 5.574 0 01-1.34-3.658v-.04c0-3.042 2.383-5.578 5.62-5.578h1.17V.032A10.52 10.52 0 0011.171 0C5 0 0 5.108 0 11.41c0 5.148 3.34 9.498 7.924 10.916v-4.225c0-1.393 1.106-2.523 2.47-2.523h.012c.679.004 1.29 0 1.29 0 .114 0 .241.012.352 0 .762-.081 1.424-.433 1.98-1.061a.508.508 0 00.043-.053c.448-.591.694-1.357.694-2.183v-.04c0-.414-.17-.969-.341-1.414a1.267 1.267 0 01.357-1.41 78.2 78.2 0 011.047-.875c.845.98 1.34 2.26 1.34 3.658v.04c0 3.042-2.383 5.578-5.62 5.578h-1.17v4.97c.262.02.528.032.794.032 6.17 0 11.172-5.107 11.172-11.41 0-5.148-3.34-9.498-7.924-10.92z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default VectorIcon
/* prettier-ignore-end */

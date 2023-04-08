// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.632 6.415v9.004c1.42 0 2.574-1.179 2.574-2.629V3.786c-1.42 0-2.574 1.179-2.574 2.629zM0 2.649h8.566c1.432 0 2.594-1.187 2.594-2.649H2.594C1.162 0 0 1.187 0 2.649z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default GroupIcon
/* prettier-ignore-end */

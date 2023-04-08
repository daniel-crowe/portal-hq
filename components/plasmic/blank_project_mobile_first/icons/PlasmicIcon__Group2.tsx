// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M2.55 0v13.192c0 1.211-.968 2.191-2.153 2.191H0V2.2C0 .99.96 0 2.146 0h.404z"}
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default Group2Icon
/* prettier-ignore-end */

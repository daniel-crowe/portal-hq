// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.175 8.3a1.392 1.392 0 01-.056-1.24l3.343-5.817A2.08 2.08 0 015.358 0h1.468l-.16.365L2.706 7.7l5.203 7.684H6.084c-.75 0-1.44-.414-1.813-1.078L.175 8.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default Vector3Icon
/* prettier-ignore-end */

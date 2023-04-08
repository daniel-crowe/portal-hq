// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type _16OutlinedSuggestedSymbolCheckIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function _16OutlinedSuggestedSymbolCheckIcon(
  props: _16OutlinedSuggestedSymbolCheckIconProps,
) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M13.333 4L6 11.333 2.667 8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  )
}

export default _16OutlinedSuggestedSymbolCheckIcon
/* prettier-ignore-end */

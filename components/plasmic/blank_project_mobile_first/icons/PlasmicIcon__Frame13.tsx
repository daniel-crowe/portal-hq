// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Frame13IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Frame13Icon(props: Frame13IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.682 9.898a8.087 8.087 0 01-2.319.635A4.049 4.049 0 0027.138 8.3a8.09 8.09 0 01-2.564.98 4.04 4.04 0 00-6.88 3.683 11.47 11.47 0 01-8.324-4.22 4.04 4.04 0 001.25 5.392 4.028 4.028 0 01-1.829-.505v.052a4.04 4.04 0 003.24 3.96 4.068 4.068 0 01-1.824.069 4.04 4.04 0 003.772 2.803 8.102 8.102 0 01-5.015 1.73c-.322 0-.644-.02-.964-.057A11.42 11.42 0 0014.189 24c7.429 0 11.49-6.153 11.49-11.489 0-.173-.005-.348-.013-.521A8.207 8.207 0 0027.68 9.9l.002-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default Frame13Icon
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.416 0c-.29.235-.71.591-1.08.907-.431.369-.558.985-.34 1.515.186.462.29.976.29 1.515v.045c0 .879-.262 1.693-.738 2.325a.107.107 0 00-.02.024c-.599.688-1.313 1.073-2.134 1.158-.119.012-.254 0-.377 0 0 0-.65.004-1.372 0h-.012C1.178 7.49 0 8.692 0 10.18v5.209c1.444 0 2.617-1.195 2.617-2.674V9.88h1.246c3.446 0 5.984-2.702 5.984-5.942v-.045A5.989 5.989 0 008.416 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default Vector2Icon
/* prettier-ignore-end */

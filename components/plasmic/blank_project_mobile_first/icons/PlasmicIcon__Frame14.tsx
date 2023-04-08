// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Frame14IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Frame14Icon(props: Frame14IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M22.222 24H9.778A1.778 1.778 0 018 22.222V9.778C8 8.796 8.796 8 9.778 8h12.444C23.204 8 24 8.796 24 9.778v12.444c0 .982-.796 1.778-1.778 1.778zm-2.819-2.222h2.375V16.9c0-2.063-1.17-3.061-2.804-3.061-1.635 0-2.323 1.273-2.323 1.273v-1.038h-2.288v7.704h2.288v-4.044c0-1.084.499-1.729 1.454-1.729.877 0 1.299.62 1.299 1.729v4.044zm-9.18-10.134c0 .785.63 1.421 1.41 1.421.78 0 1.41-.636 1.41-1.421s-.63-1.422-1.41-1.422c-.78 0-1.41.637-1.41 1.422zm2.615 10.134h-2.386v-7.704h2.386v7.704z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default Frame14Icon
/* prettier-ignore-end */

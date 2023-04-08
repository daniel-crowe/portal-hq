// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type IconBoxIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function IconBoxIcon(props: IconBoxIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M7.379 15.662a.713.713 0 01-1.013.212L2.354 13.22A.793.793 0 012 12.562V6.165c0-.259.13-.494.344-.624l5.7-3.44a.722.722 0 01.738.001l5.951 3.465c.241.14.392.402.392.681v6.336a.749.749 0 01-.07.354.7.7 0 01-.474.388l-3.85 2.557c-.334.223-.793.118-1.024-.234-.231-.352-.147-.818.189-1.04l3.013-2.003-4.346-2.44-4.22 2.605 2.79 1.846a.78.78 0 01.246 1.045zm6.272-9.02v4.692l-4.349-2.43V5.38a.768.768 0 00-.75-.762.725.725 0 00-.748.725v3.498l-4.33 2.675V6.64l4.994-3.014 5.183 3.017z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default IconBoxIcon
/* prettier-ignore-end */

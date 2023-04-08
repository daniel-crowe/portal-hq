// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Group3Icon(props: Group3IconProps) {
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
        d={
          "M0 7.579c-.047 3.37 2.21 6.4 5.323 7.4.282.09.567.162.853.219.012 0 .015-.004.015-.012l.012-1.515v-.049a1.45 1.45 0 00-.864-1.312c-1.158-.539-2.027-1.503-2.526-2.702-1.047-2.515.099-5.594 2.526-6.72a1.458 1.458 0 00.865-1.312v-.048L6.19.013C6.191.009 6.188 0 6.176 0c-.286.057-.571.13-.853.22C2.206 1.215-.043 4.25 0 7.62v-.041zm15.011-.001c.048 3.37-2.209 6.4-5.322 7.4-.282.09-.567.163-.853.22-.012 0-.016-.005-.016-.013l-.01-1.515v-.048a1.45 1.45 0 01.864-1.313c1.158-.538 2.027-1.502 2.526-2.701 1.047-2.516-.099-5.594-2.526-6.72a3.239 3.239 0 01-.166-.085 1.459 1.459 0 01-.698-1.227v-.049L8.82.012c0-.004.004-.012.016-.012.286.057.571.13.853.219 3.117.996 5.366 4.03 5.322 7.4v-.04z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default Group3Icon
/* prettier-ignore-end */

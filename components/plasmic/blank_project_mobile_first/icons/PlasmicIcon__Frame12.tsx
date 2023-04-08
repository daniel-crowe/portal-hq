// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Frame12IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Frame12Icon(props: Frame12IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26.059 9.327a17.773 17.773 0 00-4.342-1.324.067.067 0 00-.07.032 11.78 11.78 0 00-.54 1.093 16.502 16.502 0 00-4.878 0c-.162-.374-.345-.74-.548-1.093A.069.069 0 0015.61 8a17.759 17.759 0 00-4.342 1.325.062.062 0 00-.029.024C8.474 13.416 7.716 17.383 8.088 21.3a.071.071 0 00.028.049 17.804 17.804 0 005.327 2.648.07.07 0 00.074-.023c.412-.55.776-1.134 1.09-1.745a.066.066 0 00-.036-.092 11.718 11.718 0 01-1.664-.78.066.066 0 01-.028-.086.067.067 0 01.02-.026 7.07 7.07 0 00.331-.255.067.067 0 01.07-.009c3.49 1.568 7.27 1.568 10.72 0a.068.068 0 01.07.008c.107.088.218.174.33.256a.067.067 0 01-.005.111c-.531.306-1.084.565-1.664.78a.067.067 0 00-.044.066c0 .01.003.019.007.027.32.611.686 1.192 1.089 1.744a.069.069 0 00.075.025 17.744 17.744 0 005.334-2.65.067.067 0 00.029-.048c.444-4.527-.745-8.461-3.155-11.947a.054.054 0 00-.027-.025zm-10.93 9.587c-1.05 0-1.917-.95-1.917-2.116 0-1.166.85-2.115 1.917-2.115 1.075 0 1.934.957 1.917 2.116 0 1.166-.85 2.115-1.917 2.115zm7.088 0c-1.051 0-1.917-.95-1.917-2.116 0-1.166.849-2.115 1.917-2.115 1.076 0 1.934.957 1.918 2.116 0 1.166-.841 2.115-1.918 2.115z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default Frame12Icon
/* prettier-ignore-end */

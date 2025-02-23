// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pZ4uecV2QmMik2KVUENP9v
// Component: xTjefxdx-lr

import * as React from "react"

import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/react-web/lib/host"

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"

import "@plasmicapp/react-web/lib/plasmic.css"

import projectcss from "./plasmic_blank_project_mobile_first.module.css" // plasmic-import: pZ4uecV2QmMik2KVUENP9v/projectcss
import sty from "./PlasmicPlan.module.css" // plasmic-import: xTjefxdx-lr/css

import _16OutlinedSuggestedSymbolCheckIcon from "./icons/PlasmicIcon___16OutlinedSuggestedSymbolCheck" // plasmic-import: GKNjyGG-rd/icon

export type PlasmicPlan__VariantMembers = {}
export type PlasmicPlan__VariantsArgs = {}
type VariantPropType = keyof PlasmicPlan__VariantsArgs
export const PlasmicPlan__VariantProps = new Array<VariantPropType>()

export type PlasmicPlan__ArgsType = {}
type ArgPropType = keyof PlasmicPlan__ArgsType
export const PlasmicPlan__ArgProps = new Array<ArgPropType>()

export type PlasmicPlan__OverridesType = {
  devPriceBoxSingle?: p.Flex<"div">
  mainContainer3?: p.Flex<"div">
  developer?: p.Flex<"div">
  featuresList3?: p.Flex<"div">
  iconAndSection13?: p.Flex<"div">
  iconBox6?: p.Flex<"div">
  sectionName13?: p.Flex<"div">
  link18?: p.Flex<"div">
  iconAndSection14?: p.Flex<"div">
  iconBox7?: p.Flex<"div">
  sectionName14?: p.Flex<"div">
  link19?: p.Flex<"div">
  iconAndSection15?: p.Flex<"div">
  iconBox8?: p.Flex<"div">
  sectionName15?: p.Flex<"div">
  link20?: p.Flex<"div">
  iconAndSection16?: p.Flex<"div">
  iconBox9?: p.Flex<"div">
  sectionName16?: p.Flex<"div">
  link21?: p.Flex<"div">
  button5?: p.Flex<"div">
  label5?: p.Flex<"div">
}

export interface DefaultPlanProps {
  className?: string
}

const __wrapUserFunction = globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn())
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise
  })

function PlasmicPlan__RenderFunc(props: {
  variants: PlasmicPlan__VariantsArgs
  args: PlasmicPlan__ArgsType
  overrides: PlasmicPlan__OverridesType
  forNode?: string
}) {
  const { variants, overrides, forNode } = props

  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])

  const $props = {
    ...args,
    ...variants,
  }
  const refsRef = React.useRef({})
  const $refs = refsRef.current

  const currentUser = p.useCurrentUser?.() || {}
  const [$queries, setDollarQueries] = React.useState({})

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"devPriceBoxSingle"}
      data-plasmic-override={overrides.devPriceBoxSingle}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.devPriceBoxSingle,
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"mainContainer3"}
        data-plasmic-override={overrides.mainContainer3}
        hasGap={true}
        className={classNames(projectcss.all, sty.mainContainer3)}
      >
        <div
          data-plasmic-name={"developer"}
          data-plasmic-override={overrides.developer}
          className={classNames(projectcss.all, sty.developer)}
        >
          <div
            className={classNames(projectcss.all, projectcss.__wab_text, sty.text__i1T1N)}
          >
            {"Developer"}
          </div>
        </div>
        <div
          className={classNames(projectcss.all, projectcss.__wab_text, sty.text__muxcp)}
        >
          {"Free"}
        </div>
        <div
          className={classNames(projectcss.all, projectcss.__wab_text, sty.text___2CvMg)}
        >
          {
            "For developers looking to get started reading and writing data from any integrated chain."
          }
        </div>
        <div
          className={classNames(projectcss.all, projectcss.__wab_text, sty.text__mDh32)}
        >
          {"Includes:"}
        </div>
        <p.Stack
          as={"div"}
          data-plasmic-name={"featuresList3"}
          data-plasmic-override={overrides.featuresList3}
          hasGap={true}
          className={classNames(projectcss.all, sty.featuresList3)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"iconAndSection13"}
            data-plasmic-override={overrides.iconAndSection13}
            hasGap={true}
            className={classNames(projectcss.all, sty.iconAndSection13)}
          >
            <div
              data-plasmic-name={"iconBox6"}
              data-plasmic-override={overrides.iconBox6}
              className={classNames(projectcss.all, sty.iconBox6)}
            >
              <_16OutlinedSuggestedSymbolCheckIcon
                className={classNames(projectcss.all, sty.svg__arXeb)}
                role={"img"}
              />
            </div>
            <p.Stack
              as={"div"}
              data-plasmic-name={"sectionName13"}
              data-plasmic-override={overrides.sectionName13}
              hasGap={true}
              className={classNames(projectcss.all, sty.sectionName13)}
            >
              <div
                data-plasmic-name={"link18"}
                data-plasmic-override={overrides.link18}
                className={classNames(projectcss.all, projectcss.__wab_text, sty.link18)}
              >
                {"250K API calls per 24 hour period"}
              </div>
            </p.Stack>
          </p.Stack>
          <p.Stack
            as={"div"}
            data-plasmic-name={"iconAndSection14"}
            data-plasmic-override={overrides.iconAndSection14}
            hasGap={true}
            className={classNames(projectcss.all, sty.iconAndSection14)}
          >
            <div
              data-plasmic-name={"iconBox7"}
              data-plasmic-override={overrides.iconBox7}
              className={classNames(projectcss.all, sty.iconBox7)}
            >
              <_16OutlinedSuggestedSymbolCheckIcon
                className={classNames(projectcss.all, sty.svg__z9Re)}
                role={"img"}
              />
            </div>
            <p.Stack
              as={"div"}
              data-plasmic-name={"sectionName14"}
              data-plasmic-override={overrides.sectionName14}
              hasGap={true}
              className={classNames(projectcss.all, sty.sectionName14)}
            >
              <div
                data-plasmic-name={"link19"}
                data-plasmic-override={overrides.link19}
                className={classNames(projectcss.all, projectcss.__wab_text, sty.link19)}
              >
                {"Access to multiple chains"}
              </div>
            </p.Stack>
          </p.Stack>
          <p.Stack
            as={"div"}
            data-plasmic-name={"iconAndSection15"}
            data-plasmic-override={overrides.iconAndSection15}
            hasGap={true}
            className={classNames(projectcss.all, sty.iconAndSection15)}
          >
            <div
              data-plasmic-name={"iconBox8"}
              data-plasmic-override={overrides.iconBox8}
              className={classNames(projectcss.all, sty.iconBox8)}
            >
              <_16OutlinedSuggestedSymbolCheckIcon
                className={classNames(projectcss.all, sty.svg__o43HX)}
                role={"img"}
              />
            </div>
            <p.Stack
              as={"div"}
              data-plasmic-name={"sectionName15"}
              data-plasmic-override={overrides.sectionName15}
              hasGap={true}
              className={classNames(projectcss.all, sty.sectionName15)}
            >
              <div
                data-plasmic-name={"link20"}
                data-plasmic-override={overrides.link20}
                className={classNames(projectcss.all, projectcss.__wab_text, sty.link20)}
              >
                {"Access to monitoring metrics"}
              </div>
            </p.Stack>
          </p.Stack>
          <p.Stack
            as={"div"}
            data-plasmic-name={"iconAndSection16"}
            data-plasmic-override={overrides.iconAndSection16}
            hasGap={true}
            className={classNames(projectcss.all, sty.iconAndSection16)}
          >
            <div
              data-plasmic-name={"iconBox9"}
              data-plasmic-override={overrides.iconBox9}
              className={classNames(projectcss.all, sty.iconBox9)}
            >
              <_16OutlinedSuggestedSymbolCheckIcon
                className={classNames(projectcss.all, sty.svg__xc8Yl)}
                role={"img"}
              />
            </div>
            <p.Stack
              as={"div"}
              data-plasmic-name={"sectionName16"}
              data-plasmic-override={overrides.sectionName16}
              hasGap={true}
              className={classNames(projectcss.all, sty.sectionName16)}
            >
              <div
                data-plasmic-name={"link21"}
                data-plasmic-override={overrides.link21}
                className={classNames(projectcss.all, projectcss.__wab_text, sty.link21)}
              >
                {"2 applications max"}
              </div>
            </p.Stack>
          </p.Stack>
        </p.Stack>
      </p.Stack>
      <div
        data-plasmic-name={"button5"}
        data-plasmic-override={overrides.button5}
        className={classNames(projectcss.all, sty.button5)}
      >
        <div
          data-plasmic-name={"label5"}
          data-plasmic-override={overrides.label5}
          className={classNames(projectcss.all, projectcss.__wab_text, sty.label5)}
        >
          {"Get started"}
        </div>
      </div>
    </p.Stack>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  devPriceBoxSingle: [
    "devPriceBoxSingle",
    "mainContainer3",
    "developer",
    "featuresList3",
    "iconAndSection13",
    "iconBox6",
    "sectionName13",
    "link18",
    "iconAndSection14",
    "iconBox7",
    "sectionName14",
    "link19",
    "iconAndSection15",
    "iconBox8",
    "sectionName15",
    "link20",
    "iconAndSection16",
    "iconBox9",
    "sectionName16",
    "link21",
    "button5",
    "label5",
  ],
  mainContainer3: [
    "mainContainer3",
    "developer",
    "featuresList3",
    "iconAndSection13",
    "iconBox6",
    "sectionName13",
    "link18",
    "iconAndSection14",
    "iconBox7",
    "sectionName14",
    "link19",
    "iconAndSection15",
    "iconBox8",
    "sectionName15",
    "link20",
    "iconAndSection16",
    "iconBox9",
    "sectionName16",
    "link21",
  ],
  developer: ["developer"],
  featuresList3: [
    "featuresList3",
    "iconAndSection13",
    "iconBox6",
    "sectionName13",
    "link18",
    "iconAndSection14",
    "iconBox7",
    "sectionName14",
    "link19",
    "iconAndSection15",
    "iconBox8",
    "sectionName15",
    "link20",
    "iconAndSection16",
    "iconBox9",
    "sectionName16",
    "link21",
  ],
  iconAndSection13: ["iconAndSection13", "iconBox6", "sectionName13", "link18"],
  iconBox6: ["iconBox6"],
  sectionName13: ["sectionName13", "link18"],
  link18: ["link18"],
  iconAndSection14: ["iconAndSection14", "iconBox7", "sectionName14", "link19"],
  iconBox7: ["iconBox7"],
  sectionName14: ["sectionName14", "link19"],
  link19: ["link19"],
  iconAndSection15: ["iconAndSection15", "iconBox8", "sectionName15", "link20"],
  iconBox8: ["iconBox8"],
  sectionName15: ["sectionName15", "link20"],
  link20: ["link20"],
  iconAndSection16: ["iconAndSection16", "iconBox9", "sectionName16", "link21"],
  iconBox9: ["iconBox9"],
  sectionName16: ["sectionName16", "link21"],
  link21: ["link21"],
  button5: ["button5", "label5"],
  label5: ["label5"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> = (typeof PlasmicDescendants)[T][number]
type NodeDefaultElementType = {
  devPriceBoxSingle: "div"
  mainContainer3: "div"
  developer: "div"
  featuresList3: "div"
  iconAndSection13: "div"
  iconBox6: "div"
  sectionName13: "div"
  link18: "div"
  iconAndSection14: "div"
  iconBox7: "div"
  sectionName14: "div"
  link19: "div"
  iconAndSection15: "div"
  iconBox8: "div"
  sectionName15: "div"
  link20: "div"
  iconAndSection16: "div"
  iconBox9: "div"
  sectionName16: "div"
  link21: "div"
  button5: "div"
  label5: "div"
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlan__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlan__VariantsArgs
    args?: PlasmicPlan__ArgsType
    overrides?: NodeOverridesType<T>
  } & Omit<PlasmicPlan__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<PlasmicPlan__ArgsType, ReservedPropsType> &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key }
  const func = function <T extends PropsType>(props: T & StrictProps<T, PropsType>) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPlan__ArgProps,
          internalVariantPropNames: PlasmicPlan__VariantProps,
        }),
      [props, nodeName],
    )
    return PlasmicPlan__RenderFunc({ variants, args, overrides, forNode: nodeName })
  }
  if (nodeName === "devPriceBoxSingle") {
    func.displayName = "PlasmicPlan"
  } else {
    func.displayName = `PlasmicPlan.${nodeName}`
  }
  return func
}

export const PlasmicPlan = Object.assign(
  // Top-level PlasmicPlan renders the root element
  makeNodeComponent("devPriceBoxSingle"),
  {
    // Helper components rendering sub-elements
    mainContainer3: makeNodeComponent("mainContainer3"),
    developer: makeNodeComponent("developer"),
    featuresList3: makeNodeComponent("featuresList3"),
    iconAndSection13: makeNodeComponent("iconAndSection13"),
    iconBox6: makeNodeComponent("iconBox6"),
    sectionName13: makeNodeComponent("sectionName13"),
    link18: makeNodeComponent("link18"),
    iconAndSection14: makeNodeComponent("iconAndSection14"),
    iconBox7: makeNodeComponent("iconBox7"),
    sectionName14: makeNodeComponent("sectionName14"),
    link19: makeNodeComponent("link19"),
    iconAndSection15: makeNodeComponent("iconAndSection15"),
    iconBox8: makeNodeComponent("iconBox8"),
    sectionName15: makeNodeComponent("sectionName15"),
    link20: makeNodeComponent("link20"),
    iconAndSection16: makeNodeComponent("iconAndSection16"),
    iconBox9: makeNodeComponent("iconBox9"),
    sectionName16: makeNodeComponent("sectionName16"),
    link21: makeNodeComponent("link21"),
    button5: makeNodeComponent("button5"),
    label5: makeNodeComponent("label5"),

    // Metadata about props expected for PlasmicPlan
    internalVariantProps: PlasmicPlan__VariantProps,
    internalArgProps: PlasmicPlan__ArgProps,
  },
)

export default PlasmicPlan
/* prettier-ignore-end */

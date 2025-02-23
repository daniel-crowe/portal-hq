import { Button, Card, Text, Switch } from "@pokt-foundation/pocket-blocks"
import { LinksFunction } from "@remix-run/node"
import { Form, useNavigation } from "@remix-run/react"
import styles from "./styles.css"
import { useMatchesRoute } from "~/hooks/useMatchesRoute"
import { AppIdLoaderData } from "~/routes/dashboard/apps/$appId"
import { AmplitudeEvents, trackEvent } from "~/utils/analytics"
import { formatNumberToSICompact } from "~/utils/formattingUtils"
import { FREE_TIER_MAX_RELAYS } from "~/utils/pocketUtils"

/* c8 ignore start */
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
]
/* c8 ignore stop */

type NotificationLevel = "quarter" | "half" | "threeQuarters" | "full"

const NOTIFICATIONS_ALERT_LEVELS: NotificationLevel[] = [
  "quarter",
  "half",
  "threeQuarters",
  "full",
]

const DEFAULT_ALERT_PERCENTAGES = {
  quarter: false,
  half: false,
  threeQuarters: true,
  full: true,
}

function getUsagePercentage(usageLevel: string): string {
  if (usageLevel === "quarter") {
    return "25%"
  } else if (usageLevel === "half") {
    return "50%"
  } else if (usageLevel === "threeQuarters") {
    return "75%"
  } else {
    return "100%"
  }
}

function backgroundColor(usageLevel: string): string {
  if (usageLevel === "quarter") {
    return "positive"
  } else if (usageLevel === "half") {
    return "yellow"
  } else if (usageLevel === "threeQuarters") {
    return "warning"
  } else {
    return "negative"
  }
}

export default function NotificationsAlertForm() {
  const navigation = useNavigation()
  const appIdRoute = useMatchesRoute("routes/dashboard/apps/$appId")
  const appIdData = appIdRoute?.data as AppIdLoaderData
  const { endpoint } = appIdData
  const { notificationSettings } = endpoint

  return (
    <Form method="put">
      <section className="pokt-network-notifications-activate-alerts">
        <Card>
          <div className="pokt-card-header">
            <h3>Activate Alerts</h3>
          </div>
          <p>
            Set up usage alerts to be warned when you are approaching your relay limits.
            We will send an email when your usage crosses the thresholds specified below.
          </p>
          <div className="pokt-network-notifications-alerts">
            {NOTIFICATIONS_ALERT_LEVELS.map((level) => (
              <div key={level} className="pokt-network-notifications-alert">
                <div
                  className={`pokt-network-notifications-alert-border pokt-network-notifications-alert-border-${backgroundColor(
                    level,
                  )}`}
                />
                <div className="pokt-network-notifications-alert-description">
                  <p>
                    {getUsagePercentage(level)} of{" "}
                    {formatNumberToSICompact(FREE_TIER_MAX_RELAYS)} relays per day
                  </p>
                  <Switch
                    defaultChecked={
                      Object.keys(notificationSettings).length > 0 &&
                      notificationSettings[level]
                        ? (notificationSettings[level] as boolean)
                        : DEFAULT_ALERT_PERCENTAGES[level]
                    }
                    name={level}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="pokt-network-notifications-alert-btn-container">
            <Button
              className="pokt-network-notifications-submit-btn"
              disabled={
                navigation.state === "loading" || navigation.state === "submitting"
              }
              type="submit"
              onClick={() => {
                trackEvent(AmplitudeEvents.NotificationSettingsChange)
              }}
            >
              {navigation.state === "loading" || navigation.state === "submitting"
                ? navigation.state
                : "Save Changes"}
            </Button>
          </div>
          <Text mt={16} size="xs">
            The Portal automatically redirects all surplus relays to our backup
            infrastructure. If you want all relays to be unstoppable, stay under your
            limit or contact the team to up your stake.
          </Text>
        </Card>
      </section>
    </Form>
  )
}

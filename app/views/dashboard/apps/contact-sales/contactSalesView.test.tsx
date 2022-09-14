import { expect } from "vitest"
import ContactSalesView from "./contactSalesView"
import { render, screen } from "test/helpers"

describe("<ContactSalesView />", () => {
  it("renders", () => {
    render(<ContactSalesView result="success" />)

    expect(
      screen.getByRole("heading", {
        name: /We have Enterprise solutions for your needs/i,
      }),
    ).toBeInTheDocument()
  })

  it("renders success modal when submission is successful", () => {
    render(<ContactSalesView result="success" />)

    expect(screen.getByRole("heading", { name: /Form Submitted/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Done/i })).toBeInTheDocument()
  })

  it("renders failure modal when submission fails", () => {
    render(
      <ContactSalesView
        error={{
          error: true,
          data: "Something went wrong!",
        }}
        result="error"
      />,
    )

    expect(
      screen.getByRole("heading", { name: /Form Submission Failed/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole("button", { name: /Done/i })).toBeInTheDocument()
  })
})
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";

describe("ConfirmationDialogComponent tests", () => {
  it("Should not render any content when it is not opened", () => {
    const props = {
      isOpen: false,
      labels: { closeButton: "Close", acceptButton: "Accept" },
      onAccept: () => false,
      onClose: () => false,
      title: "Title",
      children: "This is a test"
    };

    const { container } = render(
      <ConfirmationDialogComponent {...props} key="test" />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("Should render the title, the button labels an the content when it is opened", () => {
    const props = {
      isOpen: true,
      onAccept: () => false,
      onClose: () => false,
      title: "Title",
      labels: { closeButton: "Close", acceptButton: "Accept" }
    };

    const message = "This is a test";

    render(
      <ConfirmationDialogComponent {...props} key="test">
        {message}
      </ConfirmationDialogComponent>
    );

    const title = screen.getByRole("heading", { name: props.title });
    const acceptButton = screen.getByRole("button", {
      name: props.labels.acceptButton
    });
    const cancelButton = screen.getByRole("button", {
      name: props.labels.closeButton
    });
    const content = screen.getByText(message);

    expect(title).toBeInTheDocument();
    expect(acceptButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it("should call onAccept when the accept button is clicked on", () => {
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: () => false,
      title: "Title",
      labels: { closeButton: "Close", acceptButton: "Accept" }
    };

    const message = "This is a test";

    render(
      <ConfirmationDialogComponent {...props} key="test">
        {message}
      </ConfirmationDialogComponent>
    );

    const acceptButton = screen.getByRole("button", {
      name: props.labels.acceptButton
    });

    userEvent.click(acceptButton);

    expect(props.onAccept).toHaveBeenCalled();
  });

  it("should call onClose when the close button is clicked on", () => {
    const props = {
      isOpen: true,
      onAccept: () => false,
      onClose: jest.fn(),
      title: "Title",
      labels: { closeButton: "Close", acceptButton: "Accept" }
    };

    const message = "This is a test";

    render(
      <ConfirmationDialogComponent {...props} key="test">
        {message}
      </ConfirmationDialogComponent>
    );

    const closeButton = screen.getByRole("button", {
      name: props.labels.closeButton
    });

    userEvent.click(closeButton);

    expect(props.onClose).toHaveBeenCalled();
  });
});

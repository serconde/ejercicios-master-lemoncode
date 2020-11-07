import React from "react";
import { render, screen } from "@testing-library/react";
import { SpinnerComponent } from "./spinner.component";
import { trackPromise } from "react-promise-tracker";

describe("SpinnerComponent tests", () => {
  it("should be shown only while loading", async () => {
    // Arrange
    let stop = false;
    const promise = trackPromise(
      (async () => {
        const f = () => {
          if (!stop) {
            setTimeout(f, 100);
          }
        };
        f();
      })()
    );

    // Act
    render(<SpinnerComponent />);
    const whileLoading = await screen.findByRole("presentation");
    stop = false;
    await promise;
    render(<SpinnerComponent />);
    const afterLoading = screen.queryByRole("presentation");

    // Assert
    expect(whileLoading).not.toBeNull();
    expect(afterLoading).toBeNull();
  });
});

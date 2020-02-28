import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Result from "../game/result";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders Result with or without a gameResult", () => {
  act(() => {
    render(<Result />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<Result gameResult={[]} />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<Result gameResult={[false]} />, container);
  });
  expect(container.textContent).toBe("Result: 0 wins and 1 lossesWin percentage: 0%loss");
});
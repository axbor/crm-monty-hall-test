import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ListItems from "../game/listItems";

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

it("renders ListItems with or without items", () => {
  act(() => {
    render(<ListItems />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<ListItems items={[]} />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<ListItems items={[false]} />, container);
  });
  expect(container.textContent).toBe("loss");

  act(() => {
    render(<ListItems items={[true]} />, container);
  });
  expect(container.textContent).toBe("win");
});
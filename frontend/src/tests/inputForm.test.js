import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import InputForm from "../game/inputForm";

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

it("contains inputs with values ", () => {
  act(() => {
    render(
      <InputForm
        numberOfGames={100}
        isChangingDoor={false} />,
      container
    );
  });

  expect(container.getElementsByTagName("input").length).toBe(3);
  expect(container.getElementsByTagName("input")[0].value).toBe("100");
  expect(container.getElementsByTagName("input")[1].checked).toBe(false);
  expect(container.getElementsByTagName("input")[2].value).toBe("Let's play!");
});
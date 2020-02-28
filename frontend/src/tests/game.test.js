import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import axios from 'axios';
import TestUtils from 'react-dom/test-utils';
import Game from "../game/game";

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

jest.mock('axios');

it("updates result list when game is played", async () => {
  const data = {
    data: [true, true, false, true]
  }

  axios.get.mockImplementationOnce(() => Promise.resolve(data));

  await act(async () => {
    render(<Game />, container);
    expect(container.getElementsByTagName("form").length).toBe(1);
    const form = document.getElementsByTagName("form")[0];
    TestUtils.Simulate.submit(form);
  });

  expect(container.getElementsByClassName["result"]).toBe(undefined);

  act(() => {
    render(<Game />, container);
  })

  expect(container.getElementsByClassName("result").length).toBe(1);
  expect(container.getElementsByClassName("result")[0].textContent).toBe("Result: 3 wins and 1 lossesWin percentage: 75%winwinlosswin");
});
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.history.replaceState({}, "", "/");
});

test("renders the landing headline and the live board", () => {
  const { getByText, getByLabelText } = render(<App />);
  expect(getByText(/El tres en raya más/i)).toBeInTheDocument();
  expect(getByLabelText("Tablero de tres en raya")).toBeInTheDocument();
  expect(getByText(/Apertura: centro o esquina/i)).toBeInTheDocument();
  expect(getByText(/El centro primero/i)).toBeInTheDocument();
});

test("places X then O and shows the next-player status", () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.click(getByLabelText("Casilla 1, 1: vacía"));
  expect(getByText("Siguiente: O")).toBeInTheDocument();
  fireEvent.click(getByLabelText("Casilla 1, 2: vacía"));
  expect(getByText("Siguiente: X")).toBeInTheDocument();
});

test("opens a full play view at /animation", () => {
  window.history.replaceState({}, "", "/animation");
  const { getByLabelText, queryByText, getByText } = render(<App />);
  expect(queryByText(/El tres en raya más/i)).not.toBeInTheDocument();
  expect(getByLabelText("Tablero de tres en raya")).toBeInTheDocument();
  expect(getByText("Nueva partida")).toBeInTheDocument();
});

test("paints the winning line when X wins a column", () => {
  window.history.replaceState({}, "", "/animation");
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.click(getByLabelText("Casilla 1, 1: vacía"));
  fireEvent.click(getByLabelText("Casilla 1, 2: vacía"));
  fireEvent.click(getByLabelText("Casilla 2, 1: vacía"));
  fireEvent.click(getByLabelText("Casilla 2, 2: vacía"));
  fireEvent.click(getByLabelText("Casilla 3, 1: vacía"));
  expect(getByText("Gana X")).toBeInTheDocument();
  expect(getByLabelText("Casilla 1, 1: X, línea ganadora")).toHaveClass("square-win");
});

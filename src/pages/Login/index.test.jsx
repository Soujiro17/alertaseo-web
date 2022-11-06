import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Login from ".";

describe("Login", () => {
  it("should render", () => {
    render(<Login />);
  });

  it("should render title", () => {
    screen.getByText("Iniciar sesión");
  });
});

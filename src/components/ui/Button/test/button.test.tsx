import { render, screen } from "@testing-library/react";
import Button from "../index";
import { describe, it, expect } from "vitest";

describe("Button", () => {
  it("should render the title", () => {
    render(<Button title="button">Click me</Button>);
    expect(screen.getByTitle("button")).toBeInTheDocument();
  });
});

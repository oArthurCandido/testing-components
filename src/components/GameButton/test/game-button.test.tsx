import { render, screen } from "@testing-library/react";
import GameButton from "../index";
import { describe, it, expect } from "vitest";

describe("GameButton", () => {
  it("should render the title", () => {
    render(<GameButton  isSelected={true} isWrongAnswer={true} key={'especial-key'} title="Click me" />);
    expect(screen.getByTitle("Click me")).toBeInTheDocument();
  });

  it("should render the title as button text", () => {
    render(<GameButton isSelected={true} isWrongAnswer={true} key={'especial-key'} title="Click me" />);
    expect(screen.getByTitle("Click me")).toHaveTextContent("Click me");
  });

  it("shouldn't have background color defined when isSelect is false", () => {
    render(<GameButton isSelected={false} isWrongAnswer={true} key={'especial-key'} title="Click me" />);
    expect(screen.getByTitle("Click me")).toHaveStyle({ backgroundColor: "" });
  });

  it("should have background color blue when isSelect is true and isWrongAnswer is false", () => {
    render(<GameButton correctColor="#0000ff" isSelected={true} isWrongAnswer={false} key={'especial-key'} title="Click me" />);
    expect(screen.getByTitle("Click me")).toHaveStyle({ backgroundColor: "#0000ff" });
  });

  it("should have background color red when isSelect is true and isWrongAnswer is true", () => {
    render(<GameButton wrongColor="#ff0000" isSelected={true} isWrongAnswer={true} key={'especial-key'} title="Click me" />);
    expect(screen.getByTitle("Click me")).toHaveStyle({ backgroundColor: "#ff0000" });
  });
  
});
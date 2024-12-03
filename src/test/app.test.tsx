import { act, render, screen } from "@testing-library/react";
import App from "../App";
import { describe, it, expect } from "vitest";

// A test to render the App component with the data prop, mock the data object and check if the App component is rendered, to do this check if 8 buttons are rendered in the screen

describe("App", () => {
  it("should render the App component with the data prop", () => {
    const data = {
      France: "Paris",
      Germany: "Berlin",
      Italy: "Rome",
      Spain: "Madrid",
    };
    render(<App data={data} />);
    expect(screen.getAllByRole("button")).toHaveLength(8);
  });
  // A test to check if on first click in a button that button background color is changed to the defined color on correctColor prop
  it("should change the button background color to the defined color on correctColor prop in the first click", async () => {
    const data = {
      France: "Paris",
      Germany: "Berlin",
      Italy: "Rome",
      Spain: "Madrid",
    };
    render(<App correctColor="#000000" data={data} />);
    const button = screen.getAllByRole("button")[0];
    await act(async () => {
      button.click();
    });
    expect(button).toHaveStyle({ backgroundColor: "#000000" });
  });
  // A test to check if on first click in a button that button background color is changed to blue
  it("should change the button background color to blue in the first click if the correctColor is not passed", async () => {
    const data = {
      France: "Paris",
      Germany: "Berlin",
      Italy: "Rome",
      Spain: "Madrid",
    };
    render(<App data={data} />);
    const button = screen.getAllByRole("button")[0];
    await act(async () => {
      button.click();
    });
    expect(button).toHaveStyle({ backgroundColor: "#0000ff" });
  });
  // A test to check if on second click in a button that button background color keep the defined color on correctColor prop
  it("should keep the button background color to the defined color on correctColor prop in the second click", async () => {
    const data = {
      France: "Paris",
      Germany: "Berlin",
      Italy: "Rome",
      Spain: "Madrid",
    };
    render(<App correctColor="#000000" data={data} />);
    const button = screen.getAllByRole("button")[0];
    await act(async () => {
      button.click();
    });
    await act(async () => {
      button.click();
    });
    expect(button).toHaveStyle({ backgroundColor: "#000000" });
  });
  // A test to check if on second click in a button that button background color keep blue
  it("should keep the button background color to blue in the second click if the correctColor is not passed", async () => {
    const data = {
      France: "Paris",
      Germany: "Berlin",
      Italy: "Rome",
      Spain: "Madrid",
    };
    render(<App data={data} />);
    const button = screen.getAllByRole("button")[0];
    await act(async () => {
      button.click();
    });
    await act(async () => {
      button.click();
    });
    expect(button).toHaveStyle({ backgroundColor: "#0000ff" });
  });
  // A test to check if on second click on a second button that button background color is changed to the defined color on wrongColor prop if the button is not a correct answer pair of the first button using the data prop for the correct answer
  it("should change the button background color to the defined color on wrongColor prop in the second click if the button is not a correct answer pair of the first button", async () => {
    const data = {
      France: "Paris",
      Germany: "Berlin",
      Italy: "Rome",
      Spain: "Madrid",
    };
    render(<App wrongColor="#000000" data={data} />);
    const button1 = screen.getByText("France");
    const button2 = screen.getByText("Germany");
    await act(async () => {
      button1.click();
    });
    expect(button1).toHaveStyle({ backgroundColor: "#0000ff" });
    await act(async () => {
      button2.click();
    });
    expect(button1).toHaveStyle({ backgroundColor: "#0000000" });
    expect(button2).toHaveStyle({ backgroundColor: "#000000" });
  });
  // A test to check if on second click on a second button that button background color is changed to red if the button is not a correct answer pair of the first button
  it("should change the button background color to red in the second click if the button is not a correct answer pair of the first button", async () => {
    const data = {
      France: "Paris",
      Germany: "Berlin",
      Italy: "Rome",
      Spain: "Madrid",
    };
    render(<App data={data} />);
    const button1 = screen.getByText("France");
    const button2 = screen.getByText("Germany");
    await act(async () => {
      button1.click();
    });
    expect(button1).toHaveStyle({ backgroundColor: "#0000ff" });
    await act(async () => {
      button2.click();
    });
    expect(button1).toHaveStyle({ backgroundColor: "#ff0000" });
    expect(button2).toHaveStyle({ backgroundColor: "#ff0000" });
  });
  // A test to check if on click on a button that is with the wrong answer background color the background color is changed to blue
  it("should change the button background color to blue if the button is with the wrong answer background color", async () => {
    const data = {
      France: "Paris",
      Germany: "Berlin",
      Italy: "Rome",
      Spain: "Madrid",
    };
    render(<App data={data} />);
    const button1 = screen.getByText("France");
    const button2 = screen.getByText("Germany");
    await act(async () => {
      button1.click();
    });
    expect(button1).toHaveStyle({ backgroundColor: "#0000ff" });
    await act(async () => {
      button2.click();
    });
    expect(button1).toHaveStyle({ backgroundColor: "#ff0000" });
    expect(button2).toHaveStyle({ backgroundColor: "#ff0000" });
    await act(async () => {
      button1.click();
    });
    expect(button1).toHaveStyle({ backgroundColor: "#0000ff" });
  });
  // A test to check if on click on a thirty button when the wrong answer background color is set the background color is changed to blue
  it("should change the button background color to blue if the button is with the wrong answer background color", async () => {
    const data = {
      France: "Paris",
      Germany: "Berlin",
      Italy: "Rome",
      Spain: "Madrid",
    };
    render(<App data={data} />);
    const button1 = screen.getByText("France");
    const button2 = screen.getByText("Germany");
    const button3 = screen.getByText("Italy");
    await act(async () => {
      button1.click();
    });
    expect(button1).toHaveStyle({ backgroundColor: "#0000ff" });
    await act(async () => {
      button2.click();
    });
    expect(button1).toHaveStyle({ backgroundColor: "#ff0000" });
    expect(button2).toHaveStyle({ backgroundColor: "#ff0000" });
    await act(async () => {
      button3.click();
    });
    expect(button1).toHaveStyle({ backgroundColor: "" });
    expect(button2).toHaveStyle({ backgroundColor: "" });
    expect(button3).toHaveStyle({ backgroundColor: "#0000ff" });
  });
    // A test to check if on click on a button that is with the correct answer those two buttons are removed from the screen
    it("should remove the buttons from the screen if the buttons are with the correct answer background color", async () => {
      const data = {
        France: "Paris",
        Germany: "Berlin",
        Italy: "Rome",
        Spain: "Madrid",
      };
      render(<App data={data} />);
      const button1 = screen.getByText("France");
      const button2 = screen.getByText("Paris");
      await act(async () => {
        button1.click();
      });
      expect(button1).toHaveStyle({ backgroundColor: "#0000ff" });
      await act(async () => {
        button2.click();
      });
      expect(button1).not.toBeInTheDocument();
      expect(button2).not.toBeInTheDocument();
    });
    // A test to check if on click on a button that is with the correct answer those two buttons are removed from the screen and the other buttons are still in the screen
    it("should remove the buttons from the screen if the buttons are with the correct answer background color and the other buttons should still be in the screen", async () => {
      const data = {
        France: "Paris",
        Germany: "Berlin",
        Italy: "Rome",
        Spain: "Madrid",
      };
      render(<App data={data} />);
      const button1 = screen.getByText("France");
      const button2 = screen.getByText("Paris");
      await act(async () => {
        button1.click();
      });
      expect(button1).toHaveStyle({ backgroundColor: "#0000ff" });
      await act(async () => {
        button2.click();
      });
      expect(button1).not.toBeInTheDocument();
      expect(button2).not.toBeInTheDocument();
      expect(screen.getByText("Germany")).toBeInTheDocument();
    });
    // A test to check if all buttons are removed from the screen when all pairs are found and the message congratulations is displayed
    it("should remove all buttons from the screen when all pairs are found and the message congratulations is displayed", async () => {
      const data = {
        France: "Paris",
        Germany: "Berlin",
        Italy: "Rome",
        Spain: "Madrid",
      };
      render(<App data={data} />);
      const button1 = screen.getByText("France");
      const button2 = screen.getByText("Paris");
      const button3 = screen.getByText("Germany");
      const button4 = screen.getByText("Berlin");
      const button5 = screen.getByText("Italy");
      const button6 = screen.getByText("Rome");
      const button7 = screen.getByText("Spain");
      const button8 = screen.getByText("Madrid");
      await act(async () => {
        screen.getByText("France").click();
      });
      await act(async () => {
        screen.getByText("Paris").click();
      });
        await act(async () => {
            screen.getByText("Germany").click();
            });
        await act(async () => {
            screen.getByText("Berlin").click();
            });
        await act(async () => {
            screen.getByText("Italy").click();
            });
        await act(async () => {
            screen.getByText("Rome").click();
            });
        await act(async () => {
            screen.getByText("Spain").click();
            });
        await act(async () => {
            screen.getByText("Madrid").click();
            });
      expect(screen.getByText('Congratulations')).toBeInTheDocument();
      expect(button1).not.toBeInTheDocument();
      expect(button2).not.toBeInTheDocument();
      expect(button3).not.toBeInTheDocument();
      expect(button4).not.toBeInTheDocument();
      expect(button5).not.toBeInTheDocument();
      expect(button6).not.toBeInTheDocument();
      expect(button7).not.toBeInTheDocument();
      expect(button8).not.toBeInTheDocument();
      
    });
});

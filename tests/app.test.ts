/* eslint-disable */
import { App } from "./app";

describe("App", () => {
  test("should show the title and description", () => {
    const mockPrinter = jest.fn();
    new App(mockPrinter);

    expect(mockPrinter).toHaveBeenNthCalledWith(1, "Lost in Cazoo Churchway");
    expect(mockPrinter).toHaveBeenNthCalledWith(
      2,
      "Cazoo Churchway description"
    );
  });

  test("should go north and describe new location", () => {
    const mockPrinter = jest.fn();
    const app = new App(mockPrinter);

    app.execute("GO N");

    expect(mockPrinter).toBeCalledWith("New Location Title");
    expect(mockPrinter).toBeCalledWith("New Location Description");
  });

  test("don't output location and description for no action", () => {
    const mockPrinter = jest.fn();
    new App(mockPrinter);

    expect(mockPrinter).not.toBeCalledWith("New Location Title");
    expect(mockPrinter).not.toBeCalledWith("New Location Description");
  });

  test("should not be able to move south to the new location", () => {
    const mockPrinter = jest.fn();
    const app = new App(mockPrinter);

    app.execute("GO S");

    expect(mockPrinter).not.toBeCalledWith("New Location Title");
    expect(mockPrinter).not.toBeCalledWith("New Location Description");
    expect(mockPrinter).toBeCalledWith("I can't do that here!");
  });

  test("should go back to location you came from", () => {
    const mockPrinter = jest.fn();
    const app = new App(mockPrinter);

    app.execute("GO N");
    app.execute("GO S");

    expect(mockPrinter).lastCalledWith("Cazoo Churchway description");
  });
});

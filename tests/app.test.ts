/* eslint-disable */
import {
  App,
  cafe49,
  churchway,
  reception,
  somersTownCoffeeHouse,
} from "../src/app";

describe("App", () => {
  test("should show the title and description", () => {
    const mockPrinter = jest.fn();
    new App(mockPrinter);

    expect(mockPrinter).toHaveBeenNthCalledWith(1, churchway.title);
    expect(mockPrinter).toHaveBeenNthCalledWith(2, churchway.description);
  });

  test("should go north and describe new location", () => {
    const mockPrinter = jest.fn();
    const app = new App(mockPrinter);

    app.execute("GO N");

    expect(mockPrinter).toBeCalledWith(reception.title);
    expect(mockPrinter).toBeCalledWith(reception.description);
  });

  test("don't output location and description for no action", () => {
    const mockPrinter = jest.fn();
    new App(mockPrinter);

    expect(mockPrinter).not.toBeCalledWith(reception.title);
    expect(mockPrinter).not.toBeCalledWith(reception.description);
  });

  test("should not be able to move south to the new location", () => {
    const mockPrinter = jest.fn();
    const app = new App(mockPrinter);

    app.execute("GO S");

    expect(mockPrinter).not.toBeCalledWith(reception.title);
    expect(mockPrinter).not.toBeCalledWith(reception.description);
    expect(mockPrinter).toBeCalledWith("I can't do that here!");
  });

  test("should go back to location you came from", () => {
    const mockPrinter = jest.fn();
    const app = new App(mockPrinter);

    app.execute("GO N");
    app.execute("GO S");

    expect(mockPrinter).lastCalledWith(churchway.description);
  });

  test("should go west", () => {
    const mockPrinter = jest.fn();
    const app = new App(mockPrinter);

    app.execute("GO W");

    expect(mockPrinter).lastCalledWith(somersTownCoffeeHouse.description);
  });

  test("should go east", () => {
    const mockPrinter = jest.fn();
    const app = new App(mockPrinter);

    app.execute("GO E");

    expect(mockPrinter).lastCalledWith(cafe49.description);
  });

  test("should go to cafe 49, take a sandwich and come back to Churchway, go upstairs and eat the sandwich", () => {
    const mockPrinter = jest.fn();
    const app = new App(mockPrinter);

    app.execute("GO E");
    app.execute("TAKE SANDWICH");
    app.execute("GO W");
    app.execute("GO UP");
    app.execute("USE SANDWICH");

    expect(mockPrinter).lastCalledWith("You eat the sandwich");
  });
});

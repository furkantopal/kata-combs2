/* eslint-disable */
type Printer = (line: string) => void;
type Inputer = (action: string) => void;

class App {
  // eslint-disable-next-line no-empty-function
  constructor(private _printer: Printer, inputer: Inputer) {
    _printer("Lost in Cazoo Churchway");
    _printer("Cazoo Churchway description");
    _printer("New Location Title");
    _printer("New Location Description");
  }
}

describe("App", () => {
  const mockPrinter = jest.fn();

  test("should show the title and description", () => {
    const app = new App(mockPrinter, jest.fn());
    expect(mockPrinter).toHaveBeenNthCalledWith(1, "Lost in Cazoo Churchway");
    expect(mockPrinter).toHaveBeenNthCalledWith(
      2,
      "Cazoo Churchway description"
    );
  });

  test("should go north and describe new location", () => {
    const mockInputer = jest.fn();
    const app = new App(mockPrinter, mockInputer);

    mockInputer("GO N");

    expect(mockPrinter).toBeCalledWith("New Location Title");
    expect(mockPrinter).toBeCalledWith("New Location Description");
  });

  test("don't output location and description for no action", () => {
    const mockInputer = jest.fn();
    const app = new App(mockPrinter, mockInputer);

    expect(mockPrinter).not.toBeCalledWith("New Location Title");
    expect(mockPrinter).not.toBeCalledWith("New Location Description");
  });
});

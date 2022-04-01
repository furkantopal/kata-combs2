/* eslint-disable */
type Printer = (line: string) => void;
type Inputer = (action: string) => void;

class App {
  // eslint-disable-next-line no-empty-function
  constructor(private _printer: Printer) {
    _printer("Lost in Cazoo Churchway");
    _printer("Cazoo Churchway description");
  }
}

describe("App", () => {
  const mockPrinter = jest.fn();

  test("should show the title and description", () => {
    const app = new App(mockPrinter);
    expect(mockPrinter).toHaveBeenNthCalledWith(1, "Lost in Cazoo Churchway");
    expect(mockPrinter).toHaveBeenNthCalledWith(
      2,
      "Cazoo Churchway description"
    );
  });

  test("should go north", () => {
    const inputer = jest.fn();
    const app = new App(mockPrinter, inputer);
    inputer("GO N");

    expect(mockPrinter).toBeCalledWith("New Location Title");
    expect(mockPrinter).toBeCalledWith("New Location Description");
  });
});

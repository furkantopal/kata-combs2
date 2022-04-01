/* eslint-disable */
type Printer = (line: string) => void;

class App {
  // eslint-disable-next-line no-empty-function
  constructor(private _printer: Printer) {}
}

describe("App", () => {
  test("should show the title and description", () => {
    const mockPrinter = jest.fn();

    const app = new App(mockPrinter);

    expect(mockPrinter).toHaveBeenNthCalledWith(1, "Lost in Cazoo Churchway");
    expect(mockPrinter).toHaveBeenNthCalledWith(
      2,
      "Cazoo Churchway description"
    );
  });
});

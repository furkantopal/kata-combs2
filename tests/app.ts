// eslint-disable-next-line no-unused-vars
type Printer = (line: string) => void;

export class App {
  // eslint-disable-next-line no-empty-function
  constructor(private printer: Printer) {
    printer("Lost in Cazoo Churchway");
    printer("Cazoo Churchway description");
  }

  public execute(_action: string): void {
    if (_action === "GO N") {
      this.printer("New Location Title");
      this.printer("New Location Description");
    } else {
      this.printer("I can't do that here!");
    }
  }
}
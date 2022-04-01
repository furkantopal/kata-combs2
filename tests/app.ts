// eslint-disable-next-line no-unused-vars
type Printer = (line: string) => void;

type Location = {
  description: string;
  title: string;
  northLocation?: Location;
  southLocation?: Location;
};
const churchway: Location = {
  description: "Lost in Cazoo Churchway",
  title: "Cazoo Churchway description",
};

const reception: Location = {
  description: "Lost in Reception",
  title: "Cazoo Reception description",
};

churchway.northLocation = reception;
reception.southLocation = churchway;

export class App {
  // eslint-disable-next-line no-empty-function

  private location: Location = churchway;

  constructor(private printer: Printer) {
    printer("Lost in Cazoo Churchway");
    printer("Cazoo Churchway description");
  }

  public execute(_action: string): void {
    if (_action === "GO N" && this.location.northLocation) {
      this.location = this.location.northLocation;

      this.printer(this.location.title);
      this.printer(this.location.description);
    } else if (_action === "GO S" && this.location.southLocation) {
      this.location = this.location.southLocation;

      this.printer(this.location.title);
      this.printer(this.location.description);
    } else {
      this.printer("I can't do that here!");
    }
  }
}

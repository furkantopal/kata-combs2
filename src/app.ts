// eslint-disable-next-line no-unused-vars
type Printer = (line: string) => void;

type Location = {
  description: string;
  title: string;
  northLocation?: Location;
  southLocation?: Location;
  westLocation?: Location;
  eastLocation?: Location;
};
export const churchway: Location = {
  description: "Lost in Cazoo Churchway",
  title: "Cazoo Churchway description",
};

export const reception: Location = {
  description: "Lost in Reception",
  title: "Cazoo Reception description",
};

export const cafe49: Location = {
  description:
    "Narrow counter-serve outpost for coffee, breakfast sandwiches, baked goods & light lunch options.",
  title: "49 Cafe ",
};

export const somersTownCoffeeHouse: Location = {
  description:
    "Traditional pub with chunky tables and bright sofas, open all day for breakfast, lunch and dinner.",
  title: "The Somers Town Coffee House",
};

churchway.northLocation = reception;
churchway.westLocation = somersTownCoffeeHouse;
somersTownCoffeeHouse.eastLocation = churchway;
reception.southLocation = churchway;

export class App {
  // eslint-disable-next-line no-empty-function

  private location: Location = churchway;

  // eslint-disable-next-line no-unused-vars
  constructor(private printer: Printer) {
    this.describeLocation();
  }

  public execute(action: string): void {
    if (action === "GO N" && this.location.northLocation) {
      this.location = this.location.northLocation;

      this.describeLocation();
    } else if (action === "GO S" && this.location.southLocation) {
      this.location = this.location.southLocation;

      this.describeLocation();
    } else if (action === "GO W" && this.location.westLocation) {
      this.location = this.location.westLocation;

      this.describeLocation();
    } else {
      this.printer("I can't do that here!");
    }
  }

  private describeLocation() {
    this.printer(this.location.title);
    this.printer(this.location.description);
  }
}

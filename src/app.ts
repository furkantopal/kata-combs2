// eslint-disable-next-line no-unused-vars
type Printer = (line: string) => void;

type Location = {
  description: string;
  title: string;
  northLocation?: Location;
  southLocation?: Location;
  westLocation?: Location;
  eastLocation?: Location;
  downstairs?: Location;
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

const basement: Location = {
  description: "Basement",
  title: "Basement",
};

churchway.northLocation = reception;
churchway.westLocation = somersTownCoffeeHouse;
somersTownCoffeeHouse.eastLocation = churchway;
reception.southLocation = churchway;
churchway.eastLocation = cafe49;
cafe49.westLocation = churchway;
churchway.downstairs = basement;

export class App {
  // eslint-disable-next-line no-empty-function

  private location: Location = churchway;

  private hasSandwitch: boolean = false;

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
    } else if (action === "GO E" && this.location.eastLocation) {
      this.location = this.location.eastLocation;

      this.describeLocation();
    } else if (action === "TAKE SANDWICH" && this.location === cafe49) {
      this.hasSandwitch = true;

      this.printer("SANDWICH TAKEN");
    } else if (action === "GO DOWN" && this.location === churchway) {
      this.describeLocation();
      this.printer("GO DOWN");
    } else {
      this.printer("I can't do that here!");
    }
  }

  private describeLocation() {
    this.printer(this.location.title);
    this.printer(this.location.description);
  }
}

/* eslint-disable no-param-reassign */
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
  upstairs?: Location;
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

export const basement: Location = {
  description: "Basement",
  title: "Basement",
};

const createNorthSouthConnection = (
  southLocation: Location,
  northLocation: Location
) => {
  southLocation.northLocation = northLocation;
  northLocation.southLocation = southLocation;
};

const createEastWestConnection = (
  eastLocation: Location,
  westLocation: Location
) => {
  eastLocation.westLocation = westLocation;
  westLocation.eastLocation = eastLocation;
};

const createUpDownConnection = (
  upLocation: Location,
  downLocation: Location
) => {
  upLocation.downstairs = downLocation;
  downLocation.upstairs = upLocation;
};

createNorthSouthConnection(churchway, reception);
createEastWestConnection(churchway, somersTownCoffeeHouse);
createEastWestConnection(cafe49, churchway);
createUpDownConnection(churchway, basement);

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
      this.moveToLocation(this.location.northLocation);
    } else if (action === "GO S" && this.location.southLocation) {
      this.moveToLocation(this.location.southLocation);
    } else if (action === "GO W" && this.location.westLocation) {
      this.moveToLocation(this.location.westLocation);
    } else if (action === "GO E" && this.location.eastLocation) {
      this.moveToLocation(this.location.eastLocation);
    } else if (action === "GO DOWN" && this.location.downstairs) {
      this.moveToLocation(this.location.downstairs);
    } else if (action === "TAKE SANDWICH" && this.location === cafe49) {
      this.hasSandwitch = true;

      this.printer("SANDWICH TAKEN");
    } else if (
      action === "USE SANDWICH" &&
      this.location === basement &&
      this.hasSandwitch
    ) {
      this.printer("You eat the sandwich");
    } else {
      this.printer("I can't do that here!");
    }
  }

  private moveToLocation(l: Location) {
    this.location = l;

    this.describeLocation();
  }

  private describeLocation() {
    this.printer(this.location.title);
    this.printer(this.location.description);
  }
}

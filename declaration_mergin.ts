interface Vehicle {
  start(): void;
}

// extending interface
interface Vehicle {
  stop(): void;
  name: string;
}

const car: Vehicle = {
  name: "TT",
  start(): void {
    console.log("Truck started");
  },
  stop(): void {
    console.log("Truck stopped");
  },
};

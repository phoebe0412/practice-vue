import { carFormatter } from "./interface";

export class Car implements carFormatter {
  descroption: string;
  color: string;
  brand: string;

  constructor(color: string, brand: string) {
    this.descroption = "My car is";
    this.color = color;
    this.brand = brand;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getDescription() {
    return `${this.descroption} - ${this.brand} - ${this.color}`;
  }
}

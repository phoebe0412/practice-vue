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

  getDescription() {
    return `${this.descroption} - ${this.brand} - ${this.color}`;
  }
}
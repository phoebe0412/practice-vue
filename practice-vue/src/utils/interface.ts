export interface Point {
  x: number;
  y: number;
}

export interface carFormatter {
  getDescription(): string;
}

export enum AdimnAge {
  teenager = 15,
  middleAged = 40,
  elderly = 80,
}

export interface adminList<T> {
  name: string;
  age: AdimnAge;
  hobby: T;
}

<template>
  <div class="hello">
    <h1>父組建傳值{{ msg }}</h1>
    <el-button @click="onClick">點我向父組建傳值</el-button>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot :data="person"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <!-- <button @click="count++">You clicked me {{ count }} times.</button> -->
    <!-- <h3>{{ title }}</h3> -->
    <br />
    <!-- <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    /> -->
  </div>
</template>
<script lang="ts">

import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Car } from "../utils/classes";
import { Person } from "../utils/types";
import { Point } from "../utils/interface";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private clickCount = 0;

  @Emit("onChildClick")
  private onClick() {
    this.clickCount += 1;
    return this.clickCount;
  }

  private moreCar() {
    const redCar = new Car("red", "BMW");
    const buleCar = new Car("bule", "toyota");
    const cars: Car[] = [];

    cars.push(redCar);
    cars.push(buleCar);
    console.log("cars", cars);

    const carList = cars.forEach((item) => {
      console.log(item.color, item.brand, item.getDescription());
    });
  }

  private arr: number[] = [23, 12, 180, 2, 45];
  private newArr() {
    this.arr.push(8);
    console.log("arr", this.arr);
  }

  private numberPuls(x: number, y: number): number {
    return x + y;
  }

  private printerPount(num: Point): string {
    return `The x is ${num.x}, y is ${num.y}.`;
  }

  private identity<T>(arg: T): T {
    return arg;
  }

  private isPerson(list: Person): string {
    return `I am ${list.fireName} ${list.age} years old.`;
  }

  private person: Person = {
    fireName: "phoebe",
    age: 28,
  };

  private createArray<T>(length: number, val: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
      result[i] = val;
    }
    return result;
  }

  /** */

  private stringFun(): string {
    return "Hello Phoebe";
  }

  private numberFun(): number {
    return 19810412;
  }

  private resultSrtNum<T>(fun: T): T {
    return fun;
  }

  created(): void {
    this.newArr();
    console.log(this.numberPuls(7653, 986565));
    console.log(this.printerPount({ x: 1, y: 4 }));
    console.log(this.identity<string>("phoebe"));
    console.log(this.identity<number>(1234567));
    console.log(this.isPerson({ fireName: "phoebe", age: 28 }));
    console.log(this.createArray(3, "kona"));
    console.log(this.resultSrtNum(this.stringFun()));
    console.log(this.resultSrtNum(this.numberFun()));
    console.log("moreCar", this.moreCar()); // typescript class
  }
}
</script>

<template>
  <div class="hello">
    <h1>父組建傳值{{ msg }}</h1>
    <button @click="onClick">點我向父組建傳值</button>
    <h3>{{clickCount}}</h3>
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
interface Point {
  x: number;
  y: number;
}

type Person = {
  fireName: string;
  age: number;
  gender?: string | undefined;
};

import { Component, Emit, Prop, Vue } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private clickCount = 0;
  @Emit()
  private onClick() {
    this.clickCount += 1;
    return this.clickCount;
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

  created(): void {
    this.newArr();
    console.log(this.numberPuls(7653, 986565));
    console.log(this.printerPount({ x: 1, y: 4 }));
    console.log(this.identity<string>("phoebe"));
    console.log(this.identity<number>(1234567));
    console.log(this.isPerson({ fireName: "phoebe", age: 28 }));
  }
}
</script>

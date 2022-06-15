<template>
  <div class="promise">
    <h2>Promise</h2>
    <el-row>
      <!-- age -->
      <el-col>
        <el-form>
          <el-form-item label="請輸入年齡">
            <el-input placeholder="請輸入年齡" type="text" v-model="myAge.age" />
          </el-form-item>
          <el-button type="primary" @click="sumitAge">確認</el-button>
        </el-form>
      </el-col>
      <!-- mom -->
      <el-col>
        <el-form>
          <el-form-item>
            <el-radio v-model="isMomHappy" :label="true" border
              >Mom is happy</el-radio
            >
            <el-radio v-model="isMomHappy" :label="false" border
              >Mom is unhappy</el-radio
            >
          </el-form-item>
          <el-button type="primary" @click="askMom">ask mom</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
type AgeType = {
  age: number | undefined;
};

type MyPhone = {
  brand: string;
  color: string;
  type: string;
};

import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class PromisePage extends Vue {


  /** Promise age*/
  private myAge: AgeType = {
    age: undefined,
  };

  private myPromiseFun(age: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve("isAdult");
          this.$message("你已成年可進入網站");
        } else {
          reject("isMainity");
          this.$message.error("你未成年不可進入網站！!");
        }
      }, 1000);
    });
  }
  /** then & catch */
  private sumitAge() {
    this.myPromiseFun(Number(this.myAge["age"]))
      .then((data) => console.log(`result：${this.myAge["age"]}歲 ${data}`))
      .catch((error) => console.log(`result：${this.myAge["age"]}歲 ${error}`));
  }
  /** try & catch */
  // private async sumitAge() {
  //   try {
  //     let res = await this.myPromiseFun(Number(this.myAge["age"]));
  //     console.log(`result：${this.myAge["age"]}歲 ${res}`);
  //   } catch (e) {
  //     console.log(`result：${this.myAge["age"]}歲 ${e}`);
  //   }
  // }


  private user = {
    name: "Phoebe",
  };

  /** Mom */
  private isMomHappy = false;

  private phone: MyPhone = {
    brand: "Apple",
    color: "black",
    type: "iphone 11",
  };

  private willGetNewPhone(val: boolean) {
    return new Promise((resolve, reject) => {
      if (val) {
        let reason = `Hey friend, I have a new ${this.phone.color}${this.phone.brand} phone ${this.phone.type}`;
        resolve(reason);
      } else {
        let reason = "Mom is unhappy";
        reject(reason);
      }
    });
  }

  private askMom() {
    this.willGetNewPhone(this.isMomHappy)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
}
</script>

<template>
  <div class="promise">
    <h2>Promise</h2>
    <el-button @click="buttonPush">點我檢查驗證</el-button>
    <p>{{ getText }}</p>
    <!-- age -->
    <el-form>
      <el-form-item label="請輸入年齡">
        <el-input placeholder="請輸入年齡" type="text" v-model="myAge.age" />
      </el-form-item>
      <el-button @click="sumitAge">確認</el-button>
    </el-form>
  </div>
</template>
<script lang="ts">
type ageType = {
  age: number | undefined;
};

import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class PromisePage extends Vue {
  private getText = "";

  /** Promise age*/

  private myAge: ageType = {
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

  /** Promise auth*/
  private setText(text: string) {
    this.getText = text;
  }

  private user = {
    name: "Phoebe",
  };

  private checkAuth = () => {
    return new Promise((resolve, reject) => {
      this.setText("Checking Auth...");
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };

  private fetchUser = () => {
    return new Promise((resolve, reject) => {
      this.setText("Fetching User...");
      setTimeout(() => {
        resolve(this.user);
      }, 2000);
    });
  };

  private buttonPush() {
    this.checkAuth()
      .then((isAuth) => {
        if (isAuth) {
          return this.fetchUser();
        }
      })
      .then((user) => {
        this.setText(this.user.name);
      });
  }

}
</script>

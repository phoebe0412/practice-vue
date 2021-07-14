<template>
  <div class="promise">
    <h2>Promise</h2>
    <el-row>
      <el-col>
        <el-button type="primary" @click="buttonPush">點我檢查驗證</el-button>
        <p>{{ getText }}</p>
      </el-col>
      <!-- age -->
      <el-col>
        <el-form>
          <el-form-item label="How old are you?">
            <el-input
              placeholder="please enter age"
              type="text"
              v-model="myAge.age"
            />
          </el-form-item>
          <el-button type="primary" @click="sumitAge">suimt</el-button>
        </el-form>
      </el-col>
      <!-- mom -->
      <el-col>
        <el-form>
          <h5>What is Mom mood?</h5>
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
  private getText = "";

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
        let reason = `I have a new ${this.phone.color}${this.phone.brand} phone ${this.phone.type}`;
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

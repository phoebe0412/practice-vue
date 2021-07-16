<template>
  <div class="about">
    <div>
      Registration closes in <span>{{ isTime }}</span> minutes!
    </div>
    <h2>@Watch</h2>
    <el-form inline>
      <el-form-item label="姓：">
        <el-input type="text" v-model="firstName" @change="changeHandler"/>
      </el-form-item>
      <el-form-item label="名：">
        <el-input type="text" v-model="lastName" />
      </el-form-item>
    </el-form>
    <p>{{ fullName }}</p>
    <el-divider></el-divider>
    <h2>API</h2>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item v-for="i in 5" :key="i">
        <router-link :index="`${i}`" :to="`/About/${i}`">
          users{{ i }}
        </router-link>
      </el-menu-item>
    </el-menu>
    <!-- <h3>UserID: {{ $route.params.userId }}</h3> -->
    <!-- <pre>{{ userList }}</pre> -->
    <el-table stripe :data="userList" style="100%">
      <el-table-column prop="username" label="User Name" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="phone" label="Phone" />
      <el-table-column label="Address">
        <template>
          {{ addressList }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class About extends Vue {
  @Watch("firstName")
  private watchFirstName(val: string) {
    this.fullName = val + " " + this.lastName;
  }

  @Watch("lastName")
  private watchLastName(val: string) {
    this.fullName = this.firstName + " " + val;
  }

  @Watch("userId")
  private getUserId(val: number) {
    this.userInfo = this.fetchUserInfo(val);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get userId() {
    return this.$route.params.userId;
  }

  private changeHandler(val: any){
    console.log("change val", val);
  }

  private activeIndex = "1";
  private list = [];
  private firstName = "";
  private lastName = "";
  private fullName = "";
  private userInfo = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private userList: any = [];
  private addressList = "";

  /** API */
  private async fetchUserInfo(id: number) {
    return await fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((data) => {
        this.userList = [data];
        let getAddress = data.address;
        this.addressList = `${getAddress.city}, ${getAddress.street}, ${getAddress.suite}, ${getAddress.zipcode}`;
      })
      .catch((err) => console.log("erroe", err));
  }

  /** Parsing URL */
  private parsingURL() {
    const githubURL = new URL("https://github.com/search?q=react&type=Code");
    console.log("# Parsing URL");
    console.log("href:", githubURL.href);
    console.log("hostname:", githubURL.hostname);
    console.log("pathname:", githubURL.pathname);
    console.log("protocol:", githubURL.protocol);
    console.log("search:", githubURL.search);
    console.log("searchParams:", githubURL.searchParams.toString());
  }

  /** URLSearchParams*/
  private urlSearchParams() {
    const gitURL = new URL("https://github.com/search");
    const searchParams = new URLSearchParams("q=react&type=Code");
    gitURL.search = searchParams.toString();
    console.log("# URLSearchParams");
    console.log(gitURL.href);
  }

  /** Countdown timer */
  private timeStart = 120; // miuntes
  private timePassed = 0;
  private timerInterval = 0;
  private isTime = this.formatTime(this.timeStart);

  private startTimer() {
    this.timerInterval = setInterval(() => {
      this.timePassed = this.timePassed += 1;
      const timeCount = this.timeStart - this.timePassed;
      this.isTime = this.formatTime(timeCount);
      if (timeCount == 0) {
        this.$message.error("TimeOut");
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  private formatTime(time: any): string {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  created(): void {
    this.fetchUserInfo(Number(this.userId));
    this.parsingURL();
    this.urlSearchParams();
    this.startTimer();
  }
}
</script>

<template>
  <div class="about">
    <h2>@Watch</h2>
    <h2>API</h2>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item v-for="i in 5" :key="i">
        <router-link :to="`/About/${i}`"> /users/{{ i }} </router-link>
      </el-menu-item>
    </el-menu>
    <h3>UserID: {{ $route.params.userId }}</h3>
    <pre>{{ userInfo }}</pre>
  </div>
</template>
<script lang="ts">

import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {},
})

export default class About extends Vue {
  @Watch("userId")
  private getUserId(val: number) {
    this.userInfo = this.fetchUserInfo(val);
  }

  private userInfo = {};

  get userId() {
    return this.$route.params.userId;
  }

  private async fetchUserInfo(id: number) {
    return await fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((json) => (this.userInfo = json));
  }

  created(): void {
    this.fetchUserInfo(Number(this.userId));
  }
}
</script>

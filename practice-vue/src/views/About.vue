<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      姓：<span><input type="text" v-model="firstName" /></span>
    </p>
    <p>
      名：<span><input type="text" v-model="lastName" /></span>
    </p>
    <p>{{ fullName }}</p>
    <hr />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class About extends Vue {
  @Watch("firstName")
  private watchFirstName(val: any) {
    this.fullName = val + " " + this.lastName;
  }

  @Watch("lastName")
  private watchLastName(val: any) {
    this.fullName = this.firstName + " " + val;
  }

  private firstName = "";
  private lastName = "";
  private fullName = "";
}
</script>

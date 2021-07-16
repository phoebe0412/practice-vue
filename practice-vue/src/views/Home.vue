<template>
  <div>
    <el-main class="home">
      <HelloWorld msg="hello Phoebe" @click="onChildClick">
        <template v-slot:header>
          <h3>Here might be a page title</h3>
        </template>
        <template v-slot:default="{ data }">
          <p>{{ data.fireName }}</p>
        </template>
        <template v-slot:footer>
          <p>Here's some contact.</p>
        </template>
      </HelloWorld>
      <Dialog
        @submit="submitDialog"
        :dialogVisible="dialogVisible"
        :width="width[0]"
      >
        <template v-slot:title>
          <h3>提示</h3>
        </template>
        <template v-slot:dialogContent>
          <p>需要注意的是内容是默认不居中的</p>
        </template>
      </Dialog>
      <el-button type="primary" @click="openDialog">共用 Dialog</el-button>
    </el-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src
import Dialog from "../components/Dialog.vue";

@Component({
  components: {
    HelloWorld,
    Dialog,
  },
})
export default class Home extends Vue {
  private width = [30, 50, 80];

  private dialogVisible = false;
  private openDialog() {
    this.dialogVisible = true;
  }
  private submitDialog() {
    console.log("submit dialog");
    this.dialogVisible = false;
  }
  private onChildClick(val: number) {
    console.log("child", val);
  }
}
</script>

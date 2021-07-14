<template>
  <div>
    <el-main class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="hello Phoebe" @on-click="onChildClick">
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
    </el-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private onChildClick(val: number) {
    console.log("child", val);
  }
}
</script>

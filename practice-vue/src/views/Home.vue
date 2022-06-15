<template>
  <div>
    <el-main class="home">
      <child :parent-msg="message" @on-click="onChildClick" @update="selfUpdate"></child>
    </el-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import child from "../components/Child.vue"

@Component({
  components: {
    child,
  },
})

export default class Home extends Vue {
  private onChildClick(val: number) {
    console.log("child", val);
  }

  private message = 'Msg of Parent!'

  private selfUpdate(val:string) {
    this.message = val
  }
}
</script>

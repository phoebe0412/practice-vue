<template>
  <div>
    <el-dialog :visible.sync="isShowDialog" :width="`${width}%`" center>
      <div slot="title"><slot name="title"></slot></div>
      <main>
        <slot name="dialogContent"></slot>
      </main>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handlerSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
@Component
export default class Dialog extends Vue {
  @Prop() private width!: string;
  @Prop({ default: false }) private dialogVisible!: boolean;
  @Emit("submit")
  private handlerSubmit() {
    this.isShowDialog = false;
  }
  @Watch("dialogVisible")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private watchDialog(newVal: any) {
    if (newVal) {
      console.log("newVal", newVal);
      this.isShowDialog = newVal;
    }
  }

  private isShowDialog = false;
}
</script>

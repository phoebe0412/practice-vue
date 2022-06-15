<template>
  <div class="hello">
    <!-- 由父組建傳入 -->
    <h3> ParentMsg: {{ parentMsg }} </h3>
    <!-- 子組件 -->
    <h3> ChildMsg: {{ msg }} </h3> 
    <br>
    <el-button type="primary" @click="onClick">點我向父組建傳值</el-button>
    <h4>{{`把這個值傳到父組件 -- ${clickCount}`}}</h4>
    <br>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="更改父組件的值">
        <el-input v-model="message"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateText">Update</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
@Component({})

export default class IsProp extends Vue {
  @Prop() private parentMsg!: string;
  private clickCount = 0;
  @Emit()
  private onClick() {
    this.clickCount += 1;
    return this.clickCount;
  }

  private msg = 'Msg of Child!'

  private message = this.parentMsg

  @Emit('update')
  private updateText() {
    return this.message
  }
  // private updateText() {
  //   this.$emit('update', this.message); 
  // }
}
</script>

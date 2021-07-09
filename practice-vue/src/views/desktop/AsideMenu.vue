<template>
  <div class="sidebar">
    <el-menu default-active="1" class="el-menu-vertical-demo" router>
      <el-menu-item index="/Home">
        <i class="el-icon-caret-right"></i>
        <span slot="title">Prop and Emit</span>
      </el-menu-item>
      <el-menu-item index="/About/1">
        <i class="el-icon-caret-right"></i>
        <span slot="title">Watch</span>
      </el-menu-item>
      <el-menu-item index="/PromisePage">
        <i class="el-icon-caret-right"></i>
        <span slot="title">Promise</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AsideMenu extends Vue {}
</script>

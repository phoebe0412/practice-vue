<template>
  <el-header class="header-nav">
    <router-link to="/">Vue</router-link>
  </el-header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navber extends Vue {}
</script>

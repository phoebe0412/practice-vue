<template>
  <div class="main-section">
    <el-scrollbar>
      <slot />
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Main extends Vue {}
</script>
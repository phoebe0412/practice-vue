<template>
  <div>
    <Navber />
    <div class="main-container">
      <AsideMenu />
      <Main>
        <router-view />
      </Main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navber from "./Navbar.vue";
import AsideMenu from "./AsideMenu.vue";
import Main from "./Main.vue";

@Component({
  components: {
    Navber,
    AsideMenu,
    Main,
  },
})
export default class extends Vue {}
</script>
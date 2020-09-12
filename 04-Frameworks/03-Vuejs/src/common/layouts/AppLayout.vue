<template>
  <div>
    <v-app-bar app dark color="amber">
      <v-toolbar-title>Recipe App</v-toolbar-title>
      <div :class="$style.logged"><span class="username">{{username}}</span>&nbsp;<logout-button /></div>
    </v-app-bar>

    <v-container class="py-10">
      <slot />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getUsername } from "../../rest-api/api/login";
import { LogoutButton } from "../components";
export default Vue.extend({
  name: "AppLayout",
  components: { LogoutButton },
  data() {
    return { username: getUsername() };
  },
});
</script>

<style module>
  .logged {
    position: relative;
    right: -85vw;
  }
</style>
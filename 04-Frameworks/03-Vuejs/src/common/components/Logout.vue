<template>
  <v-btn small @click="onLogout()">Logout</v-btn>
</template>

<script lang="ts">
import Vue from "vue";
import { logout } from "../../rest-api/api/login";
import { baseRoutes } from "../../router";

export default Vue.extend({
  name: "LogoutButton",
  methods: {
    onLogout(){
      logout();
      this.$router.push(baseRoutes.login);
    },
  },
});
</script>
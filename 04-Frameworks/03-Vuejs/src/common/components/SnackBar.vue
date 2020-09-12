<template>
  <v-snackbar
    v-model="snackbar"
    :bottom="y === 'bottom'"
    :color="color"
    :left="x === 'left'"
    :multi-line="mode === 'multi-line'"
    :right="x === 'right'"
    :timeout="timeout"
    :top="y === 'bottom'"
    :vertical="mode === 'vertical'"
  >
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="snackbar = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "LogoutButton",
  props: {
      color: "",
      mode: "",
      snackbar: false,
      message: "",
      timeout: 6000,
      x: null,
      y: "bottom",
  }
});
</script>
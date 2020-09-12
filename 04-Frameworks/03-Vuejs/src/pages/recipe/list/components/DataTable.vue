<template>
  <v-data-table :headers="headers" :items="recipes">
    <template v-slot:item.actions="{ item }">
      <v-btn text icon :to="routeEdit(item)">
        <v-icon small class="mr-2">mdi-pencil</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../viewModel";
import { baseRoutes } from "../../../../router";

export default {
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
  },
  data: () => ({
    headers: [
      {
        text: "Name",
        sortable: false,
        value: "name",
        width: 200
      },
      {
        text: "Description",
        sortable: false,
        value: "description",
      },
      {
        text: "Actions",
        value: "actions",
        sortable: false,
      },
    ],
  }),

  methods: {
    routeEdit(recipe): string {
      return `${baseRoutes.recipe}/${recipe.id}`;
    },
  },
};
</script>
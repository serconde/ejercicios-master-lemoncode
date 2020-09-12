<template>
  <app-layout>
    <v-card>
      <v-card-title class="text-h4">
        Recipes&nbsp;
        <v-btn text icon to="/recipe/add">
          <v-icon large class="mr-2">mdi-plus</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <search-bar-component :search-text="searchText" :on-search="onSearch" />
        <data-table-component :recipes="recipes" :deleteRecipe="deleteRecipe" />
      </v-card-text>
    </v-card>
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../../common/layouts";
import { Recipe } from "./viewModel";
import { DataTableComponent, SearchBarComponent } from "./components";

export default Vue.extend({
  name: "RecipeListPage",
  components: { AppLayout, DataTableComponent, SearchBarComponent },
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
    searchText: String,
    onSearch: { required: true } as PropOptions<(value: string) => void>,
    deleteRecipe: { required: true } as PropOptions<(recipe: Recipe) => void>,
  },
});
</script>

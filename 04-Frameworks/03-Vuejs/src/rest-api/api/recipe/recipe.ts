import { Recipe } from "../../model";
import { mockRecipes } from "./mockData";

let recipes = mockRecipes;

export const fetchRecipes = (): Promise<Recipe[]> => {
  return Promise.resolve(recipes);
};

export const fetchRecipeById = (id: number): Promise<Recipe> => {
  const recipe = recipes.find((r) => r.id === id);
  return Promise.resolve(recipe as Recipe);
};

export const deleteRecipeById = (id: number): void => {
  recipes = recipes.filter(r => r.id !== id);
};

export const save = (recipe: Recipe): Promise<string> => {
  const index = recipes.findIndex((r) => r.id === recipe.id);

  return index >= 0 ? saveRecipeByIndex(index, recipe) : saveRecipeByIndex(recipes.length, recipe) ;
};

const saveRecipeByIndex = (index: number, recipe: Recipe): Promise<string> => {
  recipes = [...recipes.slice(0, index), recipe, ...recipes.slice(index + 1)];

  return Promise.resolve("Save recipe success");
};

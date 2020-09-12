import { ValidationResult, createDefaultValidationResult } from "@lemoncode/fonk";

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  imageUrl: string;
}

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  description: "",
  ingredients: [],
  imageUrl: "",
});

export interface RecipeError {
  name: ValidationResult;
  ingredients: ValidationResult;
  imageUrl: ValidationResult;
  description: ValidationResult;
}

export const createEmptyRecipeError = (): RecipeError => ({
  name: createDefaultValidationResult(),
  ingredients: createDefaultValidationResult(),
  imageUrl: createDefaultValidationResult(),
  description: createDefaultValidationResult(),
});

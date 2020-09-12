import Router, { RouteConfig } from "vue-router";
import { LoginPageContainer } from "./pages/login";
import { RecipeListPageContainer } from "./pages/recipe/list";
import { EditRecipePageContainer } from "./pages/recipe/edit";
import { isLoggedIn } from "./rest-api/api/login";

export const baseRoutes = {
  root: "/",
  login: "/login",
  recipe: "/recipe",
  add: "/recipe/add",
  edit: "/recipe/:id",
};

export type BaseRoutes = typeof baseRoutes;

const routes: RouteConfig[] = [
  { path: baseRoutes.root, redirect: baseRoutes.login },
  { path: baseRoutes.login, component: LoginPageContainer },
  { path: baseRoutes.recipe, component: RecipeListPageContainer },
  { path: baseRoutes.add, component: EditRecipePageContainer, props: true },
  { path: baseRoutes.edit, component: EditRecipePageContainer, props: true },
];

export const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== baseRoutes.root && to.path !== baseRoutes.login && !isLoggedIn()) next(baseRoutes.login)
  else next()
});
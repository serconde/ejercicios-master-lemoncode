import { Login } from "../../model";

export const loginRequest = (login: Login): Promise<boolean> =>
  isValidLogin(login)
    ? Promise.resolve(true)
    : Promise.reject("Not valid login");

export const isLoggedIn = (): boolean => !!localStorage.getItem('user');

export const getUsername = (): string => localStorage.getItem('user') as string;

export const logout = (): void => localStorage.removeItem('user');

const isValidLogin = (login: Login): boolean => {
  const isValid = login.name === "admin" && login.password === "test";
  isValid && localStorage.setItem('user', login.name);
  return isValid;
}
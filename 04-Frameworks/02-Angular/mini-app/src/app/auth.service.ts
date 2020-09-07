import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

interface LoginUser {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username: string = null;
  private users: Array<LoginUser> = [
    {
      username: 'master8@lemoncode.net',
      password: '12345678',
    },
  ];

  constructor() {
    this.username = localStorage.getItem('username');
  }

  public login(username: string, password: string) : Observable<boolean> {
    const isValid = this.users.some(
      (u) => u.username === username && u.password === password
    );

    if (isValid) {
      this.username = username;
      localStorage.setItem('username', this.username);
    }

    return of(isValid).pipe(delay(2000));
  }

  public logout(): void {
    this.username = null;
    localStorage.removeItem('username');
  }

  public isLogged = (): boolean =>
    this.username !== null &&
    this.username !== '' &&
    this.username === localStorage.getItem('username');

  public getUsername = (): string => this.username;
}

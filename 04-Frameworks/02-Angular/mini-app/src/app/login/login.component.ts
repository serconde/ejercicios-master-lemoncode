import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public loginInvalid: boolean;
  private returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/private';

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.email],
      password: ['', Validators.required],
    });

    if (this.authService.isLogged()) {
      await this.router.navigate([this.returnUrl]);
    }
  }

  async onSubmit() {
    this.loginInvalid = false;

    if (this.loginForm.valid) {
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;
        this.loginInvalid = !this.authService.login(username, password);
        if (!this.loginInvalid) await this.router.navigate([this.returnUrl]);
    }
  }
}

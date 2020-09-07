import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {
  public username: string;

  constructor(private authService: AuthService, private router: Router) {
    this.username = this.authService.getUsername();
  }

  ngOnInit(): void {
  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CrudComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicMainComponent } from './layout/public-main/public-main.component';
import { PrivateMainComponent } from './layout/private-main/private-main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path: 'private',
    redirectTo: "/private/dashboard",
    pathMatch: 'full'
  },
  {
    path: '',
    component: PublicMainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
  {
    path: 'private',
    component: PrivateMainComponent,
    data: { requiresLogin: true },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { requiresLogin: true },
        canActivateChild: [AuthGuard],
      },
      {
        path: 'gallery',
        component: GalleryComponent,
        data: { requiresLogin: true },
        canActivateChild: [AuthGuard],
      },
      {
        path: 'crud',
        component: CrudComponent,
        data: { requiresLogin: true },
        canActivateChild: [AuthGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { requiresLogin: true },
        canActivateChild: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

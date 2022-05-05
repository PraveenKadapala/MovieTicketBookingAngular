import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login' ,component:LoginComponent},
  {path:'signup' ,component:SignupComponent},
  {path:'dashboard' ,component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'movies' ,component:MoviesComponent, canActivate:[AuthGuard]},
  {path: '' , component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

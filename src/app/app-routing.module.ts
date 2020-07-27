import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/users/login/login.component';
import { WelcomeComponent } from './component/common/welcome/welcome.component';
import { RegisterComponent } from './component/users/register/register.component';
import { AuthenticationGuard } from './services/authentication.guard';




const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'tiles',loadChildren:'./component/tiles/tiles/tiles.module#TilesModule'
  },

  {
    path:'register',component:RegisterComponent
  },
  {
    path:'welcome',component:WelcomeComponent,canActivate:[AuthenticationGuard]
  },
  {
    path:'',redirectTo:'login',pathMatch:'prefix'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

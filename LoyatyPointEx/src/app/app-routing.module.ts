import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'user',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./modules/user/user.module').then((a) =>a.UserModule),
  },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}

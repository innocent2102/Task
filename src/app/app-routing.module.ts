import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'configuration', component: ConfigurationComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

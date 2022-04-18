import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component'

// Constante llamadoa routes de tipo Routes
const routes: Routes = [
  {path: "", component: PagesComponent,
  children:[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'grafica1', component: Grafica1Component },
    { path: "", redirectTo: "/dashboard", pathMatch: 'full' },
  ]
},
 


  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  
  { path: "**", component: NopagefoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
//El app routing module se importa en los modulos importantes
export class AppRoutingModule { }

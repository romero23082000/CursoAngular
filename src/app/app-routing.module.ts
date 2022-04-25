import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



// Constante llamadoa routes de tipo Routes
const routes: Routes = [
  
  


  { path: "**", component: NopagefoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
//El app routing module se importa en los modulos importantes
export class AppRoutingModule { }

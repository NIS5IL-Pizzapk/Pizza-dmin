import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainUtilisateursGestionComponent } from './gestion/utilisateur/main-utilisateurs-gestion/main-utilisateurs-gestion.component';
import { MainPlatGestionComponent } from './gestion/plat/main-plat-gestion/main-plat-gestion.component';
import { MainSupplementsGestionComponent } from './gestion/supplement/main-supplements-gestion/main-supplements-gestion.component';
import { MainBoissonGestionComponent } from './gestion/main-boisson-gestion/main-boisson-gestion.component';
import { MainDessertGestionComponent } from './gestion/main-dessert-gestion/main-dessert-gestion.component';


const routes: Routes = [  { path: 'login', component: LoginPageComponent, },
{ path: '', component: MainPageComponent },
{ path: 'accueil', component: MainPageComponent },
{ path: 'gestion/menu',component: MainPlatGestionComponent,},
{ path: 'gestion/menu/plats',component: MainPlatGestionComponent},
{ path: 'gestion/menu/supplements',component: MainSupplementsGestionComponent},
{ path: 'gestion/menu/boissons',component: MainBoissonGestionComponent},
{ path: 'gestion/menu/desserts',component: MainDessertGestionComponent},
{ path: 'gestion/utilisateurs', component: MainUtilisateursGestionComponent },
// { path: 'login', component: LoginComponent },
// { path: 'signup', component: SignupComponent },
// { path: '**', component: NotFoundComponent }
];

// ,{
//   path:'deposit', 
//   component: DepositComponent,
//   children: [
//     {
//       path:'coins', component: DepositaComponent
//     },
//     {
//       path:'notes', component: DepositbComponent
//     }
//   ]
// },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainIngredientsGestionComponent } from './gestion/ingredient/main-ingredients-gestion/main-ingredients-gestion.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainUtilisateursGestionComponent } from './gestion/utilisateur/main-utilisateurs-gestion/main-utilisateurs-gestion.component';
import { MainPlatGestionComponent } from './gestion/plat/main-plat-gestion/main-plat-gestion.component';


const routes: Routes = [  { path: 'login', component: LoginPageComponent, },
{ path: '', component: MainPageComponent },
{ path: 'accueil', component: MainPageComponent },
{ path: 'gestion/plats', component: MainPlatGestionComponent },
{ path: 'gestion/utilisateurs', component: MainUtilisateursGestionComponent },
{ path: 'gestion/ingredients', component: MainIngredientsGestionComponent },
// { path: 'login', component: LoginComponent },
// { path: 'signup', component: SignupComponent },
// { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

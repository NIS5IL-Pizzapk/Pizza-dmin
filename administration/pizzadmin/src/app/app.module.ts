import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainIngredientsGestionComponent } from './gestion/ingredient/main-ingredients-gestion/main-ingredients-gestion.component';
import { MainUtilisateursGestionComponent } from './gestion/utilisateur/main-utilisateurs-gestion/main-utilisateurs-gestion.component';
import { HeaderComponent } from './header/header.component';
import { AddUserComponent } from './gestion/utilisateur/add-user/add-user.component';
import { ModifyUserComponent } from './gestion/utilisateur/modify-user/modify-user.component';
import { AddIngredientComponent } from './gestion/ingredient/add-ingredient/add-ingredient.component';
import { ModifyIngredientComponent } from './gestion/ingredient/modify-ingredient/modify-ingredient.component';
import { AddPlatComponent } from './gestion/plat/add-plat/add-plat.component';
import { ModifyPlatComponent } from './gestion/plat/modify-plat/modify-plat.component';
import { MainPlatGestionComponent } from './gestion/plat/main-plat-gestion/main-plat-gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    MainIngredientsGestionComponent,
    MainUtilisateursGestionComponent,
    HeaderComponent,
    AddUserComponent,
    ModifyUserComponent,
    AddIngredientComponent,
    ModifyIngredientComponent,
    AddPlatComponent,
    ModifyPlatComponent,
    MainPlatGestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

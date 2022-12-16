import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatButtonModule} from '@angular/material/button';
import { NgToastModule } from 'ng-angular-popup';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainUtilisateursGestionComponent } from './gestion/utilisateur/main-utilisateurs-gestion/main-utilisateurs-gestion.component';
import { HeaderComponent } from './header/header.component';
import { AddUserComponent } from './gestion/utilisateur/add-user/add-user.component';
import { ModifyUserComponent } from './gestion/utilisateur/modify-user/modify-user.component';
import { AddPlatComponent } from './gestion/plat/add-plat/add-plat.component';
import { ModifyPlatComponent } from './gestion/plat/modify-plat/modify-plat.component';
import { MainPlatGestionComponent } from './gestion/plat/main-plat-gestion/main-plat-gestion.component';
import { AddSupplementComponent } from './gestion/supplement/add-supplement/add-supplement.component';
import { ModifySupplementComponent } from './gestion/supplement/modify-supplement/modify-supplement.component';
import { MainSupplementsGestionComponent } from './gestion/supplement/main-supplements-gestion/main-supplements-gestion.component';
import { MainMenuGestionComponent } from './gestion/menu/main-menu-gestion/main-menu-gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    MainUtilisateursGestionComponent,
    HeaderComponent,
    AddUserComponent,
    ModifyUserComponent,
    AddPlatComponent,
    ModifyPlatComponent,
    MainPlatGestionComponent,
    AddSupplementComponent,
    ModifySupplementComponent,
    MainSupplementsGestionComponent,
    MainMenuGestionComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    TextFieldModule,
    MatButtonModule,
    NgToastModule,
    ReactiveFormsModule,
    MatCheckboxModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

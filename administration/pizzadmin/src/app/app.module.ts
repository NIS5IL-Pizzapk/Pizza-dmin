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
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainUtilisateursGestionComponent } from './gestion/utilisateur/main-utilisateurs-gestion/main-utilisateurs-gestion.component';
import { AddPlatComponent } from './gestion/plat/add-plat/add-plat.component';
import { ModifyPlatComponent } from './gestion/plat/modify-plat/modify-plat.component';
import { MainPlatGestionComponent } from './gestion/plat/main-plat-gestion/main-plat-gestion.component';
import { MainSupplementsGestionComponent } from './gestion/supplement/main-supplements-gestion/main-supplements-gestion.component';
import { MainBoissonGestionComponent } from './gestion/main-boisson-gestion/main-boisson-gestion.component';
import { MainDessertGestionComponent } from './gestion/main-dessert-gestion/main-dessert-gestion.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    MainUtilisateursGestionComponent,
    AddPlatComponent,
    ModifyPlatComponent,
    MainPlatGestionComponent,
    MainSupplementsGestionComponent,
    MainBoissonGestionComponent,
    MainDessertGestionComponent
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
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

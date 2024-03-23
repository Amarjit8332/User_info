import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { GetallComponent } from './getall/getall.component';

const routes:Routes=[

{path: 'register', component: RegisterComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    GetallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

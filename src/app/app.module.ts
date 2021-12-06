import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';


@NgModule({
  declarations: [
    AppComponent,

    LoginCadastroComponent,
    RodapeComponent,

    NavBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    NavBarComponent,
    BemVindoComponent,
    EsqueceuSenhaComponent,

  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {AppComponent} from "./app.component";
import {SectionComponent} from "./section/section.component";
import {HomeComponent} from "./section/home/home.component";
import {LoginComponent} from "./section/login/login.component";
import {RegisterComponent} from "./section/register/register.component";
import {PasswordResetComponent} from "./section/login/password-reset/password-reset.component";
import {FooterComponent} from "./footer/footer.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UserModule} from "./section/user/user.module";
import {httpInterceptorProvider} from "./section/auth/auth-interceptor";


@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    SectionComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PasswordResetComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    UserModule
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
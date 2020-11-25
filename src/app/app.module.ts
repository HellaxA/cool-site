import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { RequestComponent } from './components/request/request.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AboutComponent } from './components/about/about.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateTrainingFormComponent } from './components/create-training-form/create-training-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RequestComponent,
    AboutComponent,
    TrainingsComponent,
    HomeComponent,
    AdminComponent,
    CreateTrainingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

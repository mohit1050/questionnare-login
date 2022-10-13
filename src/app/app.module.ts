import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ParseJSONComponent } from './components/parse-json/parse-json.component';
import { QuestionsTestComponent } from './components/questions-test/questions-test.component';
import { AttemptTestComponent } from './components/attempt-test/attempt-test.component';
import { Questions2Component } from './components/questions2/questions2.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, ParseJSONComponent, QuestionsTestComponent, AttemptTestComponent, Questions2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HotToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

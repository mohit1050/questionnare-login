import { Questions2Component } from './components/questions2/questions2.component';
import { AttemptTestComponent } from './components/attempt-test/attempt-test.component';
import { QuestionsTestComponent } from './components/questions-test/questions-test.component';
import { ParseJSONComponent } from './components/parse-json/parse-json.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'parsejson',
    component: ParseJSONComponent,
  },
  {
    path: 'questiontest',
    component: QuestionsTestComponent,
  },
  {
    path: 'attempttest',
    component: AttemptTestComponent,
  },
  {
    path: 'questions2',
    component: Questions2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

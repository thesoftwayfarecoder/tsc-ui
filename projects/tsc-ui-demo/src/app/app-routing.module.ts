import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MessageBoxDemoComponent } from './components/message-box-demo/message-box-demo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo/message-box', component: MessageBoxDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TscUiModule } from 'tsc-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppUiModule } from './app-ui.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MessageBoxDemoComponent } from './components/message-box-demo/message-box-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageBoxDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TscUiModule,
    AppRoutingModule,
    AppUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppUiModule } from './app-ui.module';
import { AppComponent } from './app.component';
import { MessageBoxDemoComponent } from './components/message-box-demo/message-box-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageBoxDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

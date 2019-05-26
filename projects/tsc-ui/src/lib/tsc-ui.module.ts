import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppUiModule } from './app-ui.module';

import { MessageBoxComponent } from './components/message-box/message-box.component';

@NgModule({
  declarations: [ MessageBoxComponent] ,
  imports: [ CommonModule, AppUiModule ],
  exports: [ MessageBoxComponent ],
  entryComponents: [ MessageBoxComponent ]
})
export class TscUiModule { }

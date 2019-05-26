import { NgModule } from '@angular/core';

import { MatButtonModule, MatDividerModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule
  ]
})
export class AppUiModule { }

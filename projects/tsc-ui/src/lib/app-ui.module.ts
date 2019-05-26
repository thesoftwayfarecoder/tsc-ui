import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [ 
    DragDropModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [ 
    DragDropModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AppUiModule { }

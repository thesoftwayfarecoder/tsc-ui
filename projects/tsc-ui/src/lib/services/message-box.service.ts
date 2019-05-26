import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { MessageBoxComponent } from '../components/message-box/message-box.component';
import { MessageBoxButtons } from '../models/message-box-buttons.enum';
import { MessageBoxModel } from '../models/message-box-model';
import { MessageBoxResult } from '../models/message-box-result.enum';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {

  constructor(private dialog: MatDialog) { }

  show(
    title: string, 
    message: string, 
    buttons: MessageBoxButtons = MessageBoxButtons.ok, 
    resultCallback: ((result: MessageBoxResult) => void) = undefined): void {
      
    this.dialog.open(MessageBoxComponent, { data: new MessageBoxModel(title, message, buttons, resultCallback) });
  }
  
}

import { Component, OnInit } from '@angular/core';

import { MessageBoxButtons, MessageBoxResult, MessageBoxService } from 'tsc-ui';

@Component({
  selector: 'app-message-box-demo',
  templateUrl: './message-box-demo.component.html',
  styleUrls: ['./message-box-demo.component.css']
})
export class MessageBoxDemoComponent implements OnInit {

  constructor(private messageBox: MessageBoxService) { }

  ngOnInit() {
  }

  showBasic() {
    this.messageBox.show("Basic Usage", "This is a basic message box with title and message.");
  }

  showOkCancel() {
    this.messageBox.show("Message Box Buttons", "This is a message box showing OK and Cancel buttons.", MessageBoxButtons.okCancel);
  }

  showAbortRetryIgnore() {
    this.messageBox.show("Message Box Buttons", "This is a message box showing Abort, Retry, and Ignore buttons.", MessageBoxButtons.abortRetryIgnore);
  }

  showYesNoCancel() {
    this.messageBox.show("Message Box Buttons", "This is a message box showing Yes, No, and Cancel buttons.", MessageBoxButtons.yesNoCancel);
  }

  showYesNo() {
    this.messageBox.show("Message Box Buttons", "This is a message box showing Yes and No buttons.", MessageBoxButtons.yesNo);
  }

  showRetryCancel() {
    this.messageBox.show("Message Box Buttons", "This is a message box showing OK and Cancel buttons.", MessageBoxButtons.retryCancel);
  }

  showWithCallback() {
    this.messageBox.show("Callback", "This is a message box showing Yes and No buttons with callback.", MessageBoxButtons.yesNo, (result) => {
      this.messageBox.show("Result", "Your choice: " + (result == MessageBoxResult.yes ? "Yes" : "No"));
    });
  }
}

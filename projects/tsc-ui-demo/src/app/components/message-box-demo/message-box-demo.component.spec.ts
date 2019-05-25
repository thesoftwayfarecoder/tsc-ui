import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxDemoComponent } from './message-box-demo.component';

describe('MessageBoxDemoComponent', () => {
  let component: MessageBoxDemoComponent;
  let fixture: ComponentFixture<MessageBoxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBoxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

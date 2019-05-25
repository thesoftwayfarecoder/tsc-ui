import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TscUiComponent } from './tsc-ui.component';

describe('TscUiComponent', () => {
  let component: TscUiComponent;
  let fixture: ComponentFixture<TscUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TscUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TscUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

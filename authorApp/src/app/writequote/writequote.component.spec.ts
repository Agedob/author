import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritequoteComponent } from './writequote.component';

describe('WritequoteComponent', () => {
  let component: WritequoteComponent;
  let fixture: ComponentFixture<WritequoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritequoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritequoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

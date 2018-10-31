import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeetingContactComponent } from './seeting-contact.component';

describe('SeetingContactComponent', () => {
  let component: SeetingContactComponent;
  let fixture: ComponentFixture<SeetingContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeetingContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeetingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeetingProfileComponent } from './seeting-profile.component';

describe('SeetingProfileComponent', () => {
  let component: SeetingProfileComponent;
  let fixture: ComponentFixture<SeetingProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeetingProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeetingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

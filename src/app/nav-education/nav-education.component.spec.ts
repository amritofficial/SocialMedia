import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEducationComponent } from './nav-education.component';

describe('NavEducationComponent', () => {
  let component: NavEducationComponent;
  let fixture: ComponentFixture<NavEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

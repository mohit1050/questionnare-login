import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questions2Component } from './questions2.component';

describe('Questions2Component', () => {
  let component: Questions2Component;
  let fixture: ComponentFixture<Questions2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Questions2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Questions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

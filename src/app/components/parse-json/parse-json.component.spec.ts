import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseJSONComponent } from './parse-json.component';

describe('ParseJSONComponent', () => {
  let component: ParseJSONComponent;
  let fixture: ComponentFixture<ParseJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParseJSONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParseJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

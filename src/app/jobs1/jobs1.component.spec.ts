import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobs1Component } from './jobs1.component';

describe('Jobs1Component', () => {
  let component: Jobs1Component;
  let fixture: ComponentFixture<Jobs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jobs1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jobs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

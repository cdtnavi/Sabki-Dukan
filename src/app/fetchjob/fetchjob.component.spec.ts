import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchjobComponent } from './fetchjob.component';

describe('FetchjobComponent', () => {
  let component: FetchjobComponent;
  let fixture: ComponentFixture<FetchjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

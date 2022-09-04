import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchallusersComponent } from './searchallusers.component';

describe('SearchallusersComponent', () => {
  let component: SearchallusersComponent;
  let fixture: ComponentFixture<SearchallusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchallusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchallusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

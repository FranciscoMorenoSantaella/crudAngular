import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpresComponent } from './listpres.component';

describe('ListpresComponent', () => {
  let component: ListpresComponent;
  let fixture: ComponentFixture<ListpresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMahdarComponent } from './add-mahdar.component';

describe('AddMahdarComponent', () => {
  let component: AddMahdarComponent;
  let fixture: ComponentFixture<AddMahdarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMahdarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMahdarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

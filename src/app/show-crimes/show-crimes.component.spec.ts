import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCrimesComponent } from './show-crimes.component';

describe('ShowCrimesComponent', () => {
  let component: ShowCrimesComponent;
  let fixture: ComponentFixture<ShowCrimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCrimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCrimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

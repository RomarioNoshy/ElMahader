import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakamolComponent } from './takamol.component';

describe('TakamolComponent', () => {
  let component: TakamolComponent;
  let fixture: ComponentFixture<TakamolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakamolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakamolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

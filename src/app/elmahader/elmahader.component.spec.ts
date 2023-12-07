import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmahaderComponent } from './elmahader.component';

describe('ElmahaderComponent', () => {
  let component: ElmahaderComponent;
  let fixture: ComponentFixture<ElmahaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElmahaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElmahaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

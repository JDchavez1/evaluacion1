import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremidadesPosterioresComponent } from './extremidades-posteriores.component';

describe('ExtremidadesPosterioresComponent', () => {
  let component: ExtremidadesPosterioresComponent;
  let fixture: ComponentFixture<ExtremidadesPosterioresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtremidadesPosterioresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtremidadesPosterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

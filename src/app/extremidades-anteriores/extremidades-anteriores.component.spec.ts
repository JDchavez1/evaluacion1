import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremidadesAnterioresComponent } from './extremidades-anteriores.component';

describe('ExtremidadesAnterioresComponent', () => {
  let component: ExtremidadesAnterioresComponent;
  let fixture: ComponentFixture<ExtremidadesAnterioresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtremidadesAnterioresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtremidadesAnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

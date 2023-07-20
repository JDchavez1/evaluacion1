import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuello1Component } from './cuello1.component';

describe('Cuello1Component', () => {
  let component: Cuello1Component;
  let fixture: ComponentFixture<Cuello1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuello1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuello1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

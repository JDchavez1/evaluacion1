import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lomo1Component } from './lomo1.component';

describe('Lomo1Component', () => {
  let component: Lomo1Component;
  let fixture: ComponentFixture<Lomo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lomo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lomo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

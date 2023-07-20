import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cola1Component } from './cola1.component';

describe('Cola1Component', () => {
  let component: Cola1Component;
  let fixture: ComponentFixture<Cola1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cola1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cola1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

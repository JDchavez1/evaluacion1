import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaldaComponent } from './falda.component';

describe('FaldaComponent', () => {
  let component: FaldaComponent;
  let fixture: ComponentFixture<FaldaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaldaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatasTraserasComponent } from './patas-traseras.component';

describe('PatasTraserasComponent', () => {
  let component: PatasTraserasComponent;
  let fixture: ComponentFixture<PatasTraserasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatasTraserasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatasTraserasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

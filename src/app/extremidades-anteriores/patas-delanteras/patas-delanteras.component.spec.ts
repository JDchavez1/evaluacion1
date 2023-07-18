import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatasDelanterasComponent } from './patas-delanteras.component';

describe('PatasDelanterasComponent', () => {
  let component: PatasDelanterasComponent;
  let fixture: ComponentFixture<PatasDelanterasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatasDelanterasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatasDelanterasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

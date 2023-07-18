import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostillasComponent } from './costillas.component';

describe('CostillasComponent', () => {
  let component: CostillasComponent;
  let fixture: ComponentFixture<CostillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostillasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

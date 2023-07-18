import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodillasComponent } from './rodillas.component';

describe('RodillasComponent', () => {
  let component: RodillasComponent;
  let fixture: ComponentFixture<RodillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodillasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

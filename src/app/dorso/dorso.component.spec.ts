import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorsoComponent } from './dorso.component';

describe('DorsoComponent', () => {
  let component: DorsoComponent;
  let fixture: ComponentFixture<DorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DorsoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

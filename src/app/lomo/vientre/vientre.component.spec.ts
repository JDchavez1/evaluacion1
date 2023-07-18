import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VientreComponent } from './vientre.component';

describe('VientreComponent', () => {
  let component: VientreComponent;
  let fixture: ComponentFixture<VientreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VientreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VientreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

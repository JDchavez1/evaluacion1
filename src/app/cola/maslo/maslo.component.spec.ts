import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasloComponent } from './maslo.component';

describe('MasloComponent', () => {
  let component: MasloComponent;
  let fixture: ComponentFixture<MasloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

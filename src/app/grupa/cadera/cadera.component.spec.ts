import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaderaComponent } from './cadera.component';

describe('CaderaComponent', () => {
  let component: CaderaComponent;
  let fixture: ComponentFixture<CaderaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaderaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

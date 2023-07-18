import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuernoComponent } from './cuerno.component';

describe('CuernoComponent', () => {
  let component: CuernoComponent;
  let fixture: ComponentFixture<CuernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuernoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

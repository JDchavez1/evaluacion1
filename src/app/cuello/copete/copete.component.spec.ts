import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopeteComponent } from './copete.component';

describe('CopeteComponent', () => {
  let component: CopeteComponent;
  let fixture: ComponentFixture<CopeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopeteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

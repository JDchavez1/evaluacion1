import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LomoComponent } from './lomo.component';

describe('LomoComponent', () => {
  let component: LomoComponent;
  let fixture: ComponentFixture<LomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LomoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

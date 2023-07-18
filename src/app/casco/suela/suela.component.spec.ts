import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuelaComponent } from './suela.component';

describe('SuelaComponent', () => {
  let component: SuelaComponent;
  let fixture: ComponentFixture<SuelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

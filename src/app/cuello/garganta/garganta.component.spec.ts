import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GargantaComponent } from './garganta.component';

describe('GargantaComponent', () => {
  let component: GargantaComponent;
  let fixture: ComponentFixture<GargantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GargantaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GargantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorvejonComponent } from './corvejon.component';

describe('CorvejonComponent', () => {
  let component: CorvejonComponent;
  let fixture: ComponentFixture<CorvejonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorvejonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorvejonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

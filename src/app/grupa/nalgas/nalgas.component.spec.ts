import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NalgasComponent } from './nalgas.component';

describe('NalgasComponent', () => {
  let component: NalgasComponent;
  let fixture: ComponentFixture<NalgasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NalgasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NalgasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

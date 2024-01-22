import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicaFUEComponent } from './tecnica-fue.component';

describe('TecnicaFUEComponent', () => {
  let component: TecnicaFUEComponent;
  let fixture: ComponentFixture<TecnicaFUEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TecnicaFUEComponent]
    });
    fixture = TestBed.createComponent(TecnicaFUEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

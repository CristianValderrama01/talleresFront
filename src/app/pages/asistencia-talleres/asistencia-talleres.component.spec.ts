import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaTalleresComponent } from './asistencia-talleres.component';

describe('AsistenciaTalleresComponent', () => {
  let component: AsistenciaTalleresComponent;
  let fixture: ComponentFixture<AsistenciaTalleresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenciaTalleresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsistenciaTalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

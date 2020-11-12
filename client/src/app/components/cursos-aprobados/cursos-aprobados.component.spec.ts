import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAprobadosComponent } from './cursos-aprobados.component';

describe('CursosAprobadosComponent', () => {
  let component: CursosAprobadosComponent;
  let fixture: ComponentFixture<CursosAprobadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosAprobadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosAprobadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

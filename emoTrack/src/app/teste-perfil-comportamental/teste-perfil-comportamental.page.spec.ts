import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestePerfilComportamentalPage } from './teste-perfil-comportamental.page';

describe('TestePerfilComportamentalPage', () => {
  let component: TestePerfilComportamentalPage;
  let fixture: ComponentFixture<TestePerfilComportamentalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestePerfilComportamentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

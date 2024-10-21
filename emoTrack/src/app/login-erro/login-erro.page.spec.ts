import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginErroPage } from './login-erro.page';

describe('LoginErroPage', () => {
  let component: LoginErroPage;
  let fixture: ComponentFixture<LoginErroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginErroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssinaturaPremiumPage } from './assinatura-premium.page';

describe('AssinaturaPremiumPage', () => {
  let component: AssinaturaPremiumPage;
  let fixture: ComponentFixture<AssinaturaPremiumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssinaturaPremiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

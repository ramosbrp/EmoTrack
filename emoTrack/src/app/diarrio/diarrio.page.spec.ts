import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiarrioPage } from './diarrio.page';

describe('DiarrioPage', () => {
  let component: DiarrioPage;
  let fixture: ComponentFixture<DiarrioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

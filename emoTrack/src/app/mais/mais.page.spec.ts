import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MaisPage } from './mais.page';

describe('MaisPage', () => {
  let component: MaisPage;
  let fixture: ComponentFixture<MaisPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaisPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

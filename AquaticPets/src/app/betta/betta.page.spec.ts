import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BettaPage } from './betta.page';

describe('BettaPage', () => {
  let component: BettaPage;
  let fixture: ComponentFixture<BettaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BettaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BettaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

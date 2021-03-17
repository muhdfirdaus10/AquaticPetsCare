import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuppyPage } from './guppy.page';

describe('GuppyPage', () => {
  let component: GuppyPage;
  let fixture: ComponentFixture<GuppyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuppyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuppyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

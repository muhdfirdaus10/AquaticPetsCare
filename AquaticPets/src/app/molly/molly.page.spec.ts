import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MollyPage } from './molly.page';

describe('MollyPage', () => {
  let component: MollyPage;
  let fixture: ComponentFixture<MollyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MollyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MollyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

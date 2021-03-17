import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Deseases02Page } from './deseases02.page';

describe('Deseases02Page', () => {
  let component: Deseases02Page;
  let fixture: ComponentFixture<Deseases02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deseases02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Deseases02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Deseases04Page } from './deseases04.page';

describe('Deseases04Page', () => {
  let component: Deseases04Page;
  let fixture: ComponentFixture<Deseases04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deseases04Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Deseases04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

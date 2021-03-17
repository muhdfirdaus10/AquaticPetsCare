import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Deseases05Page } from './deseases05.page';

describe('Deseases05Page', () => {
  let component: Deseases05Page;
  let fixture: ComponentFixture<Deseases05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deseases05Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Deseases05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

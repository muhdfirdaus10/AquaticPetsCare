import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Deseases01Page } from './deseases01.page';

describe('Deseases01Page', () => {
  let component: Deseases01Page;
  let fixture: ComponentFixture<Deseases01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deseases01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Deseases01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Deseases07Page } from './deseases07.page';

describe('Deseases07Page', () => {
  let component: Deseases07Page;
  let fixture: ComponentFixture<Deseases07Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deseases07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Deseases07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Deseases06Page } from './deseases06.page';

describe('Deseases06Page', () => {
  let component: Deseases06Page;
  let fixture: ComponentFixture<Deseases06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deseases06Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Deseases06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

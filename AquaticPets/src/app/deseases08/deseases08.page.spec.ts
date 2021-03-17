import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Deseases08Page } from './deseases08.page';

describe('Deseases08Page', () => {
  let component: Deseases08Page;
  let fixture: ComponentFixture<Deseases08Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deseases08Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Deseases08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

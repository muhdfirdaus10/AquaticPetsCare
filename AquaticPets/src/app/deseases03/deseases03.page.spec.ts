import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Deseases03Page } from './deseases03.page';

describe('Deseases03Page', () => {
  let component: Deseases03Page;
  let fixture: ComponentFixture<Deseases03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deseases03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Deseases03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  selectedSlide: any;
  segment=0;
  sliderOptions= {
    initialSlide: 1,
    slidePerView: 0,
    
    speed: 400
  }

  constructor() { }

  ngOnInit() {
  }

  async segmentChanged(ev) {
    await this.selectedSlide.slideTo(this.segment);

  }

  async slideShanged(slides : IonSlides) {

    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex =>{
      this.segment = selectedIndex;
    })

  }

}

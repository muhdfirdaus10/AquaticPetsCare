import { Component, OnInit } from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.page.html',
  styleUrls: ['./instruction.page.scss'],
})
export class InstructionPage {

  constructor() { }
  
  slideOpts={
    loop:false
  };
  
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  length;
  height;
  width;
  thick;
  tebal;
  result;
  result1;
  litre;
  gross;
  constructor() { }

  calc() {
    this.tebal = (parseInt(this.thick) * 4) / 10;

    this.gross = (parseInt(this.length) * parseInt(this.height) * parseInt(this.width)) - this.tebal;
   

    this.litre = this.gross / 1000;


    this.result = "Volume Gross: " + this.gross + " ml";

    this.result1 = this.litre + " litre";
    
  }

 


  ngOnInit() {
  }

}

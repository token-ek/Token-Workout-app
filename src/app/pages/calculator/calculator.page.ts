import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {


  public strings = strings;
  height: number;
  weight: number;
  resultNumber = '00.0';
  resultText = strings.ST131;
  icon = './assets/images/normal.png';
  color = 'var(--ion-color-primary)';

  constructor() { }

  ngOnInit() {
  }

  MetricCalculate() {

    const height = this.height;
    const weight = this.weight;

    if (Number(height) && Number(weight)) {

      const imc = ((weight / height / height) * 10000);

      this.resultNumber = imc.toFixed(2);

      if (imc < 18.5) {
        this.resultText = strings.ST132;
        this.color = '#22a6b3';
        this.icon = './assets/images/underweight.png';
      } else if (imc > 18.5 && imc < 25) {
        this.resultText = strings.ST133;
        this.color = '#6ab04c';
        this.icon = './assets/images/normal.png';
      } else if (imc >= 25 && imc < 30) {
        this.resultText = strings.ST134;
        this.color = '#f0932b';
        this.icon = './assets/images/overweight.png';
      } else {
        this.resultText = strings.ST135;
        this.color = '#eb4d4b';
        this.icon = './assets/images/obesity.png';
      }

    }

  }


}

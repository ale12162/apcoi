import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.page.html',
  styleUrls: ['main-page.page.scss'],
})
export class MainPage  {
  @ViewChild('barChart') barChart;
  @ViewChild('hrzBarChart') hrzBarChart;
  @ViewChild('hrzBarChart2') hrzBarChart2;
  @ViewChild('hrzBarChart3') hrzBarChart3;
  @ViewChild('hrzBarChart4') hrzBarChart4;
  @ViewChild('hrzBarChart5') hrzBarChart5;
  @ViewChild('hrzBarChart6') hrzBarChart6;
  bars: any;
  hrzBars: any;
  hrzBars2: any;
  hrzBars3: any;
  hrzBars4: any;
  hrzBars5: any;
  hrzBars6: any;
  apiData: any;
  colorArray: any;
  
  constructor(private http: HttpClient,) {
     this.titulos = ['t1', 't2'];
    }

    private titulos: any[];

    ionViewDidEnter() {
      this.generateColorArray(8);
    this.createBarChart();
    }

  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Dificultad-esfuerzo', 'Dificultad paseo largo','Dificultad paseo corto', 'Permanece sentado o acostado?', 'Necesita ayuda para actividades diarias?', 'Impedimento para hacer actividades diarias?', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        datasets: [{  
          label: "Resultados del cuestionario",        
          data: [4, 5, 6, 7, 5, 6, 5, 7, 5, 6, 7, 5, 6, 5, 7, 5, 6, 7, 5, 6, 5, 7, 5, 6, 3, 5, 6, 3],
          //data: [{x:'Sales', y:20}, {x:'Revenue', y:10}],
          backgroundColor: 'rgb(255,180,18)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(255,180,18)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }
      ]
      },        
      options: {
        scales: {
          yAxes: {
              beginAtZero: true,
            }
          }
        }
      }
    )};
    }
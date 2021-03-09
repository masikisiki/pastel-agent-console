import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;

  browserData = [];
  publishedData = [];
  colors = Highcharts.getOptions().colors

  constructor() { }


  ngOnInit(): void {

    this.publishedData.push({
      name: 'Orders',
      y: 300,
      color: Highcharts.color(this.colors[2]).get()
    },
      {
        name: 'Producs',
        y: 3200,
        color: Highcharts.color(this.colors[3]).get()
      }, {
      name: 'Customers',
      y: 2170,
      color: Highcharts.color(this.colors[4]).get()
    }
      , {
        name: 'Price Lists',
        y: 1275,
        color: Highcharts.color(this.colors[5]).get()
      }
    )

    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Total Records Published This Week'
      },
      subtitle: {
        text: ''
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%']
        }
      },
      tooltip: {
        valueSuffix: ''
      },
      series: [{
        name: 'published',
        data: this.publishedData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
          formatter: function () {
            // display only if larger than 1
            return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
              this.y + '' : null;
          }
        },
        id: 'published'
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            series: [{
            }, {
              id: 'published',
              dataLabels: {
                enabled: true
              }
            }]
          }
        }]
      }
    }
  }
}

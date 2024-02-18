import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-chart-pie',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './chart-pie.component.html',
  styleUrl: './chart-pie.component.scss'
})
export class ChartPieComponent implements OnInit {
  public data: any;

  public options: any;

  public ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [540, 325, 702],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
              }
          ]
      };

      this.options = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor
                  }
              }
          }
      };
  }
}

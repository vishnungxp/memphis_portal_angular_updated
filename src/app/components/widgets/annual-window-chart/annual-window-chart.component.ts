import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { DashboardDataService } from '../../../services/dashboard-data.service';

Chart.register(...registerables);

@Component({
  selector: 'app-annual-window-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './annual-window-chart.component.html',
  styleUrls: ['./annual-window-chart.component.scss']
})
export class AnnualWindowChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;

  constructor(private dataService: DashboardDataService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataService.getAnnualWindowData().subscribe(data => {
        this.createChart(data);
      });
    }, 0);
  }

  private createChart(data: any[]) {
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: data.map(d => `${d.status}: ${d.count}`),
          datasets: [{
            data: data.map(d => d.count),
            backgroundColor: data.map(d => d.color)
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'bottom'
            }
          }
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { DashboardDataService } from '../../../services/dashboard-data.service';

Chart.register(...registerables);

@Component({
  selector: 'app-navigation-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-chart.component.html',
  styleUrls: ['./navigation-chart.component.scss']
})
export class NavigationChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;

  constructor(private dataService: DashboardDataService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataService.getNavigationData().subscribe(data => {
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
        type: 'bar',
        data: {
          labels: data.map(d => d.label),
          datasets: [
            {
              label: 'Due',
              data: data.map(d => d.due),
              backgroundColor: '#4A90E2'
            },
            {
              label: 'Soon',
              data: data.map(d => d.soon),
              backgroundColor: '#6c5ce7'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 200
            }
          },
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
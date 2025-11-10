import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { DashboardDataService } from '../../../services/dashboard-data.service';

Chart.register(...registerables);

@Component({
  selector: 'app-top-vessels-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-vessels-chart.component.html',
  styleUrls: ['./top-vessels-chart.component.scss']
})
export class TopVesselsChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;

  constructor(private dataService: DashboardDataService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataService.getTopVesselsDueData().subscribe(data => {
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
          labels: data.map(d => d.vessel),
          datasets: [{
            data: data.map(d => d.count),
            backgroundColor: '#f39c12'
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true,
              max: 300
            }
          },
          plugins: {
            legend: {
              display: false
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
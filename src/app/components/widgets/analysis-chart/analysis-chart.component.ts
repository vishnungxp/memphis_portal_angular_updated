import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { DashboardDataService } from '../../../services/dashboard-data.service';

Chart.register(...registerables);

@Component({
  selector: 'app-analysis-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analysis-chart.component.html',
  styleUrls: ['./analysis-chart.component.scss']
})
export class AnalysisChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;

  constructor(private dataService: DashboardDataService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataService.getAnalysisData().subscribe(data => {
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
          labels: data.map(d => d.category),
          datasets: [
            {
              label: 'Done',
              data: data.map(d => d.done),
              backgroundColor: '#2ecc71'
            },
            {
              label: 'Not Done',
              data: data.map(d => d.notDone),
              backgroundColor: '#6c5ce7'
            }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
              max: 100
            },
            y: {
              stacked: true
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
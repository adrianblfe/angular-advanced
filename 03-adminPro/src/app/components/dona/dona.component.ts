import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
	
	@Input() title: string = 'Sin título';
	@Input() labels: string[] = [ 'label1', 'label2', 'label3' ];
	@Input() data: number[] = [ 50, 150, 120 ];

	public doughnutChartLabels: string[] = [];
	public doughnutChartData: ChartData<'doughnut'> = { datasets: [] };
	
	ngOnInit() {
		this.doughnutChartLabels = this.labels;
		this.doughnutChartData = {
			labels: this.doughnutChartLabels,
			datasets: [
				{
					data: this.data,
					backgroundColor: [ '#6857E6', '#009FEE', '#F02059']
				},
			]
		};
	}

  	// Doughnut
	

}

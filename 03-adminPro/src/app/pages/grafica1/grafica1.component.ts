import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

	public labels1: string[] = [ 'Pan', 'Tacos', 'Refrescos' ];
	public data1: number[] = [ 35, 20, 10 ];

}

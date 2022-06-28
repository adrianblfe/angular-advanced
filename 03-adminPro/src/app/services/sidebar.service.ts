import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class SidebarService {

	menu: any[] = [
		{
			titulo: 'Dashboard!!',
			icon: 'mdi mdi-gauge',
			submenu: [
				{ titulo: 'Dashboard', url: '/' },
				{ titulo: 'ProgressBar', url: '/dashboard/progress' },
				{ titulo: 'Gráficas', url: '/dashboard/grafica1' },
				{ titulo: 'Promesas', url: '/dashboard/promesas' },
				{ titulo: 'Rxjs', url: '/dashboard/rxjs' },
			]
		}
	]

  	constructor() { }
}

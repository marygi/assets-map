import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Truck } from '../model/truck';

@Injectable()
export class TruckService {
	trucksChanged = new Subject<Truck[]>();
	truckNameChanged = new Subject<string>();

	private truckList: Truck[] = [];

	constructor() {

	}

	setTruckList(trucks: Truck[]) {
		this.truckList = trucks ? trucks : [];
		this.trucksChanged.next(this.truckList.slice());
	}

	getTruckList() {
		return this.truckList.slice();
	}

	addTruck(truck: Truck) {
		this.truckList.push(truck);
		this.trucksChanged.next(this.truckList.slice());
	}

	deleteTruck(index: number) {
		this.truckList.splice(index, 1);
		this.trucksChanged.next(this.truckList.slice());
	}

	filterTruckList(name: string) {
		const filterValue = name.toLowerCase();
		console.log(this.truckList.filter(truck => truck.name.toLowerCase().indexOf(filterValue) === 0));
		return this.truckList.filter(truck => truck.name.toLowerCase().indexOf(filterValue) === 0);
	}
}

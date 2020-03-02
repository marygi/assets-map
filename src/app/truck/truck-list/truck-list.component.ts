import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Truck } from '../../shared/model/truck';
import { TruckService } from '../../shared/service/truck.service';
import {ModalTruckDeleteComponent} from '../../modal/modal-truck-delete/modal-truck-delete.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-truck-list',
	templateUrl: './truck-list.component.html',
	styleUrls: ['./truck-list.component.css']
})
export class TruckListComponent implements OnInit, OnDestroy {
	truckList: Truck[] = [];
	subscription: Subscription;

	constructor(private truckService: TruckService,
				private modalService: NgbModal) { }

	ngOnInit(): void {

		this.subscription = this.truckService.trucksChanged
			.subscribe(
				(trucks: Truck[]) => {
					this.truckList = trucks;

				}
			);

	}

	openDeleteModal(index: number) {
		const modalRef = this.modalService.open(ModalTruckDeleteComponent);
		modalRef.componentInstance.delIndex = index;
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}

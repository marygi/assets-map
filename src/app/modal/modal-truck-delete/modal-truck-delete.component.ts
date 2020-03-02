import {Component, Input, OnInit} from '@angular/core';
import {TruckService} from '../../shared/service/truck.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-modal-truck-delete',
	templateUrl: './modal-truck-delete.component.html',
	styleUrls: ['./modal-truck-delete.component.css']
})
export class ModalTruckDeleteComponent implements OnInit {
	@Input() delIndex;

	constructor(private truckService: TruckService,
				public modal: NgbActiveModal) { }

	ngOnInit(): void {
	}

	deleteTruck(index: number) {
		this.truckService.deleteTruck(index);
		this.modal.close();
	}

}

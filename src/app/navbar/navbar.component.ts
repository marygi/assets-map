import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TruckService } from '../shared/service/truck.service';
import { ModalTruckNewComponent } from '../modal/modal-truck-new/modal-truck-new.component';


@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	myGroup = new FormGroup({
		filterTruckControl: new FormControl()
	});

	constructor(private modalService: NgbModal,
				private truckService: TruckService) { }

	ngOnInit(): void {

		this.myGroup.get('filterTruckControl').valueChanges
			.subscribe(name => this.truckService.truckNameChanged.next(name));
	}

	openNewTruckModal() {
		this.modalService.open(ModalTruckNewComponent);
	}
}

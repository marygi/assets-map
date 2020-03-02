import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTruckNewComponent } from '../modal/modal-truck-new/modal-truck-new.component';


@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {
	}

	openNewTruckModal() {
		this.modalService.open(ModalTruckNewComponent);
	}
}

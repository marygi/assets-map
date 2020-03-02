import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TruckService } from '../../shared/service/truck.service';
import { Truck } from '../../shared/model/truck';

const GEO_COMMON_REGEXP = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/;

const LAT_REGEX = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,15}/g;
const LNG_REGEX = /^-?(([-+]?)([\d]{1,3})((\.)(\d+))?)/g;

@Component({
  selector: 'app-modal-truck-new',
  templateUrl: './modal-truck-new.component.html',
  styleUrls: ['./modal-truck-new.component.css']
})
export class ModalTruckNewComponent implements OnInit {
	truckForm: FormGroup;

	constructor(private fb: FormBuilder,
				public modal: NgbActiveModal,
				private truckService: TruckService) { }

	ngOnInit(): void {
		this.buildForm();
	}

	buildForm() {
		this.truckForm = this.fb.group({
			name: ['', [Validators.required]],
			lat: ['', [
				Validators.required,
				Validators.pattern(LAT_REGEX)
			]],
			lng: ['', [
				Validators.required,
				Validators.pattern(LNG_REGEX)
			]],
		});
	}

	onSubmit() {
		const truckValues = this.truckForm.value;
		const newTruckItem = new Truck(truckValues.name, truckValues.lat, truckValues.lng);

		this.truckService.addTruck(newTruckItem);
		this.truckForm.reset();
		this.modal.close();
	}

	get name() { return this.truckForm.get('name'); }

	get lat() { return this.truckForm.get('lat'); }

	get lng() { return this.truckForm.get('lng'); }

}

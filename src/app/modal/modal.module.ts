import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ModalTruckNewComponent } from './modal-truck-new/modal-truck-new.component';
import { ModalTruckDeleteComponent } from './modal-truck-delete/modal-truck-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [
		ModalTruckNewComponent,
		ModalTruckDeleteComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule,
		SharedModule,
	],
	exports: [
		ModalTruckNewComponent,
		ModalTruckDeleteComponent
	]
})
export class ModalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';

import { TruckComponent } from './truck.component';
import { TruckListComponent } from './truck-list/truck-list.component';
import { TruckMapComponent } from './truck-map/truck-map.component';

import { ModalTruckDeleteComponent } from '../modal/modal-truck-delete/modal-truck-delete.component';


@NgModule({
	declarations: [
		TruckListComponent,
		TruckMapComponent,
		TruckComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		NgbModule
	],
	exports: [TruckComponent],
	entryComponents: [
		ModalTruckDeleteComponent
	]
})
export class TruckModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckService } from './service/truck.service';


@NgModule({
	declarations: [],
	imports: [
		CommonModule
	],
	providers: [TruckService]
})
export class SharedModule { }

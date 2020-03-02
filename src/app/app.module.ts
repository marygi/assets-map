import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TruckModule } from './truck/truck.module';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from './modal/modal.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalTruckNewComponent } from './modal/modal-truck-new/modal-truck-new.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule,
		TruckModule,
		ModalModule,
		SharedModule,
	],
	entryComponents: [ModalTruckNewComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }

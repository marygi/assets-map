import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TruckService } from '../../shared/service/truck.service';
import { Truck } from '../../shared/model/truck';

/* UKRAINE COORDS */
const LAT = 48.383022;
const LNG = 31.1828699;

@Component({
	selector: 'app-truck-map',
	templateUrl: './truck-map.component.html',
	styleUrls: ['./truck-map.component.css']
})
export class TruckMapComponent implements OnInit, AfterViewInit, OnDestroy {
	markerList: Truck[] = [];
	mapMarkers  = [];
	subscription: Subscription;
	subscription2: Subscription;
	gmap: google.maps.Map;

	@ViewChild('mapContainer', {static: false}) mapRef: ElementRef;

	mapOptions: google.maps.MapOptions = {
		center: new google.maps.LatLng(LAT, LNG),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	constructor(private truckService: TruckService) { }

	ngOnInit(): void {
		this.subscription = this.truckService.trucksChanged
			.subscribe(
				(trucks: Truck[]) => {

					this.markerList = trucks;
					this.deleteMarkers();
					this.addMarkers();
				}
			);

		this.subscription2 = this.truckService.truckMarkerChanged
			.subscribe(
				(index: number) => {
					const truck = this.markerList[index];
					this.gmap.setCenter({ lat: parseFloat(truck.lat), lng: parseFloat(truck.lng)});
				}
			);
	}

	ngAfterViewInit() {
		this.gmap = new google.maps.Map(this.mapRef.nativeElement, this.mapOptions);
	}

	addMarkers() {
		this.markerList.forEach((item) => {

			const marker = new google.maps.Marker({
				map: this.gmap,
				title: item.name,
				position: {
					lat: parseFloat(item.lat),
					lng: parseFloat(item.lng)
				},
			});

			const infoWindow = new google.maps.InfoWindow({
				content: marker.getTitle()
			});

			marker.addListener('click', () => {
				infoWindow.open(marker.getMap(), marker);
			});

			marker.setMap(this.gmap);
			this.gmap.setCenter(marker.getPosition());
			this.mapMarkers.push(marker);

		});
	}

	deleteMarkers() {
		for (let i = 0; i < this.mapMarkers.length; i++) {
			this.mapMarkers[i].setMap(null);
		}
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}

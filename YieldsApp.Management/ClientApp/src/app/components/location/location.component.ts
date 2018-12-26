import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

declare const google: any;

@Component({
  selector: 'ya-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements AfterViewInit {


  @Input() coordinates: any[];
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  map: any;
  drawingManager: any;
  polygon: any;
  constructor() {

  }

  ngAfterViewInit() {
    this.drawPolygon();
  }

  drawPolygon() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    // Construct the polygon.
    if (this.coordinates.length > 0) {
      console.log("Construct the polygon.")
      this.polygon = new google.maps.Polygon({
        paths: this.coordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
      this.polygon.setMap(this.map);
    }


    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon']
      }
    });

    this.drawingManager.setMap(this.map);
    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event) => {
      if (event.type === google.maps.drawing.OverlayType.POLYGON) {
        if (this.polygon) {
          this.polygon.setMap(null);
        }
        this.polygon = event.overlay;

        const computeArea = google.maps.geometry.spherical.computeArea(this.polygon.getPath());
        const coordinates = event.overlay.getPath().getArray();
        this.onChange.emit({ coordinates: coordinates, area: computeArea })};
    });
  }


}

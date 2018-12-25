import { Component, AfterViewInit } from '@angular/core';

declare const google: any;
@Component({
  selector: 'ya-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements AfterViewInit {

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
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });

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
      // Polygon drawn
      if (event.type === google.maps.drawing.OverlayType.POLYGON) {
        if (this.polygon) {
          this.polygon.setMap(null);
        }
        this.polygon = event.overlay;

        var computeArea = google.maps.geometry.spherical.computeArea(this.polygon.getPath());
        console.log("computeArea", computeArea);
        //this is the coordinate, you can assign it to a variable or pass into another function.
        // alert(event.overlay.getPath().getArray());
      }
    });
  }

}

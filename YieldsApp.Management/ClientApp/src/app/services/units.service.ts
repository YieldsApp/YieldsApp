import { Injectable } from '@angular/core';
import { Measurement, Area } from 'maegor';


@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  private _userAreaUnit: string = Area.hectares;
  get userAreaUnit(): string {
    return this._userAreaUnit;
  }

  private _googleUnit: string = Area.squareMegameters;
  get googleUnit(): string {
    return this._googleUnit;
  }

  constructor() {
  }


  convertGoogleMapUnits(value: number) {
    let unit = new Measurement(value, this.googleUnit);
    return unit.convertedTo(this.userAreaUnit);
  }

}

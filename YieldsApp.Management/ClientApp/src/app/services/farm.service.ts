import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FarmModel } from '../models/farm-model';
import { Observable } from 'rxjs';
import { filter, map, mergeAll } from 'rxjs/operators';

import  _  from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FarmService  {
  url: string = 'assets/farms.json';
  data: FarmModel[];

  constructor(private http: HttpClient) {
  }

  getList(): Observable<FarmModel[]> {
    return this.http.get <FarmModel[]>(this.url);
  }

  getItem(farmId: string): Observable<FarmModel> {
    return this.getList().pipe(map(farms => _.filter(farms, farm => farm.farmId == farmId)), mergeAll()); 
  }

 

  post(item: any): Promise<any> {
    // this.data.items.push(item); // exist in component
    return new Promise((resolve) => {
      setTimeout(() => resolve(item), 250);
    });
  }

  put(item: any): Promise<any> {
    // this.data.items[this.findSelectedItemIndex(item)] = item; // exist in component
    return new Promise((resolve) => {
      setTimeout(() => resolve(item), 250);
    });
  }

  delete(item: any): Promise<any> {
    // this.data.items.splice(this.findSelectedItemIndex(item), 1); // exist in component
    return new Promise((resolve) => {
      setTimeout(() => resolve(item), 250);
    });
  }

  getOptions(url: string, parentId: any): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then((response: any) => {
        const result = response.filter((value: any) => {
          return value['parentId'] === parentId;
        });
        return new Promise((resolve) => {
          setTimeout(() => resolve(result), 1000);
        });
      });
    // .catch(this.handleError);
  }

  
}

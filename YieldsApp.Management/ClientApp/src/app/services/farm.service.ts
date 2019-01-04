import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FarmModel } from '../models/farm-model';
import { Observable } from 'rxjs';
import { filter, map, mergeAll } from 'rxjs/operators';

import _  from 'lodash';
import { FieldModel } from '../models/FieldModel';

@Injectable({
  providedIn: 'root'
})
export class FarmService  {
  url: string = this.baseUrl + 'api/farm';
  data: FarmModel[];

  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
  }

  getList(): Observable<FarmModel[]> {
    return this.http.get <FarmModel[]>(this.url);
  }

  getItem(farmId: string): Observable<FarmModel> {
    const getUrl = `${this.url}/${farmId}`;
    return this.http.get<FarmModel>(getUrl);
  }

  post(item: any): Promise<FarmModel> {
    // this.data.items.push(item); // exist in component
    return this.http.post<FarmModel>(this.url, item).toPromise();
  }

  put(item: any): Promise<any> {
    return this.http.put<FarmModel>(this.url,  item ).toPromise();
  }

  delete(farmId: string): Promise<boolean> {
    const deleteUrl = `${this.url}/${farmId}`;
    return this.http.delete<boolean>(deleteUrl).toPromise();

  }

  addField(farmId: string, field: FieldModel): Promise<FarmModel> {
    const postUrl = `${this.url}/${farmId}/AddField`;
    return this.http.post<FarmModel>(postUrl, field).toPromise();
  }

  updateField(farmId: string, field: FieldModel): Promise<FarmModel> {
    const postUrl = `${this.url}/${farmId}/UpdateField`;
    return this.http.post<FarmModel>(postUrl, field).toPromise();
  }
  deleteField(farmId: string, fieldId: string): Promise<boolean> {
    const deleteUrl = `${this.url}/${farmId}/DeleteField/${fieldId}`;
    return this.http.delete<boolean>(deleteUrl).toPromise();
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

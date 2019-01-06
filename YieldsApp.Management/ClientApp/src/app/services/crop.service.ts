import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CropModel } from '../models/crop-model';
import { Observable } from 'rxjs';

import _ from 'lodash';
import { VarietyModel } from '../models/variety-model';

@Injectable({
  providedIn: 'root'
})
export class CropService {
  url: string = this.baseUrl + 'api/crop';
  data: CropModel[];

  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
  }

  getList(): Observable<CropModel[]> {
    return this.http.get<CropModel[]>(this.url);
  }

  getItem(cropId: string): Observable<CropModel> {
    const getUrl = `${this.url}/${cropId}`;
    return this.http.get<CropModel>(getUrl);
  }

  post(item: any): Promise<CropModel> {
    // this.data.items.push(item); // exist in component
    return this.http.post<CropModel>(this.url, item).toPromise();
  }

  put(item: any): Promise<any> {
    return this.http.put<CropModel>(this.url, item).toPromise();
  }

  delete(cropId: string): Promise<boolean> {
    const deleteUrl = `${this.url}/${cropId}`;
    return this.http.delete<boolean>(deleteUrl).toPromise();
  }

  addVariety(cropId: string, variety: VarietyModel): Promise<CropModel> {
    const postUrl = `${this.url}/${cropId}/AddVariety`;
    return this.http.post<CropModel>(postUrl, variety).toPromise();
  }

  updateVariety(cropId: string, variety: VarietyModel): Promise<CropModel> {
    const postUrl = `${this.url}/${cropId}/UpdateVariety`;
    return this.http.post<CropModel>(postUrl, variety).toPromise();
  }
  deleteVariety(cropId: string, varietyId: string): Promise<boolean> {
    const deleteUrl = `${this.url}/${cropId}/DeleteVariety/${varietyId}`;
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

import { Injectable, Injector } from '@angular/core';
import { CropModel } from '../models/crop-model';

import { VarietyModel } from '../models/variety-model';
import { DataApiService } from '../core/services/data-api.service';

@Injectable({
  providedIn: 'root'
})
export class CropService extends  DataApiService<CropModel> {

  constructor(injector: Injector) {
    super(injector, "crop");
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

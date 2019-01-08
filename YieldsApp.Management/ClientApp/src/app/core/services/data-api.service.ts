import { Injectable, Inject, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService<T> {
  data: T[];
  protected http: HttpClient;
  protected baseUrl: string;
  protected url: string;

  constructor(injector: Injector,apiUrl: string ) {
    this.http = injector.get(HttpClient);
    this.baseUrl = injector.get('BASE_URL');
    this.url = this.baseUrl + "/api/" + apiUrl;
  }

  getList(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  getItem(entityId: string): Observable<T> {
    const getUrl = `${this.url}/${entityId}`;
    return this.http.get<T>(getUrl);
  }

  post(item: any): Promise<T> {
    // this.data.items.push(item); // exist in component
    return this.http.post<T>(this.url, item).toPromise();
  }

  put(item: any): Promise<any> {
    return this.http.put<T>(this.url, item).toPromise();
  }

  delete(entityId: string): Promise<boolean> {
    const deleteUrl = `${this.url}/${entityId}`;
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

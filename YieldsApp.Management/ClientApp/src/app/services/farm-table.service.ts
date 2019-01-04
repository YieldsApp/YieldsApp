import { Injectable } from '@angular/core';
import { DataSource, RequestMetadata, PagedResult } from '../components/ng-crud-table/ng-crud-table';
import { DataSort, DataFilter } from '../components/ng-crud-table/ng-data-table/base';
import { HttpClient } from '@angular/common/http';
import { FarmService } from './farm.service';

@Injectable({
  providedIn: 'root'
})
export class FarmTableService implements DataSource {

  primaryKeys: string[] = ['farmId'];
  private dataFilter: DataFilter;
  private dataSort: DataSort;

  constructor(private http: HttpClient, private farmService: FarmService) {
    this.dataFilter = new DataFilter();
    this.dataSort = new DataSort();
  }

  getItems(requestMeta: RequestMetadata): Promise<PagedResult> {
    const page = requestMeta.pageMeta.currentPage;
    this.dataFilter.filters = requestMeta.filters;
    this.dataFilter.globalFilterValue = requestMeta.globalFilterValue;
    this.dataSort.sortMeta = requestMeta.sortMeta;
    const perPage = requestMeta.pageMeta.perPage;

    return  this.farmService.getList()
      .toPromise()
      .then((res)=> res as any)
      .then(function (res) {
        const rows: any[] = res || [];

        const filteredData = this.dataFilter.filterRows(rows);
        const sortedData = this.dataSort.sortRows(filteredData);
        const pageData = this.page(sortedData, page, perPage);
        const totalCount = sortedData.length;
        const pageCount = pageData.length;
        const result = <PagedResult>{
          'items': pageData,
          '_meta': {
            'totalCount': totalCount,
            'pageCount': pageCount,
            'currentPage': page,
            'perPage': perPage
          }
        };
        return result;
      }.bind(this))
      .catch(this.handleError);
  }

  getItem(row: any): Promise<any> {
    const filters = {};
    for (const key of this.primaryKeys) {
      filters[key] = { value: row[key] };
    }
    const requestMeta = <RequestMetadata>{
      pageMeta: { currentPage: 1 },
      filters: filters,
    };
    return this.getItems(requestMeta)
      .then(data => data.items[0]);
  }

  page(data: any, page: any, perPage: number): Array<any> {
    const start = (page - 1) * perPage;
    const end = perPage > -1 ? (start + perPage) : data.length;
    return data.slice(start, end);
  }

  post(item: any): Promise<any> {
    return this.farmService.post(item);
  }

  put(item: any): Promise<any> {
    return this.farmService.put(item);
  }

  delete(item: any): Promise<any> {
    return this.farmService.delete(item.farmId);
  }

  deleteField(farmId: string,fieldId:string): Promise<any> {
    return this.farmService.deleteField(farmId, fieldId);
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
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return Promise.reject(errorMessage);
  }
}

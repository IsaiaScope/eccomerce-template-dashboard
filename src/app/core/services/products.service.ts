import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  someData() {
    return this.http.get(`${env.dashboardApi}/somedata`);
  }
  someData2() {
    return this.http.get(`${env.dashboardApi}/somedata2`);
  }
}

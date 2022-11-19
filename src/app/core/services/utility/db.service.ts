import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ENDPOINTS from 'src/app/shared/constants/endpoints';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private http: HttpClient) {}

  getClusterInfo() {
    return this.http.get(`${env.baseUrl}/${ENDPOINTS.db.clusterInfo()}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  getPerson(name): Observable<any> {
    return this.http.get<any>(`${this.api}/people/?search=${name}&format=json`);
  }
}

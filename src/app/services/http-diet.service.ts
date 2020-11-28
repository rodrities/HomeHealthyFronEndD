import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Diet } from './../models/diet';
import {Observable} from 'rxjs';
import {Customer} from '../models/customer';
import {Session} from '../models/session';
import {catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpDietService {


  basePath = 'http://localhost:8080/api/diets';
  constructor(private http: HttpClient) { }
  // Http Default Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  getAllProducts(id){
    return this.http.get<Diet[]>(`${this.basePath}`);
  }

  getDiet(id): Observable<Diet>{
    return this.http.get<Diet>(`${this.basePath}/${id}`);
  }
}


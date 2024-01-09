import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  
  export class ApiService {
    private URL = 'http://103.13.31.37:17444/api';
  
    constructor(private http: HttpClient) { }
  
    getProfile(): Observable<any> {
      const url = `${this.URL}/my/profile`;
      return this.http.get(url);
    }
  
    getTasks(): Observable<any> {
      const url = `${this.URL}/tasks`;
      return this.http.get(url);
    }
  
    getTaskById(id: number): Observable<any> {
      const url = `${this.URL}/tasks/${id}`;
      return this.http.get(url);
    }
  }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

   private baseUrl = 'http://localhost:8080/api/employees';

    private contactUrl = 'http://localhost:8080/api/contact/submit';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }


  // submitContact(data: any){
  //   return this.http.post(this.contactUrl, data);
  // }

  submitContact(data: any): Observable<string> {
    return this.http.post(
      `${environment.apiUrl}`,
      data,
      { responseType: 'text' } // 🔑 MUST BE HERE
    );
  }
}

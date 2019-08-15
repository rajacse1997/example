import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams,HttpResponse} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {


  constructor(private http: HttpClient) { }  
      getBaseUrl() {  
      return 'https://jsonplaceholder.typicode.com/todos/1';
  
  }
  getTestMessage(): Observable<string> {  
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain'});  
    return this.http.get(this.getBaseUrl(),{responseType: 'text', headers});  
  } 

}

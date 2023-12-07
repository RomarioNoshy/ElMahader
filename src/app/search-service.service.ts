import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) { }

  search(searchTerm: string , page: number): Observable<any> {
  
    return this.http.get(`http://192.168.1.207:8080/search-par-police-report/${searchTerm}/${page}`)
      // .pipe(
      //   debounceTime(1000),
      //   distinctUntilChanged(),
      //   switchMap(results => of(results))
      // );
      
  }
}

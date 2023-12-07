import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class GetAPIService {


  constructor(private Http: HttpClient) { }

  

  getTable(Tabledata: any): Observable<any> {
    return this.Http.get('http://localhost:3000/bc-types', Tabledata)
  }

  getEntity(entityData: any): Observable<any> {
    return this.Http.get('http://localhost:3000/entity-by-parent', entityData)
  }

  getJudicial(judicialData: any): Observable<any> {
    return this.Http.get('http://localhost:3000/judicial-entity', judicialData)
  }

  getInputTypes(inputData: any): Observable<any> {
    return this.Http.get('http://localhost:3000/input-types', inputData)
  }

  getCriminal(criminalData: any): Observable<any> {
    return this.Http.get('http://localhost:3000/criminal-type', criminalData)
  }
  // =========================
  sendData(formData: object, arrayData: any): Observable<any> {
    return this.Http.post('http://192.168.1.207:8080/submit-police-record', formData)
  }

  getPoliceReports(pNum: number, policeReports: any): Observable<any> {
    return this.Http.get(`http://192.168.1.207:8080/get-par-police-report-page/${pNum}`, policeReports)
  }

  searchReports(query: string, page: number): Observable<any> {
    return this.Http.get(`http://192.168.1.207:8080/search-par-police-report/${query}/${page}`)
  }

  //========================El tacamole =============================

  baseServer: any = 'http://10.21.10.206:7101/statapis'

  getresumptions(): Observable<any> {
    return this.Http.get(`${this.baseServer}/lookup/resumptions`)
  }

  getparens(estanaf: number): Observable<any> {
    return this.Http.get(`${this.baseServer}/lookup/parens/${estanaf}`)
  }

  getpartials(kolia: number): Observable<any> {
    return this.Http.get(`${this.baseServer}/lookup/partials/${kolia}`)
  }

  getCircls(kolia: number, gozaia: number): Observable<any> {
    return this.Http.get(`${this.baseServer}/lookup/entity/${kolia}/${gozaia}`)
  }

  getCourtCirclesDates(circle: number): Observable<any> {
    return this.Http.get(`${this.baseServer}/lookup/CourtCirclesDatesHearing/${circle}`)
  }

  getStatisticss(estanaf: number, kolia: number, gozaia: number, circle: number): Observable<any> {
    return this.Http.get(`${this.baseServer}/statisticss/statistics-details/${estanaf}/${kolia}/${gozaia}/${circle}/1/null`)
  }


}
//http://10.21.10.206:7101/statapis/statisticss/statistics-details/55/108/59/91/1/null


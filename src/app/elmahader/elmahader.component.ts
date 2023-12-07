import { Component, OnInit, ViewChild } from '@angular/core';
import { GetAPIService } from '../get-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-elmahader',
  templateUrl: './elmahader.component.html',
  styleUrls: ['./elmahader.component.scss']
})
export class ElmahaderComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  searchTerm: any = "";
  query: string = '';
  searchResults: any[] = [];
  PoliceReports: any[] = [];
  displayedColumns: string[] = [];
  dataSource: any;
  pNum: number = 0;
  isLoding: boolean = false;
  previsLoding: boolean = true;
  // --------------------------------------
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize: number = 20;
  totalItemsCount: number = 100;
  pageNumber: any;
  totalPages: number = 0;
  last: boolean = false;
 
  constructor(private _GetAPIService: GetAPIService) {

  }


  getPoliceReports() {
    this._GetAPIService.getPoliceReports(this.pNum, this.PoliceReports).subscribe((results) => {
      this.PoliceReports = results.data.content;
      this.previsLoding = true;
      
    })
  }

  search(query: string) {
    if (query == '') {
      this._GetAPIService.getPoliceReports(0, this.PoliceReports).subscribe((results) => {
        this.PoliceReports = results.data.content
      });
    }
    this.searchOperation(query, 0);



  }

  searchOperation(query: string, pageNo: number) {
    this._GetAPIService.searchReports(query, pageNo).subscribe((results) => {
      this.PoliceReports = results.data.content
      this.pageNumber = results.data.pageNo;
      this.totalPages = results.data.totalPages;
      this.last = results.data.last;

      console.log(results);
      console.log(results.data.pageNo);

    });
  }


  getPage(type: string) {
    if (type == 'next' && !this.last) {
      this.pageNumber++;
      this.searchOperation(this.query, this.pageNumber)
    } else if (type == 'prev' && this.pageNumber > 0) {
      this.pageNumber--;
      this.searchOperation(this.query, this.pageNumber)
    } else if (this.pageNumber <= 0) {
      alert('الصفحة الأولي');
    }
  }


  ngOnInit(): void {
    this.displayedColumns = ['bcNumber', 'entityName', 'name', 'creator', 'submittedDate', 'originEntityName'];
   
  }

}

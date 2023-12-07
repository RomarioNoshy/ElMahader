import { Component } from '@angular/core';
import { GetAPIService } from '../get-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-takamol',
  templateUrl: './takamol.component.html',
  styleUrls: ['./takamol.component.scss']
})


export class TakamolComponent {


  resumptionss: any[] = [];
  parensData: any[] = [];
  partialsData: any[] = [];
  CirclesData: any[] = [];
  courtCircleDates: any[] = [];
  Statisticss: any[] = [];
  StatisticssMain: any[] = [];
  displayedColumns: string[] = [];
  estanaf: number = 0;
  kolia: number = 0;
  gozaia: number = 0;
  circle: number = 0;
  isLoding: boolean = false;

  elTakamolForm: FormGroup = new FormGroup({
    'Estanaf': new FormControl(null, [Validators.required]),
    'Kolia': new FormControl(null, [Validators.required]),
    'gozaia': new FormControl(null, [Validators.required]),
    'circle': new FormControl(null, [Validators.required]),
    'CourtCircles': new FormControl(null, [Validators.required]),

  })


  constructor(private _GetAPIService: GetAPIService) { }



  resumptions() {
    this._GetAPIService.getresumptions().subscribe((res) => {
      this.resumptionss = res;

    })
  }

  parens() {
    this.resetThreeFields();
    this._GetAPIService.getparens(this.estanaf).subscribe((response) => {
      this.parensData = response;
      // console.log(response);

    })
  }

  partials() {
    this.resetTowFields();
    this._GetAPIService.getpartials(this.kolia).subscribe((response) => {
      this.partialsData = response;
      // console.log(response);
      if (this.partialsData.length === 0) {
        this.elTakamolForm.controls['gozaia'].setValue(0);
        this.elTakamolForm.controls['circle'].setValue(0);
        this.elTakamolForm.controls['CourtCircles'].setValue(0);

      }

    })
  }

  Circles() {
    this.resetTowFields();
    this.CirclesData = [];
    this._GetAPIService.getCircls(this.kolia, this.gozaia).subscribe((responseee) => {
      this.CirclesData = responseee;
      // console.log(responseee);
      if (this.CirclesData.length === 0) {
        this.elTakamolForm.controls['circle'].setValue(0);
        this.elTakamolForm.controls['CourtCircles'].setValue(0);

      }
    })
  }

  CourtCirclesDates() {
    this.courtCircleDates = [];
    this.elTakamolForm.controls['CourtCircles'].reset();
    this._GetAPIService.getCourtCirclesDates(this.circle).subscribe((response) => {
      this.courtCircleDates = response;
      if (this.courtCircleDates.length === 0) {
        this.elTakamolForm.controls['CourtCircles'].setValue(0);

      }
    })
  }

  onAreaListControlChanged(numOfResumptionssId: number) {
    // console.log(numOfResumptionssId);
    this.estanaf = numOfResumptionssId
  }

  onAreaListControlChanged2(numOfResumptionssId: number) {
    this.kolia = numOfResumptionssId
    // console.log(numOfResumptionssId);
  }

  onAreaListControlChanged3(numOfResumptionssId: number) {
    this.gozaia = numOfResumptionssId
    // console.log(numOfResumptionssId);
  }

  onAreaListControlChanged4(numOfResumptionssId: number) {
    this.circle = numOfResumptionssId
    // console.log(numOfResumptionssId);
  }

  showResults() {
    
    console.log(this.elTakamolForm.value);
  }


  resetThreeFields() {
    this.elTakamolForm.controls['gozaia'].reset();
    this.elTakamolForm.controls['circle'].reset();
    this.elTakamolForm.controls['CourtCircles'].reset();

    this.partialsData = [];
    this.CirclesData = [];
    this.courtCircleDates = [];

  }

  resetTowFields() {
    this.elTakamolForm.controls['circle'].reset();
    this.elTakamolForm.controls['CourtCircles'].reset();
    this.CirclesData = [];
    this.courtCircleDates = [];
  }

  //===========================Show Data================================

  statisticssData() {
    this.isLoding = true;
    this._GetAPIService.getStatisticss(this.estanaf, this.kolia, this.gozaia, this.circle).subscribe((response) => {
      this.Statisticss = response;
      this.StatisticssMain = response;
      this.isLoding = false;
      console.log(response);
    })
  }

  allData() {
    this.Statisticss = this.StatisticssMain;
  }

  filterData(char: string) {
    this.Statisticss = this.StatisticssMain.filter(element => (element.sentToCourt == char))
  }

  ngOnInit(): void {
    this.resumptions();
    this.displayedColumns = ['caseNumber', 'dayera', 'hearingDateTrunc', 'sentToCourt'];
  }
}

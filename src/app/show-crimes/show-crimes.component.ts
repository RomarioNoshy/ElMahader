import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetAPIService } from '../get-api.service';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-show-crimes',
  templateUrl: './show-crimes.component.html',
  styleUrls: ['./show-crimes.component.scss']
})
export class ShowCrimesComponent implements OnInit {

  criminal: any[] = [];
  listChecked: any[] = [];
  judicialMinutes: FormGroup = new FormGroup({});

  text: string = '';
  @Output() Data = new EventEmitter<any>();
  @Input() DataFromParint: any;
  @Input() FormFromParint: any;
  private _FormBuilder: any;
  constructor(private _GetAPIService: GetAPIService, _FormBuilder: FormBuilder) {

  }

  getCriminalData() {
    this._GetAPIService.getCriminal(this.getCriminalData).subscribe((criminalData) => {
      this.criminal = criminalData;

    });
  }

  moveItem(item: any, source: any[], target: any[]): void {
    const index = source.indexOf(item);
    if (index !== -1) {
      source.splice(index, 1);
      target.unshift(item);

    }
  }

  sendlastChecked() {
    this.Data.emit(this.listChecked)

  }

  ngOnInit(): void {
    this.getCriminalData();

  }

}

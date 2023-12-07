import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { GetAPIService } from '../get-api.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-add-mahdar',
  templateUrl: './add-mahdar.component.html',
  styleUrls: ['./add-mahdar.component.scss']
})
export class AddMahdarComponent implements OnInit {

  startYear: number = 2000;
  endYear: number = new Date().getFullYear();
  years: number[] = [];
  Tables: any[] = [];
  Entity: any[] = [];
  judicial: any[] = [];
  inputDataTyps: any[] = [];
  criminal: any[] = [];
  listChecked: any[] = [];
  selectedDate: object | undefined;
  myForm: FormGroup;
  arabicText = '';
  isLoding: boolean = false;
  jobs: any[] = [
    {
      "name": "امين شرطة",
      "id": 1
    },
    {
      "name": "ملازم",
      "id": 2
    },
    {
      "name": "ملازم اول",
      "id": 3
    },
    {
      "name": "نقيب",
      "id": 4
    },
    {
      "name": "رائد",
      "id": 5
    },
    {
      "name": "مقدم",
      "id": 6
    },
    {
      "name": "عقيد",
      "id": 7
    },
    {
      "name": "عميد",
      "id": 8
    },
  ]


  judicialMinutes: FormGroup = new FormGroup({
    'policeNumber': new FormControl(null, [Validators.required]),
    'parYear': new FormControl(null),
    'check': new FormControl(null),
    'bcType': new FormControl(null),
    'parentEntity': new FormControl(null),
    'judicialEntity': new FormControl(null),
    'inputType': new FormControl(null),
    'creator': new FormControl(null),
    'creatorJob': new FormControl(null),
    'initialTime': new FormControl(null),
    'initialDate': new FormControl(null, [Validators.required]),
    'receivedDate': new FormControl(null, [Validators.required]),
    'incidentDate': new FormControl(null,),
    charges: new FormArray([

    ]),
    'parDetails': new FormControl(null),
  })

  // ======= validtion Date Record ========
  minDate = new Date(1900, 0, 0);
  maxDate = new Date();

  constructor(private _GetAPIService: GetAPIService, private formBuilder: FormBuilder, private _Router: Router) {
    this.myForm = this.formBuilder.group({

    });

  }

  pushArrayToFormArray() {
    const myArray = this.judicialMinutes.get('charges') as FormArray;
    this.listChecked.forEach((element) => {
      myArray.push(this.formBuilder.control(element.id));
    });
  }

  getYears() {

    for (let year = this.startYear; year <= this.endYear; year++) {
      this.years.push(year);
    }


  }

  error: string = '';
  submitForm(judicialMinutes: FormGroup, _myForm: FormGroup) {
    this.isLoding = true;
    const formData = this.myForm.value;
    this._GetAPIService.sendData(judicialMinutes.value, formData).subscribe({
      next: (response) => {
        if (response.responseCode === 200) {
          this.isLoding = false;
          alert("تم الحفظ بنجاح")
          this.judicialMinutes.reset();
          this._Router.navigate(['/elMahader'])
        }
        else {
          this.error = response.responseMessage;
          console.log(response);

        }
      }
    })
  }


  // =========================

  getTableData() {
    this._GetAPIService.getTable(this.getTableData).subscribe((Tabledata) => {
      this.Tables = Tabledata;
    })
  }

  getEntityData() {
    this._GetAPIService.getEntity(this.getEntityData).subscribe((entityData) => {
      this.Entity = entityData;
    })
  }

  getJudicialData() {
    this._GetAPIService.getJudicial(this.getJudicialData).subscribe((judicialData) => {
      this.judicial = judicialData;

    })
  }

  getInputTypesData() {
    this._GetAPIService.getInputTypes(this.getInputTypesData).subscribe((inputData) => {
      this.inputDataTyps = inputData;
    })
  }

  getCriminalData() {
    this._GetAPIService.getCriminal(this.getCriminalData).subscribe((criminalData) => {
      this.criminal = criminalData;

    });
  }

  selectCriminal(listChecked: any[], value: any): void {
    if (!listChecked.includes(value)) {
      this.listChecked.push(value)
    }
  }


  moveItem(item: any, source: any[], target: any[]): void {
    const index = source.indexOf(item);
    const myArray = this.judicialMinutes.get('charges') as FormArray;

    if (index !== -1) {
      this.judicialMinutes.value.charges.splice(index, 1)
      source.splice(index, 1);
      target.unshift(item);
    }
  }
  removeItem(item: any): void {
    const index = this.judicialMinutes.value.charges.indexOf(item);
    if (index !== -1) {
      this.judicialMinutes.value.charges.splice(index, 1);
    }
  }


  //====== Editor ==================
  textArabic: string = '';
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'أكتب هنا .....',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
  }


  ngOnInit(): void {
    this.getTableData()
    this.getEntityData()
    this.getJudicialData()
    this.getInputTypesData()
    this.getCriminalData()
    this.getYears()
  
  }

}


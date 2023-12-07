import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';



const materials = [
  MatInputModule,
  MatListModule,
  DragDropModule,
  MatDatepickerModule,
  MatSelectModule,
  MatCardModule,
  MatIconModule,
  MatNativeDateModule,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
]
@NgModule({

  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }

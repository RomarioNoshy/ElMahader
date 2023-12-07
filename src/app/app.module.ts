import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMahdarComponent } from './add-mahdar/add-mahdar.component';
import { ShowCrimesComponent } from './show-crimes/show-crimes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { ElmahaderComponent } from './elmahader/elmahader.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConvertToArabicPipe } from './convert-to-arabic.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TakamolComponent } from './takamol/takamol.component';
import { MatSelectModule } from '@angular/material/select';
import { MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    AddMahdarComponent,
    ShowCrimesComponent,
    NotFoundComponent,
    ElmahaderComponent,
    ConvertToArabicPipe,
    LoginComponent,
    NavBarComponent,
    TakamolComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSidenavModule

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ar' },
    {
      provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          dateInput: 'LL',
        },
        display: {
          dateInput: 'LL',
          monthYearLabel: 'MMMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      },
    },
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

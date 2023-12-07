import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMahdarComponent } from './add-mahdar/add-mahdar.component';
import { ShowCrimesComponent } from './show-crimes/show-crimes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ElmahaderComponent } from './elmahader/elmahader.component';
import { LoginComponent } from './login/login.component';
import { TakamolComponent } from './takamol/takamol.component';


const routes: Routes = [
  {path: "", component:ElmahaderComponent},
  {path: "add_mahdar", component:AddMahdarComponent},
  {path: "elMahader", component:ElmahaderComponent},
  {path: "takamol", component:TakamolComponent},
  {path: "login", component:LoginComponent},
  {path: "**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

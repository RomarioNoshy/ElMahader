import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private _AuthService:AuthService , private _Router:Router){}

  loginForm: FormGroup = new FormGroup({
    'userName': new FormControl(null, [Validators.required]),
    'userPassword': new FormControl(null , [Validators.required]),
  })


  // submitLoginForm(loginForm:FormGroup){
  //   this._AuthService.login(loginForm.value).subscripe({
  //     next:(response)=>{
  //       if (response.message === 'success')
  //       {
  //         this._Router.navigate(['/elMahader'])
  //       }
  //       else
  //       {
  //         alert("تحقق من كلمة السر")
  //       }
  //     }
  //   })
  // }

}

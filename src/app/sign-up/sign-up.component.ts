import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerationForm: FormGroup;
  signupData: any=[];

  constructor(private fb:FormBuilder, private service:ApiService, public route:Router,private http:HttpClient) { }

  ngOnInit() {
    this.registerationForm = this.fb.group({
      'firstName'       : ['',Validators.compose([Validators.required])],
      'lastName'        : ['',Validators.compose([Validators.required])],
      'dateOfBirth'     : ['',Validators.compose([Validators.required])],
      'phoneNumber'     : ['',Validators.compose([Validators.required, 
                              Validators.maxLength(10)])],
      'email'           : ['',Validators.compose([Validators.required])],
      'password'        : ['',Validators.compose([Validators.required])],
      'confirmPassword' : ['',Validators.compose([Validators.required])],
      'userName'        : ['',Validators.compose([Validators.required])],

    },{validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg:FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notmatched:true}
  }
 //_______________________________________
  //Geter Methods for all form controls
 //_______________________________________ 
 
  get firstName(){
    return this.registerationForm.get('firstName') as FormControl;
  }

  get lastName(){
    return this.registerationForm.get('lastName') as FormControl;
  }

  get dateOfBirth(){
    return this.registerationForm.get('dateOfBirth') as FormControl;
  }

  get phoneNumber(){
    return this.registerationForm.get('phoneNumber') as FormControl;
  }

  get email(){
    return this.registerationForm.get('email') as FormControl;
  }

  get password(){
    return this.registerationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }

  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  

  signupFunc(){
    var apireq = {
      "email":this.registerationForm.value.email,
      "first_name":this.registerationForm.value.firstName,
      "password":this.registerationForm.value.password,
      "confirm_password":this.registerationForm.value.confirmPassword,
      "last_name": this.registerationForm.value.lastName,
      "phone": this.registerationForm.value.phoneNumber,
      "dateofbirth":this.registerationForm.value.dateOfBirth,
      'username':this.registerationForm.value.userName,
    }
    
    this.service.postApi('auth/register',apireq,1).subscribe(res=>{
      if(res['status']==200){
        this.route.navigate(['/sign-in'])
        
      }
    })
  }

}

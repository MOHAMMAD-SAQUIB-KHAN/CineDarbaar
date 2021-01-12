import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  data: any;
  newRequest: any;

  constructor(private router: Router, private fb: FormBuilder, public service: ApiService) { }

  ngOnInit() {
    localStorage.clear();
    this.loginForm = this.fb.group({
      "userId": ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      "password": ['', Validators.compose([Validators.required])],
    })
    let token = JSON.parse(localStorage.getItem('token'));

  }

  //#############Login Api#################//
  login() {
    var apireq = {
      "username": this.loginForm.value.userId,
      "password": this.loginForm.value.password
    }
    console.log("fdghdfghdfg",apireq);
    this.service.postApi('auth/login', apireq, 0).subscribe(res => {
      console.log("fdghdfghdfg",res);
      if (res['status'] == 200) {
        this.data = res.body;
        console.log(this.data);
        this.router.navigate(['/home'])
      }
    })
  }

}

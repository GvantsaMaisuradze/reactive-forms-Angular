import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gmail-registration',
  templateUrl: './gmail-registration.component.html',
  styleUrls: ['./gmail-registration.component.css']
})
export class GmailRegistrationComponent implements OnInit {
  userRegistration!:FormGroup;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  hide = true;
  constructor() { }

  ngOnInit(): void {
    this.createReactiveForm();
  }
  createReactiveForm(){
    this.userRegistration = new FormGroup({
      "name":new FormControl(null,Validators.required),
      "surname":new FormControl(null,Validators.required),
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "password":new FormControl(null,Validators.required),
      "confirmPassword":new FormControl(null,Validators.required)
    })
  }


  onFormSumit(){
    console.log(this.userRegistration.value);
    this.userRegistration.reset();
  }

}

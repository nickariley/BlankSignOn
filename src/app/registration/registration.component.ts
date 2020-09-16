import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formSubmit: FormGroup;

  get inputPasswordInvalid(): boolean {
    return !this.formSubmit.controls.inputPassword.valid &&
      this.formSubmit.controls.inputPassword.touched;
  }

  get confirmPasswordInvalid(): boolean {
    return !this.formSubmit.controls.confirmPassword.valid &&
      this.formSubmit.controls.confirmPassword.touched;
  }

  constructor(private formBuilder: FormBuilder) {
    this.formSubmit = this.formBuilder.group({
      inputEmail: ['', Validators.email],
      inputPassword: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(4)])],
      confirmPassword: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(4)])],
    });
   }

  ngOnInit(): void {
  }
  submit(): void {
    console.log(this.formSubmit.value);
  }

}

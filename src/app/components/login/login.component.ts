import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  form: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.form = this.fb.group({
      userLogin: ['pruebaTecnica', Validators.required],
      password: ['P@ssw0rd', Validators.required],
      connectionName: ['DataPower', Validators.required]
    })
  }

  ngOnInit(): void {}

  login(){
    this.loginService.login(this.form.value).subscribe((data) => {
      console.log(data);
    })
  }

}

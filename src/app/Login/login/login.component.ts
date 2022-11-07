import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'app/model/login.model';
import { ApifilmService } from 'app/Services/apifilm.service';
import { LoginservService } from 'app/Services/loginserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  pass ='';
  mail ='';
  isConnected!: boolean;
  logs: LoginModel = {password:'',email:''};
  constructor(private serv: LoginservService, private builder: FormBuilder,
    private router: Router) {

}

  ngOnInit() {
    if ( localStorage.getItem('token') != null )
    { this.isConnected = true; }
    else {this.isConnected = false;}

this.serv.connected$.subscribe( data => this.isConnected = data );

  }

  login(email: string, password: string)
  {
    this.logs.email = email;
    this.logs.password = password;
    this.serv.login(this.logs);
    this.router.navigate(['accueil']);
    this.serv.connected$.subscribe( data => this.isConnected = data );
  }
}

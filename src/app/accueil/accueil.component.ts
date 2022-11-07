import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'app/Model/film.model';
import { ApifilmService } from 'app/Services/apifilm.service';
import { LoginservService } from 'app/Services/loginserv.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html'
})
export class AccueilComponent implements OnInit {

  films?: Film[];
  isConnected = false;
    constructor(private serv: ApifilmService,private router: Router,
       private login: LoginservService)
       {

    this.serv.getFilms().subscribe(f => this.films = f);
    }

    ngOnInit(): void {
  this.isConnected = this.login.isConnected;
  this.getFilms();
  this.login.connected$.subscribe( f => this.isConnected = f );
    }

  getFilms(): void {
    this.serv.getFilms().subscribe( f => this.films = f);
  }

  detail(id: number): void
  {
    this.router.navigate(['detail',id]);
  }
  logout()
{
  this.login.logout();
  this.isConnected = false;
  this.login.connected$.subscribe( f => this.isConnected = f );
  this.router.navigate(['accueil']);
}
redirectLog()
{
  this.router.navigate(['login']);
}


}

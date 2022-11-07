import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../Model/film.model';
import { Person } from '../Model/person.model';
import { Actor } from '../Model/actor.model';
import { CommentModel } from 'app/Model/comment.model';
import { UserModel } from 'app/Model/user.model';
import { NewFilm } from 'app/Model/addfilm.model';
import { NewPerson } from 'app/Model/newperson.model';
import { FilmModif } from 'app/Model/filmmodif.model';


@Injectable({
  providedIn: 'root'
})
export class ApifilmService {

  private url = 'http://localhost:53448/api/';
  constructor( private client: HttpClient ) { }


  getFilms(): Observable<Film[]>{
    return this.client.get<Film[]>(this.url+'Movie');
  }

  getFilm(id: number): Observable<Film>{
    const header: HttpHeaders = new HttpHeaders({authorization : 'Bearer ' + localStorage.getItem('token')});
    return this.client.get<Film>('http://localhost:53448/api/Movie/'+id, {headers: header});
  }


  createFilm(film: NewFilm): Observable<NewFilm> {
    const header: HttpHeaders = new HttpHeaders({authorization : 'Bearer ' + localStorage.getItem('token')});
    return this.client.post<NewFilm>('http://localhost:53448/api/Movie',film, {headers: header});
  }

  getPersons(): Observable<Person[]>{
 return this.client.get<Person[]>(this.url+'Person');
  }

  getPerson(id: number): Observable<Person>{
    const header: HttpHeaders = new HttpHeaders({authorization : 'Bearer ' + localStorage.getItem('token')});
    return this.client.get<Person>(this.url+'Person/'+id,{headers: header});
     }

  addPerson(p: NewPerson):  Observable<NewPerson>{
    const header: HttpHeaders = new HttpHeaders({authorization : 'Bearer ' + localStorage.getItem('token')});
    return this.client.post<NewPerson>(this.url+'Person',p,{headers: header});
     }
  // removePerson(id: number) :
  // Observable<Person>{
  //   let header: HttpHeaders = new HttpHeaders({'Authorization' : 'Bearer '+localStorage.getItem('token')});
  //   return this._client.delete<Person>(this.url+"Person/"+id,{headers: header});
  //    }

  // addRole(r: NewRole):  Observable<NewRole> {
  //   const header: HttpHeaders = new HttpHeaders({authorization : 'Bearer ' + localStorage.getItem('token')});
  //   return this.client.post<NewRole>(this.url+"Person/setActor",r,{headers: header});
  //    }



  removeFilm(id: number): Observable<Film> {
    const header: HttpHeaders = new HttpHeaders({authorization : 'Bearer ' + localStorage.getItem('token')});
    return this.client.delete<Film>('http://localhost:53448/api/Movie/'+id,{headers: header});
  }

  updateFilm(film: FilmModif): Observable<FilmModif> {
    const header: HttpHeaders = new HttpHeaders({authorization : 'Bearer ' + localStorage.getItem('token')});
    return this.client.put<FilmModif>('http://localhost:53448/api/Movie',film,{headers: header});
  }

  getComments(idFilm: number): Observable<CommentModel[]> {
    const header: HttpHeaders = new HttpHeaders({authorization : 'Bearer ' + localStorage.getItem('token')});
    return this.client.get<CommentModel[]>('http://localhost:53448/api/Comment/'+idFilm,{headers: header});
  }

  getUser(id: number): Observable<UserModel> {

    const header: HttpHeaders = new HttpHeaders({authorization : 'Bearer ' + localStorage.getItem('token')});
    return this.client.get<UserModel>('http://localhost:53448/api/User/'+id,{headers: header});
  }

  postComment(com: CommentModel): Observable<CommentModel> {

    const header: HttpHeaders = new HttpHeaders({authorization : 'Bearer ' + localStorage.getItem('token')});
    return this.client.post<CommentModel>('http://localhost:53448/api/Comment',com,{headers: header});
  }


}




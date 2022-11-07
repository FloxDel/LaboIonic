import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  { CommentModel } from 'app/Model/comment.model';
import { Film } from 'app/Model/film.model';
import { UserModel } from 'app/Model/user.model';
import { ApifilmService } from 'app/Services/apifilm.service';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  display = false;
  film?: Film;
  id!: number;
  content: '';
  comments: CommentModel[] = [];
  user: UserModel = {email: '@', password:'' ,birthDate: new Date(), firstName:'', lastName:''};
  // nomcom: string ='';
  // prenomcom: string =''
comToAdd: CommentModel = { id:0 , content:'', userID: 0, postDate: new Date(), movieID:0};

  constructor(private serv: ApifilmService,private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.serv.getFilm(this.id).subscribe( film => this.film = film);
    this.serv.getComments(this.id).subscribe( com => {this.comments = com;
      this.comments.forEach(element => {
        this.serv.getUser(element.userID).subscribe( u => element.userName = u.firstName +''+ u.lastName);
      });});

  }

removeFilm(idd: number): void{
  this.serv.removeFilm(idd).subscribe();
  this.router.navigate(['accueil']);

}
update(id: number): void
{
  this.router.navigate(['updatefilm',id]);
}

addComment(com: CommentModel): void
{
  this.serv.postComment(com).subscribe();
}
showDialog() {
    this.display = true;
}

getContent()
{
  this.comToAdd.content = this.content;
  this.comToAdd.movieID = this.film.id;
  this.comToAdd.userID = Number.parseInt(localStorage.getItem('user'),8);
  console.log(this.comToAdd);
  this.addComment(this.comToAdd);


}

}



// films?: Film[];

//   constructor(private _serv: ApifilmService) { this.GetFilms();}


//   ngOnInit(): void {

//   }

// GetFilms(): void {
//   this._serv.getFilms().subscribe( films => this.films = films);
// }

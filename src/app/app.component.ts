import { Comic } from './../data-model';
import { ComicService } from './services/comic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  comic: Comic;
  comics: Comic[];
  constructor(private comicService: ComicService) {}

  ngOnInit() {
    this.getComics();
  }
  addItem (item) {
    this.comics.push(item);
  }
  deleteItem(item) {

  }
  getComics() {
     this.comicService.getUsers()
     .subscribe(result => {
       this.comics = result.json().data.results;
     });
  }
}

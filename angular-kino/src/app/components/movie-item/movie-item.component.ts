import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie!: Movie;
  @Output() onDeleteMovie: EventEmitter<Movie> = new EventEmitter();
  @Output() onEditMovie: EventEmitter<Movie> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(movie : any){
    this.onDeleteMovie.emit(movie);
  }

  onEdit(movie: any){
    this.onEditMovie.emit(movie);
  }

}

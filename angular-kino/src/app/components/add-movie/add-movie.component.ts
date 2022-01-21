import { Component, OnInit, Output, EventEmitter, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Output()  onAddMovie: EventEmitter<Movie> = new EventEmitter();
  movieObj ={
    name:"",
    duration:"",
    id:""
  }

  constructor(public dialogRef: MatDialogRef<AddMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.movieObj.name){
      alert('Please add a title!');
      return;
    }else if(!this.movieObj.duration){
      alert('Please add a duration!');
      return;
    }

    const newMovie = {
      name: this.movieObj.name,
      duration: this.movieObj.duration
    }

    this.onAddMovie.emit(newMovie);
    this.dialogRef.close();

    
  }



  
}

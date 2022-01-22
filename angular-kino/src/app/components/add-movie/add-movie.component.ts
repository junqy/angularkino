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
    var duration: number = +this.movieObj.duration;
    if(!this.movieObj.name){
      alert('Please add a title!');
      return;
    }if(!this.movieObj.duration){
      alert('Please add a duration!');
      return;
    }
    else if(duration < 30){
      alert('Duration must be more than 30')
      return;
    }
    else if(duration > 300){
      alert('Duration must be less than 300')
      return;
    }
    else if(this.movieObj.name.length <= 1){
      alert('Name can not be less than 1 character')
      return;
    }
    else if(this.movieObj.name.charAt(0) !== this.movieObj.name.charAt(0).toUpperCase()){
      alert('First letter needs to be in upper case or a number.')
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

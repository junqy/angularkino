import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movieObj ={
    name:"",
    duration:"",
    id:""
  }

  constructor(public dialogRef: MatDialogRef<EditMovieComponent>, 
    @Inject(MAT_DIALOG_DATA) public movie: Movie) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var duration: number = +form.value.duration;
    if(!form.value.name){
      alert('Please add a title!');
      return;
    }
    if(!form.value.duration){
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
    else if(form.value.name.length <= 1){
      alert('Name can not be less than 1 character')
      return;
    }
    else if(form.value.name.charAt(0) !== form.value.name.charAt(0).toUpperCase()){
      alert('First letter needs to be in upper case or a number.')
      return;
    }

    const updatedMovie ={
      ...this.movie,
      ...form.value
    }


    this.dialogRef.close(updatedMovie)
  }

}

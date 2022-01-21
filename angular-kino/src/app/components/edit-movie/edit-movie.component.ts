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
    const updatedMovie ={
      ...this.movie,
      ...form.value
    }

    this.dialogRef.close(updatedMovie)
  }

}

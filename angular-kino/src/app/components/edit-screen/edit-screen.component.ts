import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';
import { Room } from 'src/app/Room';
import { Screen } from 'src/app/Screen';

@Component({
  selector: 'app-edit-screen',
  templateUrl: './edit-screen.component.html',
  styleUrls: ['./edit-screen.component.css']
})
export class EditScreenComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditScreenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {screen: Screen, movies: Movie[], rooms: Room[]}) { }

  ngOnInit(): void {
    console.log(this.data.rooms)
  }

  onSubmit(form: NgForm){
    if(!form.value.room.id){
      alert('Please select a room!');
      return;
    }else if(Date.parse(form.value.date) <= new Date().getTime()){
    alert('Date lower than today!')
    return;
    }
    
    console.log('room:' + form.value.room)
    console.log('movie:' + form.value.movieName)
    console.log('date:' + form.value.date)

    this.data.screen.movieName = form.value.movieName
    this.data.screen.date = form.value.date
    this.data.screen.roomId = form.value.room.id
    this.data.screen.seats = form.value.room.capacity
    this.data.screen.taken_seats = []
    
    this.dialogRef.close(this.data.screen)
  }
  
}

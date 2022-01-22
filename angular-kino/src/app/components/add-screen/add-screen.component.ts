import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';
import { Room } from 'src/app/Room';
import { Screen } from 'src/app/Screen';

@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.css']
})
export class AddScreenComponent implements OnInit {
  @Output() onAddScreen: EventEmitter<Screen> = new EventEmitter();

  selectedMovie!: string;
  selectedRoom!: Room;
  selectedDate!: string;

  constructor(public dialogRef: MatDialogRef<AddScreenComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {rooms: Room[], movies: Movie[]} ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.selectedMovie){
      alert('Please choose a movie!');
      return;
    }else if(!this.selectedDate){
      alert('Please choose a date!');
      return;
    }else if(!this.selectedRoom){
      alert('Please choose a room!');
      return;
    }

    const newScreen = {
      movieName: this.selectedMovie,
      date: this.selectedDate,
      roomId: this.selectedRoom.id,
      seats: this.selectedRoom.capacity,
      taken_seats: []    
    }

    this.onAddScreen.emit(newScreen);
    this.dialogRef.close();

  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';
import { Room } from 'src/app/Room';
import { Screen } from 'src/app/Screen';
import { MovieService } from 'src/app/services/movie.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-edit-screen',
  templateUrl: './edit-screen.component.html',
  styleUrls: ['./edit-screen.component.css']
})
export class EditScreenComponent implements OnInit {
  movies: Movie[] = []
  rooms: Room[] = []

  constructor(private movieService: MovieService, 
    private roomService: RoomService,
    public dialogRef: MatDialogRef<EditScreenComponent>,
    @Inject(MAT_DIALOG_DATA) public screen: Screen) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => (this.movies = movies));
    this.roomService.getRooms().subscribe((rooms) => (this.rooms = rooms));
  }

  onSubmit(form: NgForm){
    if(!form.value.room.id){
      alert('Please select a room!');
      return;
    }
    this.screen.movieName = form.value.movieName
    this.screen.date = form.value.date
    this.screen.roomId = form.value.room.id
    this.screen.seats = form.value.room.capacity
    this.screen.taken_seats = 0
    
    this.dialogRef.close(this.screen)
  }
  
}

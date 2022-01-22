import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';
import { Screen } from 'src/app/Screen';
import { MatDialog } from '@angular/material/dialog';
import { AddScreenComponent } from '../add-screen/add-screen.component';
import { EditScreenComponent } from '../edit-screen/edit-screen.component';
import { TicketComponent } from '../ticket/ticket.component';
import { MovieService } from 'src/app/services/movie.service';
import { RoomService } from 'src/app/services/room.service';
import { Movie } from 'src/app/Movie';
import { Room } from 'src/app/Room';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {
  screens: Screen[] = [];
  movies: Movie[] = [];
  rooms: Room[] = [];

  constructor(private screenService: ScreenService, public dialog: MatDialog, 
    private movieService: MovieService, private roomService: RoomService) { }

  ngOnInit(): void {
    this.screenService.getScreens().subscribe((screens) => (this.screens = screens))
    this.movieService.getMovies().subscribe((movies) => (this.movies = movies));
    this.roomService.getRooms().subscribe((rooms) => (this.rooms = rooms));
  }

  addScreen(): void {
    const dialogRef = this.dialog.open(AddScreenComponent, {data: {rooms: this.rooms, movies: this.movies}});
    const subscribeDialog = dialogRef.componentInstance.onAddScreen.subscribe((data) =>{
      this.screenService.addScreen(data).subscribe((screen) => this.screens.push(screen));
      console.log(data)
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');   
    });
  }


  deleteScreen(screen: Screen){
    this.screenService.deleteScreen(screen).subscribe(() => (this.screens = this.screens.filter((s) => s.id !== screen.id)));
  }

  editScreen(screen : Screen){
    const index = this.screens.indexOf(screen)
    const dialogRef = this.dialog.open(EditScreenComponent, 
      {data:{screen, movies: this.movies, rooms: this.rooms}});

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.screenService.updateScreen(result).subscribe((screen) => this.screens[index] = screen)
      }
    })
  }

  buyScreen(screen : Screen){
    const index = this.screens.indexOf(screen)
    const dialogRef = this.dialog.open(TicketComponent, 
      {data:screen});

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.screenService.updateScreen(result).subscribe((screen) => this.screens[index] = screen)
      }
    })
  }
  
}

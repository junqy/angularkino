import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/Movie';
import { MatDialog } from '@angular/material/dialog';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
import { ScreenService } from 'src/app/services/screen.service';
import { Screen } from 'src/app/Screen';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  screens: Screen[] = [];
  toDelete: Screen[] = [];

  constructor(private movieService: MovieService, private screenService: ScreenService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => (this.movies = movies));
    this.screenService.getScreens().subscribe((screens) => this.screens = screens)
  }

  addMovie(): void {
    const dialogRef = this.dialog.open(AddMovieComponent, {
    });
    const subscribeDialog = dialogRef.componentInstance.onAddMovie.subscribe((data) => {
      this.movieService.addMovie(data).subscribe((movie)=> this.movies.push(movie));
      console.log(data)
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');   
    });
  }

  toggleAddMovie(){
    console.log('toggle')
  }

  deleteMovie(movie: Movie){
    this.movieService.deleteMovie(movie).subscribe(() => (this.movies = this.movies.filter((m) => m.id !== movie.id)));
    this.toDelete = this.screens.filter((screen) => (screen.movieName == movie.name));
    for(var screen in this.toDelete){
      this.screenService.deleteScreen(this.toDelete[screen])
    }
  }


  editMovie(movie : Movie){
    const index = this.movies.indexOf(movie)
    const movieName = movie.name
    const dialogRef = this.dialog.open(EditMovieComponent, {
      data:movie
    });
    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        this.movieService.updateMovie(result).subscribe((movie) => this.movies[index] = movie);
        this.toDelete = this.screens.filter((screen) => (screen.movieName == movieName));
        for(var screen in this.toDelete){
          console.log("MOVIE NAME: " + this.toDelete[screen].movieName)
          this.toDelete[screen].movieName = result.name
          this.screenService.updateScreen(this.toDelete[screen]).subscribe()
        }
      }
    })
  }
}

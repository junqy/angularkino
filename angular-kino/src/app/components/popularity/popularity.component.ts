import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';
import { Screen } from 'src/app/Screen';

@Component({
  selector: 'app-popularity',
  templateUrl: './popularity.component.html',
  styleUrls: ['./popularity.component.css']
})
export class PopularityComponent implements OnInit {
  popularity: any

  constructor(public dialogRef: MatDialogRef<PopularityComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{movie: Movie, screens: Screen[]}) { }

  ngOnInit(): void {
    this.popularity = this.data.screens.filter((screen => screen.movieName == this.data.movie.name))
  }

}

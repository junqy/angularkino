import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';
import { Screen } from 'src/app/Screen';
import { ChartOptions, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-popularity',
  templateUrl: './popularity.component.html',
  styleUrls: ['./popularity.component.css']
})
export class PopularityComponent implements OnInit {
  popularity: any
  days: string[] = []
  views: number[] = []

  constructor(public dialogRef: MatDialogRef<PopularityComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{movie: Movie, screens: Screen[]}) { }

  ngOnInit(): void {
    this.popularity = this.data.screens.filter((screen => screen.movieName == this.data.movie.name))
    let timetable = {}
    for(var i of this.popularity){
      let day = new Date(i.date).getDate();
      let month = new Date(i.date).getMonth() + 1;
      let year = new Date(i.date).getFullYear();
      let date = day + "." + month + "." + year;
      if(this.days.includes(date)){
        console.log(this.days.find(e => e = date))
        this.views[this.days.indexOf(date)] += i.taken_seats.length
      }else{
        this.days.push(date);
        this.views.push(i.taken_seats.length)
      }
    }
  }
    
  public barChartOptions: ChartOptions ={
    responsive: true
  };

  public barChartLabels: string[] = this.days;
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { data: this.views, label: 'Popularity' },
  ];

}

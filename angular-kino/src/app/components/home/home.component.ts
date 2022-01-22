import { Component, OnInit } from '@angular/core';
import { Screen } from 'src/app/Screen';
import { ScreenService } from 'src/app/services/screen.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  screens: Screen[] = []
  fav_screens: Screen[] = []
  constructor(private screenService: ScreenService ) { }

  ngOnInit(): void {
    this.screenService.getScreens().subscribe((screens) => this.screens = screens)
    let date_day: string;
    let date_month: string; 
    let date_year: string; 
  }

  
  onChange( event: MatDatepickerInputEvent<Date>){
    this.fav_screens = [];
    
    var day = event.value?.getDate()
    var month = event.value?.getMonth() 
    var year = event.value?.getFullYear()

    for(let scr of this.screens){
      let temp = scr.date.split("T")
      let time = temp[0].split("-")
      let temp_day = Number(time[2])     
      let temp_month = Number(time[1]) -1
      let temp_year = Number(time[0])
      if(temp_year == year && temp_month  == month && temp_day == day){
        this.fav_screens.push(scr)
        
      }
    }
    
   
     
  
  }
}
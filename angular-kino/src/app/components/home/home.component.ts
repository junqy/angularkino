import { Component, OnInit } from '@angular/core';
import { Screen } from 'src/app/Screen';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  screens: Screen[] = []
  constructor() { }

  ngOnInit(): void {
    
  }

  

}

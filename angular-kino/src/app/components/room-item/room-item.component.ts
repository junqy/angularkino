import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/Room';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {
  @Input() room!: Room;

  constructor() { }

  ngOnInit(): void {
  }

}

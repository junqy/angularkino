import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Screen } from 'src/app/Screen';

@Component({
  selector: 'app-screen-item',
  templateUrl: './screen-item.component.html',
  styleUrls: ['./screen-item.component.css']
})
export class ScreenItemComponent implements OnInit {
  @Input() screen!: Screen;
  @Output() onDeleteScreen: EventEmitter<Screen> = new EventEmitter();
  @Output() onEditScreen: EventEmitter<Screen> = new EventEmitter();
  @Output() onBuyScreen: EventEmitter<Screen> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(screen : any){
    this.onDeleteScreen.emit(screen);
  }

  onEdit(screen : any){
    this.onEditScreen.emit(screen);
  }

  onBuy(screen : any){
    this.onBuyScreen.emit(screen);
  }

}

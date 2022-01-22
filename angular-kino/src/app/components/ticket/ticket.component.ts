import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Screen } from 'src/app/Screen';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  seats: any

  constructor(public dialogRef: MatDialogRef<TicketComponent>,
    @Inject(MAT_DIALOG_DATA) public screen: Screen) { }

  ngOnInit(): void {
    this.seats = [...Array(this.screen.seats).keys()].map(x => ++x);
    console.log(this.seats)
    this.seats = this.seats.filter((x : number) => !this.screen.taken_seats.includes(x))
  }

  onSubmit(form: NgForm){
    if(!form.value.seat){
      alert('Please select a seat!')
      return;
    }
    this.screen.taken_seats.push(form.value.seat)
    this.dialogRef.close(this.screen)
  } 
}

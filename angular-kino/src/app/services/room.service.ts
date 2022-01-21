import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:5000/rooms';

  constructor(private http:HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl)
  }
}

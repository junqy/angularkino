import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Screen } from '../Screen';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private apiUrl = 'http://localhost:5000/screens';

  constructor(private http:HttpClient) { }

  getScreens():Observable<Screen[]> {
    return this.http.get<Screen[]>(this.apiUrl)
  }

  deleteScreen(screen: Screen): Observable<Screen>{
    const url = `${this.apiUrl}/${screen.id}`;
    console.log("MOVIENAME: " + screen.movieName)
    return this.http.delete<Screen>(url);
  }

  addScreen(screen: Screen): Observable<Screen>{
    return this.http.post<Screen>(this.apiUrl, screen, httpOptions)
  }

  updateScreen(screen: Screen): Observable<Screen>{
    const url = `${this.apiUrl}/${screen.id}`;
    return this.http.put<Screen>(url, screen, httpOptions)
  }

  // updateTitle(screen: Screen): Observable<Screen>{
  //   const url =`${this.apiUrl}/${screen.id}`
  //   return this.http.put<Screen>:
  // }
}

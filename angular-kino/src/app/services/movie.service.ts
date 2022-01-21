import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/Movie';
import { Screen } from '../Screen';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:5000/movies';


  constructor(private http:HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl)
  }

  deleteMovie(movie: Movie): Observable<Movie>{
    const url = `${this.apiUrl}/${movie.id}`;
    return this.http.delete<Movie>(url);
  }

  addMovie(movie: Movie): Observable<Movie>{
    return this.http.post<Movie>(this.apiUrl, movie, httpOptions)
  }

  updateMovie(movie : Movie): Observable<Movie>{
    const url = `${this.apiUrl}/${movie.id}`;
    return this.http.put<Movie>(url, movie, httpOptions)
  }
}

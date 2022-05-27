import { Movies } from './../model/movies';
import { Movie } from './../model/movie';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://api.themoviedb.org/3/movie/';
  private apiKey = '44ba3fd8b25161b1ce7444f55d772ce9';

  constructor(
    private http: HttpClient
  ) { }

  getPopularMovies() {
    let movieurl = `${this.url}popular?api_key=${this.apiKey}`;

    console.log(movieurl)
    return this.http.get<Movies>(movieurl)
    .pipe (
      tap(_ => this.log('fetched popular movies')),
      catchError(this.handleError<Movies>('getPopularMovies'))
    )
  }

  getNowPlayingMovies() {
    let movieurl = `${this.url}now_playing?api_key=${this.apiKey}`;

    console.log(movieurl)
    return this.http.get<Movies>(movieurl)
    .pipe (
      tap(_ => this.log('fetch now playing movies')),
      catchError(this.handleError<Movies>('getNowPlayingMovies'))
    )
  }

  getTopRatedMovies() {
    let movieurl = `${this.url}top_rated?api_key=${this.apiKey}`;

    console.log(movieurl)
    return this.http.get<Movies>(movieurl)
    .pipe (
      tap(_ => this.log('fetch now playing movies')),
      catchError(this.handleError<Movies>('getMovies'))
    )
  }

  getDetails(id : number) {
    let detailsUrl = `${this.url}${id}?api_key=${this.apiKey}`;

    return this.http.get<Movie>(detailsUrl)
  }

   
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
}

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
  [x: string]: any;
  searchMovie(query: string, page: number) {
    throw new Error('Method not implemented.');
  }

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

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
 
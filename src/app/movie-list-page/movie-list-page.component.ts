import { MovieService } from './../services/movie.service';
import { Movie } from './../model/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css']
})
export class MovieListPageComponent implements OnInit {

  popularMovies!: Movie[];
  nowPlayingMovies!: Movie[];
  topRatedMovies!: Movie[];

  constructor(
    private moviesService: MovieService
  ) { }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getNowPlayingMovies();
    this.getTopRatedMovies();
  }

  getPopularMovies() {
    this.moviesService.getPopularMovies().subscribe(movies => this.popularMovies = movies.results);
  }

  getNowPlayingMovies() {
    this.moviesService.getNowPlayingMovies().subscribe(movies => this.nowPlayingMovies = movies.results)
  }

  getTopRatedMovies() {
    this.moviesService.getTopRatedMovies().subscribe(movies => this.topRatedMovies = movies.results)
  }

}
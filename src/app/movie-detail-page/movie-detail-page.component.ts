import { MovieService } from './../services/movie.service';

import { Movie } from './../model/movie';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {Location} from '@angular/common';



@Component({

  selector: 'app-movie-detail-page',

  templateUrl: './movie-detail-page.component.html',

  styleUrls: ['./movie-detail-page.component.css']

})

export class MovieDetailPageComponent implements OnInit {



  selectedMovie!: Movie;



  constructor(

    private movieService: MovieService,

    private route: ActivatedRoute,

    private location: Location

  ) { }



  ngOnInit(): void {

    this.route.params.subscribe(

      params => {

        let id = params['id'];

        if (id) this.getDetail(id);

        console.log('id is '+ id)

      }

    );

  }



  getDetail(id: number) {

    this.movieService.getDetails(id).subscribe(movieDetail => this.selectedMovie = movieDetail)

  }



  getFormattedTime(min: number) {

    var inp = new Date(0, 0, 0, 0, min, 0);

    var m = inp.getMinutes();

    var h = inp.getHours();



    return h + 'h ' + m + 'm ';

  }



}
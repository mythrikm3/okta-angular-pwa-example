import { Movie } from './movie';

export class SearchMovies {
    constructor(
        public page : number,
        public results: Movie[],
        public total_results: number,
        public total_pages: number
    ) { }
}
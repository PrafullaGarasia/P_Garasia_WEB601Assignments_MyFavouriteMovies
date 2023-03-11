import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'P_Garasia_MyFavouriteMovies';
  topMovieContent: any = {};
  defaultMovieImage: string = 'https://www.pngitem.com/pimgs/m/464-4644133_play-movie-video-clapper-scene-transparent-background-movies.png';

  constructor(private MovieService: MovieService){}

  loggingIDnTitle(content: any){
    console.log(`ID: ${content.id}`);
    console.log(`Title: ${content.title}`);
  }

  ngOnInit(){
    this.MovieService.getMovieById(3).subscribe(content => this.topMovieContent = content);
  }
}

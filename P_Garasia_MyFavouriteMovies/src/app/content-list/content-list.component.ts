import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[];
  defaultMovieImage: string = 'https://www.pngitem.com/pimgs/m/464-4644133_play-movie-video-clapper-scene-transparent-background-movies.png';
  title: string = '';
  isTitleExists: boolean | null = null;

loggingTitle(content: any){
  console.log(`ID: ${content.id}`);
  console.log(`Title: ${content.title}`);
}

addContent(content: Content){
  this.MovieService.addMovie(content).subscribe(newMovieBack => {
    this.contents.push(newMovieBack);
    this.contents = [...this.contents];
  })
}

searchForTitle(){
  this.isTitleExists = this.contents.some(content => content.title === this.title);
}

constructor(private MovieService: MovieService){}

ngOnInit(){
  this.MovieService.getMovies().subscribe(movies => this.contents = movies);
}
}
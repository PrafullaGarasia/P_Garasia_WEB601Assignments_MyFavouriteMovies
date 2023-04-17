import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
  content: any = {};
  defaultMovieImage: string = 'https://www.pngitem.com/pimgs/m/464-4644133_play-movie-video-clapper-scene-transparent-background-movies.png';

  constructor(private route:ActivatedRoute, private moviesService: MovieService){}

  loggingIDnTitle(content: any){
    console.log(`ID: ${content.id}`);
    console.log(`Title: ${content.title}`);
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);

      this.moviesService.getMovieById(this.id).subscribe(movie => {
        this.content = movie;
      });
    })
  }
}
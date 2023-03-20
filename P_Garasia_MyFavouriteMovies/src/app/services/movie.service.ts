import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getMovies(): Observable<Content[]>{
    this.messageService.addMessage("Content array loaded!");
    return this.http.get<Content[]>("api/movies");
  }

  addMovie(newMovie: Content){
    this.messageService.addMessage("New Movie Added");
    return this.http.post<Content>("api/movies", newMovie, this.httpOptions);
  }

  getMovieById(id: number): Observable<any> {
    const content = contents.find(c => c.id === id);
    this.messageService.addMessage(`Content item at id: ${id}`);
    return of(content);
  }
}

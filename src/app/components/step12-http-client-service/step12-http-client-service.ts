import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JokeService } from 'src/app/shared/services/joke.service';
@Component({
  selector: 'app-step12-http-client-service',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './step12-http-client-service.html',
  styleUrl: './step12-http-client-service.css',
})
export class Step12HttpClientService {
  
  jokesService = inject(JokeService);
  dadJoke: string = '';
  chuckNorrisJoke: string = '';

  ngOnInit(): void {
    // this.jokesService.getDadJoke().subscribe((data) => {
    //   this.dadJoke = data.joke;
    // });
    // this.jokesService.getChuckNorrisJoke().subscribe((data) => {
    //   this.chuckNorrisJoke = data.value;
    // });
    this.refreshDadJoke();
    this.refreshChuckNorrisJoke();
  }

  refreshDadJoke() {
    this.jokesService.getDadJoke().subscribe((data) => {
      this.dadJoke = data.joke;
    });
  }

  refreshChuckNorrisJoke() {
    // this.jokesService.getChuckNorrisJoke().subscribe((data) => {
    this.jokesService.getChuckNorrisJoke().subscribe((data: {value: string}) => {
      this.chuckNorrisJoke = data.value;
    });
  }
}

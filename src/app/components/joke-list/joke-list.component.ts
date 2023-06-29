import { Component } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';
import { JokeService } from 'src/app/services/joke-service.service';

@Component({
	selector: 'app-joke-list',
	templateUrl: './joke-list.component.html',
	styleUrls: ['./joke-list.component.css'],
})
export class JokeListComponent {
	jokes: Joke[];

	constructor(private jokeService: JokeService) {
		this.jokes = [];
		for (let index = 0; index < 10; index++) {
			this.jokeService.getRandomJoke().subscribe({
				next: (joke: Joke) => {
					this.jokes.push(joke);
				},
				error: (error) => {
					alert(error.message);
					console.error(error);
					console.error(error.message);
				},
			});
		}
	}
}

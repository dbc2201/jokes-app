import { Component } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';
import { JokeService } from 'src/app/services/joke-service.service';

@Component({
	selector: 'app-joke-list-manager',
	templateUrl: './joke-list-manager.component.html',
	styleUrls: ['./joke-list-manager.component.css'],
})
export class JokeListManagerComponent {
	jokes: Joke[];

	constructor(private jokeService: JokeService) {
		this.jokes = [];
		this.initializeJokes();
	}

	/**
	 * this function calls the Jokes API service to fetch jokes and initialize the jokes array
	 */
	private initializeJokes(): void {
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

	/**
	 * this function searches for a joke or a keyword in the jokes in the jokes array
	 * @param searchedJoke the joke or keyword to search for
	 */
	searchJokesArray(searchedJoke: string): void {
		if (searchedJoke === '') {
			this.initializeJokes();
			return;
		}
		this.jokes = this.jokes.filter((jokeFromArray) =>
			jokeFromArray.setup.includes(searchedJoke)
		);
	}
}

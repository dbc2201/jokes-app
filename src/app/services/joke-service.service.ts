import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class JokeService {
	constructor(private httpService: HttpClient) {}

	/**
	 * this function call the Random Joke API to get a random Joke
	 * @returns a random joke
	 */
	getRandomJoke() {
		return this.httpService.get(
			'https://official-joke-api.appspot.com/random_joke'
		);
	}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class JokeService {
	constructor(private httpService: HttpClient) {}

	/**
	 * this function call the Random Joke API to get a random Joke
	 * @returns an 'observable' of the 'Joke' type that contains a random joke
	 */
	getRandomJoke(): Observable<Joke> {
		return this.httpService.get<Joke>(
			'https://v2.jokeapi.dev/joke/programming?type=twopart'
		);
	}

	/**
	 * this function call the Random Joke API to get 10 random Jokes
	 * @returns an 'observable' of an array of the 'Joke' type that contains a random joke
	 */
	getTenRandomJokes(): Observable<Array<Joke>> {
		return this.httpService.get<Array<Joke>>(
			' https://v2.jokeapi.dev/joke/programming?type=twopart&safe-mode&amount=10'
		);
	}
}

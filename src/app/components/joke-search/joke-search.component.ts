import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-joke-search',
	templateUrl: './joke-search.component.html',
	styleUrls: ['./joke-search.component.css'],
})
export class JokeSearchComponent {
	@Output()
	jokeSearchedEvent: EventEmitter<string>;

	joke: string;

	searchJokeForm: FormGroup;

	constructor() {
		this.jokeSearchedEvent = new EventEmitter<string>();
		this.joke = '';
	}

	/**
	 * this function take a joke or a keyword to search for a joke
	 * @param joke a joke or a keyword to search for a joke
	 */
	searchJoke(joke: string): void {
		this.joke = joke;
		this.jokeSearchedEvent.emit(this.joke);
	}

	/**
	 * this function resets the search input and the joke list
	 */
	resetSearch(): void {
		this.joke = '';
		this.jokeSearchedEvent.emit(this.joke);
	}
}

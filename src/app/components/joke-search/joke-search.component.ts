import { Component, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-joke-search',
	templateUrl: './joke-search.component.html',
	styleUrls: ['./joke-search.component.css'],
})
export class JokeSearchComponent {
	jokeSearchedEvent: EventEmitter<string>;

	constructor() {
		this.jokeSearchedEvent = new EventEmitter<string>();
	}

	/**
	 * this function take a joke or a keyword to search for a joke
	 * @param joke a joke or a keyword to search for a joke
	 */
	searchJoke(joke: string): void {}

	/**
	 * this function resets the search input and the joke list
	 */
	resetSearch(): void {}
}

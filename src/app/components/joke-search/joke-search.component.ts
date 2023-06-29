import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-joke-search',
	templateUrl: './joke-search.component.html',
	styleUrls: ['./joke-search.component.css'],
})
export class JokeSearchComponent {
	@Output()
	jokeSearchedEvent: EventEmitter<string>;

	@Input('joke')
	joke: string;

	searchJokeForm: FormGroup;

	constructor(private formBuilderService: FormBuilder) {
		this.jokeSearchedEvent = new EventEmitter<string>();
		this.joke = '';
		this.searchJokeForm = this.formBuilderService.group({
			joke: ['', Validators.required],
		});
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

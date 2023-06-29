import { Component, Input } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
	selector: 'app-joke-card',
	templateUrl: './joke-card.component.html',
	styleUrls: ['./joke-card.component.css'],
})
export class JokeCardComponent {
	@Input() joke: Joke;

	constructor() {
		this.joke = {
			id: -1,
			type: 'dummy',
			setup: 'why does this joke fail?',
			delivery: `it's a dummy`,
		};
	}
}

import { Component } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
	selector: 'app-joke-list-manager',
	templateUrl: './joke-list-manager.component.html',
	styleUrls: ['./joke-list-manager.component.css'],
})
export class JokeListManagerComponent {
	jokes: Joke[];

	constructor() {
		this.jokes = [];
	}
}

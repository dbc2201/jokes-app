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
		this.jokes = [
			{
				id: 1,
				type: 'general',
				setup: 'dummy setup',
				punchline: 'punchline',
			},
			{
				id: 2,
				type: 'general',
				setup: 'dummy setup',
				punchline: 'punchline',
			},
			{
				id: 3,
				type: 'general',
				setup: 'dummy setup',
				punchline: 'punchline',
			},
			{
				id: 4,
				type: 'general',
				setup: 'dummy setup',
				punchline: 'punchline',
			},
		];
	}
}

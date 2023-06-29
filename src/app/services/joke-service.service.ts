import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class JokeService {
	constructor(private httpService: HttpClient) {}
}

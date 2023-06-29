import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { JokeListManagerComponent } from './components/joke-list-manager/joke-list-manager.component';
import { JokeSearchComponent } from './components/joke-search/joke-search.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { JokeCardComponent } from './components/joke-card/joke-card.component';

import { JokeService } from './services/joke-service.service';

import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		JokeListManagerComponent,
		JokeSearchComponent,
		JokeListComponent,
		JokeCardComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatButtonModule,
		MatInputModule,
		FormsModule,
		HttpClientModule,
		MatCardModule,
	],
	providers: [JokeService],
	bootstrap: [AppComponent],
})
export class AppModule {}

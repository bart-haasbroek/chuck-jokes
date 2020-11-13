import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StateModule } from '@store/store.module';
import { ChuckJokesService } from '@services/chuck-jokes.service';
import { HttpClientModule } from '@angular/common/http';

//components
import { JokeListComponent } from '@components/joke-list/joke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StateModule,
  ],
  exports: [
    JokeListComponent
  ],
  providers: [ChuckJokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

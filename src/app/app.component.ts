import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromChuckJokes from '@store/chuck-jokes';
import { chuckJokesState } from '@store/chuck-jokes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<chuckJokesState>) {
    this.store.dispatch(fromChuckJokes.getChuckJokes());
    this.store.select(fromChuckJokes.selectAllChuckJokes).subscribe(console.log);
  }
}

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as ChuckJokesReducer from './chuck-jokes.reducer';
import { chuckJokesState } from './chuck-jokes.reducer';


export const getChuckJokesState = createFeatureSelector<chuckJokesState>('chuckJokes');

export const {
    selectEntities: selectChuckJokes,
    selectAll: selectAllChuckJokes,
} = ChuckJokesReducer.chuckJokesAdapter.getSelectors(getChuckJokesState);


export const selectFavouriteJokes = createSelector(
    getChuckJokesState,
    (state: chuckJokesState) => state.favouriteJokes
  );
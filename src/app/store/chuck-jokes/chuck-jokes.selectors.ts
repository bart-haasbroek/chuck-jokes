import { ChuckJokeInterface } from '@app/interfaces/chuck-joke.interface';
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

export const selectFdavouriteJokes = createSelector(
    getChuckJokesState,
    (state: any) => state.favouriteJokes
);

export const selectAmountOfFavouriteJokes = createSelector(
    selectFavouriteJokes,
    (favouriteJokes: ChuckJokeInterface[]) => favouriteJokes.length
);
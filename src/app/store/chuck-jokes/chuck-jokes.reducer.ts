import { ChuckJokeInterface } from '@interfaces/chuck-joke.interface';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as ChuckJokesActions from './chuck-jokes.actions';
 
export interface chuckJokesState extends EntityState<ChuckJokeInterface> {
    loading: boolean;
    loaded: boolean;
}

export const chuckJokesAdapter = createEntityAdapter<ChuckJokeInterface>();
const chuckJokesState: chuckJokesState = chuckJokesAdapter.getInitialState({
    loading: false,
    loaded: false,
});
 
const _chuckJokesReducer = createReducer(
    chuckJokesState,
    on(ChuckJokesActions.getChuckJokes, state => {
        return {
            ...state,
            loading: true,
            loaded: false,
        };
    }),
    on(ChuckJokesActions.getChuckJokesSuccess, (state, action) => {
        return chuckJokesAdapter.setAll(action.payload, {
            ...state,
            loading: false,
            loaded: true,
        });
    }),
    on(ChuckJokesActions.getChuckJokesFail, state => {
        return {
            ...state,
            loading: false,
            loaded: false,
        };
    }),
);
 
export function chuckJokesReducer(state, action) {
  return _chuckJokesReducer(state, action);
}
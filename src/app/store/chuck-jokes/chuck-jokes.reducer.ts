import { ChuckJokeInterface } from '@interfaces/chuck-joke.interface';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as ChuckJokesActions from './chuck-jokes.actions';

export interface chuckJokesState extends EntityState<ChuckJokeInterface> {
    loading: boolean;
    loaded: boolean;
    favouriteJokes: ChuckJokeInterface[],
    timerIsEnabled: boolean;
}

export const chuckJokesAdapter = createEntityAdapter<ChuckJokeInterface>();
export const chuckJokesState: chuckJokesState = chuckJokesAdapter.getInitialState({
    loading: false,
    loaded: false,
    favouriteJokes: [],
    timerIsEnabled: false,
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
    on(ChuckJokesActions.markJokeAsFavourite, (state, action) => {
        return chuckJokesAdapter.removeOne(action.payload.id, {
            ...state,
            favouriteJokes: [action.payload, ...state.favouriteJokes]
        });
    }),
    on(ChuckJokesActions.removeJokeAsFavourite, (state, action) => {
        return chuckJokesAdapter.addOne(action.payload, {
            ...state,
            loading: false,
            loaded: true,
            favouriteJokes: state.favouriteJokes.filter((joke) => joke.id !== action.payload.id)
        });
    }),
    on(ChuckJokesActions.getSavedFavouriteJokesSuccess, (state, action) => {
        return {
            ...state,
            favouriteJokes: action.payload
        }
    }),
    on(ChuckJokesActions.setTimerStatus, (state, action) => {
        return {
            ...state,
            timerIsEnabled: action.payload
        }
    }),
);

export function chuckJokesReducer(state, action) {
  return _chuckJokesReducer(state, action);
}
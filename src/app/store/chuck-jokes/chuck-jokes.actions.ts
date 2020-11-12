import { ChuckJokeInterface } from '@interfaces/chuck-joke.interface';
import { createAction } from '@ngrx/store';

export const getChuckJokes = createAction('[chuck jokes] get chuck jokes');
export const getChuckJokesSuccess = createAction(
    '[chuck jokes] get chuck jokes success',
    (payload: ChuckJokeInterface[]) => ({ payload })
);
export const getChuckJokesFail = createAction(
    '[chuck jokes] get chuck jokes fail',
);

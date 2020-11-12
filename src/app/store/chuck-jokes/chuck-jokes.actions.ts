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

export const markJokeAsFavourite = createAction(
    '[chuck jokes] mark a joke as favourite',
    (payload: ChuckJokeInterface) => ({ payload })
);

export const removeJokeAsFavourite = createAction(
    '[chuck jokes] remove a joke as favourite',
    (payload: ChuckJokeInterface) => ({ payload })
);

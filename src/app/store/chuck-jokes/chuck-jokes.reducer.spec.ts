import * as ChuckJokesActions from './chuck-jokes.actions';
import * as fromReducer from './chuck-jokes.reducer';

describe('showReducer', () => {
    describe('unknown action', () => {
        it('should return the default state', () => {
            const action = {
                type: 'unknown'
            }
            const initialState = fromReducer.chuckJokesState;
            const state = fromReducer.chuckJokesReducer(initialState, action);
            expect(state).toBe(initialState);
        });
    });

    describe('getChuckJokes action', () => {
        it('should toggle the loading and loaded state', () => {
            const action = ChuckJokesActions.getChuckJokes;
            const initialState = fromReducer.chuckJokesState;
            const newState = {
                ...initialState,
                loading: true,
                loaded: false,
            }
            const state = fromReducer.chuckJokesReducer(initialState, action);
            expect(state).toEqual(newState);
        });
    });

    describe('getChuckJokes action', () => {
        it('should toggle the loading and loaded state', () => {
            const action = ChuckJokesActions.getChuckJokes();
            const initialState = fromReducer.chuckJokesState;
            const newState = {
                ...initialState,
                loading: true,
                loaded: false,
            }
            const state = fromReducer.chuckJokesReducer(initialState, action);
            expect(state).toEqual(newState);
        });
    });

    describe('getChuckJokes success action', () => {
        it('should add jokes to the state', () => {
            const jokes = [
                {
                    id: 78,
                    joke: 'The grass is always greener on the other side, unless Chuck Norris has been there. In that case the grass is most likely soaked in blood and tears.',
                    categories: []
                },
                {
                    id: 396,
                    joke: 'Only Chuck Norris can prevent forest fires.',
                    categories: []
                },
            ];
            const action = ChuckJokesActions.getChuckJokesSuccess(jokes);
            const initialState = fromReducer.chuckJokesState;
            const newState = {
                ...initialState,
                entities: jokes.reduce(
                    (entityMap, joke) => ({
                      ...entityMap,
                      [joke.id]: joke
                    }),
                    {}
                ),
                ids: jokes.map((joke) => joke.id),
                loading: false,
                loaded: true,
            }
            const state = fromReducer.chuckJokesReducer(initialState, action);
            expect(state).toEqual(newState);
        });
    });
    describe('getChuckJokes fail action', () => {
        it('should update the loading state when the call fails', () => {
            const action = ChuckJokesActions.getChuckJokesFail();
            const initialState = fromReducer.chuckJokesState;
            const newState = {
                ...initialState,
                loading: false,
                loaded: false,
            }
            const state = fromReducer.chuckJokesReducer(initialState, action);
            expect(state).toEqual(newState);
        });
    });
    describe('markJokeAsFavourite action', () => {
        it('should add joke to the favourite list and remove from the entities', () => {
            const joke = {
                id: 78,
                joke: 'The grass is always greener on the other side, unless Chuck Norris has been there. In that case the grass is most likely soaked in blood and tears.',
                categories: []
            };
            const action = ChuckJokesActions.markJokeAsFavourite(joke);
            const initialState: fromReducer.chuckJokesState = {
                ...fromReducer.chuckJokesState,
                entities: {
                    [joke.id]: joke
                },
                ids: [joke.id],
                favouriteJokes: []
            };
            const {[joke.id]: jokeToRemove, ...restEntities} = initialState.entities;
            let idsArray: (number | string)[] = [];
            let newids: Array<any> = idsArray.filter((id) => id !== joke.id);
            const newState = {
                ...initialState,
                entities: restEntities,
                ids: newids,
                favouriteJokes: [joke, ...initialState.favouriteJokes],
            }
            const state = fromReducer.chuckJokesReducer(initialState, action);
            expect(state).toEqual(newState);
        });
    });
    describe('getSavedFavouriteJokesSuccess action', () => {
        it('should fill the favouriteJokes array', () => {
            const jokes = [
                {
                    id: 78,
                    joke: 'The grass is always greener on the other side, unless Chuck Norris has been there. In that case the grass is most likely soaked in blood and tears.',
                    categories: []
                },
                {
                    id: 396,
                    joke: 'Only Chuck Norris can prevent forest fires.',
                    categories: []
                },
            ];
            const action = ChuckJokesActions.getSavedFavouriteJokesSuccess(jokes);
            const initialState = fromReducer.chuckJokesState;
            const newState = {
                ...initialState,
                favouriteJokes: [...jokes]
            }
            const state = fromReducer.chuckJokesReducer(initialState, action);
            expect(state).toEqual(newState);
        });
    });
});
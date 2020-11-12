import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { chuckJokesReducer } from './chuck-jokes/chuck-jokes.reducer';
import { ChuckJokesEffects } from './chuck-jokes/chuck-jokes.effects';

/**
 * Module for ngrx store
 */
@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot({chuckJokes: chuckJokesReducer}),
        EffectsModule.forRoot([ChuckJokesEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
})
export class StateModule {}

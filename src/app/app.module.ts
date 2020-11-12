import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateModule } from '@store/store.module';
import { ChuckJokesService } from '@services/chuck-jokes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StateModule,
  ],
  providers: [ChuckJokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

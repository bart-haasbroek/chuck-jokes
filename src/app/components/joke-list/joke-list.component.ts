import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChuckJokeInterface } from '@app/interfaces/chuck-joke.interface';

@Component({
    selector: 'joke-list',
    templateUrl: 'joke-list.component.html',
    styleUrls: ['joke-list.component.scss']
})

export class JokeListComponent {
    @Input() title: string;
    @Input() buttonLabel: string;
    @Input() jokes: ChuckJokeInterface[] = [];
    @Input() showButton: boolean = true;

    @Output() onJokeClick: EventEmitter<ChuckJokeInterface> = new EventEmitter<ChuckJokeInterface>();

    public onItemClick(joke: ChuckJokeInterface): void {
        this.onJokeClick.emit(joke);
    }
}
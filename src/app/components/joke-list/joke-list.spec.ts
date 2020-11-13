import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JokeListComponent } from './joke-list.component';

describe('joke list component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        JokeListComponent
      ],
    }).compileComponents();
  });

  it('should create the joke list component', () => {
    const fixture = TestBed.createComponent(JokeListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should check the title input', () => {
    const fixture = TestBed.createComponent(JokeListComponent);
    const component = fixture.componentInstance;
    expect(component.title).toBe(undefined);
    component.title = 'my title';
    expect(component.title).toBe('my title');
  });

  it('should check the buttonLabel input', () => {
    const fixture = TestBed.createComponent(JokeListComponent);
    const component = fixture.componentInstance;
    expect(component.buttonLabel).toBe(undefined);
    component.buttonLabel = 'my label';
    expect(component.buttonLabel).toBe('my label');
  });

  it('should check if the jokes array input', () => {
    const fixture = TestBed.createComponent(JokeListComponent);
    const component = fixture.componentInstance;
    expect(component.jokes).toEqual([]);
    component.showButton = false;

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
    component.jokes = jokes;
    expect(component.jokes).toEqual(jokes);
  });

  it('should check if the showbutton input', () => {
    const fixture = TestBed.createComponent(JokeListComponent);
    const component = fixture.componentInstance;
    expect(component.showButton).toBe(true);
    component.showButton = false;
    expect(component.showButton).toBe(false);
  });
});

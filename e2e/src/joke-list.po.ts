import { browser, by, element } from 'protractor';

export class JokeList {
  getCount() {
      return element.all(by.css('.jokes-list li')).count();
  }
}

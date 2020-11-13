import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getJokes() {
    return element(by.css(`.getJokesButton`)).click();
  }
}

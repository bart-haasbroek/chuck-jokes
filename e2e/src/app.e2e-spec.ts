import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { JokeList } from './joke-list.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let jokeList: JokeList;

  beforeEach(() => {
    page = new AppPage();
    jokeList = new JokeList();
  });

  it('should get 10 jokes after clicking the button', () => {
    page.navigateTo();
    page.getJokes();
    expect(jokeList.getCount()).toEqual(10);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

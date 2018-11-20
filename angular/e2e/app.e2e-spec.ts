import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('firebase-poc App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
      browser.get('/');
      expect(browser.getTitle()).toEqual('FirebaseSample');
  });
});

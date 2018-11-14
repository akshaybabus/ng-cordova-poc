import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('firebase-poc App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    // page.navigateTo();
    // expect(page.getParagraphText()).toEqual('Welcome to app!');
    // var name = element(by.css('input[name="nameTxtName"]'));
      // expect(name.getAttribute("value")).toEqual("Hello");

      browser.get('/');

      expect(browser.getTitle()).toEqual('FirebaseSample');
  });
});

import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getNameInputEl(){
    return element(by.css('input[name="nameTxtName"]'));
  }

  getPhoneInputEl(){
    return element(by.css('input[name="nameTxtPhone"]'));
  }
  getButtonEl(){
    return element(by.css('.submit-btn'));
  }
  getMessageText(){
    return element(by.css('span[name="spanMsg"]')).getText();
  }
}

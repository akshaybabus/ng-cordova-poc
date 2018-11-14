import { HomePage } from './home.po';
import { browser, by, element } from 'protractor';

describe('firebase-poc Home', () => {
  let page: HomePage;
  let name:any;
  let phone:any;
  let button:any;
  beforeEach(() => {
    page = new HomePage();
    name = page.getNameInputEl();
    phone = page.getPhoneInputEl();
    button = page.getButtonEl();
  });

  it('should display success message', () => {
    page.navigateTo();
    name.sendKeys("Anirudh");
    phone.sendKeys("412345");
    button.click();
    browser.sleep(5000);
    expect(page.getMessageText()).toEqual('Data added successfully');
  });

  it('should display error message', () => {
    page.navigateTo();
    name.sendKeys("");
    phone.sendKeys("");
    button.click();
    expect(page.getMessageText()).toEqual('Please enter name and phone');
  });
});

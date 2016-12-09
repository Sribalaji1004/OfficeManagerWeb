export class OfficeManagerWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('office-manager-web-app h1')).getText();
  }
}

import { OfficeManagerWebPage } from './app.po';

describe('office-manager-web App', function() {
  let page: OfficeManagerWebPage;

  beforeEach(() => {
    page = new OfficeManagerWebPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('office-manager-web works!');
  });
});

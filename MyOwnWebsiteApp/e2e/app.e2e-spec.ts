import { MyOwnWebsiteAppPage } from './app.po';

describe('my-own-website-app App', function() {
  let page: MyOwnWebsiteAppPage;

  beforeEach(() => {
    page = new MyOwnWebsiteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

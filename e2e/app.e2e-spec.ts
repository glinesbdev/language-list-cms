import { LanguageListCmsPage } from './app.po';

describe('language-list-cms App', function() {
  let page: LanguageListCmsPage;

  beforeEach(() => {
    page = new LanguageListCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

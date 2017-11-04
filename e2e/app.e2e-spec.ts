import { AbAutomatPage } from './app.po';

describe('ab-automat App', () => {
  let page: AbAutomatPage;

  beforeEach(() => {
    page = new AbAutomatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

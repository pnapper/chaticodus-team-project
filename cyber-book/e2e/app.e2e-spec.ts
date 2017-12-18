import { CyberBookPage } from './app.po';

describe('cyber-book App', () => {
  let page: CyberBookPage;

  beforeEach(() => {
    page = new CyberBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

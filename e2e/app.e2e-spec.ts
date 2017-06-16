import { UseCaseServicePage } from './app.po';

describe('use-case-service App', () => {
  let page: UseCaseServicePage;

  beforeEach(() => {
    page = new UseCaseServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

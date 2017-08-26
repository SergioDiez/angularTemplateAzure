import { AzureAngularPage } from './app.po';

describe('azure-angular App', () => {
  let page: AzureAngularPage;

  beforeEach(() => {
    page = new AzureAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

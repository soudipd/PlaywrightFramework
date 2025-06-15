import { Locator, Page } from '@playwright/test';

export class DynamicPropertiesPage {
  private page: Page;
  private dynamicPropertiesHeader: Locator;
  private enableAfter: Locator;
  private colorChange: Locator;
  private visibleAfter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dynamicPropertiesHeader = page.getByRole('heading', {
      name: 'Dynamic Properties',
    });
    this.enableAfter = page.locator('#enableAfter');
    this.colorChange = page.locator('#colorChange');
    this.visibleAfter = page.locator('#visibleAfter');
  }
  async waitForPageToLoad(): Promise<void> {
    await this.dynamicPropertiesHeader.waitFor({ state: 'visible' });
  }
  async getPageTitle(): Promise<string> {
    return this.page.title();
  }
  async getPageUrl(): Promise<string> {
    return this.page.url();
  }
  async clickOnEnableAfter(): Promise<void> {
    await this.enableAfter.waitFor({ state: 'visible' });
    await this.enableAfter.click();
  }
}

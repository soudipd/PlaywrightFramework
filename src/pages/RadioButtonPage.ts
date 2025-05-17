import { Page, Locator } from '@playwright/test';

export class RadioButtonPage {
  private page: Page;
  private yesRadioButton: Locator;
  private impressiveRadioButton: Locator;
  private noRadioButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.yesRadioButton = page.locator('label[for="yesRadio"]');
    this.impressiveRadioButton = page.locator('label[for="impressiveRadio"]');
    this.noRadioButton = page.locator('label[for="noRadio"]');
  }
  async waitForPageToLoad() {
    await this.page.waitForSelector('#yesRadio');
  }
  async getPageTitle() {
    return this.page.title();
  }
  async getPageUrl() {
    return this.page.url();
  }

  async clickOnYesRadioButton() {
    await this.yesRadioButton.click();
    await this.page.waitForTimeout(1000);
  }
  async clickOnImpressiveRadioButton() {
    await this.impressiveRadioButton.waitFor({ state: 'visible' });
    await this.impressiveRadioButton.click();
    await this.page.waitForTimeout(1000);
  }
  async clickOnNoRadioButton() {
    await this.noRadioButton.click();
    await this.page.waitForTimeout(1000);
  }
}

import { Page, Locator } from '@playwright/test';

export class TextBoxPage {
  private page: Page;
  private fullName: Locator;
  private email: Locator;
  private currentAddress: Locator;
  private permanentAddress: Locator;
  private submitButton: Locator;
  private output: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullName = page.getByPlaceholder('Full Name');
    this.email = page.getByPlaceholder('name@example.com');
    this.currentAddress = page.getByPlaceholder('Current Address');
    this.permanentAddress = page.locator('#permanentAddress');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.output = page.locator('#output');
  }

  async waitForPageToLoad() {
    await this.page.waitForSelector('text=Text Box');
  }
  async getPageTitle() {
    return this.page.title();
  }
  async getPageUrl() {
    return this.page.url();
  }
  async enterFullName(name: string) {
    await this.fullName.waitFor({ state: 'visible' });
    await this.fullName.fill(name);
    await this.page.waitForTimeout(1000);
  }
  async enterEmail(email: string) {
    await this.email.waitFor({ state: 'visible' });
    await this.email.fill(email);
  }
  async enterCurrentAddress(address: string) {
    await this.currentAddress.waitFor({ state: 'visible' });
    await this.currentAddress.fill(address);
  }
  async enterPermanentAddress(address: string) {
    await this.permanentAddress.waitFor({ state: 'visible' });
    await this.permanentAddress.fill(address);
  }
  async clickOnSubmitButton() {
    await this.submitButton.waitFor({ state: 'visible' });
    await this.submitButton.click();
    await this.page.waitForTimeout(1000);
  }
  async getOutputText(): Promise<string> {
    await this.page.waitForSelector('#output'); // Wait for output to appear
    const outputText = await this.page.locator('#output').innerText();
    return outputText;
  }
}

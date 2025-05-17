import { Locator, Page, Download } from '@playwright/test';

export class UploadAndDownloadPage {
  private page: Page;
  private header: Locator;
  private uploadInput: Locator;
  private downloadBtn: Locator;
  private uploadedFilePath: Locator;
  private downloadSectionHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole('heading', { name: 'Upload and Download' });
    this.uploadInput = page.locator('#uploadFile');
    this.downloadBtn = page.locator('#downloadButton');
    this.uploadedFilePath = page.locator('#uploadedFilePath');
    this.downloadSectionHeader = page.getByRole('heading', {
      name: 'Download',
    });
  }

  async waitForPageToLoad(): Promise<void> {
    await this.header.waitFor({ state: 'visible' });
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async getPageUrl(): Promise<string> {
    return this.page.url();
  }

  async uploadFile(filePath: string): Promise<void> {
    await this.uploadInput.setInputFiles(filePath);
  }

  async clickDownloadButton(): Promise<Download> {
    await this.downloadBtn.waitFor({ state: 'visible' });

    const [download] = await Promise.all([
      this.page.waitForEvent('download'), // Mimic download handling
      this.downloadBtn.click(),
    ]);

    // Optionally save the file
    await download.saveAs(`downloads/${download.suggestedFilename()}`);

    return download;
  }

  // Accessors
  getHeader(): Locator {
    return this.header;
  }

  getUploadInput(): Locator {
    return this.uploadInput;
  }

  getDownloadButton(): Locator {
    return this.downloadBtn;
  }

  getDownloadSectionHeader(): Locator {
    return this.downloadSectionHeader;
  }

  getUploadedFilePathLocator(): Locator {
    return this.uploadedFilePath;
  }
}

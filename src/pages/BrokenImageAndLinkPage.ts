import {Locator,Page,request} from '@playwright/test';

export class BrokenImagePage{
    private page:Page;
    private brokenImageHeader: Locator;
    private brokenImage: Locator;
    private imagesPresentOnThePage: Locator;

    constructor(page:Page){
        this.page = page;
        this.brokenImageHeader = page.getByRole('heading', {name:'Broken Links - Images'});
        this.imagesPresentOnThePage = page.locator('img')
    }
    async waitForPageToLoad(){
        await this.page.waitForSelector('text=Broken Links - Images');
    }
    async getPageTitle(){
        return this.page.title();
    }
    async getPageUrl(){
        return this.page.url();
    }
    async getBrokenImages(): Promise<string[]> {
      this.page.on('console', msg => {
        console.log(`[BROWSER LOG]: ${msg.text()}`);
      });
        const brokenImages = await this.page.evaluate(() => {
          const imgs = Array.from(document.querySelectorAll('img'));
          console.log('imgs:', imgs);
          return imgs
            .filter(img => !(img.complete && img.naturalWidth > 0))
            .map(img => img.src);
        });
         
        return brokenImages;
      }
  async getBrokenLinks(): Promise<string[]> {
    this.page.on('console', msg => {
      console.log(`[BROWSER LOG]: ${msg.text()}`);
    });
    const urls = await this.page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('a'));
      console.log('anchors:', anchors);
      return anchors
        .map(anchor => anchor.href)
        .filter(href => href && !href.startsWith('javascript:'));
    });

    const requestContext = await request.newContext();
    const brokenLinks: string[] = [];

    for (const url of urls) {
      try {
        const response = await requestContext.get(url);
        if (response.status() >= 400) {
          brokenLinks.push(`${url} => Status: ${response.status()}`);
        }
      } catch (error) {
        brokenLinks.push(`${url} => Request Failed`);
      }
    }

    await requestContext.dispose();
    return brokenLinks;
  }
}
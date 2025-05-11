import {Locator,Page} from '@playwright/test';

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
    
}
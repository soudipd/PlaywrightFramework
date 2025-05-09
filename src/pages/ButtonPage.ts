import {Page, Locator} from '@playwright/test';  

export class ButtonPage{
   
    private page:Page;
    private button: Locator;
    private buttonHeader: Locator;
    private doubleClickButton: Locator;
    private rightClickButton: Locator;
    private dynamicClickButton: Locator;
    private message: Locator;

    constructor(page:Page){
        this.page = page;
        this.button = page.getByText('Buttons');
        this.buttonHeader = page.getByRole('heading', {name:'Buttons'});
        this.doubleClickButton = page.locator('#doubleClickBtn');
        this.rightClickButton = page.locator('#rightClickBtn');
        this.dynamicClickButton = page.locator('#dynamicClickBtn');
        this.message = page.locator('#dynamicClickMessage');
    }
    async waitForPageToLoad(){
        await this.page.waitForSelector('text=Buttons')
    }
    async getPageTitle(){
        return this.page.title();
    }
    async getPageUrl(){
        return this.page.url();
    }
}
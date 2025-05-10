import {Page, Locator} from '@playwright/test';  

export class ButtonPage{
   
    private page:Page;
    private button: Locator;
    private buttonHeader: Locator;
    private doubleClickButton: Locator;
    private rightClickButton: Locator;
    private dynamicClickButton: Locator;
    private doubleClickMessage: Locator;
    private rightClickMessage: Locator;

    constructor(page:Page){
        this.page = page;
        this.buttonHeader = page.getByRole('heading', {name:'Buttons'});
        this.doubleClickButton = page.locator('#doubleClickBtn');
        this.rightClickButton = page.locator('#rightClickBtn');
        this.dynamicClickButton = page.getByRole('button', {name:'Click Me', exact:true});
        this.doubleClickMessage = page.locator('#doubleClickMessage');
        this.rightClickMessage = page.locator('#rightClickMessage');
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
    async clickOnDoubleClickButton(){
        await this.doubleClickButton.dblclick();
    }
    async clickOnRightClickButton(){    
        await this.rightClickButton.click({button: 'right'});
    }
    async clickOnDynamicClickButton(){
        await this.dynamicClickButton.click();
    }
    async getDoubleClickMessage(){
        return this.doubleClickMessage;
    }
    async getRightClickMessage(){
        return this.rightClickMessage;
    }
    async getDynamicClickMessage(){
        return this.dynamicClickButton;
    }
}
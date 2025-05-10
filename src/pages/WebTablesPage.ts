import {test,expect,Locator,Page} from '@playwright/test';

export class WebTablesPage{
    private page:Page;
    private webTablesHeader: Locator;
    private rowsCount: Locator;

    constructor(page:Page){
        this.page = page;
        this.webTablesHeader = page.getByRole('heading', {name:'Web Tables'});
        this.rowsCount = page.getByRole('rowgroup');
    }
    async waitForPageToLoad(){
        await this.page.waitForSelector('text=Web Tables');
    }
    async getPageTitle(){
        return this.page.title();
    }
    async getPageUrl(){
        return this.page.url();
    }
    async getWebTablesText(){   
        return this.webTablesHeader;
    }
    async getRowsCount(){
        return this.rowsCount.count();
    }
}


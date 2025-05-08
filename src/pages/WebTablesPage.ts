import {test,expect,Locator,Page} from '@playwright/test';

export class WebTablesPage{
    private page:Page;
    private webTablesHeader: Locator;

    constructor(page:Page){
        this.page = page;
        this.webTablesHeader = page.getByRole('heading', {name:'Web Tables'});
    }
}


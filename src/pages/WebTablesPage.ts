import {Locator,Page} from '@playwright/test';

export class WebTablesPage{
    private page:Page;
    private webTablesHeader: Locator;
    private rowsCount: Locator;
    private firstNameHeader: Locator;
    private lastNameHeader: Locator;
    private emailHeader: Locator;
    private ageHeader: Locator;
    private salaryHeader: Locator;
    private departmentHeader: Locator;
    private actionHeader: Locator;

    constructor(page:Page){
        this.page = page;
        this.webTablesHeader = page.getByRole('heading', {name:'Web Tables'});
        this.rowsCount = page.getByRole('rowgroup');
        this.firstNameHeader= page.getByRole('columnheader', {name:'First Name'});
        this.lastNameHeader= page.getByRole('columnheader', {name:'Last Name'});
        this.emailHeader= page.getByRole('columnheader', {name:'Email'});
        this.ageHeader= page.getByRole('columnheader', {name:'Age'});
        this.salaryHeader= page.getByRole('columnheader', {name:'Salary'});
        this.departmentHeader= page.getByRole('columnheader', {name:'Department'});
        this.actionHeader= page.getByRole('columnheader', {name:'Action'});
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
    async getFirstNameHeaderText(){
        return this.firstNameHeader.textContent();
    }
    async getLastNameHeaderText(){
        return this.lastNameHeader.textContent();
    }
    async getEmailHeaderText(){
        return this.emailHeader.textContent();
    }
    async getAgeHeaderText(){
        return this.ageHeader.textContent();
    }
    async getSalaryHeaderText(){
        return this.salaryHeader.textContent();
    }
    async getDepartmentHeaderText(){
        return this.departmentHeader.textContent();
    }
    async getActionHeaderText(){
        return this.actionHeader.textContent();
    }
    async getFirstNameHeader(){
        return this.firstNameHeader;
    }


}


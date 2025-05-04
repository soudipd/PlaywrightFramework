import {Page,Locator, expect} from '@playwright/test';

export class CheckBoxPage{
    private page:Page;
    private checkBox: Locator;
    private checkBoxHeader: Locator;
    private homeCheckBox: Locator;
    private toggleButton: Locator;
    private plusIcon: Locator;
    private minusIcon: Locator;
    public result: Locator;

    constructor(page:Page){
        this.page = page;
        this.checkBox = page.getByText('Check Box');
        this.checkBoxHeader = page.getByRole('heading', {name:'Check Box'});
        this.homeCheckBox = page.locator('.rct-checkbox');
        this.toggleButton = page.getByRole('button', {name:'Toggle'});
        this.plusIcon = page.getByRole('button', {name:'Expand All'});
        this.minusIcon = page.getByRole('button', {name:'Collapse all'});
        this.result = page.locator('#result');
    }
    async waitForPageToLoad(){
        await this.page.waitForSelector('text=Home')
    }
    async getPageTitle(){
        return this.page.title();
    }
    async getPageUrl(){
        return this.page.url();
    }
    async clickOnCheckBoxBesideHome():Promise<boolean>{  
        const isCheckboxVisible = await this.homeCheckBox.isVisible();
        console.log(`Checkbox is visible: ${isCheckboxVisible}`);  
        await this.homeCheckBox.waitFor({state:'visible'});
        await this.homeCheckBox.hover();
        if(await this.homeCheckBox.isEnabled()){
        console.log("CheckBox is enabled");
        await this.homeCheckBox.click();
        await this.page.waitForTimeout(1000);
        const resultIsDisplayed = await this.result.isVisible();
        console.log(`Result is displayed: ${resultIsDisplayed}`);
    } else{
        console.log("CheckBox is not enabled");
     }
     return await this.homeCheckBox.isChecked();
    }

}
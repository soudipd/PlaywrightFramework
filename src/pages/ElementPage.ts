import {Page, Locator} from '@playwright/test';
import { CheckBoxPage } from './CheckBoxPage';
import { TextBoxPage } from './TextBoxPage';
import { RadioButtonPage } from '../pages/RadioButtonPage';

export class ElementsPage{
    private page:Page;
    private textBox: Locator;
    private checkBox: Locator;
    private radioButton: Locator;
    private webTables: Locator;
    private webTablesHeader: Locator;
    private buttons: Locator;
    private links: Locator;
    private brokenLinksImages: Locator;
    private uploadAndDownload: Locator;
    private dynamicProperties: Locator;

    constructor(page:Page){
        this.page = page;
        this.textBox = page.getByText('Text Box');
        this.checkBox = page.getByText('Check Box');
        this.radioButton = page.getByText('Radio Button');
        this.webTables = page.getByText('Web Tables');
        this.webTablesHeader = page.getByRole('heading', {name:'Web Tables'});
        this.buttons = page.getByText('Buttons');
        this.links = page.getByText('Links');
        this.brokenLinksImages = page.getByText('Broken Links - Images');
        this.uploadAndDownload = page.getByText('Upload and Download');
        this.dynamicProperties = page.getByText('Dynamic Properties');
    }

    async waitForPageToLoad(){
        await this.page.waitForSelector('text=Elements')
    }
    async getPageTitle(){
        return this.page.title();
    }
    async getPageUrl(){ 
        return this.page.url();
    }

    async clickOnTextBox(){
        await this.textBox.waitFor({state:'visible'});
        await this.textBox.hover();
        await this.textBox.click();
    }
    async navigateToTextBox():Promise<TextBoxPage>{
        await this.textBox.waitFor({state:'visible'});
        await this.textBox.hover();
        await this.textBox.click();
        return new TextBoxPage(this.page);
    }
    async clickOnCheckBox(){
        await this.checkBox.waitFor({state:'visible'});
        await this.checkBox.click();
    }
    async navigateToCheckBox():Promise<CheckBoxPage>{
        await this.checkBox.waitFor({state:'visible'});
        await this.checkBox.hover();
        await this.checkBox.click();
        return new CheckBoxPage(this.page);
    }
    async navigateToRadioButtonPage():Promise<RadioButtonPage>{

        await this.radioButton.waitFor({state:'visible'});
        await this.radioButton.hover();
        await this.radioButton.click();
        const radioButtonPageObj = new RadioButtonPage(this.page);
        return radioButtonPageObj;
    }
    async clickOnRadioButton(){ 
        await this.radioButton.waitFor({state:'visible'});
        await this.radioButton.click();
    }
    async clickOnWebTables(){             
        await this.webTables.waitFor({state:'visible'});
        await this.webTables.click();
    }
    async clickOnButtons(){
        await this.buttons.waitFor({state:'visible'});
        await this.buttons.click();
    }
    async clickOnLinks(){
        await this.links.waitFor({state:'visible'});
        await this.links.click();
    }
    async clickOnBrokenLinksImages(){
        await this.brokenLinksImages.waitFor({state:'visible'});
        await this.brokenLinksImages.click();
    }
    async clickOnUploadAndDownload(){   
        await this.uploadAndDownload.waitFor({state:'visible'});
        await this.uploadAndDownload.click();
    }
    async clickOnDynamicProperties(){
        await this.dynamicProperties.waitFor({state:'visible'});
        await this.dynamicProperties.click();
    }
    async getTextBoxText(){ 
        return this.textBox.textContent();
    }
    async getCheckBoxText(){    
        return this.checkBox.textContent();
    }
    async getRadioButtonText(){
        return this.radioButton.textContent();
    }
    async getWebTablesText(){
        return this.webTablesHeader.textContent();
    }
    async getButtonsText(){
        return this.buttons.textContent();
    }
    async getLinksText(){
        return this.links.textContent();
    }
    async getBrokenLinksImagesText(){
        return this.brokenLinksImages.textContent();
    }
    async getUploadAndDownloadText(){
        return this.uploadAndDownload.textContent();
    }
    async getDynamicPropertiesText(){
        return this.dynamicProperties.textContent();
    }
    async getTextBoxTextLocator(){
        return this.textBox;
    }
    async getCheckBoxTextLocator(){
        return this.checkBox;
    }
    async getRadioButtonTextLocator(){
        return this.radioButton;
    }
    async getWebTablesTextLocator(){
        return this.webTables;
    }
    async getButtonsTextLocator(){
        return this.buttons;
    }
    async getLinksTextLocator(){
        return this.links;
    }   
    async getBrokenLinksImagesTextLocator(){
        return this.brokenLinksImages;
    }
    async getUploadAndDownloadTextLocator(){    
        return this.uploadAndDownload;
    }
    async getDynamicPropertiesTextLocator(){
        return this.dynamicProperties;
    }           

}
import {Page, Locator } from '@playwright/test'
import { ElementsPage } from '../pages/ElementPage';

export class demoQAHomePage{
 private page: Page;
 private elementsCard: Locator;
 private formsCard: Locator;
 private alertsFrameWindowsCard: Locator;
 private widgetsCard: Locator;
 private interactionsCard: Locator;
 private bookstoreApplicationCard: Locator;

 constructor(page:Page){
    this.page =page;
    this.elementsCard = page.getByRole('heading',{name:'Elements'})
    this.formsCard = page.getByRole('heading',{name:'Forms'})
    this.alertsFrameWindowsCard = page.getByRole('heading',{name:'Alerts, Frame & Windows'})
    this.widgetsCard = page.getByRole('heading',{name:'Widgets'})
    this.interactionsCard = page.getByRole('heading',{name:'Interactions'})
    this.bookstoreApplicationCard = page.getByRole('heading',{name:'Book Store Application'})
 }
    //Page level actions
    async navigateToDemoQAHomePage(){
            await this.page.goto('https://demoqa.com/')
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
    //end of page level actions

    //Interactions methods with the elements card
    async waitAndClickOnElementsCard(){
        await this.elementsCard.waitFor({state:'visible'});
        await this.elementsCard.click();
    }
    async navigateToElementsPage():Promise<ElementsPage>{
        await this.elementsCard.waitFor({state:'visible'});
        await this.elementsCard.click();
        return new ElementsPage(this.page);
    }
    async getElementsCardText(){
        return this.elementsCard.textContent();
    }
    async getElementsCardTextLocator(){
        return this.elementsCard;
    }
    async getElementsCardTextLocatorText(){
        return this.elementsCard.textContent();
    }
    async getElementsCardTextLocatorTextValue(){
        return this.elementsCard.innerText();
    }
    //End of interactions methods with the elements card
    
    //Interactions methods with the forms card
    async waitAndClickOnFormsCard(){
        await this.formsCard.waitFor({state:'visible'});
        await this.formsCard.click();
    }

    async clickOnFormsCard(){
        await this.formsCard.click();
    }
    //End of interactions methods with the forms card
    
    //Interactions methods with the alerts frame windows card
    async waitAndClickOnAlertsFrameWindowsCard(){
        await this.alertsFrameWindowsCard.waitFor({state:'visible'});
        await this.alertsFrameWindowsCard.click();
    }
    
    async clickOnAlertsFrameWindowsCard(){
        await this.alertsFrameWindowsCard.click();
    }
    //End of interactions methods with the alerts frame windows card
    
    //Interactions methods with the widgets card
    async clickOnWidgetsCard(){ 
        await this.widgetsCard.click();
    }
    //End of interactions methods with the widgets card
    
    //Interactions with methods the interactions card
    async clickOnInteractionsCard(){        
        await this.interactionsCard.click();
    }
    //End of interactions methods with the interactions card

    //Interactions methods with the bookstore application card
    async clickOnBookstoreApplicationCard(){
        await this.bookstoreApplicationCard.click();
    }
    //End of interactions methods with the bookstore application card
    
}
import {test, expect} from '@playwright/test';
import { demoQAHomePage } from '../pages/HomePage';


test.skip('Home Page Navigation', async ({page}) => {
    const demoQAHomePageObj = new demoQAHomePage(page);
    await demoQAHomePageObj.navigateToDemoQAHomePage();
    await demoQAHomePageObj.waitForPageToLoad();
    const pageTitle = await demoQAHomePageObj.getPageTitle();
    const pageUrl = await demoQAHomePageObj.getPageUrl();
    console.log('Page Title:', pageTitle);
    console.log('Page URL:', pageUrl);
    expect(pageTitle).toBe('DEMOQA');
    expect(pageUrl).toBe('https://demoqa.com/');
});
test('Miscellaneous Test', async ({page}) => {
    
    const demoQAHomePageObj = new demoQAHomePage(page);
    await demoQAHomePageObj.navigateToDemoQAHomePage();
    await demoQAHomePageObj.waitForPageToLoad();
    
    const elementPageObj= await demoQAHomePageObj.navigateToElementsPage();
    const pageTitle = await elementPageObj.getPageTitle();
    
    console.log('Page Title:', pageTitle);
    const pageUrl = await elementPageObj.getPageUrl();
    console.log('Page URL:', pageUrl);
    expect(pageUrl).toBe('https://demoqa.com/elements');
    await elementPageObj.clickOnTextBox();
    await elementPageObj.clickOnWebTables();
    console.log("Web Tables page title: ", await elementPageObj.getWebTablesText());

    const textBoxPageObj = await elementPageObj.navigateToTextBox();
    await textBoxPageObj.waitForPageToLoad();
    console.log('Text Box Page URL:', await textBoxPageObj.getPageUrl());

    await textBoxPageObj.enterFullName("Soudip Das")
    await textBoxPageObj.enterEmail("soudipdas@gmil.com")
    await textBoxPageObj.enterCurrentAddress("Soudip Das, 1234, 5th Avenue, New York, NY 10001")
    await textBoxPageObj.enterPermanentAddress("Soudip Das, 1234, 5th Avenue, New York, NY 10001")
    await textBoxPageObj.clickOnSubmitButton();
    const output = await textBoxPageObj.getOutputText();
    console.log('Output:', output);
    expect(output).toContain('Name:Soudip Das');
    expect(output).toContain('Email:soudipdas@gmil.com');
    expect(output).toContain('Current Address :Soudip Das, 1234, 5th Avenue, New York, NY 10001');
    expect(output).toContain('Permananet Address :Soudip Das, 1234, 5th Avenue, New York, NY 10001');
    
    const checkBoxPageObj = await elementPageObj.navigateToCheckBox();
    await checkBoxPageObj.waitForPageToLoad();
    console.log('Check Box Page URL:', await checkBoxPageObj.getPageUrl());
    const isCheckBoxChecked = await checkBoxPageObj.clickOnCheckBoxBesideHome();
    const resultLocator = await checkBoxPageObj.getResult();
    if(isCheckBoxChecked){
        expect(await resultLocator.isVisible()).toBeTruthy()
    }else{
        console.log('CheckBox is not checked')
    }
    
});
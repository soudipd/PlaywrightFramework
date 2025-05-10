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
test.skip('Miscellaneous Test', async ({page}) => {
    
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

    await textBoxPageObj.enterFullName("Soudip Das");
    await textBoxPageObj.enterEmail("soudipdas@gmil.com");
    await textBoxPageObj.enterCurrentAddress("Soudip Das, 1234, 5th Avenue, New York, NY 10001");
    await textBoxPageObj.enterPermanentAddress("Soudip Das, 1234, 5th Avenue, New York, NY 10001");
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
    /*const isCheckBoxChecked = await checkBoxPageObj.clickOnTheCheckBoxBesideHome();*/
    const resultLocator = await checkBoxPageObj.getResult();
    /*if(isCheckBoxChecked){
        expect(await resultLocator.isVisible()).toBeTruthy()
    }else{
        console.log('CheckBox is not checked')
    }*/
    const homeCheckBoxLocator = await checkBoxPageObj.getHomeCheckBox();
    await checkBoxPageObj.clickOnToggleButton();
    const desktopCheckBoxLocator = await checkBoxPageObj.getDesktopCheckBox();
    const documentsCheckBoxLocator = await checkBoxPageObj.getDocumentsCheckBox();
    const downloadCheckBoxLocator = await checkBoxPageObj.getDownloadCheckBox();
    
    await homeCheckBoxLocator.click();
    if(await homeCheckBoxLocator.isChecked()){
        if(await desktopCheckBoxLocator.isChecked()){
            if(await documentsCheckBoxLocator.isChecked()){
                if(await downloadCheckBoxLocator.isChecked()){
                    console.log('All checkboxes are checked');
                }else{
                    console.log('Download checkbox is not checked');
                }
            }else{
                console.log('Documents checkbox is not checked');
            }
        }else{
            console.log('Desktop checkbox is not checked');         
        }
    }
    
    
    
    await page.waitForTimeout(1000);
    console.log('After selection following is being displayed:', await checkBoxPageObj.getTextFromResultElement());
    
    await homeCheckBoxLocator.click();
    if(!await homeCheckBoxLocator.isChecked()){
        if(!await desktopCheckBoxLocator.isChecked()){
            if(!await documentsCheckBoxLocator.isChecked()){
                if(!await downloadCheckBoxLocator.isChecked()){
                    console.log('All checkboxes are unchecked');
                }else{
                    console.log('Download checkbox is not unchecked');
                }
            }else{
                console.log('Documents checkbox is not unchecked');
            }
        }else{
            console.log('Desktop checkbox is not unchecked');         
        }
    }
    expect(await resultLocator.isVisible()).toBeFalsy();

});

test.skip('Radio Button Test', async ({page}) => {
    const demoQAHomePageObj = new demoQAHomePage(page);
    await demoQAHomePageObj.navigateToDemoQAHomePage();
    await demoQAHomePageObj.waitForPageToLoad();
    const elementPageObj=await demoQAHomePageObj.navigateToElementsPage();
    const radioButtonPageObj = await elementPageObj.navigateToRadioButtonPage();
    await radioButtonPageObj.waitForPageToLoad();
    await radioButtonPageObj.clickOnYesRadioButton();
    await radioButtonPageObj.clickOnImpressiveRadioButton();   
});
test.skip('button test', async ({page}) => { 
    const demoQAHomePageObj = new demoQAHomePage(page);
    await demoQAHomePageObj.navigateToDemoQAHomePage();
    await demoQAHomePageObj.waitForPageToLoad();
    const elementPageObj=await demoQAHomePageObj.navigateToElementsPage();
    const buttonPageObj = await elementPageObj.navigateToButtonPage();
    await buttonPageObj.waitForPageToLoad();
    console.log('Button Page URL:', await buttonPageObj.getPageUrl());
    await buttonPageObj.clickOnDoubleClickButton();
    await (await buttonPageObj.getDoubleClickMessage()).waitFor({state:'visible'});
    await buttonPageObj.clickOnRightClickButton();
    await (await buttonPageObj.getRightClickMessage()).waitFor({state:'visible'});
    await buttonPageObj.clickOnDynamicClickButton();
    await (await buttonPageObj.getDynamicClickMessage()).waitFor({state:'visible'});
});
test('Web Tables Test', async ({page}) => {
    const demoQAHomePageObj = new demoQAHomePage(page);
    await demoQAHomePageObj.navigateToDemoQAHomePage();
    await demoQAHomePageObj.waitForPageToLoad();
    const elementPageObj=await demoQAHomePageObj.navigateToElementsPage();
    const webTablesPageObj = await elementPageObj.naviagteToWebTablesPage();
    await webTablesPageObj.waitForPageToLoad();
    console.log('Web Tables Page URL:', await webTablesPageObj.getPageUrl());
    console.log('Web Tables Page Title:', await webTablesPageObj.getPageTitle());
    console.log('Web Tables Header:', await webTablesPageObj.getRowsCount());
    expect( await webTablesPageObj.getRowsCount()).toBe(10)
    expect(await webTablesPageObj.getFirstNameHeaderText()).toBe('First Name');
    expect(await webTablesPageObj.getLastNameHeaderText()).toBe('Last Name');
    expect(await webTablesPageObj.getEmailHeaderText()).toBe('Email');
    expect(await webTablesPageObj.getAgeHeaderText()).toBe('Age');
    expect(await webTablesPageObj.getSalaryHeaderText()).toBe('Salary');
    expect(await webTablesPageObj.getDepartmentHeaderText()).toBe('Department');
    expect(await webTablesPageObj.getActionHeaderText()).toBe('Actions');
});
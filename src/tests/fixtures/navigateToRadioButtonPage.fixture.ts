import {test as base } from '../fixtures/navigateToElementsPage.fixture'
import { RadioButtonPage } from '../../pages/RadioButtonPage'

type navigateToRadioButton = {
    radioButtonPage: RadioButtonPage;
}
export const test = base.extend<navigateToRadioButton>({
    radioButtonPage: async ({elementsPage}, use) => {
        const radioButtonPageObj = await elementsPage.navigateToRadioButtonPage();
        await radioButtonPageObj.waitForPageToLoad();
        await use(radioButtonPageObj);
    }
});
export { expect } from '@playwright/test';
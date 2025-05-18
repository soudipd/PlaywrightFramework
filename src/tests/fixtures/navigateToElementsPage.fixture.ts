import {test as base} from '../fixtures/navigateToHomePage.fixture';
import { ElementsPage } from '../../pages/ElementPage';

type navigateToElementsPage = {
    elementsPage: ElementsPage;
}
export const test = base.extend<navigateToElementsPage>({
    elementsPage: async ({homePage}, use) => {
        const elementsPageObj = await homePage.navigateToElementsPage();
        await elementsPageObj.waitForPageToLoad();
        await use(elementsPageObj);
    }
});
export { expect } from '@playwright/test';

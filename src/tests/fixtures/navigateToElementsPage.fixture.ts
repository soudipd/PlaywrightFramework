import {test as base} from '../fixtures/navigateToHomePage.fixture';
import { ElementsPage } from '../../pages/ElementPage';

type navigateToElementsPage = {
    navigateToElementsPage: ElementsPage;
}
export const test = base.extend<navigateToElementsPage>({
    navigateToElementsPage: async ({navigateToHomePage}, use) => {
        const elementsPageObj = await navigateToHomePage.navigateToElementsPage();
        await elementsPageObj.waitForPageToLoad();
        await use(elementsPageObj);
    }
});
export { expect } from '@playwright/test';

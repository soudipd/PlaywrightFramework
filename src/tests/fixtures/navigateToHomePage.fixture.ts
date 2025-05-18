import {test as base, Page} from '@playwright/test';
import {demoQAHomePage} from '../../pages/HomePage';

type navigateToHomePage ={
    page:Page
    homePage: demoQAHomePage;
}
export const test = base.extend<navigateToHomePage>({
    homePage: async ({page}, use) => {
        const homePage = new demoQAHomePage(page);
        await homePage.navigateToDemoQAHomePage()
        await homePage.waitForPageToLoad();
        await use(homePage);
    }
});
export { expect } from '@playwright/test';
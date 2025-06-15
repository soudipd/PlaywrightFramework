import {test as base} from '../fixtures/navigateToElementsPage.fixture';
import {TextBoxPage} from '../../pages/TextBoxPage';

type navigateToTextBox = {
  textBoxPage: TextBoxPage;
};
export const test = base.extend<navigateToTextBox>({
  textBoxPage: async ({elementsPage}, use) => {
    const textBoxPageObj = await elementsPage.navigateToTextBox();
    await textBoxPageObj.waitForPageToLoad();
    await use(textBoxPageObj);
  }
});
export {expect} from '@playwright/test';
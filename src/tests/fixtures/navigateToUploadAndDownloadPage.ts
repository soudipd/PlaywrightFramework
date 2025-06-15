import {test as base} from '../fixtures/navigateToElementsPage.fixture';
import {UploadAndDownloadPage} from '../../pages/UploadAndDownloadPage';

type navigateToUploadAndDownloadPageTestFixtures = {
  uploadAndDownloadPageObj: UploadAndDownloadPage;
};
export const test = base.extend<navigateToUploadAndDownloadPageTestFixtures>({
  uploadAndDownloadPageObj: async ({ elementsPage }, use) => {
    elementsPage.waitForPageToLoad();
    const uploadAndDownloadPageObj = await elementsPage.navigateToUploadAndDownloadPage();
    await use(uploadAndDownloadPageObj);
  }
});

import { test } from '@playwright/test';
import { LoginPage } from './pages/loginPage';

test.describe('OrangeHRM login', () => {
  test('logs in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('Admin', 'admin123');
    await loginPage.verifyDashboard();
  });
});

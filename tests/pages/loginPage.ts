import { expect, type Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
  }

  async login(username: string, password: string) {
    await this.page.locator('input[name="username"]').fill(username);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('button[type="submit"]').click();
  }

  async verifyDashboard() {
    await expect(this.page).toHaveURL(/dashboard/);
    await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  }
}

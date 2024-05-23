// tests/PageManager.ts

import { Page } from 'playwright';
import LoginPage from '../page-objects/loginPage';
import HomePage from '../page-objects/homePage';

export class PageManager {
  private static instance: PageManager;
  private page: Page;
  public loginPage: LoginPage;
  public homePage: HomePage;

  private constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
  }

  public static getInstance(page: Page): PageManager {
    if (!PageManager.instance) {
      PageManager.instance = new PageManager(page);
    }
    return PageManager.instance;
  }
}

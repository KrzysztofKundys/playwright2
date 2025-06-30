// @ts-check
import { test, expect } from '@playwright/test';
import { Gdpr } from '../gdpr/gdpr.js';
import { Login } from '../login/login.js';

test('log in to page', async ({ page }) => {
  const gdpr = new Gdpr(page);
  const login = new Login(page);

  await page.goto('/login');

   if (process.env.SHOWGPDR === 'true') {
    await gdpr.acceptCookies();
    
  }

  await gdpr.acceptCookies();

  await login.loginCredential(process.env.EMAIL, process.env.PASSWORD);
  await expect(page.getByText(`Logged in as ${process.env.TESTUSER}`)).toBeVisible();
});
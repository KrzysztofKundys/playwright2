// @ts-check
import { test, expect } from '@playwright/test';
// import { MainPage } from '../pages/main-page';
import { NewHome } from '../../pages/new-home';

test.describe('navigation items - categories', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('LetCode with Koushik');
  });

  // test('navigate to page - kursy', async ({ page }) => {
  //   const mainPage = new MainPage(page);

  //   await page.goto('/');

  //   // Expect a title "to contain" a substring.
  //   await expect(page).toHaveTitle('Strona główna - Fundacja CODE:ME - Kursy i szkolenia IT, programowanie, AI');

  //   await page.locator('#main-nav').getByRole('link', { name: 'Kursy' }).click();

  //   await expect(page).toHaveURL('/kursy/');
  //   await expect(page).toHaveTitle('Kursy - Fundacja CODE:ME - Kursy i szkolenia IT, programowanie, AI');

  //   await mainPage.hoverAndClick();
  //   await expect(page).toHaveURL('https://codeme.pl/metody-finansowania-kursow/');

  // });


  // test('navigate to page - eventy', { tag: '@smoke' }, async ({ page }) => {
  //   await page.goto('/');

  //   // Expect a title "to contain" a substring.
  //   await expect(page).toHaveTitle('Strona główna - Fundacja CODE:ME - Kursy i szkolenia IT, programowanie, AI');

  //   await page.locator('#menu-item-916').getByRole('link', { name: 'Eventy' }).click();

  //   await expect(page).toHaveURL('/eventy/');
  //   await expect(page).toHaveTitle('Eventy - Fundacja CODE:ME - Kursy i szkolenia IT, programowanie, AI');

  // });

  // test('navigate to page - Dla kursanta', async ({ page }) => {
  //   await page.goto('/');

  //   await expect(page).toHaveTitle('Strona główna - Fundacja CODE:ME - Kursy i szkolenia IT, programowanie, AI');

  //   await page.locator('#menu-item-53').getByRole('link', { name: 'Dla kursanta' }).hover();
  //   await page.locator('#menu-item-148').getByRole('link', { name: 'Jak zapisać się na kurs?' }).click();

  //   await expect(page).toHaveURL('jak-zapisac-sie-na-kurs/');
  //   await expect(page).toHaveTitle('Jak zapisać się na kurs? - Fundacja CODE:ME - Kursy i szkolenia IT, programowanie, AI');

  // });

  // test('navigate to page - Materiały do pobrania', async ({ page }) => {
  //   await page.goto('/');

  //   await expect(page).toHaveTitle('Strona główna - Fundacja CODE:ME - Kursy i szkolenia IT, programowanie, AI');

  //   await page.locator('#menu-item-53').getByRole('link', { name: 'Dla kursanta' }).hover();
  //   await page.locator('#menu-item-145').getByRole('link', { name: 'Materiały do pobrania' }).click();

  //   await expect(page).toHaveURL('/materialy-do-pobrania/');
  //   await expect(page).toHaveTitle('Materiały do pobrania - Fundacja CODE:ME - Kursy i szkolenia IT, programowanie, AI');

  // });

  test('letcode - home to cart check', async ({ page }) => {
    const newHome = new NewHome(page);

    await newHome.navigateTo();
    await newHome.homePageCheckTitleAndURL();
    await newHome.itemPriceButton.click();
    await newHome.productPageCheckTitleAndURL();
    await newHome.addToCartAndNavigateToIt();
    await newHome.cartPageCheckTitleAndURL();
    await newHome.checkCartHasText.toHaveText('1');
  });

  // test('letcode - cart tests', async ({ page }) => {
  //   const newHome = new NewHome(page);

  //   await page.goto('/cart/');
  //   await expect(page).toHaveTitle('Cart - Fake Store | LetCode with Koushik');
  //   await expect(page).toHaveURL('/cart');
  //   await expect(page.locator('p.title.is-4')).toHaveText('Your cart is empty');
  // });

})

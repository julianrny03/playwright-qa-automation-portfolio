import { expect } from '@playwright/test';
import { test } from './fixtures/pages.fixture';

import { testData } from './data/testData';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('mi primera prueba', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

test('navegar a installation', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page
    .getByRole('link', { name: 'Get started' })
    .click();

 await expect(
  page.getByRole('heading', { name: 'Installation' })
).toBeVisible();
});

test('login con password incorrecto', async ({ loginPage, page }) => {
  await loginPage.goto();

  await loginPage.login(
    'standard_user',
    'password_incorrecto'
  );

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText(
    'Username and password do not match'
  );
});
test('agregar dos productos al carrito', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.addBackpackToCart();
  await inventoryPage.addBikeLightToCart();

  await inventoryPage.verificarCantidadCarrito(2);
});


test('usuario bloqueado no puede iniciar sesion', async ({ loginPage, page }) => {
  await loginPage.goto();

  await loginPage.login(
    'locked_out_user',
    'secret_sauce'
  );

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText(
    'Sorry, this user has been locked out'
  );
});

test('formulario de login', async ({
  page,
  loginPage,
  inventoryPage,
  cartPage,
  checkoutPage
}) => {
  await loginPage.goto();

  await loginPage.login(
    testData.username,
    testData.password
  );

  await expect(
    page.locator('[data-test="secondary-header"]')
  ).toContainText('Products');

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await expect(
    page.getByRole('button', { name: 'Remove' })
  ).toBeVisible();

  await expect(
    page.getByText('Sauce Labs Backpack')
  ).toBeVisible();

  await cartPage.checkout();

  await checkoutPage.completarInformacion(
    testData.firstName,
    testData.lastName,
    testData.postalCode
  );

  await expect(
    page.getByText('Checkout: Overview')
  ).toBeVisible();

  await expect(
    page.getByText('Payment Information')
  ).toBeVisible();

  await checkoutPage.finishOrder();

  await expect(
    page.getByText('Thank you for your order!')
  ).toBeVisible();
});


test('eliminar producto actualiza el carrito', async ({
  loginPage,
  inventoryPage,
  cartPage
}) => {
  await loginPage.goto();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.addBackpackToCart();
  await inventoryPage.addBikeLightToCart();

  await inventoryPage.verificarCantidadCarrito(2);

  await inventoryPage.openCart();

  await cartPage.removeBackpack();

  await cartPage.verificarCantidadCarrito(1);
});
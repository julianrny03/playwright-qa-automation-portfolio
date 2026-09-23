import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}
  async addBackpackToCart() {
  await this.page
    .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click();
}
async addBikeLightToCart() {
  await this.page
    .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
    .click();
}

async verificarCantidadCarrito(cantidad: number) {
  await expect(
    this.page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveText(cantidad.toString());
}
async openCart() {
  await this.page
    .locator('[data-test="shopping-cart-link"]')
    .click();
}

}
import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async checkout() {
    await this.page
      .getByRole('button', { name: 'Checkout' })
      .click();
  }

async removeBackpack() {
  await this.page
    .locator('[data-test="remove-sauce-labs-backpack"]')
    .click();
}

async verificarCantidadCarrito(cantidad: number) {
  await expect(
    this.page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveText(cantidad.toString());
}
}
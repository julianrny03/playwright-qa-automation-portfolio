import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async completarInformacion(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Zip/Postal Code').fill(postalCode);
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async finishOrder() {
    await this.page
      .getByRole('button', { name: 'Finish' })
      .click();
  }
}
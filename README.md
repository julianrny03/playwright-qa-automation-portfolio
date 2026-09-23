# Playwright QA Automation Portfolio

A QA Automation portfolio project built with **Playwright** and **TypeScript**, demonstrating end-to-end testing, Page Object Model (POM), reusable fixtures, test data management, assertions, and negative testing.

## 🚀 Technologies

- Playwright
- TypeScript
- JavaScript
- Node.js
- Git
- GitHub

## 🧪 Automated Test Scenarios

This project currently includes automated tests for:

- Successful login
- Login with incorrect password
- Locked-out user validation
- Product page validation
- Adding products to the shopping cart
- Shopping cart quantity validation
- Removing products from the cart
- Checkout workflow
- Order confirmation
- Negative testing

The test suite currently contains **9 automated tests** running successfully in Chromium.

## 🏗️ Test Architecture

The project uses a Page Object Model structure:

```text
tests/
├── data/
│   └── testData.ts
├── fixtures/
│   └── pages.fixture.ts
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
└── example.spec.ts
```

### Page Object Model

Page-specific actions are separated from the test scenarios to improve:

- Reusability
- Maintainability
- Readability
- Scalability

### Fixtures

Custom Playwright fixtures provide reusable Page Objects directly to the tests.

### Test Data

Test credentials and checkout data are separated from the test logic using `testData.ts`.

## ▶️ Running the Tests

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run the complete test suite:

```bash
npx playwright test --project=chromium
```

Run tests in headed mode:

```bash
npx playwright test --project=chromium --headed
```

Open the HTML report:

```bash
npx playwright show-report
```

## ✅ Current Test Result

```text
Running 9 tests using 4 workers
9 passed
```

## 🎯 Project Purpose

This project demonstrates practical QA Automation skills using a real end-to-end testing workflow, including positive and negative scenarios, reusable test architecture, browser automation, debugging, and Git version control.

## 👤 Author

**Julian Ospina**

QA Automation / Software Testing Portfolio
# 🚀 QA Automation Testing – Task

This project contains **automated end-to-end (E2E) tests** built with **Playwright**  
to test the form functionality on [SauceDemo](https://www.saucedemo.com/).

It serves as an example of a **QA automation project** that tests login, product selection,  
checkout flow, and validation messages.

---

## 📖 Table of Contents

- 🧠 About  
- ⚙️ Technologies  
- 📁 Project Structure  
- 💡 Installation & Setup  
- 🧪 Test Scenarios  
- 🛠️ Troubleshooting 

---

## 🧠 About

This repository demonstrates **automated QA testing** using the **Playwright** framework.  
The tests verify key functionalities of a demo web shop, including:

- Logging into the application  
- Adding products to the shopping cart  
- Completing the checkout process  
- Verifying “Thank You” and confirmation messages  
- Using **random test data** for form fields  


---

## ✨ Features

- 🔹 Playwright E2E tests  
- 🔹 Page Object Model structure (POM)  
- 🔹 Reusable test utility for random data generation  
- 🔹 Automatic test execution in Chromium, Firefox, and WebKit  
- 🔹 Option to run headless or with visible browser  

---

## ⚙️ Installation

### Prerequisites
Before running the tests, make sure you have the following installed on your system:
- Node.js v18+
- npm (comes with Node.js)
- Google Chrome browser

### Steps
```bash
# Clone the repository
git clone https://github.com/nikoladomagoj/playwright-automation-tests.git

# Navigate to the project folder
cd <playwright-automation-tests>

# Initialize npm (if not already done)
npm init -y

# Install Playwright test runner
npm install --save-dev @playwright/test

# Install Playwright browsers
npx playwright install

# Run the Playwright test suite
npx playwright test

# Run tests with browser visible
npx playwright test --headed

# In your tests folder, make sure your structure follows this pattern:
tests/
 ├── pages/
 │    └── saucedemo.page.ts
 ├── specs/
 │    └── saucedemo.spec.ts
 └── utility/
      └── random.ts


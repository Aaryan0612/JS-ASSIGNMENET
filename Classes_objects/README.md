# 🏦 Simple Banking System (Classes & Objects)

A "Real World" banking simulation built using JavaScript Classes and Objects. This project demonstrates Object-Oriented Programming (OOP) concepts in a user-friendly web interface.

## 📂 Project Structure

- **`index.html`**: The graphical user interface (GUI) for creating accounts and performing transactions.
- **`script.js`**: Contains the `Bank` and `BankAccount` classes that handle the logic (storage, validation, math).

## 🚀 How to Run

1.  Navigate to the `Classes_objects` folder.
2.  Open `index.html` in your browser.

## 🛠️ How to Use

### 1. Create an Account
   - Fill in the **ID** (must be unique), **Name**, **Phone Number**, and **Initial Deposit**.
   - Click **"Create Account"**.
   - You will see the new account appear in the list at the bottom.

### 2. Check Balance
   - Enter the **Account ID** in the "Account Operations" box.
   - Click **"Check Balance"**. A message will pop up showing the current funds.

### 3. Deposit & Withdraw
   - Enter the **Account ID**.
   - Enter the **Amount** you wish to add or remove.
   - Click **"Deposit"** or **"Withdraw"**.
   - The system validates the balance (e.g., you cannot withdraw more than you have).

## 🧠 Key Concepts Used
- **Classes & Constructors**: For creating distinct `BankAccount` objects.
- **Static Methods**: Used in the `Bank` class to manage the global list of accounts.
- **DOM Manipulation**: Updating the UI in real-time based on data changes.

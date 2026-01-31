// --- 1. Class Definitions ---
class BankAccount {
    constructor(id, name, phone, balance) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.balance = parseFloat(balance);
    }
}

class Bank {
    // Array to store all account objects
    static accounts = [];

    // Method to add a new account
    static addAccount(id, name, phone, amount) {
        // Check if ID already exists
        const exists = Bank.accounts.find(acc => acc.id === id);
        if (exists) {
            showMessage(`Error: Account ID ${id} already exists!`, "red");
            return;
        }

        const newAcc = new BankAccount(id, name, phone, amount);
        Bank.accounts.push(newAcc);
        showMessage(`Success: Account created for ${name}`, "green");
        updateTable();
    }

    // Method to find an account by ID
    static findAccount(id) {
        return Bank.accounts.find(acc => acc.id === id);
    }
}

// --- 2. Button Functions ---

function createAccount() {
    // Get values from HTML inputs
    const id = document.getElementById('newId').value;
    const name = document.getElementById('newName').value;
    const phone = document.getElementById('newPhone').value;
    const amount = document.getElementById('newAmount').value;

    // Simple validation
    if (id === "" || name === "" || phone === "" || amount === "") {
        showMessage("Please fill in all fields correctly.", "red");
        return;
    }

    Bank.addAccount(id, name, phone, amount);

    // Clear inputs
    document.getElementById('newId').value = "";
    document.getElementById('newName').value = "";
    document.getElementById('newPhone').value = "";
    document.getElementById('newAmount').value = "";
}

function checkBalance() {
    const id = document.getElementById('actionId').value;
    const account = Bank.findAccount(id);

    if (account) {
        showMessage(`Balance for ${account.name} (ID: ${id}): ₹${account.balance}`, "blue");
    } else {
        showMessage("Account not found!", "red");
    }
}

function withdrawMoney() {
    const id = document.getElementById('actionId').value;
    const amount = parseFloat(document.getElementById('actionAmount').value);
    const account = Bank.findAccount(id);

    if (!account) {
        showMessage("Account not found!", "red");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        showMessage("Please enter a valid amount to withdraw.", "red");
        return;
    }

    if (account.balance >= amount) {
        account.balance -= amount;
        showMessage(`Success: Withdrawn ₹${amount}. New Balance: ₹${account.balance}`, "green");
        updateTable(); // Update the list to show new balance
    } else {
        showMessage("Error: Insufficient Balance!", "red");
    }
}

function depositMoney() {
    const id = document.getElementById('actionId').value;
    const amount = parseFloat(document.getElementById('actionAmount').value);
    const account = Bank.findAccount(id);

    if (!account) {
        showMessage("Account not found!", "red");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        showMessage("Please enter a valid amount to deposit.", "red");
        return;
    }

    account.balance += amount;
    showMessage(`Success: Deposited ₹${amount}. New Balance: ₹${account.balance}`, "green");
    updateTable(); // Update the list to show new balance
}

// --- 3. UI Helper Functions ---

function showMessage(msg, color) {
    const msgArea = document.getElementById('messageArea');
    msgArea.style.display = 'block';
    msgArea.style.color = 'white';
    msgArea.innerText = msg;

    if (color === 'red') msgArea.style.backgroundColor = '#dc3545';
    if (color === 'green') msgArea.style.backgroundColor = '#28a745';
    if (color === 'blue') msgArea.style.backgroundColor = '#17a2b8';

    // Hide after 4 seconds
    setTimeout(() => {
        msgArea.style.display = 'none';
    }, 4000);
}

function updateTable() {
    const tbody = document.getElementById('accountsTableBody');
    tbody.innerHTML = ""; // Clear existing rows

    Bank.accounts.forEach(acc => {
        const row = `<tr>
            <td>${acc.id}</td>
            <td>${acc.name}</td>
            <td>${acc.phone}</td>
            <td>₹${acc.balance}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

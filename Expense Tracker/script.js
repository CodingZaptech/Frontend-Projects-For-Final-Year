const expenseInput = document.getElementById('expenseInput');
const amountInput = document.getElementById('amountInput');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseList = document.getElementById('expenseList');

addExpenseBtn.addEventListener('click', () => {
    const expense = expenseInput.value.trim();
    const amount = amountInput.value;
    if(expense === "" || amount === "") { alert("Enter valid data"); return; }
    const li = document.createElement('li');
    li.textContent = `${expense} - $${amount}`;
    expenseList.appendChild(li);
    expenseInput.value = "";
    amountInput.value = "";
});

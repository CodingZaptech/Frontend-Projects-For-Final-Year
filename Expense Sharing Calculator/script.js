const totalExpense = document.getElementById("totalExpense");
const people = document.getElementById("people");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

// Calculate share per person
calculateBtn.addEventListener("click", () => {
    const expense = parseFloat(totalExpense.value);
    const numPeople = parseInt(people.value);
    
    if (isNaN(expense) || isNaN(numPeople) || numPeople <= 0) {
        result.textContent = "Enter valid values";
        return;
    }
    
    const share = (expense / numPeople).toFixed(2);
    result.textContent = `Each person should pay: $${share}`;
});

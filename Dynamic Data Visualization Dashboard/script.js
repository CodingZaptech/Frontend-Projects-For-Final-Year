// Example bar chart using Chart.js
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Sales',
            data: [12, 19, 3, 5],
            backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#e91e63']
        }]
    }
});

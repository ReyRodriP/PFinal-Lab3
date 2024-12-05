function generateChart() {

    const enero = document.getElementById('enero').value;
    const febrero = document.getElementById('febrero').value;
    const marzo = document.getElementById('marzo').value;
    const abril = document.getElementById('abril').value;
    const mayo = document.getElementById('mayo').value;
    const junio = document.getElementById('junio').value;

    const salesData = [enero, febrero, marzo, abril, mayo, junio];
    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: labels,
            datasets: [{
                label: 'Ventas por Mes',
                data: salesData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
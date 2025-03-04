document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Control', '50 μmol EGCG', '100 μmol EGCG', '5 μmol piperine', 
                '10 μmol piperine', '25 μmol EGCG', '2.5 μmol piperine', 
                '12.5 μmol EGCG & 2.5 μmol Piperine', '6.25 μmol EGCG & 3.75 μmol Piperine', 
                '18.75 μmol EGCG & 1.25 μmol Piperine'
            ],
            datasets: [{
                label: 'Percent Growth',
                data: [
                    35.719, -15.367, -12.916, 4.267, -14.444, 3.227, 1.138, -1.373, 25.508, -11.484
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',  // Red
                    'rgba(54, 162, 235, 0.2)',  // Blue
                    'rgba(255, 206, 86, 0.2)',  // Yellow
                    'rgba(75, 192, 192, 0.2)',  // Green
                    'rgba(153, 102, 255, 0.2)', // Purple
                    'rgba(255, 159, 64, 0.2)',  // Orange
                    'rgba(199, 199, 199, 0.2)', // Grey
                    'rgba(255, 105, 180, 0.5)', // Pink
                    'rgba(128, 0, 128, 0.2)',   // Dark Purple
                    'rgba(255, 69, 0, 0.2)'     // Red-Orange
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',  // Red
                    'rgba(54, 162, 235, 1)',  // Blue
                    'rgba(255, 206, 86, 1)',  // Yellow
                    'rgba(75, 192, 192, 1)',  // Green
                    'rgba(153, 102, 255, 1)', // Purple
                    'rgba(255, 159, 64, 1)',  // Orange
                    'rgba(199, 199, 199, 1)', // Grey
                    'rgba(255, 105, 180, 1)', // Pink
                    'rgba(128, 0, 128, 1)',   // Dark Purple
                    'rgba(255, 69, 0, 1)'     // Red-Orange
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Percent Growth (%)',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Concentration',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        generateLabels: function(chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map((label, i) => {
                                    const meta = chart.getDatasetMeta(0);
                                    const style = meta.controller.getStyle(i);

                                    return {
                                        text: label,
                                        fillStyle: style.backgroundColor,
                                        strokeStyle: style.borderColor,
                                        lineWidth: style.borderWidth,
                                        hidden: isNaN(data.datasets[0].data[i]),
                                        index: i
                                    };
                                });
                            }
                            return [];
                        }
                    }
                }
            }
        }
    });
});
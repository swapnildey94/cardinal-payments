// Initialize a Line chart in the container with the ID chart2
new Chartist.Bar('#chart2', {
    labels: [1, 2, 3, 4],
    series: [[5, 2, 8, 3]]
});

/*new Chartist.Line('', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
    ]
}, {
    fullWidth: true,
    chartPadding: {
        right: 40
    }
});*/

var marcusPayData = {
    labels: ['Budget', 'Shopping', 'Entertainment', 'Food'],
    series: [5000, 900, 300, 700]
};

var marcusBillerData = {
    labels: ['Electricity', 'Gas', 'Cable TV', 'Internet'],
    series: [112, 60, 50, 65]
};

var marcusLoanData = {
    labels: ['March', 'April', 'May', 'June'],
    series: [[1200, 800, 200, 600]]
};

var options = {
    labelInterpolationFnc: function(value) {
        return value[0]
    }
};

var responsiveOptions = [
    ['screen and (min-width: 640px)', {
        chartPadding: 30,
        labelOffset: 10,
        labelDirection: 'explode',
        labelInterpolationFnc: function(value) {
            return value;
        }
    }],
    ['screen and (min-width: 1024px)', {
        labelOffset: 35,
        chartPadding: 20
    }]
];

new Chartist.Pie('#chart3', marcusPayData, options, responsiveOptions);

new Chartist.Pie('#chart4', marcusBillerData, options, responsiveOptions);

new Chartist.Line('#chart1', marcusLoanData);
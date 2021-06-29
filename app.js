//charts


// change data (labels, colors, numbers, etc)
// change variable names to reflect this particular chart
// repeat this whole thingy 2 more times for the other charts

const average = [
    '18-22',
    '23-29',
    '30-5',
    '6-12',
    '13-19',
    '20-26',
    '27-3',
    '4-10',
    '11-17',
    '18-24',
    '25-31',
  ];
  const lineAverage= {
    labels: average,
    datasets: [{
      label: '',
      fill: true,
      backgroundColor: 'rgba(133, 1, 133, 0.5)',
      borderColor: 'lavender',
      data: [0, 500, 1000, 1500, 2000, 2500],
    }]
  };

const trafficChart = {
    type: 'line',
    data : lineAverage,
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
  };

var myTrafficChart = new Chart(
    document.getElementById('traffic'),
    trafficChart
  );


//daily traffic chart----------------------------
const week= [
      'S', 
      'M', 
      'T', 
      'W', 
      'T', 
      'F', 
      'S'
  ];
const weekData= {
  labels: week,
  datasets: [{
    label: ' ',
    data: [0, 50, 100, 150, 200, 250],
    backgroundColor: [
      'rgba(126, 117, 209)',
      'rgba(126, 117, 209)',
      'rgba(126, 117, 209)',
      'rgba(126, 117, 209)',      
      'rgba(126, 117, 209)',
      'rgba(126, 117, 209)',
      'rgba(126, 117, 209)'
    ],
    // borderColor: [
    //   'rgb(255, 99, 132)',
    //   'rgb(255, 159, 64)',
    //   'rgb(255, 205, 86)',
    //   'rgb(75, 192, 192)',
    //   'rgb(54, 162, 235)',
    //   'rgb(153, 102, 255)',
    //   'rgb(201, 203, 207)'
    // ],
    borderWidth: 1
  }]
};

const dailyTrafficChart = {
    type: 'bar',
    data: weekData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }, 
      plugins: {
          legend: {
            display: false,
          }
      }
    },
  };

var myDailyTrafficChart = new Chart(
    document.getElementById('daily-traffic'),
    dailyTrafficChart
  );


//mobile users chart -------------------

const data = {
    labels: [
      'Desktopp',
      'Tablet',
      'Phones'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(126, 117, 209)',
        'rgba(113, 225, 113)',
        'rgba(75, 196, 194)'
      ],
      hoverOffset: 4
    }]
  };

const config = {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
  };

var myChart = new Chart(
    document.getElementById('mobile-users'),
    config
  );
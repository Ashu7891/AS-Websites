// google chart
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Motivation Level');
      data.addColumn('number', 'Energy Level');

      data.addRows([
        [{v: [8, 0, 0], f: '8 am'}, 1, .25],
        [{v: [9, 0, 0], f: '9 am'}, 2, .5],
        [{v: [10, 0, 0], f:'10 am'}, 3, 1],
        [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
        [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
        [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
        [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
        [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
        [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
        [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
      ]);

      var options = {
        title: 'Motivation and Energy Level Throughout the Day',
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }




    var xyValues = [
      {x:50, y:7},
      {x:60, y:8},
      {x:70, y:8},
      {x:80, y:9},
      {x:90, y:9},
      {x:100, y:9},
      {x:110, y:10},
      {x:120, y:11},
      {x:130, y:14},
      {x:140, y:14},
      {x:150, y:15}
    ];
    
    new Chart("myChart", {
      type: "scatter",
      data: {
        datasets: [{
          pointRadius: 4,
          pointBackgroundColor: "rgb(0,0,255)",
          data: xyValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          xAxes: [{ticks: {min: 40, max:160}}],
          yAxes: [{ticks: {min: 6, max:16}}],
        }
      }
    });



    var tValues = [];
var sValues = [];
generateData("Math.sin(x)", 0, 10, 0.5);

new Chart("Chart-2", {
  type: "line",
  data: {
    labels: tValues,
    datasets: [{
      fill: false,
      pointRadius: 2,
      borderColor: "rgba(0,0,255,0.5)",
      data: sValues
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "y = sin(x)",
      fontSize: 16
    }
  }
});
function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    sValues.push(eval(value));
    tValues.push(x);
  }
}




const xValues = [100,200,300,400,500,600,700,800,900,1000];
        
        new Chart("meraChart", {
          type: "line",
          data: {
            labels: xValues,
            datasets: [{ 
              data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
              borderColor: "red",
              fill: false
            }, { 
              data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
              borderColor: "green",
              fill: false
            }, { 
              data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
              borderColor: "blue",
              fill: false
            }]
          },
          options: {
            legend: {display: false}
          }
        });

    
        const aValues = [50,60,70,80,90,100,110,120,130,140,150];
        const bValues = [7,8,8,9,9,9,10,11,14,14,15];
        
        new Chart("teraChart", {
          type: "line",
          data: {
            labels: aValues,
            datasets: [{
              fill: false,
              lineTension: 0,
              backgroundColor: "rgba(0,0,255,1.0)",
              borderColor: "rgba(0,0,255,0.1)",
              data: bValues
            }]
          },
          options: {
            legend: {display: false},
            scales: {
              yAxes: [{ticks: {min: 6, max:16}}],
            }
          }
        });



        var cValues = ["Italy", "France", "Spain", "USA", "Argentina"];
        var dValues = [55, 49, 44, 24, 15];
        var barColors = [
          "#b91d47",
          "#00aba9",
          "#2b5797",
          "#e8c3b9",
          "#1e7145"
        ];
        
        new Chart("sabakaChart", {
          type: "pie",
          data: {
            labels: cValues,
            datasets: [{
              backgroundColor: barColors,
              data: dValues
            }]
          },
          options: {
            title: {
              display: true,
              text: "World Wide Wine Production 2018"
            }
          }
        });
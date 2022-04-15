if (typeof chart !== 'undefined' && chart) { //グラフ消す
          chart.destroy();
          chart = undefined;
          document.querySelector('#graph-display').innerText = "グラフ表示";
        } else {
          var options = {
            chart: {
              height: '25%',
              width: '25%',
              type: 'line', //radar
              background: '#fff',
              toolbar: {
                show: false,
               },
              animations: {
                enabled: true,
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 400
                }
              }
            },
            series: [
              {
                name: "ライン",
                type: 'line',
                data: [45, 52, 38, 24, 33, 10]
              },
              {
                name: "column",
                type: 'column',
                data: [26, 21, 20, 6, 8, 15]
              }
            ],
            labels: ['4月', 'May', 'June', 'July', 'August', 'September']
          }
          chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
          document.querySelector('#graph-display').innerText = "グラフ非表示";
          }

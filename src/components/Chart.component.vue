<template>
  <div id="charts">
    <div id="chart1">
      <apexchart
        type="line"
        height="230"
        :options="chartOptionsArea"
        :series="series"
      />
    </div>
    <div id="chart2">
      <apexchart
        type="area"
        height="130"
        :options="chartOptionsBrush"
        :series="series"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import VueApexCharts from "vue-apexcharts";


export default {
  name: "BrushCharts",
  data: function() {
    return {
      series: [
        {
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            185,
            {
              min: 30,
              max: 90
            }
          )
        }
      ],
      chartOptionsArea: {
        chart: {
          id: "chartArea",
          toolbar: {
            autoSelected: "pan",
            show: false
          }
        },
        colors: ["#546E7A"],
        stroke: {
          width: 3
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 1
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: "datetime"
        }
      },
      chartOptionsBrush: {
        chart: {
          id: "chartBrush",
          brush: {
            target: "chartArea",
            enabled: true
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date("19 Jun 2017").getTime(),
              max: new Date("14 Aug 2017").getTime()
            }
          }
        },
        colors: ["#008FFB"],
        fill: {
          gradient: {
            enabled: true,
            opacityFrom: 0.91,
            opacityTo: 0.1
          }
        },
        xaxis: {
          type: "datetime",
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          tickAmount: 2
        }
      }
    };
  },

  methods: {
    generateDayWiseTimeSeries: function(baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
      }

      return series;
    }
  }
};
</script>

<style scoped>
#chart1,
#chart2 {
  max-width: 650px;
  margin: 35px auto;
}

#chart2 {
  position: relative;
  margin-top: -70px;
  margin-bottom: 0px;
}

#app {
  padding-top: 20px;
  padding-left: 10px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 22px 35px -16px rgba(0, 0, 0, 0.1);
  max-width: 650px;
  margin: 35px auto;
}
</style>

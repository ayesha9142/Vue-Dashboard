<template>
  <div class="app">
       <div id="chart">
        <apexchart type="line" height="150" width="150" :options="chartOptions" :series="series"></apexchart>
      </div>
    
    
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Line",
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      series: [{
          name: "series-1",
              data: [0, 20,5, 30, 15, 45]
      }],
          chartOptions: {
            chart: {
                height: 50,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            xaxis: {
              enabled: false
            },
            yaxis: {
              categories: false,
              color: 'white'
            }
          },
      
    };
  },
  
};
</script>

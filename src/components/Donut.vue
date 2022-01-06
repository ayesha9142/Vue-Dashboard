<template>
  <div class="app">
      <div id="chart">
        <apexchart type="donut" width="280" :options="chartOptions" :series="series"></apexchart>
      </div>
    
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Donut",
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      series: [53, 16, 31],
          chartOptions: {
            chart: {
              type: 'donut',
            },
            dataLabels: {
              enabled: false
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
      
    };
  },
  
};
</script>

<script>
/*
import { Line } from 'vue-chartjs';

export default {
    extends:Line,
    props:['chart_data','labels_data'],
    data() {
        return {
            chartData: {
                labels: this.labels_data,
                datasets: [
                    {
                        label: 'احصائياتي',
                        data: this.chart_data,
                        fill: false,
                        borderColor: '#ff6a15',
                        backgroundColor: '#ff6a15',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [ {
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        //renderChart function renders the chart with the datacollection and options object.
        this.renderChart(this.chartData, this.options)
    },
    methods:{
       update_data:function(){
           setTimeout(()=>{
               this.renderChart(this.chartData, this.options)
           });
       }
    },
    watch:{
        'chart_data':function(to){
          this.$nextTick(() => {
            this.update_data(to)
          })
        }
    }
}
*/
</script>


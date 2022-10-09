<template>
    <section class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content">
            <div class="container">
                <div class="line_chart_data">
                    <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                        <span>{{ keywords.main_title }}</span>
                        <span style="display: none">
                                    <i class="ri-arrow-down-s-line toggle_next"></i>
                                </span>
                    </p>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <form method="post" @submit.prevent="filter">
                                <input type="hidden" name="type" :value="type">
                                <div class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <select name="year" class="form-control" required>
                                                <option value="">{{ switchWord('select_year') }}</option>
                                                <option v-for="(year,index) in 10" :key="index"
                                                        :value="parseInt(new Date().getFullYear()) - index">
                                                    {{ parseInt(new Date().getFullYear()) - index }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <input class="btn btn-primary" type="submit" name="send"
                                               :value="switchWord('Search')">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <line-chart   :chart_data="chart_data" :labels_data="labels"></line-chart>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SwitchLangWord from "../../mixin/SwitchLangWord";
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";

export default {
    name: "specific_statics",
    components: {SideNavbarComponent},
    props:['keywords','handling_data'],
    data:function (){
        return {
            chart_data:Object.values(this.handling_data),
            labels:Object.values(this.keywords['months']),
            type:document.URL.split('?type=')[1],
        }
    },
    created() {
        this.updateChart(this.chart_data);
    },
    methods:{
        updateChart:function(data){
            setTimeout(() => {
                this.chart_data =data;
            }, 1000)
        },
        filter:function(){
            /*var target = event.target;
            var data = new FormData(target);
            var com = this;
            axios.post('/dashboard/filter-statistics',data).then((e)=>{
                com.chart_data = e.data.data;
            });*/

            var target = $(event.target);
            var form_data = new FormData(event.target);
            var output = [];
            $.ajax({
                headers:{
                  'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content'),
                },
                url:'/dashboard/filter-statistics',
                type:'POST',
                data:form_data,
                processData: false,
                async:false,
                contentType: false,
                dataType:'JSON',
                success:function (data){
                    output = data;
                }.bind(this)
            });
            this.updateChart(output);

        },
    },
    mixins:[SwitchLangWord],
}
</script>

<style lang="scss" scoped>
@import "../../../sass/variables";


</style>

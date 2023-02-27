<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ keywords.main_title }}</span>
                    <span>
                        <i class="ri-arrow-down-s-line toggle_next"></i>
                    </span>
                </p>
                <div>
                   <div class="row">
                       <div class="col-lg-4 col-md-6 col-12"
                            v-for="i in Object.keys(statistics_data)" :key="i">
                            <inertia-link :href="'?type='+i">
                                <div class="d-flex align-items-center justify-content-between box-info">
                                <span>
                                   <i :class="statistics_data[i]"></i>
                               </span>
                                    <div>
                                        <p>{{ keywords[i] }}</p>
                                        <span>{{ handling_data['data'][i] }}</span>
                                    </div>
                                </div>
                            </inertia-link>
                       </div>
                   </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";

export default {
    name: "statistics",
    props:['keywords','handling_data'],
    data:function(){
        return {
            statistics_data:{
                users:'ri-group-line',
                brands:'ri-roadster-line',
                products:'ri-stack-line',
                sales:'ri-currency-line',
            }
        }
    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.box-info{
    box-shadow: 0px 0px 5px 1px #eeeeee;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 5px;
    >span{
        color:$main_color;
        i{
            font-size:$big;

        }
    }
    div{
        width: calc(100% - 45px);
        span{
            color:$black;
        }
        p{
            color:$black;
        }
        p:first-of-type{
            font-weight: bold;
        }
    }
}
</style>

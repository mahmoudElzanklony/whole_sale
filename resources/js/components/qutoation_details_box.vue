<template>
    <div class="details">
        <div>
            <table class="table table-hover table-striped table-hover">
                <thead>
                <tr>
                    <td>{{ keywords.seq }}</td>
                    <td>{{ keywords.item_no }}</td>
                    <td>{{ keywords.brand }}</td>
                    <td>{{ keywords.req_qty }}</td>
                    <td>{{ keywords.supplied_qty }}</td>
                    <td>{{ keywords.unit_price }}</td>
                    <td>{{ keywords.total_value }}</td>
                    <td>{{ keywords.remarks }}</td>
                    <td>{{ keywords.check_better_price_for_minimum_qty }}</td>
                    <td>{{ keywords.estimated_unit_loaded_cost }}</td>
                    <td>{{ keywords.estimated_required_days_for_delivery }}</td>
                </tr>
                </thead>
                <tbody>
                <tr  v-for="(i,index) in 6" :key="index">
                    <td>{{ i }}</td>
                    <td>111</td>
                    <td>Toyta</td>
                    <td>36.00</td>
                    <td name="supplied_qty">40.00</td>
                    <td>10.00</td>
                    <td>400.00</td>
                    <td name="remarks">Rounded to Match UOP</td>
                    <td>100</td>
                    <td name="unit_cost">10.5</td>
                    <td>7</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td></td>
                    <td>6</td>
                    <td></td>
                    <td>216</td>
                    <td>240</td>
                    <td></td>
                    <td>2400</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>{{ keywords.charge }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>600</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>{{ keywords.total }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>3000</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tfoot>
            </table>
        </div>
        <div class="m-3 d-flex align-items-center justify-content-between">
            <inertia-link href="#" class="btn btn-primary">
                {{ keywords.confirm_order_and_processed_to_checkout }}
            </inertia-link>
            <button class="btn btn-danger" @click="close_box">
                {{ keywords.close }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "qutoation_details_box",
    props:['keywords'],
    methods:{
        close_box:function(){
            $(event.target).parent().parent().parent().parent().fadeOut();
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.details{
    a{
        display: inline-block;
        padding: 10px;
        margin: 10px;
        font-weight: normal;
    }
    >div:first-of-type{
        max-height: 500px;
        overflow: auto;
        table {
            tr {
                td {
                    text-align: center;
                }

                td[name="supplied_qty"] {
                    background-color: $red;
                    color: white;
                }

                td[name="unit_cost"] {
                    font-weight: bold;
                    color: $green;
                }

                td[name="remarks"] {
                    color: $red;
                    font-weight: bold;
                    width:180px;
                }
            }
            tfoot{
                tr{
                    td{
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>

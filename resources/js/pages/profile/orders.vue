<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <div class="inner-profile">
            <profile-nav-component></profile-nav-component>
            <div class="sales">
                <div class="container">
                    <h2 class="text-center main-title">
                        <span>{{ keywords.main_title_orders }}</span>
                    </h2>
                    <div class="data">
                        <table class="myTable table table-hover table-striped table-bordered">
                            <thead>
                            <tr>
                                <td>{{ keywords.seq }}</td>
                                <td>{{ keywords.part_no }}</td>
                                <td>{{ keywords.brand }}</td>
                                <td>{{ keywords.quantity }}</td>
                                <td>{{ keywords.unit_price }}</td>
                                <td>{{ keywords.total_value }}</td>
                                <td>{{ keywords.remarks }}</td>
                                <td>{{ keywords.estimated_required_days_for_delivery }}</td>
                                <td>{{ keywords.total }}</td>
                                <td>{{ keywords.status }}</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(i,index) in 10" :key="index">
                                <td>{{ i }}</td>
                                <td>10</td>
                                <td>toyta</td>
                                <td>5</td>
                                <td>100</td>
                                <td>500</td>
                                <td>Rounded to uop</td>
                                <td>3</td>
                                <td>550</td>
                                <td>pending</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import ProfileNavComponent from "../../components/ProfileNavComponent";
import tableData from "../../mixin/tableData";
export default {
    name: "orders",
    props:['keywords'],
    mixins:[tableData],
    components: {ProfileNavComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.sales{
    h2{
        margin-top: 30px;
        margin-bottom: 50px;
    }
    table{
        tr{
            td{
                text-align: center;
            }
        }
    }
}
</style>

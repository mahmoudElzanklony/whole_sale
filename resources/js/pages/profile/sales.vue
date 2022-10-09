<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <div class="inner-profile">
            <profile-nav-component></profile-nav-component>
            <div class="sales">
                <div class="container">
                    <h2 class="text-center main-title">
                        <span>{{ keywords.main_title_sales }}</span>
                    </h2>
                    <p class="alert alert-info">
                        {{  keywords.print_data_info  }}
                    </p>
                    <div class="data">
                        <table class="myTable table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <td>{{ keywords.seq }}</td>
                                    <td>{{ keywords.username }}</td>
                                    <td>{{ keywords.part_no }}</td>
                                    <td>{{ keywords.brand }}</td>
                                    <td>{{ keywords.quantity }}</td>
                                    <td>{{ keywords.unit_price }}</td>
                                    <td>{{ keywords.total_value }}</td>
                                    <td>{{ keywords.remarks }}</td>
                                    <td>{{ keywords.estimated_required_days_for_delivery }}</td>
                                    <td>{{ keywords.total }}</td>
                                    <td>{{ keywords.status }}</td>
                                    <td>{{ keywords.actions }}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(i,index) in 10" :key="index">
                                    <td>{{ i }}</td>
                                    <td>ahmed ali</td>
                                    <td>10</td>
                                    <td>toyta</td>
                                    <td>5</td>
                                    <td>100</td>
                                    <td>500</td>
                                    <td>Rounded to uop</td>
                                    <td>3</td>
                                    <td>550</td>
                                    <td>completed</td>
                                    <td class="actions">
                                        <span><i class="ri-edit-line"></i></span>
                                        <span class="print">
                                            <i class="ri-printer-line" data-toggle="modal" data-target="#print_box"></i>
                                        </span>
                                        <span class="delete"><i class="ri-close-line"></i></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="print_box" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="update_box_data">
                                {{ switchWord('print_bill') }}
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="receipt">
                                <img class="d-block m-auto" style="margin-bottom: 20px !important;" src="/images/logo.png">
                                <table class="table table-bordered table-hover table-striped">
                                    <tbody>
                                    <tr>
                                        <td>{{ keywords.username }}</td>
                                        <td>ahmed ali</td>
                                    </tr>
                                    <tr>
                                        <td>{{ keywords.part_no }}</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>{{ keywords.brand }}</td>
                                        <td>toyta</td>
                                    </tr>
                                    <tr>
                                        <td>{{ keywords.quantity }}</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>{{ keywords.total_value }}</td>
                                        <td>500</td>
                                    </tr>
                                    <tr>
                                        <td>{{ keywords.estimated_required_days_for_delivery }}</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>{{ keywords.total }}</td>
                                        <td>550</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <p class="text-center mb-3">
                                    <strong>{{ keywords.wholesale_bill_info }}</strong>
                                </p>
                                <p class="text-center mb-3">
                                    <strong>{{ keywords.bill_export_date }}</strong>
                                    <strong>{{ new Date().toLocaleString() }}</strong>
                                </p>
                            </div>
                            <button class="btn btn-outline-primary" @click="printOrder">{{ switchWord('print_bill') }}</button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                {{ switchWord('close') }}
                            </button>
                        </div>
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
import SwitchLangWord from "../../mixin/SwitchLangWord";
export default {
    name: "sales",
    props:['keywords'],
    mixins:[tableData,SwitchLangWord],
    methods:{
        printOrder:function(){
            window.print();
        },
    },
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


@media print {
    body * { visibility: hidden; }
    .receipt{height: auto;}
    .receipt * { visibility: visible;  }
    .receipt button{visibility: hidden;}
    #receipt .modal-footer{display: none;}
    #fb-root{display: none;}

}
</style>

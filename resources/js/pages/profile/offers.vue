<template>
    <section class="profile profile-offers">
        <navbar-component></navbar-component>
        <div class="inner-profile">
            <ProfileNavComponent></ProfileNavComponent>
            <div class="change_data offer_table_data">
                <div class="container">
                  <p class="alert alert-warning" v-if="data.length == 0">{{ keywords.there_is_no_offers_yet }}</p>

                  <div v-else class="overflow-auto">
                        <table class="myTable table text-center table-bordered table-striped table-hover">
                            <thead>
                            <tr>
                                <td>{{ keywords.brand }}</td>
                                <td>{{ switchWord('see_details') }}</td>
                                <td>{{ keywords.file }}</td>
                                <td>{{ keywords.start_date }}</td>
                                <td>{{ keywords.end_date }}</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(i,index) in data"
                                :key="index" :class="'row_'+index">
                                <td>{{ i['brand']['name'] }}</td>
                                <td>
                                    <button class="btn btn-outline-primary" :ids="i['offer_items'].map((e)=>{return e['item_info_id']}).toString()">{{ switchWord('see_details') }} </button>
                                </td>
                                <td>
                                    <a
                                        target="_blank"
                                        :href="'/quotations/export-offer?ids='+i['offer_items'].map((e)=>{return e['item_info_id']}).toString()">{{ switchWord('download_file') }}</a>
                                </td>
                                <td>{{ i['start_date'] }}</td>
                                <td>{{ i['end_date'] }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>




        <div class="modal fade" id="offer_get_data"
             tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_quotations_box">
                            {{ switchWord('see_details') }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="loading-img">
                            <img src="/images/loading.gif">
                        </div>
                        <form method="post" @submit.prevent="make_offer">
                        <input class="form-control search_without_button mb-2"
                               :placeholder="switchWord('search_for_you_best')">
                        <div class="overflow-auto hide-buttons" v-if="offer_data.length > 0">
                            <table class="table text-center table-bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <td>{{ keywords.seq }}</td>
                                    <td>{{ keywords.part_no }}</td>
                                    <td>{{ keywords.brand }}</td>
                                    <td>{{ keywords.en_part_name }}</td>
                                    <td>{{ keywords.offered_stock }}</td>
                                    <td>{{ keywords.min_quantity_per_transaction }}</td>
                                    <td>{{ keywords.max_quantity_per_transaction }}</td>
                                    <td>{{ keywords.actions }}</td>
                                    <td>{{ switchWord('order_quantity_offer') }}</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(i,index) in offer_data"
                                    :key="index" :class="'row_child_'+index">
                                    <td>{{ index + 1 }}</td>
                                    <td class="part_number">{{ i['part_number'] }}</td>
                                    <td class="brand">{{ i['brand'] != null ? i['brand']['name']:i['brand_id'] }}</td>
                                    <td>{{ i['en_part_name'] }}</td>
                                    <td>{{ i['offered_stock'] }}</td>
                                    <td>{{ i['min_quantity_per_transaction'] }}</td>
                                    <td>{{ i['max_quantity_per_transaction'] }}</td>
                                    <td v-if="false">{{ i['prices'][0]['price'] }}</td>
                                    <td v-if="i['prices'].length >= 1">
                                        <button class="btn btn-outline-primary"
                                                @click="current_admin_quotation = i"
                                                data-toggle="modal"
                                                data-target="#see_prices"
                                        >{{ keywords.see_prices }}</button>
                                    </td>
                                    <td v-else></td>
                                    <td>
                                        <input type="hidden" name="offer_id[]"
                                               :value="i['offer']['offer_id']">
                                        <input name="quantity[]"
                                               type="number"
                                               :min="i['min_quantity_per_transaction']"
                                               :max="i['max_quantity_per_transaction']"
                                               :placeholder="keywords.quantity"
                                               class="form-control">
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                            <input type="submit" class="btn btn-primary"
                                   :value="switchWord('send')">
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ switchWord('close') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>



        <div class="modal fade" id="see_prices"
             v-if="current_admin_quotation != null"
             tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="see_prices_box">
                            {{ switchWord('see_details') }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="overflow-auto hide-buttons">
                            <table class="box-model-table table text-center table-bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <td>{{ keywords.seq }}</td>
                                    <td>{{ keywords.min_quantity }}</td>
                                    <td>{{ keywords.price }}</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(i,index) in current_admin_quotation['prices']"
                                    :key="index" :class="'row_child_'+index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ i['min_quantity'] }}</td>
                                    <td>{{ i['price'] }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ switchWord('close') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>






        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ProfileNavComponent from "../../components/ProfileNavComponent";
import delete_item from "../../mixin/delete_item";
import tableData from "../../mixin/tableData";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import update_item from "../../mixin/update_item";
import {mapActions,mapGetters} from "vuex";
export default {
    name: "offers",
    props:['keywords','data'],
    data(){
        return {
            current_admin_quotation:null,
        }
    },
    mixins:[delete_item,tableData,SwitchLangWord,update_item],
    components: {ProfileNavComponent, FooterComponent, NavbarComponent},
    computed:{
       ...mapGetters({
           'offer_data':'quotations_dash/get_offer_info'
       })
    },
    methods:{
        ...mapActions({
            'get_offer_info_action':'quotations_dash/get_offer_info_action',
            'make_offer':'send_qutoation/make_offer',
        }),
        get_quantity_data(i){
            var data =  this.offer_data.find((q)=>{return q['part_number'] == i['part_number']});
            if(data != undefined) {
                if (data['last_draft'] != null) {
                    return data['last_draft']['quantity'];
                } else {
                    return data['quantity'];
                }
            }else{
                return ;
            }
        },
    },
    mounted() {
        // get admin reply
        var component = this;
        $('.content').on('click','.offer_table_data table button.btn-outline-primary',async function (){
            var ids = $(this).attr('ids');
            document.querySelector('.loading-img').style.display='block';
            await component.get_offer_info_action(ids);
            $('#offer_get_data').find('tr td input').val('');
            $('#offer_get_data').modal('show');
        });
    }
}
</script>


<style>
#offer_get_data .modal-dialog{
    max-width: 1200px;
}
</style>

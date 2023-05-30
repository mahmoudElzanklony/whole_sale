<template>
    <section class="profile profile-offers">
        <navbar-component></navbar-component>
        <div class="inner-profile">
            <ProfileNavComponent></ProfileNavComponent>
            <div class="change_data offer_table_data">
                <div class="container">
                  <p class="alert alert-warning" v-if="data.length == 0 && $page.props.user.role.name == 'buyer'">{{ keywords.there_is_no_offers_yet }}</p>
                  <div class="alert alert-warning d-flex align-items-center justify-content-between"
                       v-if="$page.props.user.role.name == 'seller' && $page.props.user.approved == 1">
                      <p class="mb-0">
                          <span class="mb-2 d-block">{{ keywords.upload_new_offer }}</span>
                          <a href="/quotations/export-file?template=true">{{ keywords.download_offer_template }}</a>
                      </p>
                      <button
                          data-toggle="modal"
                          data-target="#update_box"
                          class="btn btn-outline-warning">{{ keywords.new_offer }}</button>
                  </div>

                  <div class="pending"
                       v-if="$page.props.user.role.name == 'seller' && $page.props.user.approved == 1">
                      <div class="alert alert-warning d-flex align-items-center"
                           v-for="(i,index) in pending" :key="index">
                          <span class="ml-1 mr-1"><i class="ri-information-line"></i></span>
                          <span>
                              {{ switchWord('your_offer_no') }} {{ i['id'] }} {{ switchWord('start_date') }}
                              {{ i['start_date'] }} {{ switchWord('end_date') }} {{ i['end_date'] }}
                              {{ switchWord('still_pending') }}
                          </span>
                      </div>
                  </div>


                 <div class="row mt-2" v-if="data.length > 0">

                     <div class="col-md-4 col-12">
                         <div class="form-group">
                             <select class="form-control" @change="change_search_functionality">
                                 <option value="part_number">{{ keywords.search_by_part_no }}</option>
                                 <option value="brand">{{ keywords.search_by_brand }}</option>
                             </select>
                         </div>
                     </div>
                     <div class="col-md-8 col-12">
                         <div class="form-group mb-2 " >
                             <input class="form-control part_number"
                                    number_of_parents="3"
                                    :placeholder="switchWord('search_for_you_best')">
                         </div>
                     </div>
                 </div>

                  <div v-if="get_offers_data_page.length > 0" class="overflow-auto">
                        <table class="offers_data table text-center table-bordered table-striped table-hover">
                            <thead>
                            <tr>
                                <td style="display: none">id</td>
                                <td>{{ keywords.brand }}</td>
                                <td>{{ switchWord('see_details') }}</td>
                                <td>{{ keywords.file }}</td>
                                <td>{{ keywords.start_date }}</td>
                                <td>{{ keywords.end_date }}</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(i,index) in get_offers_data_page"
                                :key="index" :class="'row_'+index">
                                <td style="display: none">{{ i['id'] }}</td>
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
                                    <td v-if="$page.props.user.role.name == 'buyer'">{{ switchWord('order_quantity_offer') }}</td>
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
                                        <button type="button" class="btn btn-outline-primary"
                                                @click="current_admin_quotation = i"
                                                data-toggle="modal"
                                                data-target="#see_prices"
                                        >{{ keywords.see_prices }}</button>
                                    </td>
                                    <td v-else></td>
                                    <td v-if="$page.props.user.role.name == 'buyer'">
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
                                   v-if="$page.props.user.role.name == 'buyer'"
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


        <!-- upload new offer -->
        <div class="modal fade" id="update_box" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_box_data">{{ item == null ? switchWord('add_new_item'):switchWord('update_new_item')+item.ar_name }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" @submit.prevent="save_vendor_offer">
                            <input v-if="item != null" type="hidden" name="id" :value="item.id">
                            <div class="form-group"
                                 v-for="input in Object.keys(data_model)" :key="input">
                                <label>{{ data_model[input] }}</label>
                                <input :name="input" class="form-control"
                                       type="date"
                                       v-if="input != 'brand_id'"
                                       :value="item != null ? item[input]:''" :required="input.indexOf('tu') == -1">
                                <select class="form-control" v-else :name="input" required>
                                    <option value="">{{ switchWord('select_best_choice') }}</option>
                                    <option v-for="(i,index) in brands"
                                            :key="index"
                                            :selected="item != null && item['brand_id'] == i['id']"
                                            :value="i['id']">
                                        {{ i['name'] }}
                                    </option>
                                </select>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <div class="drag-drop-files">
                                    <input type="file" name="file" @change="change_file">
                                    <span class="ml-2 mr-2"></span>
                                    <p class="alert alert-danger"></p>
                                    <button type="button" class="btn btn-primary">
                                        <span>{{ switchWord('download_file') }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="save" class="btn btn-primary"
                                       :value="switchWord('save')">
                            </div>
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
import {mapActions, mapGetters, mapMutations} from "vuex";
export default {
    name: "offers",
    props:['keywords','data','data_model','brands','pending'],
    data(){
        return {
            current_admin_quotation:null,
            modal_data:[],
        }
    },
    mixins:[delete_item,tableData,SwitchLangWord,update_item],
    components: {ProfileNavComponent, FooterComponent, NavbarComponent},
    computed:{
       ...mapGetters({
           'offer_data':'quotations_dash/get_offer_info',
           'get_offers_data_page':'quotations_dash/get_offers',
       })
    },
    methods:{
        ...mapActions({
            'get_offer_info_action':'quotations_dash/get_offer_info_action',
            'make_offer':'send_qutoation/make_offer',
            'search_offer':'quotations_dash/search_offer',
            'save_vendor_offer':'offers_dash/save_offer'

        }),
        ...mapMutations({
           'set_offers_data':'quotations_dash/set_offers_data',
        }),
        change_file(){
            event.target.nextElementSibling.innerHTML = event.target.files[0].name;
        },
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
        change_search_functionality:function (){
            if(event.target.value == 'part_number') {
                event.target.parentElement.parentElement.nextElementSibling
                    .firstElementChild.firstElementChild.className = 'form-control part_number';
            }else{
                event.target.parentElement.parentElement.nextElementSibling
                    .firstElementChild.firstElementChild
                    .className = 'form-control search_without_button';
            }
        },
    },
    mounted() {
        this.set_offers_data(this.data);
        // get admin reply
        var component = this;
        $('.content').on('click','.offer_table_data table button.btn-outline-primary',async function (){
            var ids = $(this).attr('ids');
            document.querySelector('.loading-img').style.display='block';
            await component.get_offer_info_action(ids);
            $('#offer_get_data').find('tr td input').val('');
            $('#offer_get_data').modal('show');
        });

        // search part number
        $('.content').on('keyup','input.form-control.part_number',async function (){
            component.search_offer();
        });
    },
    created() {

    }
}
</script>


<style lang="scss" scoped>
#offer_get_data .modal-dialog{
    max-width: 1200px;
}
form{
    p.alert-danger{
        display: none;
    }
}
</style>

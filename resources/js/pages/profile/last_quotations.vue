<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <div class="inner-profile">
            <profile-nav-component></profile-nav-component>
            <div class="sales">
                <div class="container">
                    <h2 class="text-center main-title" v-if="$page.props.user.role.name != 'seller'">
                        <span>{{ keywords.main_title }}</span>
                    </h2>
                    <h2 class="text-center main-title" v-else>
                        <span>{{ switchWord('newest_clients_requests') }}</span>
                    </h2>

                    <p class="alert alert-info" v-if="$page.props.user.role.name != 'seller'">
                        {{  keywords.print_data_info  }}
                    </p>
                    <div class="m-auto mb-3 filters last-quotations-filter" v-if="$page.props.user.role.name != 'seller'">
                        <form class="justify-content-between flex-wrap">
                            <div class="d-flex align-items-center justify-content-between flex-wrap">
                                <p>
                                    <input type="radio" name="is_completed" :value="switchWord('sent_to_admin')">
                                    <span>{{ switchWord('sent_to_admin') }}</span>
                                </p>
                                <p>
                                    <input type="radio" name="is_completed" :value="keywords.reply_from_admin">
                                    <span>{{ keywords.reply_from_admin }}</span>
                                </p>
                                <p>
                                    <input type="radio" name="is_completed" :value="keywords.order_confirmed">
                                    <span>{{ keywords.order_confirmed }}</span>
                                </p>
                                <p>
                                    <input type="radio" name="is_completed" :value="switchWord('order_confirmed')">
                                    <span>{{ switchWord('order_confirmed') }}</span>
                                </p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="mr-2 ml-2">
                                    <label>{{ keywords.from }}</label>
                                    <input type="date" name="from" class="form-control">
                                </div>
                                <div>
                                    <label>{{ keywords.to }}</label>
                                    <input type="date" name="to" class="form-control">
                                </div>
                            </div>
                        </form>
                    </div>
                    <button class="btn btn-primary export_excel" v-if="$page.props.user.role.name != 'seller'"
                            @click="pass_data_to_export">{{ switchWord('export_selected') }}</button>
                    <div :class="'data '+($page.props.user.role.name == 'seller' ? 'seller_table':'')">
                        <table class="myTableServer table table-hover table-striped table-bordered"
                               data-order='[[ 1, "desc" ]]'
                        >
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>{{ keywords.seq }}</td>
                                    <td name="id">{{ keywords.quotation_number }}</td>
                                    <td name="is_completed">{{ keywords.status }}</td>
                                    <td>{{ keywords.show_details }}</td>
                                    <td v-if="$page.props.user.role.name !='seller'">{{ keywords.reply_from_admin }}</td>
                                    <td v-else>{{ keywords.excel_file }}</td>
                                    <td>{{ keywords.actions }}</td>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <footer-component></footer-component>


        <div  class="modal fade" id="my_quotations"
             tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="my_quotations_box">
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
                        <div class="overflow-auto"  v-if="get_my_quotation.length > 0">
                            <table class="myTable box-model-table table text-center table-bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <td></td>
                                    <td>{{ keywords.brand }}</td>
                                    <td>{{ keywords.part_no }}</td>
                                    <td>{{ keywords.quantity }}</td>
                                    <td v-if="$page.props.user.role.name != 'seller'">{{ keywords.actions }}</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(i,index) in get_my_quotation"
                                    :key="index" :class="'row_child_'+index"
                                    v-if="i['last_draft'] == null || i['last_draft']['deleted_at'] == null">
                                    <td>
                                        <input type="checkbox" @click="detect_row_to_export">
                                    </td>
                                    <td>{{ i['last_draft'] == null ? i['brand']['name']:
                                            i['last_draft']['brand']['name'] }}
                                    </td>
                                    <td>{{ i['last_draft'] == null ? i['part_number']:
                                        i['last_draft']['part_number'] }}</td>
                                    <td>{{ i['last_draft'] == null ? i['quantity']:i['last_draft']['quantity'] }}</td>
                                    <td class="actions"
                                        v-if="$page.props.user.role.name != 'seller' && item['is_completed'] == 1">
                                        <span
                                            @click="update_current_quotation_open_box(i)">
                                            <i class="ri-edit-line"></i>
                                        </span>
                                        <span class="delete"  @click="delete_item('quotations-draft-user'
                                       ,i['id'],'.row_child_'+index)"><i class="ri-close-line"></i></span>
                                    </td>
                                    <td v-else-if="$page.props.user.role.name != 'seller'"></td>
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




        <div class="modal fade" id="update_current_quotation"
             v-if="sub_quotation != null"
             tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_current_quotation_box">
                            {{ switchWord('update_new_item') }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" >
                        <form method="post" @submit.prevent="update_quotation_at_draft">
                            <input type="hidden" name="quotation_id" :value="sub_quotation['id']">
                            <input class="form-control" name="part_number"
                                   :value="sub_quotation['last_draft'] == null ? sub_quotation['part_number']:sub_quotation['last_draft']['part_number']" type="hidden">
                            <div class="alert alert-warning" v-if="admin_quotation.length > 0">
                                <div class="d-flex justify-content-between">
                                    <p>
                                        <span>{{ keywords.min_quantity_per_transaction }} : </span>
                                        <span>{{ admin_quotation.find((e)=>{return e['part_number'] == (sub_quotation['last_draft'] == null ? sub_quotation['part_number']:sub_quotation['last_draft']['part_number']) })['min_quantity_per_transaction'] }}</span>
                                    </p>
                                    <p>
                                        <span>{{ keywords.max_quantity_per_transaction }} : </span>
                                        <span>{{ admin_quotation.find((e)=>{return e['part_number'] == (sub_quotation['last_draft'] == null ? sub_quotation['part_number']:sub_quotation['last_draft']['part_number']) })['max_quantity_per_transaction'] }}</span>
                                    </p>
                                </div>
                                <table class="table table-hover mt-3 text-center">
                                    <thead>
                                        <tr>
                                            <td class="font-weight-bold">{{ keywords.min_quantity }}</td>
                                            <td class="font-weight-bold">{{ keywords.price }}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(price_slap,index) in admin_quotation.find((e)=>{return e['part_number'] == (sub_quotation['last_draft'] == null ? sub_quotation['part_number']:sub_quotation['last_draft']['part_number']) })['prices']"
                                        :key="index">
                                            <td>{{ price_slap['min_quantity'] }}</td>
                                            <td>{{ price_slap['price'] }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="form-group">
                                <label>{{ keywords.brand }}</label>
                                <select class="form-control" name="brand_id" required>
                                    <option value="">{{ switchWord('select_best_for_you') }}</option>
                                    <option v-for="(i,index) in all_brands" :key="index"
                                            :value="i['id']"
                                            :selected="i['id'] ==  (sub_quotation['last_draft'] == null ? sub_quotation['brand_id']:sub_quotation['last_draft']['brand_id'])">
                                        {{ i['name'] }}
                                    </option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>{{ keywords.part_no }}</label>
                                <input class="form-control" name="part_number"
                                       :value="sub_quotation['last_draft'] == null ? sub_quotation['part_number']:sub_quotation['last_draft']['part_number']" disabled>
                            </div>
                            <div class="form-group">
                                <label>{{ keywords.quantity }}</label>
                                <input class="form-control" name="quantity" type="number"
                                       :value="sub_quotation['last_draft'] == null ? sub_quotation['quantity']:sub_quotation['last_draft']['quantity']" required :min="admin_quotation.length > 0 ? admin_quotation.find((e)=>{return e['part_number'] == (sub_quotation['last_draft'] == null ? sub_quotation['part_number']:sub_quotation['last_draft']['part_number']) })['min_quantity_per_transaction']:1"

                                       :max="admin_quotation.length > 0 ? admin_quotation.find((e)=>{return e['part_number'] == (sub_quotation['last_draft'] == null ? sub_quotation['part_number']:sub_quotation['last_draft']['part_number']) })['max_quantity_per_transaction']:''"
                                >
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary" :value="switchWord('save')">
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



        <div class="modal fade" id="admin_quotation_data"
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
                        <div class="overflow-auto" v-if="admin_quotation.length > 0">
                            <table class="myTable box-model-table table text-center table-bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <td></td>
                                    <td>{{ keywords.seq }}</td>
                                    <td>{{ keywords.part_no }}</td>
                                    <td>{{ keywords.brand }}</td>
                                    <td>{{ keywords.offered_stock }}</td>
                                    <td>{{ keywords.min_quantity_per_transaction }}</td>
                                    <td>{{ keywords.max_quantity_per_transaction }}</td>
                                    <td>{{ keywords.unit_price }}</td>
                                    <td>{{ keywords.estimated_required_days_for_delivery }}</td>
                                    <td>{{ keywords.actions }}</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(i,index) in admin_quotation"
                                    :key="index" :class="'row_child_'+index">
                                    <td>
                                        <input type="checkbox" @click="detect_row_to_export">
                                    </td>
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ i['part_number'] }}</td>
                                    <td>{{ i['brand']['name'] }}</td>
                                    <td>{{ i['offered_stock'] }}</td>
                                    <td>{{ i['min_quantity_per_transaction'] }}</td>
                                    <td>{{ i['max_quantity_per_transaction'] }}</td>
                                    <td>{{ i['prices'][0]['price'] }}</td>
                                    <td>3</td>
                                    <td v-if="i['prices'].length >= 2">
                                        <button class="btn btn-outline-primary"
                                        @click="current_admin_quotation = i"
                                        data-toggle="modal"
                                        data-target="#see_prices"
                                        >{{ keywords.see_prices }}</button>
                                    </td>
                                    <td v-else></td>
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
                        <div class="overflow-auto">
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




        <div class="modal fade" id="print_box"
             v-if="admin_quotation.length > 0"
             tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <div class="d-flex align-items-center justify-content-between mb-5">
                                <div>
                                    <img class="d-block m-auto" src="/images/logo.png">
                                    <p class="mt-3 font-weight-bold">{{ keywords.invoice_number }}
                                        #{{ item.id }}
                                    </p>
                                </div>
                                <div>
                                    <img class="qr_code" style="max-height: 130px;" src="/images/qr.png">
                                </div>
                            </div>
                            <table class="table table-bordered table-hover table-striped">
                                <tbody>
                                <tr>
                                    <td>{{ keywords.part_no }}</td>
                                    <td>{{ keywords.brand }}</td>
                                    <td>{{ keywords.quantity }}</td>
                                    <td>{{ switchWord('unit_price') }}</td>
                                    <td>{{ keywords.total }}</td>
                                </tr>
                                <tr v-for="(i,index) in get_my_quotation"
                                    v-if="i['last_draft'] == null || i['last_draft']['deleted_at'] == null"
                                    :key="index">
                                    <td>
                                        {{
                                            i['last_draft'] == null ? i['part_number']:
                                                i['last_draft']['part_number']
                                        }}
                                   </td>
                                    <td>
                                        {{
                                            i['last_draft'] == null ? i['quantity']:i['last_draft']['quantity']
                                        }}
                                    </td>
                                    <td>{{  i['last_draft'] == null ? i['brand']['name']:
                                        i['last_draft']['brand']['name']
                                        }}</td>
                                    <td>
                                        {{ admin_quotation.find((e)=>{return e['part_number'] == (i['last_draft'] == null ? i['part_number']:
                                        i['last_draft']['part_number']) })['prices'].find((p)=>
                                        {return (i['last_draft'] == null ? i['quantity']:i['last_draft']['quantity']) >=                                                          p['min_quantity']}
                                    )['price']  }}
                                    </td>
                                    <td>
                                        {{ admin_quotation.find((e)=>{return e['part_number'] == (i['last_draft'] == null ? i['part_number']:
                                        i['last_draft']['part_number']) })['prices'].find((p)=>
                                    {return (i['last_draft'] == null ? i['quantity']:i['last_draft']['quantity']) >=                                                          p['min_quantity']}
                                    )['price'] *  (i['last_draft'] == null ? i['quantity']:i['last_draft']['quantity']).toFixed() }}
                                    </td>
                                </tr>
                                <tr class="tax_row tax">
                                    <td colspan="4">{{ switchWord('tax_percentage') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="4">{{ keywords.total }}</td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                            <p class="text-center mb-3">
                                <strong>{{ keywords.wholesale_bill_info }}</strong>
                            </p>
                            <p class="text-center mb-3">
                                <strong>{{ keywords.bill_export_date }}</strong>
                                <strong v-if="item != null">{{ new Date(item['created_at']).toLocaleString() }}</strong>
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



        <div class="modal fade" id="upload_excel"
             tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="upload_excel_box">
                            {{ switchWord('upload_quotation_file') }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form  method="post" @submit.prevent="send_excel">
                            <input v-if="item != null" type="hidden" name="quotation_order_id" :value="item.id">
                            <div class="form-group">
                                <div class="drag-drop-files mb-3" data-aos="fade-up" data-aos-delay="2000">
                                    <input type="file" name="excel_file"
                                    >
                                    <button type="button" class="btn btn-primary">
                                        <span>{{ keywords.excel_file }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div class="form-group">
                                <input class="btn btn-primary"
                                       type="submit" name="send" :value="switchWord('save')">
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







        <div class="modal fade" id="agree_quotation_and_upload_bill"
             tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="agree_quotation_and_upload_bill_box">
                            {{ keywords.agree_request }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" v-if="item != null">
                        <p v-if="item.is_completed == 1"
                           class="alert alert-warning">{{ keywords.on_agree_request_condition }}</p>
                        <p v-else class="alert alert-warning">{{  keywords.you_can_change_receipt }}</p>
                        <img v-if="get_receipt.hasOwnProperty('image') && get_receipt['image'].indexOf('pdf') == -1"
                             class="d-block m-auto w-100"
                             style="max-height: 300px; object-fit: contain;"
                             :src="'/images/receipts/'+get_receipt['image']">
                        <a v-else :href="'/pdfs/receipts/'+get_receipt['image']" target="_blank">{{ switchWord('press_here') }}</a>
                        <form  @submit.prevent="send_agreement_to_admin(item)">
                            <div class="form-group">
                                <label>{{ keywords.receipt_image }}</label>
                                <input type="file" class="form-control" name="receipt" required>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary" :value="switchWord('save')">
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



    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ProfileNavComponent from "../../components/ProfileNavComponent";
import tableData from "../../mixin/tableData";
import tableDataServer from "../../mixin/tableDataServer";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import update_item from "../../mixin/update_item";
import delete_item from "../../mixin/delete_item";
import {mapActions, mapGetters} from "vuex";
export default {
    name: "orders",
    props:['keywords','quotations'],
    mixins:[tableData,tableDataServer,SwitchLangWord,delete_item,update_item],
    data:function (){
        return {
            sub_quotation:null,
            current_admin_quotation:null,
            table_url:'/paginate-data',
            table_requested_table:'quotation_orders',
            table_columns:null,
            page_data:null,
            tax:0,
        }
    },
    created() {
        this.get_all_brands();
        var component = this;
        this.table_columns = [
            { "data": "id",
                "render":function(data,type,row){
                    return '<input type="checkbox" @click="detect_row_to_export">';
                }
            },
            { "data": "id",
                "render":function(data,type,row){
                    return '<span name="order"></span>';
                }
            },
            { "data": "id",},
            { "data": "is_completed",
                "render":function(data,type,row){
                    return  row['is_completed'] == 0  ? component.switchWord('sent_to_admin')
                        :row['is_completed'] == 11 ? component.switchWord('in_progress')
                        :row['is_completed'] == 1 ? component.keywords.wait_client_to_confirm
                            :row['is_completed'] == 2 ? component.keywords.order_confirmed : component.keywords.complete_request_successfully;
                }
            },
            { "data": "id", // get my quotation
                "render":function(data,type,row){
                    return '<button class="btn btn-outline-primary" el_id="'+row['id']+'">'+component.switchWord('see_details')+'</button>';
                }
            },
            { "data": "is_completed",
                "render":function(data,type,row){
                    if(component.$inertia.page.props.user.role.name == 'seller'){
                        if(row['vendors_requests']['check_user_from_vendor_at_items_count'] > 0){
                            return '<button class="btn btn-outline-primary" el_id="' + row['id'] + '">' + component.switchWord("see_details") + '</button>';
                        }else{
                            return '<span>'+component.switchWord('not_reply_yet')+'</span>';
                        }
                    }else {
                        if (row['is_completed'] > 0 && row['is_completed'] != 11) {
                            return '<button class="btn btn-outline-primary" el_id="' + row['id'] + '">' + component.switchWord("see_details") + '</button>'
                        } else {
                            return '';
                        }
                    }
                }
            },
            { "data": "id",
                "render":function (data,type,row,option){
                    if(component.$inertia.page.props.user.role.name == 'seller'){
                        if(row['vendors_requests']['check_user_from_vendor_at_items_count'] == 0){
                            return '<span class="upload_excel" el_id="' + row['id'] + '" ><i class="ri-upload-2-line" title="'+component.switchWord('upload_excel')+'"  el_id="'+row['id']+'"></i> </span>'
                        }else{
                            return '';
                        }
                    }else {
                        if (row['is_completed'] == 0) {
                            return '<span class="delete" el_id="' + row['id'] + '" title="' + component.switchWord("delete_item") + '"><i class="ri-close-line"></i></span>';
                        } else if (row['is_completed'] == 1) {
                            return '<button class="btn btn-outline-primary agree_request" el_id="' + row['id'] + '" >' + component.switchWord("agree_request") + '</button>';
                        } else if (row['is_completed'] == 2) {
                            return '<span title="' + component.switchWord("receipt_photo") + '" class="receipt accept" el_id="' + row['id'] + '"><i class="ri-file-paper-line"></i></span>'
                        } else if (row['is_completed'] == 3) {
                            return '<span class="print" title="' + component.switchWord("print_bill") + '" el_id="' + row['id'] + '"><i class="ri-printer-line"></i></span><span title="' + component.switchWord("receipt_photo") + '" class="receipt accept" el_id="' + row['id'] + '"><i class="ri-file-paper-line"></i></span>'
                        } else {
                            return '';
                        }
                    }
                }
            },
        ];

        // add events
        // get quotations details
        $('.content').on('click','.data table tbody tr td:nth-of-type(5) button',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            console.log($(this).attr('el_id'));
            await component.get_data_of_quotation($(this).attr('el_id'));
            await component.update_item(item);
            $('#my_quotations').modal('show');
        });
        // get admin reply
        $('.content').on('click','.data table tbody tr td:nth-of-type(6) button',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            await component.get_data_admin_of_quotation($(this).attr('el_id'));
            await component.update_item(item);
            $('#admin_quotation_data').modal('show');
        });
        // agree request
        $('.content').on('click','.data table tbody tr td.actions button.agree_request,.data table tbody tr td.actions .receipt',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            //await component.send_agreement_to_admin(item);
            await component.update_item(item);
            if(item['is_completed'] >= 2){
                await component.get_receipt_action(item);
            }
            $('.modal#agree_quotation_and_upload_bill').modal('show');
        });
        // print bill
        $('.content').on('click','.data table tbody tr td.actions span.print',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            await component.print_bill(item);
            await component.update_item(item);
        });

        // export file
        $('.content').on('click','.data table tbody tr td:first-of-type',async function (){
            component.detect_row_to_export();
        });
        // upload excel file
        $('.content').on('click','.data table tbody tr td:last-of-type span.upload_excel',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            await component.update_item(item);
            $('#upload_excel').modal('show');
        });
        // delete
        $('.content').on('click','.data table tbody tr td:last-of-type span.delete',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            await component.delete_item('quotation_orders',$(this).attr('el_id'),$(this).parent().parent());
        });

    },
    computed:{
        ...mapGetters({
            'get_my_quotation':'quotations_dash/get_data_quotations',
            'admin_quotation':'quotations_dash/get_data_quotations_admin',
            'all_brands':'brands/get_brands',
            'get_receipt':'quotations_dash/get_receipt',
        })
    },
    methods:{
        ...mapActions({
            'get_info_about_quotation':'quotations_dash/get_info_about_quotation',
            'get_info_about_quotation_admin':'quotations_dash/get_info_about_quotation_reply_admin',
            'send_excel':'quotations_dash/upload_file',

            // get brands
            'get_all_brands':'brands/get_brands',
            'update_quotation_at_draft':'quotations_dash/save_quotation_at_draft',
            'send_agreement_to_admin':'quotations_dash/send_agreement_to_admin',
            'get_info_to_print_bill':'quotations_dash/get_info_to_print_bill',
            'get_receipt_action':'quotations_dash/get_receipt_action',
        }),
        pass_data_to_export:function (){
            let arr = [];
            let checked = $('table tr td input:checked');
            if(checked.length == 0){
                Toast.fire({
                   'icon':'error',
                   'title':this.switchWord('please_select_rows_to_export'),
                });
                return false;
            }
            for(let tr_id of checked){
                arr.push($(tr_id).parent().next().next().html());
            }
          //  window.location = window.location.host+'/quotations/export-file?ids='+arr.join();
            window.open(window.location.origin+'/quotations/export-file?ids='+arr.join());
        },
        get_data_of_quotation:function(id){
            this.get_info_about_quotation(id);
        },
        get_data_admin_of_quotation:function(id){
            this.get_info_about_quotation_admin(id);
        },
        update_sub_quotation:function (item){
          this.sub_quotation = item;
        },
        update_current_quotation_open_box:async function (i){
            this.update_sub_quotation(i);
            await this.get_data_admin_of_quotation(this.item['id']);
            $('#update_current_quotation').modal('show');
        },
        print_bill:async function (i){
            this.item = i;
            await this.get_info_to_print_bill(i['id']);
            $('#print_box').modal('show');
            var total = 0;
            for(let price of $('#print_box table tr:not(:first-of-type,:last-of-type,.tax_row) td:last-of-type')){
                total += Number($(price).html());
            }
            $('#print_box table tr.tax td:last-of-type').html(total * this.item.tax / 100);
            total += (total * this.item.tax / 100 );
            $('#print_box table tr:last-of-type td:last-of-type').html(total);

        },
        printOrder:function(){
            window.print();
        },
        detect_row_to_export:function(){
            if($(event.target).is(":checked")) {
                event.target.parentElement.parentElement.classList.add('selected');
            }else{
                event.target.parentElement.parentElement.classList.remove('selected');
            }
        }
    },
    mounted() {
        let all_thead_tds = document.querySelectorAll
        ('.myTableServer thead tr td:nth-of-type(3),.myTableServer thead tr td:nth-of-type(4)');
        for( let input of all_thead_tds){
            console.log(input);
            input.className = 'position-relative input-icon';
            input.innerHTML = '<input class="form-control" name="' + input.getAttribute('name') + '" placeholder="' + input.textContent + '"><span><i class="ri-search-line"></i></span>';
        }
    },
    components: {ProfileNavComponent, NavbarComponent,FooterComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.ar{

}
.en{


}
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

#my_quotations .modal-dialog,
#admin_quotation_data .modal-dialog{
    max-width: 1200px;
}

.modal{
    z-index: 999999999999;
}

#print_box{
    >div{
        max-width: 900px;
    }
}

@media (max-width: 767px) {
    .sales{
        table{
            thead{
                input{
                    width: 150px;
                }
            }
        }
    }
}
</style>

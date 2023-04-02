<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mb-4">


                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
                    <button v-if="false" class="btn black-btn btn-outline-primary"
                            data-toggle="modal" data-target="#update_box" @click="update_item(null)">
                        {{ switchWord('add_new_item') }}
                    </button>
                </p>

                <div class="m-auto mb-3 filters last-quotations-filter">
                    <form>
                        <p>
                            <input type="radio" name="is_completed" :value="switchWord('all')">
                            <span>{{ switchWord('all') }}</span>
                        </p>
                        <p>
                            <input type="radio" name="is_completed" :value="switchWord('sent_to_admin')">
                            <span>{{ switchWord('sent_to_admin') }}</span>
                        </p>
                        <p>
                            <input type="radio" name="is_completed" :value="switchWord('sent_to_vendors')">
                            <span>{{ switchWord('sent_to_vendors') }}</span>
                        </p>
                        <p>
                            <input type="radio" name="is_completed" :value="switchWord('vendors_reply')">
                            <span>{{ switchWord('vendors_reply') }}</span>
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
                            <input type="radio" name="is_completed" :value="switchWord('cancel_request')">
                            <span>{{ switchWord('cancelled_requests') }}</span>
                        </p>
                        <p>
                            <input type="radio" name="is_completed" :value="switchWord('order_confirmed')">
                            <span>{{ switchWord('order_confirmed') }}</span>
                        </p>
                    </form>
                </div>

                <div class="overflow-auto data">
                    <table class="myTableServer table text-center table-bordered table-striped table-hover">
                        <thead>
                        <tr>
                            <td></td>
                            <td v-for="(i,index) in handling_data['table_head_keys']"
                                :name="index"
                                :key="index">
                                <p :name="index">{{ i }}</p>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
<!--

                        <tr v-for="(i,index) in vuex_data"
                             :style="i['is_completed'] == 3 ? 'background-image:linear-gradient(0deg, #82aed4, transparent)':''"
                            :key="index" :class="'row_'+index">
                            <td>
                                <input type="checkbox" @click="detect_row_to_export">
                            </td>
                            <td>{{ i['user']['username'] }}</td>

                            <td>
                                <button class="btn btn-outline-primary"
                                        data-toggle="modal"
                                        @click="get_data_of_quotation(i['id']); update_item(i)"
                                        data-target="#my_quotations"
                                >
                                    {{ switchWord('see_details') }}
                                </button>
                            </td>
                            <td>
                                <p v-if="i['is_completed'] == 0">{{ keywords.wait_to_send_file_quotation }}</p>
                                <p v-else-if="i['is_completed'] == 1">
                                    {{ keywords.file_send_and_wait_from_client_to_confirm_request }}
                                </p>
                                <p v-else-if="i['is_completed'] == 2">
                                    <span>{{ keywords.client_confirm_request }}</span>
                                    <button class="confirm"
                                            @click="finish_order(i)">{{ keywords.click_here_to_finish_request }}</button>
                                </p>
                                <p v-else-if="i['is_completed'] == 3">
                                    <span>{{ keywords.complete_request_successfully }}</span>
                                </p>
                            </td>
                            <td>{{ new Date(i['created_at']).toLocaleString() }}</td>
                            <td>
                                <button v-if="i['is_completed'] >= 1" class="btn btn-outline-primary"
                                        data-toggle="modal"
                                        @click="get_data_admin_of_quotation(i['id'])"
                                        data-target="#admin_quotation_data">
                                    {{ switchWord('see_details') }}
                                </button>
                            </td>
                            <td class="actions">
                                <span class="accept" v-if="false">
                                    <i
                                       class="ri-check-line">
                                    </i>
                                </span>
                                <span
                                    data-toggle="modal"
                                    @click="item = i"
                                    data-target="#upload_excel"
                                    >
                                    <i class="ri-upload-2-line"></i>
                                </span>
                                <span class="delete"  @click="delete_item('quotation_orders'
                                       ,i['id'],'.row_'+index)"><i class="ri-close-line"></i></span>
                            </td>
                        </tr>
-->

                        </tbody>
                    </table>
                </div>
            </div>
        </div>



         <div  class="modal fade" id="my_quotations"
              v-if="get_my_quotation != null"
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
                        <a v-if="item != null"
                           class="btn btn-primary mb-2"
                           :href="'/quotations/export-file?ids='+item['id']" target="_blank">
                            {{ switchWord('export_selected') }}
                        </a>
                        <input class="form-control search_without_button mb-2" :placeholder="switchWord('search_for_you_best')">
                        <div class="overflow-auto hide-buttons">

                            <table class="table text-center table-bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <td>{{ keywords.brand }}</td>
                                    <td>{{ keywords.part_no }}</td>
                                    <td>{{ keywords.quantity }}</td>
                                    <td>{{ keywords.actions }}</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(i,index) in get_my_quotation"
                                    :key="index" :class="'row_child_'+index"
                                    v-if="i['last_draft'].length == 0 ||
                                    (i['last_draft'].length > 0 && i['last_draft'][0]['deleted_at'] == null)">
                                    <td>{{
                                            i['last_draft'].length == 0 ?
                                        (i['brand'] !=null ? i['brand']['name']:i['brand_id']):
                                        (i['last_draft'][0]['brand'] != null ? i['last_draft'][0]['brand']['name']:i['last_draft'][0]['brand_id'] )
                                        }}
                                    </td>
                                    <td>{{ i['last_draft'].length == 0 ? i['part_number']:
                                        i['last_draft'][0]['part_number'] }}</td>
                                    <td>{{ i['last_draft'].length == 0 ? i['quantity']:i['last_draft'][0]['quantity'] }}</td>
                                    <td class="actions" >
                                         <span data-toggle="modal" v-if="i['last_draft'].length > 0"
                                               @click="item = i"
                                               :title="switchWord('see_edits')"
                                               data-target="#old_update">
                                             <i class="ri-file-line"></i>
                                         </span>
                                        <p v-else>{{ switchWord('no_edits_history') }}</p>
                                    </td>
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


        <div class="modal fade" id="admin_quotation_data"
             tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="admin_quotation_data_box">
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
                        <a class="btn btn-primary mb-3"
                            v-if="item != null"
                            :href="'/quotations/export-file?ids='+item['id']"
                           download>{{ switchWord('download_file') }}</a>
                        <input class="form-control search_without_button mb-2" :placeholder="switchWord('search_for_you_best')">
                        <div class="overflow-auto hide-buttons">
                            <table class="table text-center table-bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <td>{{ keywords.seq }}</td>
                                    <td>{{ keywords.part_no }}</td>
                                    <td>{{ keywords.brand }}</td>
                                    <td>{{ keywords.offered_stock }}</td>
                                    <td>{{ keywords.min_quantity_per_transaction }}</td>
                                    <td>{{ keywords.max_quantity_per_transaction }}</td>
                                    <td>{{ keywords.actions }}</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(i,index) in admin_quotation"
                                    :key="index" :class="'row_child_'+index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ i['part_number'] }}</td>
                                    <td>{{ i['brand'] != null ? i['brand']['name']:i['brand_id'] }}</td>
                                    <td>{{ i['offered_stock'] }}</td>
                                    <td>{{ i['min_quantity_per_transaction'] }}</td>
                                    <td>{{ i['max_quantity_per_transaction'] }}</td>
                                    <td v-if="i['prices'].length > 0">
                                        <button class="btn btn-outline-primary"
                                                @click="current_admin_quotation = i"
                                                data-toggle="modal"
                                                data-target="#see_prices"
                                        >{{ keywords.see_prices }}</button>
                                    </td>

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
                                           @change="change_file"
                                          >
                                    <span class="ml-2 mr-2"></span>
                                    <p class="alert alert-danger"></p>
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




        <div class="modal fade" id="old_update"
                     v-if="item != null"
                     tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="update_quotations_box" v-if="item != null">
                                    {{ switchWord('see_details') }}
                                </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="overflow-auto">
                                    <table class="table text-center table-bordered table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <td v-for="i in handling_data['table_head_keys_model']" :key="i"
                                                v-if="i != 'actions'">
                                                {{ i }}
                                            </td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(i,index) in item['last_draft']"
                                            :key="index" :class="'row_child_'+index">
                                            <td>{{ i['brand'] != null ? i['brand']['name']:i['brand_id'] }}</td>
                                            <td>{{ i['part_number'] }}</td>
                                            <td>{{ i['quantity'] }}</td>
                                            <td>{{ new Date(i['created_at']).toLocaleString() }}</td>
                                            <td>{{ i['deleted_at'] != null ?
                                                switchWord('delete_item'):switchWord('update_new_item') }}</td>
                                        </tr>
                                        <tr v-if="item.hasOwnProperty('last_draft') && item['last_draft'].length > 0">
                                            <td>{{ item['last_draft'][0]['brand'] != null ? item['last_draft'][0]['brand']['name']:item['last_draft'][0]['brand_id'] }}</td>
                                            <td>{{ item['last_draft'][0]['part_number'] }}</td>
                                            <td>{{ item['quantity'] }}</td>
                                            <td>{{ new Date(item['created_at']).toLocaleString() }}</td>
                                            <td>{{ switchWord('basic_value') }}</td>
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
                        <p v-if="item.is_completed == 2"
                           class="alert alert-warning">{{ keywords.on_agree_request_condition }}</p>
                        <p v-else class="alert alert-warning">{{  keywords.you_can_change_receipt }}</p>

                        <img v-if="get_receipt.hasOwnProperty('image') && get_receipt['image'].indexOf('pdf') == -1"
                             class="d-block m-auto w-100"
                             style="max-height: 300px; object-fit: contain;"
                             :src="'/images/receipts/'+get_receipt['image']">
                        <a v-if="get_receipt.hasOwnProperty('image') && get_receipt['image'].indexOf('pdf') == -1"
                           :href="'/images/receipts/'+get_receipt['image']"
                           target="_blank">{{ switchWord('press_here') }}
                        </a>
                        <a v-else-if="get_receipt.hasOwnProperty('image') &&
                        get_receipt['image'].indexOf('pdf') != -1"
                           :href="'/pdf/receipts/'+get_receipt['image']"
                           target="_blank">{{ switchWord('press_here') }}
                        </a>
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
                                <div v-if="item != null">
                                    <img class="d-block m-auto" style="width: 150px;" src="/images/logo.png">
                                    <p class="mt-3 font-weight-bold">{{ keywords.invoice_number }}
                                        #W
                                        {{ ("0" + (new Date(item.created_at).getFullYear())).slice(-2) }}
                                        {{ ("0" + (new Date(item.created_at).getMonth() + 1)).slice(-2) }}
                                        {{ item.id }}
                                    </p>
                                </div>
                                <div>
                                    <img class="qr_code" style="max-height: 130px;" src="/images/qr.png">
                                </div>
                            </div>
                            <table class="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        <td>{{ keywords.seq }}</td>
                                        <td>{{ keywords.part_no }}</td>
                                        <td>{{ keywords.en_part_name }}</td>
                                        <td>{{ keywords.brand }}</td>
                                        <td>{{ keywords.quantity }}</td>
                                        <td>{{ switchWord('unit_price') }}</td>
                                        <td>{{ keywords.total }}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(i,index) in get_my_quotation"
                                    v-if="i['last_draft'].length == 0 || i['last_draft'][0]['deleted_at'] == null"
                                    :class="(Number(index+1) % 22 ) == 0 ? 'avoid':''"
                                    :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        {{
                                            i['last_draft'].length == 0 ?
                                                detect_supplied_part_name(i['part_number'])
                                                :detect_supplied_part_name(i['last_draft'][0]['part_number'])
                                        }}
                                    </td>
                                    <td v-if="admin_quotation.length > 0">
                                        {{
                                            detect_right_part_name(i['part_number'])
                                        }}
                                    </td>
                                    <td>
                                        {{
                                            i['last_draft'].length == 0 ?
                                                (i['brand'] != null ? i['brand']['name']:i['brand_id']):
                                                (
                                                    i['last_draft'][0]['brand'] != null ?
                                                    i['last_draft'][0]['brand']['name']:
                                                    i['last_draft'][0]['brand_id']
                                                )
                                        }}
                                    </td>
                                    <td>
                                        {{
                                            i['last_draft'].length == 0 ? i['quantity']:i['last_draft'][0]['quantity']
                                        }}
                                    </td>
                                    <td>
<!--                                        {{  detect_right_price(i) }}-->
                                    </td>
                                    <td>
<!--                                        {{ Number(isNaN(detect_right_price(i))? detect_right_price(i):
                                        detect_right_price(i) *  (i['last_draft'].length == 0 ? i['quantity']:i['last_draft'][0]['quantity'])).toFixed(2) }}-->
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr class="total_part_number_price">
                                    <td colspan="6">{{ switchWord('total_part_number_price') }}</td>
                                    <td></td>
                                </tr>
                                <tr class="tax_row">
                                    <td colspan="6">{{ keywords.tax }}</td>
                                    <td v-if="item != null">{{  item.tax }}%</td>
                                    <td v-else></td>
                                </tr>
                                <tr>
                                    <td colspan="6">{{ keywords.total }}</td>
                                    <td></td>
                                </tr>
                                </tfoot>

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


        <div class="modal fade" id="update_file_money"
             tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_file_money_box">
                            {{ keywords.upload_bank_document }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" v-if="item != null">
                        <img
                            v-if="get_file_money.hasOwnProperty('file') &&
                         !(get_file_money['file'].split('.pdf')[1] != undefined)"
                             class="d-block m-auto w-100"
                             style="max-height: 300px; object-fit: contain;"
                             :src="'/images/money_files/'+get_file_money['file']">
                        <a v-else-if="get_file_money.hasOwnProperty('file')" :href="'/images/money_files/'+get_file_money['file']" target="_blank">
                            {{ switchWord('press_here') }}
                        </a>
                        <form  @submit.prevent="send_file_money_to_admin(item)">
                            <div class="form-group">
                                <label>{{ keywords.file }}</label>
                                <input type="file" class="form-control" name="file" required>
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



        <div class="modal fade" id="share_vendors"
             tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="share_vendor_file">
                            {{ keywords.share_quotation_file }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" v-if="item != null">

                        <form  @submit.prevent="add_vendor_per_request(item)">
                            <div class="row align-items-center">
                                <div class="col-md-6 col-12">
                                    <div class="form-group input-icon">
                                        <label>{{ keywords.add_vendor }}</label>
                                        <select class="form-control"
                                                v-if="vendors_per_request"
                                                name="user_id" required>
                                            <option value="">{{ switchWord('select_best_choice') }}</option>
                                            <option v-if="!(vendors_per_request.find(e => e['user_id'] == i['id']))"
                                                    v-for="(i,index) in handling_data['sellers']"
                                                    :key="index" :value="i['id']">{{ i['username'] }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <input type="submit" class="btn btn-primary w-100" :value="switchWord('save')">
                                </div>
                            </div>
                        </form>
                        <table class="myTable table text-center table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <td>{{ keywords.vendor_name }}</td>
                                    <td>{{ keywords.vendor_file }}</td>
                                    <td>{{ keywords.actions }}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(i,index) in  vendors_per_request"
                                    :class="'row_ven_'+index"
                                    :key="index">
                                    <td>{{ i['user']['username'] }}</td>
                                    <td>
                                        <a v-if="i['check_user_from_vendor_at_items_count'] > 0" target="_blank"
                                           :href="'/quotations/export-file?user_id='+i['user']['id']+'&ids='+i['quotation_order_id']"
                                           download>{{ switchWord('download_file') }}</a>
                                        <span v-else>{{ switchWord('not_reply_yet') }}</span>
                                    </td>
                                    <td class="actions">
                                        <span class="delete"
                                              @click="delete_item('vendors_requests',i['id'],'.row_ven_'+index)"><i class="ri-close-line"></i></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
</template>

<script>
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";
import tableData from "../../mixin/tableData";
import tableDataServer from "../../mixin/tableDataServer";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import delete_item from "../../mixin/delete_item";
import update_item from "../../mixin/update_item";
import detect_row_for_export from "../../mixin/detect_row_for_export";
import detect_right_part_number from "../../mixin/detect_right_part_number";
import detect_right_part_name from "../../mixin/detect_right_part_name";
import {mapState,mapActions , mapGetters , mapMutations} from "vuex";
import TableData from "../../mixin/tableData";
export default {
    name: "quotations",
    mixins:[tableData,SwitchLangWord,update_item,delete_item,detect_row_for_export,tableDataServer,detect_right_part_number,detect_right_part_name],
    props:['main_title','handling_data','keywords'],
    data:function(){
        return {
            modal_data:[],
            quotations_info:[],
            current_admin_quotation:null,
            table_url:'/paginate-data',
            table_requested_table:'quotation_orders',
            table_columns:null,
            page_data:null,
            tax:this.tax_val,

        }
    },
    computed:{
        ...mapGetters({
            'get_my_quotation':'quotations_dash/get_data_quotations',
            'vuex_data':'quotations_dash/get_data',
            'admin_quotation':'quotations_dash/get_data_quotations_admin',
            'all_brands':'brands/get_brands',
            'get_receipt':'quotations_dash/get_receipt',
            'get_file_money':'quotations_dash/get_file_money',
            'vendors_per_request':'quotations_dash/get_vendors_per_request',


        })
    },
    mounted() {
        let all_thead_tds = document.querySelectorAll
        ('.myTableServer thead tr td:nth-of-type(2) p,.myTableServer thead tr td:nth-of-type(3) p,.myTableServer thead tr td:nth-of-type(4) p,.myTableServer thead tr td:nth-of-type(6) p');
        for( let input of all_thead_tds){
            console.log(input);
            input.innerHTML = '<input class="form-control" name="' + input.parentElement.getAttribute('name') + '" placeholder="' + input.textContent.trim() + '">';
        }
        setTimeout(()=>{
            this.inlize_data(this.page_data);
        },2500);
    },
    created() {
        this.update_qotation_data([]);
        var component = this;
        this.table_columns = [
            { "data": "id",
                "render":function(data,type,row){
                    return '<input type="checkbox" @click="detect_row_to_export">';
                }
            },
            { "data": "id"},
            { "data": "id",
                "render":function(data,type,row){
                    return row['user']['username'];
                }
            },
            { "data": "id",
                "render":function(data,type,row){
                    return row['user']['phone'];
                }
            },
            {"data":"id",
                "render":function (data,type,row){
                    return '<button class="client_request btn btn-outline-primary" el_id="'+row['id']+'">'+component.switchWord('see_details')+'</button>'
                }
            },
            { "data": "is_completed",
                "render":function(data,type,row){
                    return  row['is_completed'] == 0 ? component.switchWord('sent_to_admin')
                        :row['is_completed'] == 1 ? component.keywords.reply_from_admin
                            :row['is_completed'] == -1 ? '<span>'+component.switchWord('cancel_done')+'</span>'+'<span class="cancel_info_icon" title="'+component.handling_data.reasons.find((e)=>{return e['id'] == row['cancelled_quotations']['cancelled_id']}) != null ? component.handling_data.reasons.find((e)=>{return e['id'] == row['cancelled_quotations']['cancelled_id']})['name']:''+'"><i class="ri ri-information-line"></i></span>'
                            :row['is_completed'] == 11 ? component.switchWord('vendors_reply')
                            :row['is_completed'] == 2 ? '<button el_id="'+row['id']+'" class="confirm btn btn-outline-primary">'+component.keywords.click_here_to_finish_request+'</button>' : component.switchWord('order_confirmed');
                }
            },
            { "data": "id", // get my quotation
                "render":function(data,type,row){
                    return new Date(row['created_at']).toLocaleString();
                }
            },
            { "data": "is_completed",
                "render":function(data,type,row){

                    if(row['is_completed'] >= 1 && row['is_completed'] != 11){
                        return '<button class="admin_response btn btn-outline-primary" el_id="'+row['id']+'" >'+component.switchWord('see_details')+'</button>'
                    }else{
                        return '';
                    }
                }
            },
            { "data": "id",
                "render":function (data,type,row,option){
                        var output =  '<span><i class="ri-upload-2-line" title="'+component.switchWord('upload_excel')+'"  el_id="'+row['id']+'"></i> </span><span class="receipt accept '+(row['my_receipt_count'] > 0 ? 'already_uploaded':'')+'" title="'+component.switchWord('receipt_photo')+'"  el_id="'+row['id']+'"><i class="ri-file-paper-line"></i></span><span class="repositry_upload"  title="'+component.switchWord('bank_document')+'"  el_id="'+row['id']+'"><i class="ri-money-dollar-box-line"></i></span>';
                        if(row['is_completed'] == 3){
                            output+= '<span class="print"  title="'+component.switchWord('print_bill')+'"  el_id="'+row['id']+'"><i class="ri-printer-line"></i></span>'
                        }
                        // <i class="ri-share-forward-line"></i>
                    output+= '<span class="share"  title="'+component.switchWord('share')+'"  el_id="'+row['id']+'"><i class="ri-share-forward-line"></i></span>';
                        // cancel request
                    if(!(row['is_completed'] == 3 || row['is_completed'] == -1)){
                        output += '<span class="delete cancel_request" style="color:darkred;" title="'+component.switchWord('cancel_request')+'"  el_id="'+row['id']+'"><i class="ri-delete-back-line"></i></span>';
                    }

                        /*output += '<span class="delete" title="'+component.switchWord('delete_item')+'"  el_id="'+row['id']+'"><i class="ri-close-line"></i></span>';*/
                        return output;
                    }
            },
        ];

        // add events
        // export file
        $('.content').on('click','.data table tbody tr td:first-of-type',async function (){
            component.detect_row_to_export();
        });
        // show details
        $('.content').on('click','.data table tbody tr td button.client_request',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            await component.get_data_of_quotation($(this).attr('el_id'));
            await component.update_item(item);
            $('#my_quotations').modal('show');
        });
        // finish order
        $('.content').on('click','.data table tbody tr td button.confirm',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            await component.finish_order(item);
        });
        // get admin file data reply
        $('.content').on('click','.data table tbody tr td button.admin_response',async function (){
            console.log($(this));
            var item = component.get_obj_wanted($(this).attr('el_id'));
            await component.update_item(item);
            await component.get_data_admin_of_quotation($(this).attr('el_id'));
            $('#admin_quotation_data').modal('show');
        });
        // agree request
        $('.content').on('click','.data table tbody tr td.actions .receipt',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            //await component.send_agreement_to_admin(item);
            await component.update_item(item);
            await component.get_receipt_action(item);
            $('.modal#agree_quotation_and_upload_bill').modal('show');
        });
        // send quotations to vendors
        $('.content').on('click','.data table tbody tr td.actions .share',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            //await component.send_agreement_to_admin(item);
            await component.update_item(item);
            await component.get_vendor_request(item);
           // await component.get_receipt_action(item);
            $('.modal#share_vendors').modal('show');
        });
        // get file money
        $('.content').on('click','.data table tbody tr td.actions .repositry_upload',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            //await component.send_agreement_to_admin(item);
            await component.update_item(item);
            await component.get_money_file_action(item);
            $('.modal#update_file_money').modal('show');
        });
        // print bill
        $('.content').on('click','.data table tbody tr td.actions span.print',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            await component.print_bill(item);
            await component.update_item(item);
        });
        // upload excel file
        $('.content').on('click','.data table tbody tr td:last-of-type span:first-of-type i',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            await component.update_item(item);
            $('#upload_excel').modal('show');
        });
        // cancel request
        $('.content').on('click','.data table tbody tr td:last-of-type span.cancel_request',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            console.log('cancel........1..');
            await component.cancel_request('quotation_orders',$(this).attr('el_id'),$(this).parent().parent());
        });
        // delete
        /*$('.content').on('click','.data table tbody tr td:last-of-type span:last-of-type',async function (){
            var item = component.get_obj_wanted($(this).attr('el_id'));
            await component.delete_item('quotation_orders',$(this).attr('el_id'),$(this).parent().parent());
        });*/
    },
    methods:{
        change_file:function (){
            event.target.nextElementSibling.innerHTML = event.target.files[0].name;
        },
        ...mapActions({
            'get_info_about_quotation':'quotations_dash/get_info_about_quotation',
            'get_info_about_quotation_admin':'quotations_dash/get_info_about_quotation_reply_admin',
            // get brands
            'get_all_brands':'brands/get_brands',
            'update_quotation_at_draft':'quotations_dash/save_quotation_at_draft',
            'send_excel':'quotations_dash/upload_file',
            'finish_order':'quotations_dash/finish_order',
            'get_receipt_action':'quotations_dash/get_receipt_action',
            'get_money_file_action':'quotations_dash/get_money_file_action',
            'get_info_to_print_bill':'quotations_dash/get_info_to_print_bill',
            'send_agreement_to_admin':'quotations_dash/send_agreement_to_admin',
            'send_file_money_to_admin':'quotations_dash/send_file_money_to_admin',
            'get_vendor_request':'quotations_dash/get_vendor_request',
            'add_vendor_per_request':'quotations_dash/add_vendor',

        }),
        get_data_of_quotation:function(id){
            this.get_info_about_quotation(id);
        },
        get_data_admin_of_quotation:function(id){
            this.get_info_about_quotation_admin(id);
        },
        update_sub_quotation:function (item){
            this.sub_quotation = item;
        },
        detect_right_price:function (i){
            var d =  this.admin_quotation.find((e)=>{
                console.log(i['last_draft'].length);
                return e['part_number'] == (i['last_draft'].length == 0  ? i['part_number']:
                    i['last_draft'][0]['part_number'])
            });
            if(d != undefined){
                d = d['prices'].find((p)=>
                    {return (i['last_draft'].length == 0 ? i['quantity']:i['last_draft'][0]['quantity']) >=                                                          p['min_quantity']}
                );
            }
            if(d == undefined){
                return this.switchWord('error_in_price')
            }else{
                return d['price']
            }
        },
        print_bill:async function (i){
            this.item = i;
            await this.get_info_to_print_bill(i['id']);
            $('#print_box').modal('show');
            //
            var total = 0;
            for(let data_item_index in this.get_my_quotation){
                var tr = $('#print_box table tbody tr').eq(data_item_index);
                tr.find('td:nth-of-type(6)')
                    .html(Number(this.detect_right_price(this.get_my_quotation[data_item_index]))
                    .toFixed(2));
                var result = '';
                if(isNaN(this.detect_right_price(this.get_my_quotation[data_item_index]))){
                    result = this.detect_right_price(this.get_my_quotation[data_item_index]);
                }else{
                    result = Number(this.detect_right_price(this.get_my_quotation[data_item_index]) *
                        (this.get_my_quotation[data_item_index]['last_draft'].length == 0 ?
                            this.get_my_quotation[data_item_index]['quantity']:
                            this.get_my_quotation[data_item_index]['last_draft']
                                [0]['quantity'])).toFixed(2);
                }

                tr.find('td:nth-of-type(7)')
                    .html(result);
                total += Number(result)
            }


            $('.total_part_number_price td:last-of-type').html(total.toFixed(2));
            $('#print_box table tr.tax_row td:last-of-type')
                .html(Number(total * Number(this.item.tax ) / 100).toFixed(2));
            total += (total * this.item.tax / 100 );
            $('#print_box table tfoot tr:last-of-type td:last-of-type').html(Number(total).toFixed(2));



        },
        printOrder:function(){
            window.print();
        },
        ...mapMutations({
            'inlize_data':'quotations_dash/inilalize_data',
            'update_qotation_data':'quotations_dash/update_qotation_data',
        }),

    },
    components: {TableData, SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.alert-danger{
    display: none;
}

#update_quotations .modal-dialog{
    width: 70%;
    max-width: 900px;
}
.loading-img{
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: white;
    text-align: center;
    margin: auto;
    display: none;
    height: 380px;
}
table{
    tr{
        td{
            p{
                text-align: center;
                button{
                    border: none;
                    outline: none;
                    background-color: transparent;
                    color:$main_color;
                }
            }
        }
    }
}

#my_quotations .modal-dialog,
#old_update .modal-dialog,
#see_prices .modal-dialog,
#admin_quotation_data .modal-dialog{
    max-width: 1100px;
}

@media print {
    body * { visibility: hidden;}
    *:not(td){
        top:0px; margin: 0px; transform: unset; padding: 0px;
    }
    .content.users,nav,footer{
        display: none;
    }
    .receipt{height: auto;}
    .receipt * { visibility: visible; margin: 0px}
    .receipt button{visibility: hidden;}
    #receipt .modal-footer{display: none;}
    #fb-root{display: none;}
    .modal{
        position: relative !important;
        top:0px !important;
    }
}

#print_box{
    >div{
        max-width: 900px;
    }
}


</style>

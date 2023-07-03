<template>
    <section class="bill">
        <navbar-component></navbar-component>
        <div class="container">
            <div class="receipt" v-if="item != null">
            <div id="admin_quotation_data">
                <div class="loading-img">
                    <img src="/images/loading.gif">
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-5"
            >
                <div>
                    <img class="d-block m-auto" style="width: 150px;" src="/images/logo.png">
                    <p class="mt-3 font-weight-bold">{{ keywords.invoice_number }}
                        #W{{ ("0" + (new Date(item.created_at).getFullYear())).slice(-2) }}{{ ("0" + (new Date(item.created_at).getMonth() + 1)).slice(-2) }}{{ item.id }}
                    </p>
                    <p>
                        <span class="font-weight-bold">{{ switchWord('tax_number') }}</span> : <span class="font-weight-bold">310188508400003</span>
                    </p>
                    <p>
                        <span class="font-weight-bold">{{ switchWord('cr_number') }}</span> : <span class="font-weight-bold">2051224564</span>
                    </p>
                    <p v-if="item != null">
                        <span class="font-weight-bold">{{ switchWord('client_name') }}</span>:
                        <span>{{ item.user.username }}</span>
                    </p>
                    <p v-if="item != null">
                        <span class="font-weight-bold">{{ switchWord('phone_number') }}</span>:
                        <span>{{ item.user.phone }}</span>
                    </p>
                    <p v-if="item.address_quotation != null">
                        <span class="font-weight-bold">{{ switchWord('address') }}</span>:
                        <span>{{ item.address_quotation.address.address }}</span>
                    </p>
                    <p v-if="item != null">
                        <span class="font-weight-bold">{{ keywords.date }}</span>:
                        <span v-if="item != null">{{ new Date(item['updated_at']).toLocaleString() }}</span>
                    </p>
                </div>
                <div v-if="item != null">
                    <qr-code
                        :size="190"
                        :text="'https://wholesale.mkena.com/profile/last-quotations?bill_id='+item['id']"></qr-code>

                </div>
            </div>

            <table class="mb-0 table table-bordered table-hover table-striped">
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
                    v-if="i['last_draft'] == null || i['last_draft']['deleted_at'] == null"
                    :style="'display:'+( (i['last_draft'] == null ? i['quantity']:i['last_draft']['quantity']) > 0 ? 'table-row':'none')"
                    :class="index == 20 ?
                                    'avoid':
                                    ((Number(index-20) % 28 ) == 0 ? 'avoid':'')"
                    :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>
                        {{
                            i['last_draft'] == null ?
                                detect_supplied_part_name(i['part_number'],index):
                                detect_supplied_part_name(i['last_draft']['part_number'],index)
                        }}
                    </td>
                    <td v-if="admin_quotation.length > 0">
                        {{
                            detect_right_part_name(i['part_number'])
                        }}
                    </td>
                    <td>{{  i['last_draft'] == null ?
                        (i['brand'] != null ? i['brand']['name']:i['brand_id'])
                        :
                        (i['last_draft']['brand'] != null ?
                            i['last_draft']['brand']['name']:i['last_draft']['brand_id'])
                        }}</td>
                    <td>
                        {{
                            i['last_draft'] == null ? i['quantity']:i['last_draft']['quantity']
                        }}
                    </td>

                    <td>

                    </td>
                    <td>

                    </td>
                </tr>
                </tbody>
            </table>
            <table class="table table-bordered table-hover table-striped">
                <thead style="visibility: collapse;">
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
                <tfoot>
                <tr class="total_part_number_price">
                    <td colspan="6">{{ switchWord('total_part_number_price') }}</td>
                    <td></td>
                </tr>
                <tr class="tax_row tax">
                    <td colspan="6">{{ switchWord('tax_percentage') }}</td>
                    <td></td>
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

        </div>
        </div>
        <footer-component></footer-component>


    </section>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import tableData from "../mixin/tableData";
import tableDataServer from "../mixin/tableDataServer";
import SwitchLangWord from "../mixin/SwitchLangWord";
import update_item from "../mixin/update_item";
import delete_item from "../mixin/delete_item";
import detect_right_part_number from "../mixin/detect_right_part_number";
import detect_right_part_name from "../mixin/detect_right_part_name";

import {mapActions, mapGetters} from "vuex";
export default {
    name: "bill",
    props:['keywords','item_info','admin_info'],
    mixins:[tableData,tableDataServer,SwitchLangWord,delete_item,update_item,detect_right_part_number,detect_right_part_name],
    data:function (){
        return {
            sub_quotation:null,
            current_admin_quotation:null,
            table_url:'/paginate-data',
            table_requested_table:'quotation_orders',
            table_columns:null,
            tax:0,
            current_com:null,
            print_name:'',
            min_quantity_per_draft:0,
            max_quantity_per_draft:0,
            bill_id_url:0,
        }
    },
    computed:{
        ...mapGetters({
            'get_my_quotation':'quotations_dash/get_data_quotations',
            'admin_quotation':'quotations_dash/get_data_quotations_admin',
            'get_receipt':'quotations_dash/get_receipt',
        })
    },
    created() {
        this.update_item(this.item_info);
    },
    methods:{
        ...mapActions({
            'get_info_about_quotation':'quotations_dash/get_info_about_quotation',
            'get_info_about_quotation_admin':'quotations_dash/get_info_about_quotation_reply_admin',
            'send_excel':'quotations_dash/upload_file',

            // get brands
            'get_info_to_print_bill':'quotations_dash/get_info_to_print_bill',
            'get_receipt_action':'quotations_dash/get_receipt_action',
            // activate email

        }),
        check_value_quantity:function (min,max){
            var value = Number(event.target.value);
            if(value == 0){
                this.draft_quantity_status = true;
            }else {
                if (!(isNaN(min))) {
                    if(value < min){
                        Toast.fire({
                            'icon':'error',
                            'title':this.switchWord('quantity_shouldnt_less_than')+min,
                        });
                        this.draft_quantity_status = false;
                    }
                }
                if (!(isNaN(min))) {
                    if(value > max){
                        Toast.fire({
                            'icon':'error',
                            'title':this.switchWord('quantity_shouldnt_exceed')+max,
                        });
                        this.draft_quantity_status = false;
                    }
                }
            }
        },
        detect_right_brand:function (sub_quotation){
            var test_result =  (sub_quotation['last_draft'] == null ? sub_quotation['brand_id']:sub_quotation['last_draft']['brand_id']);
            // if brand is number
            if(!(isNaN(test_result))){
                // if brand object not null
                if(sub_quotation['brand'] != null){
                    return sub_quotation['brand']['name'];
                }else{
                    return '';
                }
            }
            return test_result;
        },
        get_quantity_data(i,index = null){
            if(index == null) {
                var data = this.get_my_quotation.find((q) => {
                    return q['part_number'] == i['part_number']
                });
            }else{
                var data = this.get_my_quotation[index];
            }
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
        detect_right_price:function (i,index){
            var prices;
            if(index >= 0){
                var d = this.admin_quotation[index];
            }else {
                var d = this.admin_quotation.find((e) => {
                    return (e['part_number'] == (i['last_draft'] == null ? i['part_number'] :
                        i['last_draft']['part_number']))
                });
            }

            // remove from admin quotations


            if(d != undefined){
                d['prices'].sort((a, b) => b.min_quantity - a.min_quantity);
                prices = d['prices'].find(function (p)
                    {
                        var quan = i['last_draft'] == null ? i['quantity']:i['last_draft']['quantity'];
                        return (quan >= p['min_quantity'] || quan == 0);
                    }
                );
            }
            var right_quan = (i['last_draft'] == null ? i['quantity']:i['last_draft']['quantity']);
            if(prices == undefined || ( Number(d['max_quantity_per_transaction']) < Number(right_quan)  )){
                return this.switchWord('error_in_price')
            }else{
                return Number(prices['price']).toFixed(2)
            }
        },

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

        print_bill:async function (i){
            var total = 0;
            var row_count = 1;
            for(let data_item_index in this.get_my_quotation){
                var tr = $('table tbody tr').eq(data_item_index);
                console.log(tr);
                if(tr.css('display') != 'none'){
                    tr.find('td').eq(0).html(row_count);
                    row_count++;
                }


                tr.find('td:nth-of-type(6)')
                    .html('<span class="gray mr-1">SAR</span>'+(Number(this.detect_right_price(this.get_my_quotation[data_item_index],data_item_index))
                        .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })));
                var result = '';
                if(isNaN(this.detect_right_price(this.get_my_quotation[data_item_index],data_item_index))){
                    result = this.detect_right_price(this.get_my_quotation[data_item_index],data_item_index);
                }else{
                    result = Number(this.detect_right_price(this.get_my_quotation[data_item_index],data_item_index) *
                        (this.get_my_quotation[data_item_index]['last_draft'] == null ?
                            this.get_my_quotation[data_item_index]['quantity']:
                            this.get_my_quotation[data_item_index]['last_draft']
                                ['quantity'])).toFixed(2);
                }
                console.log(result);
                tr.find('td:nth-of-type(7)')
                    .html('<span class="gray mr-1">SAR</span>'+Number(result).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
                total += Number(Number(result.replaceAll(',','')))
            }
            $('.total_part_number_price td:last-of-type')
                .html('<span class="gray mr-1">SAR</span>'+(Number(total).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })));
            $('table tr.tax td:last-of-type')
                .html('<span class="gray mr-1">SAR</span>'+(Number(total * Number(this.item.tax ) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })));
            total += (total * this.item.tax / 100 );
            $('table tfoot tr:last-of-type td:last-of-type')
                .html('<span class="gray mr-1">SAR</span>'+(Number(total).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })));

        },
        printOrder:function(){
            window.print();
        },

        async detect_if_bill_id_in_url(bill_id){
            var com = this;
            await com.print_bill(this.item);
        }
    },
    async mounted() {
        this.current_com = this;
        // check if url has bill id
        if(document.URL.split('?bill_id=')[1] != undefined){
            this.bill_id_url = document.URL.split('?bill_id=')[1];
            await this.get_info_about_quotation(this.bill_id_url);
            await this.get_info_about_quotation_admin(this.bill_id_url);
            await this.detect_if_bill_id_in_url(this.bill_id_url);

        }


    },
    components: {NavbarComponent,FooterComponent}
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

.receipt{
    table{
        tr{
            td{
                border: 1px solid #dddddd;
            }
        }
    }
}

@media print {
    body * { visibility: hidden; }
    .inner-profile,nav,footer{
        display: none;
    }
    *:not(td,tr){
        top:0px; margin: 0px; transform: unset; padding: 0px;
    }
    .receipt{height: auto; display: block}
    .receipt * { visibility: visible;  margin: 0px}
    .receipt button{visibility: hidden;}
    #receipt .modal-footer{display: none;}
    #receipt table tbody tr td{
        border: 1px solid #dddddd !important;
    }
    .receipt table tr td{
        border: 3px solid #dddddd !important;;
    }
    .receipt table:last-of-type tfoot tr:first-of-type td{
        border-top: 0px !important;
    }
    #receipt table thead{
        position: relative !important;
        top:0px !important;
    }
    #receipt table tfoot{
        position: unset !important;
    }
    #fb-root{display: none;}
    .modal{
        position: relative !important;
        top:0px !important;
    }
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


#update_current_quotation{
    z-index: 99999999 !important;
}
#admin_quotation_data,my_quotations{
    z-index: 9999 !important;
}
#update_current_quotation{
    .modal-body {
        max-height: 600px;
        overflow: auto;
    }
}
.receipt{
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
}
.loading-img{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: white;
    z-index: 999;
    img{
        width: 50%;
        display: block;
        margin: auto;
    }
}
</style>

import validation from "../../../formValidation/validation";
import $ from "jquery";

export default {
    namespaced:true,
    state(){
        return {
            data:[],
            quotation_data:[],
            quotation_data_admin:[],
            statistics:[],
            receipt:{},
            file_money:{},
            vendors_request:[],
            offer_info:[],
            get_offers:[],
        }
    },
    getters:{
        get_data:function (state){
            return state.data
        },
        get_file_money:function (state){
            return state.file_money
        },
        get_data_quotations:function (state){
            return state.quotation_data
        },
        get_statistics:function (state){
            return state.statistics
        },
        get_offer_info:function (state){
          return state.offer_info;
        },
        get_data_quotations_admin:function (state){
            return state.quotation_data_admin
        },
        get_receipt:function (state){
            return state.receipt
        },
        get_vendors_per_request:function (state){
            return state.vendors_request
        },
        get_offers:function (state){
            return state.get_offers;
        },
    },
    mutations:{
        inilalize_data:function (state,item){
            return state.data = item;
        },
        update_data:function(state,item){
            if(state.data == null){
                return state.data = item;
            }
            return state.data.push(item);
        },
        update_qotation_data:function(state,item){
            return state.quotation_data = item;
        },
        set_offer_info:function (state,item){
           return state.offer_info = item;
        },
        update_statistics:function (state,data){
           return state.statistics = data;
        },
        update_qotation_index_data:function(state,payload){
            let id = state.quotation_data.findIndex((item)=>{
                return item.id ==  payload.id;
            });
            if(id >= 0){
                Vue.set(state.quotation_data, id, payload);
            }
        },
        update_qotation_admin_data:function(state,item){
            return state.quotation_data_admin = item;
        },
        update_index_data:function (state,payload){
            let id = state.data.findIndex((item)=>{
                return item.id ==  payload.id;
            });
            if(id >= 0){
                Vue.set(state.data, id, payload);
            }
        },
        update_receipt:function(state,item){
            return state.receipt = item;
        },
        update_money_file:function (state,item){
            return state.file_money = item;
        },
        update_vendor_request:function (state,item){
            return state.vendors_request = item;
        },
        update_index_vendor_request:function (state,payload){
            state.vendors_request.push(payload)
        },
        set_offers_data:function(state,payload){
            state.get_offers = payload;
        },
        update_offers_data:function (state,payload){

        }
    },
    actions:{
        search:function ({commit,getters,state}){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/quotations/search-statics',data).then((e)=>{
                validation(e.data,target,'');
                // check if there is no error
                commit('update_statistics',e.data.data);
            });
        },
        save_quotation_at_draft:function({commit,getters,state},payload){
            var target = event.target;
            var data = new FormData(target);
            var quantity = target.quantity.value;
            if(quantity != 0 &&(quantity < payload.current_admin_quotation.min_quantity_per_transaction || quantity > payload.current_admin_quotation.max_quantity_per_transaction)){
                return false;
            }
            axios.post('/quotations/save-quotation-at-draft',data).then((e)=>{
                validation(e.data,target,'');
                if(payload){
                    payload.sub_quotation = e.data.data
                }
                // check if there is no error
                commit('update_qotation_index_data',e.data.data);
                $('#update_current_quotation').modal('hide');
            });
        },
        search_offer:function ({state,commit}){
            var target = event.target;
            var ids = state.get_offers.map((e)=>{return e['id']});
            axios.post('/quotations/get-offers-data-for-offers-page',{
                'search':target.value,
                'ids':ids,
            }).then((e)=>{
                var result =  e.data.data.map(function (item){
                    return item['offer']['offer'];
                })
                for(let td of $('.offers_data tbody tr td:first-of-type')){
                    var check = result.find(function(el){
                        return el['id'] == td.innerHTML.trim();
                    });
                    if(!(check)){
                        td.parentElement.style.display = 'none';
                    }else{
                        td.parentElement.style.display = 'table-row';
                    }
                }
            })
        },
        get_info_about_quotation: async function({commit,getters,state},payload_id){
            //$('.box-model-table').DataTable().destroy();
            if(document.querySelector('.loading-img')) {
                document.querySelector('.loading-img').style.display = 'block';
            }
            await axios.post('/quotations/get-quotations-info',{
                'quotation_id':payload_id
            }).then((e)=>{

                /*$('.myTable.box-model-table').dataTable({
                    destroy: true,
                    aaData: e.data.data
                });*/
                commit('update_qotation_data',e.data.data)
            }).finally(function (){
                if(window.vm.$inertia.page.props.lang == 'ar'){
                    var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json';
                    var export_selected = 'استيراد المحدد';
                }else{
                    var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json';
                    var export_selected = 'Export selected';
                }
                var data_table = null;
                document.querySelector('.loading-img').style.display='none';
                /*data_table = $('.box-model-table').DataTable( {
                    destroy: true,
                    language: {
                        url: url,
                    },
                    dom: 'lBfrtip',
                    buttons: [
                        'copy', 'csv', 'excel', 'print',
                        {
                            extend: 'excel',
                            text:export_selected,
                            exportOptions: {
                                columns: ':visible:not(.not-exported)',
                                rows: '.selected',
                            }
                        }
                    ]
                } );*/

            });
        },

        get_info_about_quotation_reply_admin: async function({commit,getters,state},payload_id){
            // $('.box-model-table').DataTable().destroy();
            document.querySelector('#admin_quotation_data .loading-img').style.display='block';
            await axios.post('/quotations/get-quotations-info-admin',{
                'quotation_id':payload_id
            }).then((e)=>{

                /*$('.myTable.box-model-table').dataTable({
                    destroy: true,
                    aaData: e.data.data
                });*/
                console.log(e.data.data);
                commit('update_qotation_admin_data',e.data.data)
            }).finally(function (){
                /*
                if(window.vm.$inertia.page.props.lang == 'ar'){
                    var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json';
                    var export_selected = 'استيراد المحدد';
                }else{
                    var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json';
                    var export_selected = 'Export selected';
                }
                var data_table = null;
                document.querySelector('#admin_quotation_data .loading-img').style.display='none';
                data_table = $('.box-model-table').DataTable( {
                    language: {
                        url: url,
                    },
                    dom: 'lBfrtip',
                    buttons: [
                        'copy', 'csv', 'excel', 'print',
                        {
                            extend: 'excel',
                            text:export_selected,
                            exportOptions: {
                                columns: ':visible:not(.not-exported)',
                                rows: '.selected',
                            }
                        }
                    ]
                } );
                */
                document.querySelector('#admin_quotation_data .loading-img').style.display='none';
            });
        },

        upload_file:function ({commit}){
            var target = event.target;
            var data = new FormData(target);
            Toast.fire({
                title:window.vm.$inertia.page.props.lang == 'en' ?'please wait until finish uploading excel file':'من فضلك انتظر حتي يتم اكتمال التحميل',
                icon:'info'
            })
            $(target).find('input[type="submit"]').attr('disabled','disabled');
            axios.post('/quotations/upload-excel-admin',data).then((e)=>{
                validation(e.data,target,document.URL,true);
                // check if there is no error
                console.log(e.data.status);
                if(e.data.status == 200){
                    commit('update_index_data',e.data.data);
                    $('#update_current_quotation').modal('hide');
                }
                $(target).find('input[type="submit"]').removeAttr('disabled');
                target.reset();
                $(target).find('input[type="file"]').next().html('');
            });
        },

        get_info_to_print_bill:async function ({commit},payload_id){
            await axios.post('/quotations/get-quotations-info',{
                'quotation_id':payload_id
            }).then((e)=>{
                commit('update_qotation_data',e.data.data)
            })
            await axios.post('/quotations/get-quotations-info-admin',{
                'quotation_id':payload_id
            }).then((e)=>{
                commit('update_qotation_admin_data',e.data.data)
            })
        },
        send_file_money_to_admin:function ({commit},payload){
            var target = event.target;
            var data = new FormData(target);
            data.append('id',payload['id']);
            axios.post('/quotations/send-file-money-to-admin',data).then((e)=> {
                Toast.fire({
                    icon: 'success',
                    title: window.vm.$inertia.page.props.lang == 'ar' ? 'تمت عمليه الرفع بنجاح' :
                        'uploaded done successfully'
                })
                $('#update_file_money').modal('hide');
            });
        },
        send_agreement_to_admin:function ({commit},payload){
            var target = event.target;
            var data = new FormData(target);
            data.append('id',payload['id']);
            payload['is_completed'] = 2;
            axios.post('/quotations/send-agreement-to-admin',data).then((e)=>{
                if(e.data.hasOwnProperty('errors')){
                    validation(e.data,target,'',true);
                    return false;
                }
                for(let td of $('.sales .container .data table tbody tr td:nth-of-type(3)')){
                    if($(td).html() == payload['id']){
                        $(td).parent().find('td:nth-of-type(4)').innerHTML = '<span>'+window.vm.$inertia.page.props.lang == 'ar'?'تم ارسال الموافقة'
                            :'agreement sent'+'</span>';
                        break;
                    }
                }
                if(window.vm.$inertia.page.props.user.role.name == 'admin'){
                    Toast.fire({
                        icon: 'success',
                        title: window.vm.$inertia.page.props.lang == 'ar' ? 'تم تعديل صورة الايصال بنجاح' :
                            'The receipt has been updated'
                    })
                }else {
                    Toast.fire({
                        icon: 'success',
                        title: window.vm.$inertia.page.props.lang == 'ar' ? 'تم الارسال بنجاح وسيتم التواصل معك قريبا' :
                            'operation confirmed successfully and we will contact you soon'
                    })
                }
                setTimeout(()=>{
                    window.location = document.URL
                },2000);
                $('#agree_quotation_and_upload_bill').modal('hide');
            });
            /*if(window.vm.$inertia.page.props.lang == 'ar'){
                var confirm_msg = 'هل انت متأكد من الموافقة';
                var msg = 'عند موافقتك سيتم منعك من التعديل او الحذف وسيتم ارسال طلب الي الادارة بتأكيد الطلب منك وسيتم التواصل معك قريبا';
                var confirm = 'نعم أنا متأكد';
                var cancel = 'إلغاء';
                var done = 'تم ارسال الطلب بنجاح وسيتم التواصل معك قريبا';
                var response_msg = 'تم ارسال الموافقة';
            }else{
                var confirm_msg = 'are you sure from agreement';
                var msg = 'Upon your approval, you will be prevented from modifying or deleting, and a request will be sent to the administration to confirm your request, and we will contact you soon';
                var confirm = 'yes';
                var cancel = 'cancel';
                var done = 'The request has been confirmed successfully and we will contact you soon';
                var response_msg = 'agreement sent';

            }*/
            /*Swal.fire({
                title:confirm_msg,
                text: msg,
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#035397',
                cancelButtonColor: '#aaa',
                confirmButtonText: confirm,
                cancelButtonText:cancel,
            }).then((result) => {
                if (result.isConfirmed) {

                }
            })*/
        },
        finish_order:function ({commit},payload){
            var target = event.target;
            console.log(payload);
            if(window.vm.$inertia.page.props.lang == 'ar'){
                var confirm_msg = 'هل انت متأكد من الموافقة';
                var msg = 'عند موافقتك سيتطلب منك مراسله العميل لمتابعه ارسال الاوردر له';
                var confirm = 'نعم أنا متأكد';
                var cancel = 'إلغاء';
                var done = 'تمت عمليه الموافقة';
                var response_msg = 'تم الأكتمال بنجاح';
            }else{
                var confirm_msg = 'are you sure from agreement';
                var msg = 'Upon your approval, you will have to contact with client to finish process of order';
                var confirm = 'yes';
                var cancel = 'cancel';
                var done = 'The request has been finished successfully';
                var response_msg = 'request completed successfully';

            }
            Swal.fire({
                title:confirm_msg,
                text: msg,
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#035397',
                cancelButtonColor: '#aaa',
                confirmButtonText: confirm,
                cancelButtonText:cancel,
            }).then((result) => {
                if (result.isConfirmed) {
                    payload['is_completed'] = 3;
                    axios.post('/quotations/change-status-of-request',payload).then((e)=>{

                    });
                    target.parentElement.innerHTML = '<span>'+response_msg+'</span>';
                    Toast.fire({
                        icon:'success',
                        title:done
                    })
                }
            })
        },
        save_tax:function ({commit}){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/quotations/save-tax',data).then((e)=>{
                Toast.fire({
                    icon:'success',
                    title:e.data.message
                })
            });
        },
        get_receipt_action:function({commit},paylod){
            axios.post('/quotations/get-receipt',{
                id:paylod['id']
            }).then((e)=>{
                commit('update_receipt',e.data);
            });
        },
        get_money_file_action:function({commit},paylod){
            axios.post('/quotations/get-money-file',{
                id:paylod['id']
            }).then((e)=>{
                commit('update_money_file',e.data);
            });
        },
        get_vendor_request:function({commit},paylod){
            axios.post('/quotations/get-vendors-per-request',{
                id:paylod['id']
            }).then((e)=>{
                commit('update_vendor_request',e.data);
            });
        },
        get_offer_info_action:function({commit},paylod){
            axios.post('/quotations/get-offer-info',{
                ids:paylod
            }).then((e)=>{
                commit('set_offer_info',e.data.data);
            });
            document.querySelector('.loading-img').style.display='none';
        },
        add_vendor:function({commit},payload){
            var target = event.target;
            var data = new FormData(target);
            data.append('quotation_order_id',payload['id']);
            axios.post('/quotations/add-vendors-per-request',data)
                .then((e)=>{
                    validation(e.data,target,'');
                    // check if there is no error
                commit('update_index_vendor_request',e.data.data);
            });
        },
    }
}

import validation from "../../../formValidation/validation";

export default {
    namespaced:true,
    state(){
        return {
            data:[],
        }
    },
    getters:{
        get_data(state){
            return state.data;
        }
    },
    mutations:{
        set_data(state,payload){
            state.data = payload;
        }
    },
    actions:{
        make_offer:function (){
            var target = event.target;
            var data = new FormData(target);
            data.delete('quantity[]');
            data.append('request_type','offer');
            for(let row of $(target).find('table tbody tr')){
                if($(row).find('input.form-control').val() > 0){
                    data.append('brand_id[]',$(row).find('td.brand').html());
                    data.append('part_number[]',$(row).find('td.part_number').html());
                    data.append('quantity[]',$(row).find('td input.form-control').val());
                }
            }
            axios.post('/profile/send-quotation',data,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            }).then((e)=>{
                validation(e.data, target);
            })
        },
        send_quotation_request:function ({commit},payload){
            console.log(event);
            console.log(payload);
            if(!(payload == 'after_previewed')){
                var target = event.target;
                var data = new FormData(target);
            }else{
                console.log(payload);
                var target = document.request_quotation;
                console.log(target);
                console.log(payload);
                var data = new FormData(target);
            }

            var enter_data_input = $(target).find('input[name="quotation_request_type"]:checked').val();
            if(enter_data_input == 'enter_data'){
                var url = '/profile/send-quotation';
            }else if(enter_data_input == 'upload_file'){
                var url = '/profile/send-quotation-excel';
            }else{
                var url = '/profile/preview-request';
            }
            document.querySelector('.loading').style.display = 'flex';
            axios.post(url,data,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            }).then((e)=>{
                if(url == '/profile/preview-request'){
                    commit('set_data',e.data.data);
                }else {
                    validation(e.data, target, '/profile/quotations', true);
                    target.file.value = '';
                    target.file.nextElementSibling.innerHTML = '';
                }
            }).finally(()=>{
                if(url == '/profile/preview-request'){
                    $('#preview_quotation').modal('show');
                }
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.loading-img').style.display = 'none';
                if($(target).find('input[name="quotation_request_type"]:checked').val() != 'enter_data') {
                    $(target).find('input[name="quotation_request_type"]:checked').val('enter_file')
                }

            });
        },
    },
}

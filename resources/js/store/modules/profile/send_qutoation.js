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
                }
            }).finally(()=>{
                if(url == '/profile/preview-request'){
                    $('#preview_quotation').modal('show');
                }
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.loading-img').style.display = 'none';

            });
        },
    },
}

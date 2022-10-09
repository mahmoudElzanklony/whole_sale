import validation from "../../../formValidation/validation";

export default {
    namespaced:true,
    state(){
        return{

        }
    },
    actions:{
        send_quotation_request:function (){
            var target = event.target;
            var data = new FormData(target);
            var enter_data_input = $(target).find('input[name="quotation_request_type"]:checked').val();
            if(enter_data_input == 'enter_data'){
                var url = '/profile/send-quotation';
            }else{
                var url = '/profile/send-quotation-excel';
            }
            document.querySelector('.loading').style.display = 'flex';
            axios.post(url,data,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            }).then((e)=>{
                validation(e.data,target,'/profile/quotations',true);
            }).finally(()=>{
                document.querySelector('.loading').style.display = 'none';
            });
        },
    },
}

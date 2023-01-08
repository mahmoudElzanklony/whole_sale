import validation from "../../../formValidation/validation";

export default {
    namespaced:true,
    state(){
       return {
           message:'',
           errors:[],
       }
    },
    getters:{

    },
    mutations:{

    },
    actions:{
        store_personal_data:function(){
            document.querySelector('.loading').style.display = 'flex';
            var target = event.target;
            var data = new FormData(target);
            axios.post('/register/store-personal-data',data).then((e)=>{
                if(e.data.hasOwnProperty('related') && e.data.related != null &&  e.data.related.length > 0){
                    validation(e.data, target, e.data.related);
                }else {
                    validation(e.data, target, '/register?type=bank-info');
                }
            }).finally(()=>{
                document.querySelector('.loading').style.display = 'none';
            });
        },
        store_bank_data:function(){
            document.querySelector('.loading').style.display = 'flex';
            var target = event.target;
            var data = new FormData(target);
            axios.post('/register/store-bank-data',data).then((e)=>{
                validation(e.data,target,'/register?type=brands');
            }).finally(()=>{
                document.querySelector('.loading').style.display = 'none';
            });;
        },
        register:function(){
            document.querySelector('.loading').style.display = 'flex';
            var target = event.target;
            var data = new FormData(target);
            axios.post('/register/store-user-from-register',data).then((e)=>{
                validation(e.data,target,'/login');
            }).finally(()=>{
                document.querySelector('.loading').style.display = 'none';
            });;
        },
    },
}

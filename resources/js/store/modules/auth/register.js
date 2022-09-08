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
        register:function(){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/register',data).then((e)=>{
                validation(e.data,target,'/login');
            });
        }
    },
}

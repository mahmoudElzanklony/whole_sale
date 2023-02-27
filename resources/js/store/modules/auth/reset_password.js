import validation from "../../../formValidation/validation";

export default {
    namespaced:true,

    actions:{
        reset_pass:function ({commit}){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/newpass',data).then((e)=>{
                validation(e.data,target,'/login');
            }).catch((e)=>{
                window.location = document.URL;
            });
        }
    }
}

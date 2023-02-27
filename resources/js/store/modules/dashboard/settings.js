import validation from "../../../formValidation/validation";

export default {
    namespaced:true,

    actions:{
        save_settings:function({commit,getters,state}){
            var target = event.target;
            var data = new FormData(target);
            data.append('auto_publish','1');
            data.append('block','0');
            axios.post('/dashboard/save-settings',data).then((e)=>{
                validation(e.data,target);
            });
        }
    }
}

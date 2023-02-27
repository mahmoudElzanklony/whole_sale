import validation from "../../../formValidation/validation";


export default {
    namespaced:true,
    state(){
        return {
            data:null,
        }
    },
    getters:{
        get_data:function (state){
            return state.data
        }
    },
    mutations:{
        inilize_data:function(state,item){
            return state.data = item;
        },
        update_data:function(state,item){
            if(state.data == null){
                return state.data = item;
            }
            return state.data.push(item);
        },
    },
    actions:{
        save_inilaize_listing:function({commit,getters,state}){
            var target = event.target;
            var data = new FormData(target);
            if(document.URL.split('id=')[1] != undefined){
                var url = '/listing/info?id='+document.URL.split('id=')[1];
            }else{
                var url = '/listing/info';
            }
            axios.post('/listings/save-inilaize',data).then((e)=>{
                window.vm.$inertia.visit(url);
            });
        },
        save_info_listing:function({commit,getters,state}){
            var target = event.target;
            var id = $(target).find('input[name="id"]').val();
            var data = new FormData(target);
            if(document.URL.split('id=')[1] != undefined){
                var url = '/listing/photos?id='+document.URL.split('id=')[1];
            }else{
                var url = '/listing/photos';
            }
            axios.post('/listings/save-listing-info',data).then((e)=>{
                window.vm.$inertia.visit(url);
            });
        },
        save_photos:function ({commit,getters,state}){
            var target = event.target;
            var data = new FormData(target);
            if(document.URL.split('id=')[1] != undefined){
                data.append('id',document.URL.split('id=')[1]);
            }
            axios.post('/listings/save-photos',data).then((e)=>{
                Toast.fire({
                    icon:'success',
                    title:e.data.message[0],
                })
                window.vm.$inertia.visit('/listing/confirm-payment?id='+e.data.message[1]);
            });
        }
    }
}

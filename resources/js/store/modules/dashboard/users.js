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

        inilaize:function(state,item){
            return state.data = item;
        },
        update_data:function(state,item){
            if(state.data == null){
                return state.data = item;
            }
            return state.data.push(item);
        },
        update_index_data:function (state,payload){
            let id = state.data.findIndex((item)=>{
                return item.id ==  payload.id;
            });
            if(id >= 0){
                Vue.set(state.data, id, payload);
            }
        }
    },
    actions:{
        save_user:function({commit,getters,state}){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/dashboard/save-user',data).then((e)=>{
                validation(e.data,target,document.URL,true);
                // check if there is no error
                if(e.data.status == 200 && e.data.related == 'insert'){
                    commit('update_data',e.data.data);
                }else if(e.data.status == 200 && e.data.related == 'update'){
                    commit('update_index_data',e.data.data);
                }
            });
        },
        send_activation:function({commit,getters,state}){
            axios.post('/profile/send-activation').then((e)=>{
                Toast.fire({
                    icon:'success',
                    title:e.data.message
                })
            });
        }
    }
}

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
        inialize_data:function (state,item){
            state.data = item;
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
        save_point_ad:function({commit,getters,state}){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/dashboard/save-point-ad',data).then((e)=>{
                validation(e.data,target,'',true);
                // check if there is no error
                if(e.data.status == 200 && e.data.related == 'insert'){
                    commit('update_data',e.data.data);
                }else if(e.data.status == 200 && e.data.related == 'update'){
                    commit('update_index_data',e.data.data);
                }
            });
        }
    }
}

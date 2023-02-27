import validation from "../../../formValidation/validation";

export default {
    namespaced:true,
    state(){
        return {
            data:null,
        }
    },
    getters:{
        get_brands:function (state){
            return state.data
        }
    },
    mutations:{
        inilalize_brands:function (state,item){
            return state.data = item;
        },
        update_brands:function(state,item){
            if(state.data == null){
                return state.data = item;
            }
            return state.data.push(item);
        },
        update_index_brands:function (state,payload){
            let id = state.data.findIndex((item)=>{
                return item.id ==  payload.id;
            });
            if(id >= 0){
                Vue.set(state.data, id, payload);
            }
        }
    },
    actions:{
        get_brands:function ({commit,getters}){
            axios.get('/brands/getall').then((e)=>{
                commit('inilalize_brands',e.data.data);
            });
        },
    }
}

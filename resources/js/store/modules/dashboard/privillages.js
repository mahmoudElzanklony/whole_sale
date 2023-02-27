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
        inilalize_data:function (state,item){
            return state.data = item;
        },
    },
    actions:{
        get_privillages:function({commit,getters,state}){
            axios.post('/dashboard/get-pages').then((e)=>{
                // check if there is no error
                console.log(e.data.data);
                commit('inilalize_data',e.data.data);
            });
        }
    }
}

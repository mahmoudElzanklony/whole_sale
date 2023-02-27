
export default {
    namespaced:true,
    state(){
        return {
            data:[],
        }
    },
    getters:{
        get_data:(state)=>{
            return state.data;
        },
    },
    mutations:{
        inialize_data:function (state,item){
            state.data = item;
        },
    },
    actions:{
        toggle_fav:function({commit,getters,state},payload){
            var val = payload;

            axios.post('/user/toggle-fav', {
                id:val
            }).then((e) => {
                Toast.fire({
                    icon:'success',
                    title:e.data['message'],
                });
            });
        },
    }
}


export default {
    namespaced:true,
    state(){
        return {
            data:null,
        }
    },
    getters:{
        get_questions_data:function (state){
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
        get_questions_where:function({commit,getters,state},payload){
            var id = payload;
            axios.post('/questions/get-questions',{
                category_id:id,
            }).then((e)=>{
                commit('inilize_data',e.data.data);
            });
        },

    }
}

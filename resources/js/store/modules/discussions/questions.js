import validation from "../../../formValidation/validation";

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
        inialize_items:function (state,item){
            state.data = item;
        },
        update_data:function(state,item){
            if(state.data == null){
                return state.data = item;
            }
            return state.data.data.unshift(item);
        },
    },
    actions:{
        save_question:function({commit,getters,state}){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/discussions/addquestion',data).then((e)=>{
                validation(e.data,target,'',true);
                // check if there is no error
                if(e.data.status == 200 && e.data.related == 'insert' && $('.questions_types li.active').index() == 2){
                    commit('update_data',e.data.data);
                }else if(e.data.status == 200 && e.data.related == 'update'){
                    commit('update_index_data',e.data.data);
                }
            });
        },
    }
}

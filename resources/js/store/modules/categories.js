
export default {
    namespaced:true,
    state(){
        return {
            sub_categories:[],
            parent_categories:[],
        }
    },
    getters:{
        get_sub_categories_data:(state)=>{
            return state.sub_categories;
        },
        get_parent_categories_data:(state)=>{
            return state.parent_categories;
        }
    },
    mutations:{
        inialize_sub_categories_items:function (state,item){
            state.sub_categories = item;
        },
        inialize_parent_categories_items:function (state,item){
            state.parent_categories = item;
        },
    },
    actions:{
        get_parent_categories:function({commit,getters,state}){
            axios.post('/categories/get-parent').then((e)=>{
                commit('inialize_parent_categories_items',e.data.data);
            });
        },
        get_sub_where_parent_is:function({commit,getters,state},payload){
            if(typeof payload == 'number' || payload == null){
                var value = payload;
            }else{
                var value = event.target.value;
            }
            console.log(value);
            axios.post('/categories/get-subcategories-where',{
                value,
            }).then((e)=>{
                commit('inialize_sub_categories_items',e.data.data);
            });
        },
    }
}

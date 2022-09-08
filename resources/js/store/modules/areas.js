
export default {
    namespaced:true,
    state(){
        return {
            searched_areas:[],
        }
    },
    getters:{
        get_searched_areas:(state)=>{
            return state.searched_areas;
        },
    },
    mutations:{
        inialize_searched_areas:function (state,item){
            state.searched_areas = item;
        },
    },
    actions:{
        search_areas:function({commit,getters,state}){
            var val = event.target.value;
            if(document.querySelector('.search-outcoming-data')) {
                document.querySelector('.search-outcoming-data').style.display = 'block';
            }
            if(val.length > 0) {
                axios.post('/areas/search', {
                    search: val
                }).then((e) => {
                    commit('inialize_searched_areas', e.data.data);
                });
            }else{
                commit('inialize_searched_areas', []);
            }
        },
    }
}

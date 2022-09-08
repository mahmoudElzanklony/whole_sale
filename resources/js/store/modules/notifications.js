
export default {
    namespaced:true,
    state(){
        return {
            data:null,
            data_obj:null,
            page:2,
            type:'',
        }
    },
    getters:{
        get_data:function (state){
            return state.data
        }
    },
    mutations:{
        inialize_data:function (state,item){
            state.data = item.data;
            state.data_obj = item;
        },
        inialize_type:function (state,item){
            state.type = item;
        },
        update_page:function(state){
             state.page++;
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
        infinite_scroll:function({commit,getters,state}){
            console.log(state.page);
            var type = state.type;
            var obj_page = state.data_obj['links'].find((e)=>{
                return e['label'] == state.page;
            })
            if(obj_page != undefined){
                document.querySelector('body').style.overflow = 'hidden';
                document.querySelector('.loading').style.display = 'flex';
                axios.post('/paginate-notifications?page='+obj_page.label,{
                    type
                }).then((e)=>{
                    for(let item of e.data.data){
                        commit('update_data',item);
                    }
                });
                commit('update_page');
                document.querySelector('body').style.overflow = 'auto';
                document.querySelector('.loading').style.display = 'none';

            }
        }
    }
}

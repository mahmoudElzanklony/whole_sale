
export default {
    namespaced:true,
    state(){
        return {
            countries:[],
            governments:[],
            cities:[],
            areas:[],
            price_per_meters:[],
        }
    },
    getters:{
        get_items_data:(state) => (type) => {
            let new_type = '';
            switch(type){
                case 'country_id': new_type = 'countries'; break;
                case 'government_id': new_type = 'governments'; break;
                case 'city_id': new_type = 'cities'; break;
                case 'area_id': new_type = 'areas'; break;
            }
            return state[new_type];
        },
        get_price_data:(state)=>{
            return state.price_per_meters;
        }
    },
    mutations:{
        inialize_items:function (state,item){
            state[item['name']] = item['value'];
        },
        inilalize_price_meters:function(state,item){
            state.price_per_meters = item;
        }
    },
    actions:{
        get_next_map_type_from_previous_value:function({commit,getters,state},payload){
            var type = payload['name'];
            var id = payload['value'];
            var whereColumn = payload['where'];
            axios.post('/map/get_next_map_type_from_previous_value',{
                id,type,whereColumn
            }).then((e)=>{
                commit('inialize_items',{name:type,value:e.data});
            })
        },
        update_location:function({commit,getters,state}){
            var target = event.target;
            var type = event.target.getAttribute('name');
            var value = target.value;
            let search_at = ''  , reset = [];
            switch(type){
                case 'country_id': {search_at = 'governments';  reset = ['cities','areas']} break;
                case 'government_id': {search_at = 'cities';  reset = ['areas']} break;
                case 'city_id': {search_at = 'areas'; } break;
            }
            axios.post('/dashboard/change-map',{
                search_at, value, type
            }).then((e)=>{
                for(let item_type of reset){
                    commit('inialize_items',{name:item_type,value:[]});
                }
                 commit('inialize_items',{name:search_at,value:e.data});
                $(target).parent().next().find('select option:first-of-type').prop('selected','selected')
            });
        },
        request_map_type:function({commit},payload){
            var type = payload

            axios.post('/map/get-map-type-data',{
                type
            }).then((e)=>{

                commit('inialize_items',{name:type,value:e.data});
            });
        },
        filter_to_find_areas:function({commit}){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/dashboard/average-area-price',data).then((e)=>{
                commit('inilalize_price_meters',e.data);
                // loop for data table
                window.table_data.clear().draw();
                for(let item of e['data']){
                    window.table_data.row.add([ item['name'], item['total_listings'],item['average'] ]).draw();
                }
            });
        }
    }
}

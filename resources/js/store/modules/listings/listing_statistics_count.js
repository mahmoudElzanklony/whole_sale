

export default {
    namespaced:true,

    actions:{
        sum_statistics_listing:function({commit,getters,state},payload){
            var ids = payload['data'];
            var type = payload['type'];
            axios.post('/listings-statistics/'+type,{
                ids
            }).then((e)=>{

            });
        },
    }
}

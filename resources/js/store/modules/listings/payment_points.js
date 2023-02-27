

export default {
    namespaced:true,
    state(){
        return {
            data:null,
        }
    },

    actions:{
        payment_listing_points:function({commit,getters,state},payload){
            var id = payload[0];
            var points = payload[1];
            if(payload[2] != undefined){
                var link = payload[2];
            }else{
                var link = '';
            }
            axios.post('/listings/payment',{
                id,points
            }).then((e)=>{
                Toast.fire({
                    'icon':e.data.status == 200 ? 'success':'error',
                     title:e.data.message,
                })
                if(link != ''){
                    window.vm.$inertia.visit(link);
                }
            });
        },
    }
}

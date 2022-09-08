
export default {
    namespaced:true,
    actions:{
        show_number:function({commit,getters,state},payload){
            var data = payload;
            axios.post('/user/show-seller-phone', data).then((e) => {
            });
        },
    }
}

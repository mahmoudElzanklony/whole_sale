import validation from "../../../formValidation/validation";

export default {
    namespaced:true,
    state(){
        return {
            user:null
        }
    },
    getters:{
        getUser:function (state){
            return state.user;
        }
    },
    mutations:{
        setUser:function (state,user){
            state.user = user;
        }
    },
    actions:{
        login:function ({commit}){
            var target = event.target;
            var data = new FormData(target);
            if(target.select_type == undefined){
                var url_post = '/login';
            }else{
                var url_post = '/login/selectrole';
            }
            console.log(url_post);
            axios.post(url_post,data).then((e)=>{
                if(e.data.data.length > 1){
                    var lang = window.vm.$inertia.page.props.lang;

                    if(lang == 'ar'){
                        var type_one = (e.data.data[0]['role']['name'] == 'seller'?'بائع':'عميل');
                        var type_two = (e.data.data[1]['role']['name'] == 'seller'?'بائع':'عميل');
                    }else{
                        var type_one = e.data.data[0]['role']['name']
                        var type_two = e.data.data[1]['role']['name'];
                    }

                    var output = '<div class="justify-content-between d-flex mb-3"><input type="hidden" name="select_type" value="true"><p class="d-flex align-items-center"><input type="radio" name="id" value="'+e.data.data[0]['id']+'"><span>'+(lang == 'ar'?'المتابعة ك':'continue as ')+(type_one)+'</span> </p>';
                        output += '<p class="d-flex align-items-center"><input type="radio" name="id" value="'+e.data.data[1]['id']+'"><span>'+(lang == 'ar'?'المتابعة ك':'continue as ')+(type_two)+'</span> </p></div>';
                        document.querySelector('.inputs').innerHTML = output;

                }else {
                    if (e.data.hasOwnProperty('success')) {
                        commit('setUser', e.data.success.user);
                    }
                    validation(e.data, target, e.data.related);
                }

            }).catch((e)=>{
                //window.location = document.URL;
            });
        }
    }
}

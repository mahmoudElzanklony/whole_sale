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
            axios.post('/login',data).then((e)=>{
                if(e.data.hasOwnProperty('success')){
                    commit('setUser',e.data.success.user);
                }
                validation(e.data,target,'/');

            }).catch((e)=>{
                window.location = document.URL;
            });
        }
    }
}

export default {
    namespaced:true,
    state () {
        return {
            count: 2,
            abc:10,
            data:[
                {id:10,status:true,age:50},
                {id:15,status:false,age:35},
            ]
        }
    },
    getters : {
        filter_data:(state) => {
            return function (id){
                return state.data.filter((item) => item.id == id);
            }
        }
    },
    mutations : {
        increment (state , payload) {
            state.count+= payload
        }
    },
    actions : {
        incrementAsyc:function ({state,getters,commit},payload){
            console.log(payload);
            commit('increment',payload)

        }
    }
}

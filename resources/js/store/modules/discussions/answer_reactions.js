import validation from "../../../formValidation/validation";

export default {
    namespaced:true,

    actions:{
        react_answer:function({commit,getters,state},payload){
            var data = payload
            axios.post('/discussions/answer-react',data).then((e)=>{

            });
        },
    }
}

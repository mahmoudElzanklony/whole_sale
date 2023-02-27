import validation from "../../../formValidation/validation";

export default {
    namespaced:true,

    actions:{
        add_answer:function({commit,getters,state},payload){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/discussions/add-answer',data).then((e)=>{
                Toast.fire({
                    icon:'success',
                    title:e['data']['message']
                })
                window.vm.$inertia.visit(document.URL);
            });
        },
    }
}

import validation from "../../../formValidation/validation";

export default {
    namespaced:true,

    actions:{
        send_email:function ({commit}){
            var target = event.target;
            document.querySelector('.loading').style.display = 'flex';
            var data = new FormData(target);
            axios.post('/sendmail',data).then((e)=>{
                validation(e.data,target);
            }).catch((e)=>{
                console.log(e);
                //window.location = document.URL;
            }).finally(()=>{
                document.querySelector('.loading').style.display = 'none';
            });;
        }
    }
}

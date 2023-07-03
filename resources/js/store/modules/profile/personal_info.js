import validation from "../../../formValidation/validation";

export default {
    namespaced:true,
    state(){
        return{

        }
    },
    actions:{
      update_username_image:function (){
          var target = event.target;
          var data = new FormData(target);
          axios.post('/profile/update-email-image',data,{
              headers:{
                  'Content-Type':'multipart/form-data',
              }
          }).then((e)=>{
              validation(e.data,target);
              if(e.data.data.changed_mail != ''){
                  setTimeout(()=>{
                      Toast.fire({
                          icon:'info',
                          title:e.data.data.changed_mail
                      })
                  },3000)
              }
          })
      },
      change_password:function(){
          var target = event.target;
          var data = new FormData(target);
          axios.post('/profile/update-password',data).then((e)=>{
              validation(e.data,target);
          })
      },
      // update username , full name  , phone , what app status
      update_personal_data:function(){
          var target = event.target;
          var data = new FormData(target);
          data.append('whatapp_status',$(target).find('input[name="whatapp_status"]:checked').val())
          axios.post('/profile/update-personal-data',data).then((e)=>{
              validation(e.data,target);
          })
      },
      // update company info
      update_company_data:function(){
          var target = event.target;
          var data = new FormData(target);
          axios.post('/profile/update-company-data',data).then((e)=>{
            validation(e.data,target);
          })
        },
      // update secondary data
      update_secondary_data:function(){
        var target = event.target;
        var data = new FormData(target);
        axios.post('/profile/update-secondary-data',data).then((e)=>{
            validation(e.data,target);
        })
      },

      // save addresses data
      save_addresses:function (){
          var target = event.target;
          var data = new FormData(target);
          axios.post('/profile/save-addresses',data).then((e)=>{
              validation(e.data,target,'/profile/addresses');
          })
      }
    },
}

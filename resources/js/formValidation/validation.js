
export default function (data,target,url = '',reset = false){
    $(target).find('p.alert-danger').html('').hide();
    // check if there are any errors
    if(data.hasOwnProperty('status') && data.status != 200){
        for(let error of Object.keys(data.errors)){
            let err = '';
            if(typeof data.errors[error] == 'string'){
                err = data.errors[error];
            }else{
                err = data.errors[error].join(',');
            }
            var input = $(target).find('input[name="'+error+'"],select[name="'+error+'"],textarea[name="'+error+'"]');
            if(input.length > 0) {
                input.next().html(err).fadeIn();
            }else{
                // not found
                Toast.fire({
                    icon:'error',
                    title:err
                })
            }
        }
    }
    // check if i have success data
    else if(data.hasOwnProperty('status') && data.status == 200){
        // check if i have message property
        if(data.hasOwnProperty('message') && data.message.length > 0) {
            Toast.fire({
                icon: 'success',
                title: typeof data.message == "string" ? data.message:data.message.toString()
            });
        }
        // check if visit another page
        if(url != ''){
            setTimeout(()=>{
                window.vm.$inertia.visit(url);
            },2000);
        }
        if(reset == true){
            target.reset();
            $('.modal').modal('hide');
        }
    }

}

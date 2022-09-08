<template>

</template>

<script>
export default {
    name: "delete_item",
    methods:{
        delete_item:function (table,id, selector = '' ,closeall = false , url = false){
            if(window.vm.$inertia.page.props.lang == 'ar'){
                var msg = 'هل أنت متأكد من عملية المسح';
                var confirm = 'نعم أنا متأكد';
                var cancel = 'إلغاء';
            }else{
                var msg = 'are you sure from delete operation';
                var confirm = 'yes';
                var cancel = 'cancel';

            }
            Swal.fire({
                title: msg,
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#ff6a15',
                cancelButtonColor: '#aaa',
                confirmButtonText: confirm,
                cancelButtonText:cancel,
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post('/deleteitem',{
                        table:table,
                        id:id,
                    }).then((e)=>{
                        /*if(table == 'listings_infos'){
                            $(target).parent().parent().parent().parent().remove();
                        }else {
                            $(target).parent().parent().remove();
                        }*/
                        Toast.fire({
                            icon:'success',
                            title:e.data.message[0]
                        });
                        if(closeall == true){
                            $('.modal').modal('hide')
                        }
                        if(url != false){
                            window.vm.$inertia.visit(url)
                        }
                        if(selector != ''){
                            console.log($(selector));
                            $(selector).remove();
                        }

                    });

                }
            })
        }
    }
}
</script>

<style>
.swal2-container{
    z-index: 99999999999999999999999999;
}
</style>

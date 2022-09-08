import $ from 'jquery';

$(document).ready(function (){




    // delete input
    $('.content').on('click','.delete-icon-input,.input-has-delete span i',function(){
        var target = $(this);
        if(window.vm.$inertia.page.props.lang == 'ar'){
            var msg = 'هل أنت متأكد من عملية المسح';
            var confirm = 'نعم أنا متأكد';
            var cancel = 'إلغاء';
            var done = 'تمت عمليه المسح بنجاح';
        }else{
            var msg = 'are you sure from delete operation';
            var confirm = 'yes';
            var cancel = 'cancel';
            var done = 'delete done';

        }
        Swal.fire({
            title: msg,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#035397',
            cancelButtonColor: '#aaa',
            confirmButtonText: confirm,
            cancelButtonText:cancel,
        }).then((result) => {
            if (result.isConfirmed) {
                target.parent().parent().remove();
                Toast.fire({
                    icon:'success',
                    title:done
                })
            }
        })
    });

    /*--------------------------end of public actions at all pages -------------------------------*/


});

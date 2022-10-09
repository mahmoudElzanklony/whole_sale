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
                if(target.attr('no_parent') > 0){
                    console.log('yes attribute');
                    if(target.attr('no_parent') == 3){
                        console.log('abc');
                        target.parent().parent().parent().remove();
                    }
                }else {
                    target.parent().parent().remove();
                }
                Toast.fire({
                    icon:'success',
                    title:done
                })
            }
        })
    });

    // show password
    $('.content').on('mouseenter','.show_password',function(){
        $(this).parent().parent().find('input').attr('type','text');
    })

    // hide password
    $('.content').on('mouseout','.show_password',function(){
        $(this).parent().parent().find('input').attr('type','password');
    })


    // preview image at box
    $('.content').on('change','.preview-image',function (){
        var file_data = event.target.files[0];
        var allowed_extensions = ['png','jpg','jpeg','gif'];
        if(allowed_extensions.includes(file_data.type.split('/')[1])){
            document.querySelector($(this).attr('selector')).src = URL.createObjectURL(file_data);
        }else{
            // its not an image
            if(window.vm.$inertia.page.props.lang == 'ar'){
                var msg = 'لقد قمت بتحميل ملف ليس صورة من فضلك حاول مرة اخري';
            }else{
                var msg = 'You uploaded a file not an image please try again';
            }
            Toast.fire({
                icon:'error',
                title:msg,
            })
        }
    });



    /*--------------------------end of public actions at all pages -------------------------------*/

    // toggle next
    $('.content').on('click','.toggle_next',function(){
        $(this).parent().parent().next().slideToggle();
        if($(this).hasClass('ri-arrow-down-s-line')){
            $(this).removeClass('ri-arrow-down-s-line').addClass('ri-arrow-up-s-line')
        }else{
            $(this).removeClass('ri-arrow-up-s-line').addClass('ri-arrow-down-s-line')
        }
    });


});

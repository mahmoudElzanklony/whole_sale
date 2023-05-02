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
                    if(document.URL.indexOf('profile/quotations') > 0){
                        // this is quotation request page
                        var count = 1;
                        for(let inp of document.querySelectorAll('input[disabled="disabled"]')){
                            inp.value = count;
                            count++;
                        }
                    }
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




    $('.content').on('click','.mostquestions .all_questions .question .heading',function (){
        if($(this).find('i').hasClass('ri-arrow-down-s-line')){
            $(this).find('i').removeClass('ri-arrow-down-s-line').addClass('ri-arrow-up-s-line');
        }else{
            $(this).find('i').removeClass('ri-arrow-up-s-line').addClass('ri-arrow-down-s-line');
        }
        $(this).next().slideToggle();
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

    // click on table input when key up
    $('.content').on('keyup','.myTableServer thead tr td input',function (){
        $('.myTableServer thead tr td input').eq(0).click();
    })

    // filter at last quotation filter
    $('.content').on('change','.last-quotations-filter form input',function (){
        if(event.target.getAttribute('name') == 'is_completed') {
            $('table thead tr td input[name="is_completed"]').val($(this).val());
        }
        $('.myTableServer thead tr td input').eq(0).click();
    })



    $('.content').on('keyup','input.search_without_button',function (){
        console.log('abc');
        if($(this).attr('number_of_parents') != undefined){
            var trs = $(this).parents().eq($(this).attr('number_of_parents')).find('table tbody tr');

        }else {
            var trs = $(this).parent().find('table tbody tr');
        }
       for(let tr of trs){
           var matching = false;
           for(let td of $(tr).find('td')){
               console.log($(td).html());
               if($(td).html().indexOf(event.target.value) >= 0){
                   $(tr).css('display','table-row');
                   matching = true;
                   break;
               }
           }
           if(matching == false){
               $(tr).css('display','none');
           }
       }
    });
});

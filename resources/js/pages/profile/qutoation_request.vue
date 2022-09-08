<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <profile-nav-component></profile-nav-component>
        <div class="container" style="padding-top: 40px">
            <h2 class="text-center main-title">
                <span>{{ keywords.main_title }}</span>
            </h2>
            <p>
                <a href="/excels/template.csv" download>{{ keywords.you_can_press_here_to_download_file }}</a>
            </p>
            <form method="post" @submit.prevent="send_quotation">
                <div class="form-group d-flex align-items-center justify-content-between radio-buttons">
                    <p>
                        <input type="radio" name="quotation_request_type" value="enter_data"
                               @change="change_quotation_type"
                               checked>
                        <span>{{ keywords.enter_data }}</span>
                    </p>
                    <p>
                        <input type="radio" name="quotation_request_type"
                               @change="change_quotation_type"
                               value="enter_file">
                        <span>{{ keywords.upload_file }}</span>
                    </p>
                </div>
               <div class="inner-form">
                   <div class="enter_data">
                       <div class="inputs">
                           <div class="row">
                               <div class="col-lg-3 col-md-6 col-12">
                                   <div class="form-group">
                                       <label>{{ keywords.serial }}</label>
                                       <input name="serial[]" class="form-control" required>
                                   </div>
                               </div>
                               <div class="col-lg-3 col-md-6 col-12">
                                   <div class="form-group">
                                       <label>{{ keywords.part_no }}</label>
                                       <input name="part_no[]" class="form-control" required>
                                   </div>
                               </div>
                               <div class="col-lg-3 col-md-6 col-12">
                                   <div class="form-group">
                                       <label>{{ keywords.brand }}</label>
                                       <select name="brand[]" class="form-control" required>
                                           <option value="">{{ switchWord('select_best_choice') }}</option>
                                           <option v-for="i in ['toyta','bmw','honda','houndai']" :value="i">
                                               {{ i }}
                                           </option>
                                       </select>
                                   </div>
                               </div>
                               <div class="col-lg-3 col-md-6 col-12">
                                   <div class="form-group">
                                       <label>{{ keywords.quantity }}</label>
                                       <input name="quantity[]" class="form-control" required>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="form-group">
                           <input type="button" class="btn btn-outline-primary"
                                  @click="add_new_item"
                                  :value="switchWord('add_another_item')">
                           <input type="submit" class="btn btn-primary" :value="switchWord('save')">

                       </div>
                   </div>
                   <div class="enter_file">
                       <div class="drag-drop-files mb-3">
                           <input type="file" name="bank_info_document"
                                  class="preview-image">
                           <button type="button" class="btn btn-primary">
                               <span>{{ keywords.upload_file }}</span>
                               <span><i class="ri-add-line"></i></span>
                           </button>
                       </div>
                       <div class="form-group">
                           <input type="submit" class="btn btn-primary" :value="switchWord('save')">

                       </div>
                   </div>

               </div>
            </form>
        </div>

        <div class="result">
            <div class="load">
                <span >
                    <i @click="close_box" class="ri-close-line"></i>
                </span>
                <h2 class="main-title text-center">
                    {{ keywords.wholesale_is_trying_to_get_the_best_deal_for_you_from_the_registered_vendors_this_process_may_take_few_moments }}
                </h2>
                <img class="d-block m-auto" src="/images/loading.gif">
            </div>
            <div class="best_offer">
                <table class="table table-hover table-striped table-hover">
                    <thead>

                    </thead>
                </table>
            </div>
        </div>

        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ProfileNavComponent from "../../components/ProfileNavComponent";
import ListingPostComponent from "../../components/ListingPostComponent";
import delete_item from "../../mixin/delete_item";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapActions} from "vuex";
export default {
    name: "qutoation_request",
    props:['keywords','data'],
    mixins:[delete_item,SwitchLangWord],
    data:function(){
        return {
            item:null,
        }
    },
    methods:{
        add_new_item:function(){
            let error_status = false;
            for(let input of $('.enter_data input,.enter_data select')){
                if($(input).val().length == 0){
                    error_status = true;
                    break;
                }
            }
            if(error_status == true){
                Toast.fire({
                   icon:'error',
                   title:this.switchWord('please_enter_all_required_data')
                });
            }else{
                // add new item
                var output = '<div class="row input-has-delete">';
                output += document.querySelector('.enter_data .row:first-of-type').innerHTML;
                output +='<span><i class="ri-close-line"></i></span></div>';
                $('.enter_data .inputs').append(output);
                $(output).find('select option[value="'+$('.enter_data .row:last-of-type select').val()+'"]').prop('selected','selected');
            }
        },
        change_quotation_type:function (){
          $('.inner-form > div').fadeOut();
          $('.inner-form > div.'+event.target.value).fadeIn();
          if(event.target.value == 'enter_file'){
              $('.enter_data .inputs input , .enter_data .inputs select').removeAttr('required');
          }else{
              $('.enter_data .inputs input , .enter_data .inputs select').attr('required','required');
          }
        },
        send_quotation:function(){
            $('.result').css('display','flex');
        },
        close_box:function(){
            $(event.target).parent().parent().parent().fadeOut();
        }

    },

    components: {ListingPostComponent, ProfileNavComponent, FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.ar{
    .result{
        .load{
            span{
                left:5px;
            }
        }
    }
}
.en{
    .result{
        .load{
            span{
                right:5px;
            }
        }
    }
}

.profile{
    margin-top: 100px;
    .main-title{
        span{
            font-size: $semi_big;
            &::before , &::after{
                top:65%;
            }
        }
    }
    .inner-form{
        >div{
            display: none;
        }
        >div:first-of-type{
            display: block;
        }
    }
    .input-has-delete{
        span{
            top: 30px;
            left: -30px;
        }
    }
    a{
        font-size: $paragraph;
        font-weight: bold;
        margin-bottom: 20px;
        display: block;
    }
}
.alert-danger{
    display: none;
}
.result{
    position: fixed;
    top: 57px;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dddddd7d;
    z-index: 9999;
    display: none;
    .load{
        max-width: 600px;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 10px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 30px;
        position: relative;
        span{
            color:$red;
            position: absolute;
            top:10px;
            cursor: pointer;
            i{
                font-size:$semi_big;
            }
        }
    }
}
</style>

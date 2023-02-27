<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <div class="loading">
            <img src="/images/loading.gif">
            <p>{{ switchWord('please_wait_until_finish_processing') }}</p>
        </div>
        <profile-nav-component></profile-nav-component>
        <div class="container" style="padding-top: 40px">
            <h2 class="text-center main-title">
                <span v-if="$page.props.user.role.name != 'seller'">{{ keywords.main_title }}</span>
                <span v-else>{{ keywords.you_can_upload_file_of_prices }}</span>
            </h2>
            <p v-if="$page.props.user.approved == 1 && $page.props.user.role.name != 'seller'">
                <a href="/excels/template.csv"
                   v-if="$page.props.user.role.name != 'seller'"
                   download>
                    <span class="pb-2 mobile-line-height-40"
                          style="border-bottom: 2px solid">{{ keywords.you_can_press_here_to_download_file }}</span>
                </a>
                <a href="/excels/pricing_template.xlsx"
                   v-else
                   download>
                    <span class="pb-2 mobile-line-height-40"
                          style="border-bottom: 2px solid">{{ keywords.you_can_press_here_to_download_file }}</span>
                </a>

            </p>
            <p v-if="$page.props.user.approved == 0" class="alert alert-danger d-block activation">
                <span>{{ switchWord('active_email') }}</span>
                <strong @click="send_activation">{{ switchWord('send_verfication') }}</strong>
            </p>
            <form v-if="$page.props.user.approved == 1 && $page.props.user.role.name != 'seller'" method="post"
                  name="request_quotation"
                  @submit.prevent="save_qutation">
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
                                       <input name="serial[]" class="form-control" value="1" disabled>
                                   </div>
                               </div>
                               <div class="col-lg-3 col-md-6 col-12">
                                   <div class="form-group">
                                       <label>{{ keywords.part_no }}</label>
                                       <input name="part_number[]" class="form-control" required>
                                   </div>
                               </div>
                               <div class="col-lg-3 col-md-6 col-12">
                                   <div class="form-group">
                                       <label>{{ keywords.brand }}</label>
                                       <select name="brand_id[]" class="form-control" required>
                                           <option value="">{{ switchWord('select_best_choice') }}</option>
                                           <option v-for="i in brands" :value="i['id']">
                                               {{ i['name'] }}
                                           </option>
                                       </select>
                                   </div>
                               </div>
                               <div class="col-lg-3 col-md-6 col-12">
                                   <div class="form-group">
                                       <label>{{ keywords.quantity }}</label>
                                       <input name="quantity[]" type="number" min="1" class="form-control" required>
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
                           <input type="file" @change="change_file" name="file">
                           <span class="ml-2 mr-2"></span>
                           <button type="button" class="btn btn-primary">
                               <span>{{ keywords.upload_file }}</span>
                               <span><i class="ri-add-line"></i></span>
                           </button>
                       </div>
                       <div class="form-group">
                           <input type="submit" name="save" class="btn btn-primary" :value="switchWord('save')">

                       </div>
                   </div>

               </div>
            </form>
            <form v-else-if="$page.props.user.approved == 1 && $page.props.user.role.name == 'seller'"
                method="post"
            >
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
                <qutoation_details_box :keywords="keywords"></qutoation_details_box>
            </div>
        </div>


        <div  class="modal fade" id="preview_quotation"
              tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="my_quotations_box">
                            {{ switchWord('see_details') }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="loading-img">
                            <img src="/images/loading.gif">
                        </div>
                        <div class="overflow-auto" style="max-height: 400px;"  v-if="preview_request.length > 0">
                            <table class="box-model-table table text-center table-bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <td>{{ keywords.brand }}</td>
                                    <td>{{ keywords.part_no }}</td>
                                    <td>{{ keywords.quantity }}</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(i,index) in preview_request"
                                    :key="index" :class="'row_child_'+index"
                                   >
                                    <td>{{ i['brand'] }}</td>
                                    <td>{{ i['part_number'] }}</td>
                                    <td>{{ i['quantity'] }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <button class="btn btn-outline-primary"
                                @click="save_previewed_quotation">{{ switchWord('save') }}</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ switchWord('close') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>



        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ProfileNavComponent from "../../components/ProfileNavComponent";
import delete_item from "../../mixin/delete_item";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapActions,mapMutations,mapGetters} from "vuex";
import Qutoation_details_box from "../../components/qutoation_details_box";
export default {
    name: "qutoation_request",
    props:['keywords','data','brands'],
    mixins:[delete_item,SwitchLangWord],
    data:function(){
        return {
            item:null,
        }
    },
    created() {
        console.log(this.$inertia.page.props.user.approved);
    },
    computed:{
        ...mapGetters({
            preview_request:'send_qutoation/get_data',
        })
    },
    methods:{
        ...mapActions({
           'save_qutation':'send_qutoation/send_quotation_request',
           'send_activation':'users_dash/send_activation',
        }),
        change_file:function (){
            event.target.nextElementSibling.innerHTML = event.target.files[0].name;
        },
        save_previewed_quotation:function (){
            $('#preview_quotation').modal('hide');
            var form = document.request_quotation;
            $(form).find('input[name="quotation_request_type"]:checked').val('upload_file');
            $('input[name="quotation_request_type"]').eq(1).val('upload_file');
            this.save_qutation('after_previewed');
        },
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
                $('.enter_data .row').last().find('label')
                $('.enter_data .row').last().find('input').eq(0).attr('disabled','disabled').eq(0).val($('.enter_data .row').length );
                $('.enter_data .row').last().find('select option[value="'+$('.enter_data .row:last-of-type select').val()+'"]').prop('selected','selected');
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
            /*$('.result').css('display','flex');
            setTimeout(()=>{
                $('.load').css('display','none');
                $('.best_offer').fadeIn();
            },4000);*/
        },
        close_box:function(){
            $(event.target).parent().parent().parent().fadeOut();
        }

    },

    components: {Qutoation_details_box, ProfileNavComponent, FooterComponent, NavbarComponent}
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
    .enter_data{
        .inputs{
            >div.row:not(:first-of-type){
                label{
                    display: none;
                }
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
    >div{
        display: none;
    }
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
        top:-57px;
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
    .best_offer{
        background-color: white;
        width: 95%;

    }
}
#preview_quotation{
    z-index: 9999999999999999;
}
.activation{
    strong{
        border-bottom: 1px solid darkred;
        padding-bottom: 6px;
        cursor: pointer;
    }
}
</style>

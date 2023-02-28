<template>
    <div>
        <navbar-component></navbar-component>
        <div class="loading">
            <img src="/images/loading.gif">
            <p>{{ switchWord('please_wait_until_finish_processing') }}</p>
        </div>
        <div class="auth mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6" data-aos="fade-left">
                        <form method="post" @submit.prevent="store_local_data">
                            <h2 class="mb-3">{{ keywords.sign_up }}</h2>
                            <!-- not shown this section at this moment -->
                            <div class="progress-form"  v-if="false">
                                <span class="active"><i class="ri-check-line"></i></span>
                                <p>{{ keywords.personal_info }}</p>
                                <span><i class="ri-check-line"></i></span>
                                <p>{{ keywords.bank_info }}</p>
                                <span><i class="ri-check-line"></i></span>
                                <p>{{ keywords.brands_dealing }}</p>
                                <span><i class="ri-check-line"></i></span>
                            </div>
                            <input type="hidden" name="username" value="">
                            <div class="form-group input-icon">
                                <label>{{ keywords.email }}</label>
                                <input name="email" type="email" class="form-control"
                                       :value="stored_info != null ? stored_info['email']:''"
                                       required>
                                <p class="alert alert-danger"></p>
                                <span class="required"><i class="ri-asterisk"></i></span>
                            </div>
                            <div class="form-group input-icon">
                                <label>{{ keywords.password }}</label>
                                <input name="password" type="password" class="form-control"
                                       :value="stored_info != null ? stored_info['password']:''"
                                       required>
                                <p class="alert alert-danger"></p>
                                <span class="required"><i class="ri-asterisk"></i></span>
                            </div>
                            <div class="form-group input-icon" >
                                <label>{{ keywords.repeat_password }}</label>
                                <input name="password_confirmation" type="password" class="form-control"
                                       :value="stored_info != null ? stored_info['password_confirmation']:''"
                                       required>
                                <p class="alert alert-danger"></p>
                                <span class="required"><i class="ri-asterisk"></i></span>
                            </div>
                            <div class="form-group input-icon" >
                                <label>{{ keywords.phone }}</label>
                                <input name="phone" type="number" min="0" pattern=".{7,}"
                                       :value="stored_info != null ? stored_info['phone']:''"
                                       class="form-control" required>
                                <p class="alert alert-danger"></p>
                                <span class="required"><i class="ri-asterisk"></i></span>
                            </div>
                            <div class="form-group input-icon" v-if="user_type_id == null">
                                <label>{{ keywords.vat }}</label>
                                <input name="vat" type="number" min="0"
                                       :value="stored_info != null ? stored_info['vat']:''"
                                       class="form-control" required>
                                <p class="alert alert-danger"></p>
                                <span class="required"><i class="ri-asterisk"></i></span>
                            </div>
                            <div class="form-group input-icon">
                                <label>{{ keywords.country }}</label>
                                <select class="form-control" name="country_id" required>
                                    <option value="">{{ switchWord('select_best_choice') }}</option>
                                    <option v-for="(i,index) in countries" :key="index" :value="i['id']">{{ i['name'] }}</option>
                                </select>
                                <p class="alert alert-danger"></p>
                                <span class="required"><i class="ri-asterisk"></i></span>
                            </div>

                            <div class="form-group" v-if="false">
                                <label>{{ keywords.user_type }}</label>
                                <select name="role_id"  class="form-control" @change="change_role" required>
                                    <option value="seller" v-for="(i,index) in data"
                                            :key="index"
                                            :selected="stored_info != null && stored_info['role_id'] == i['id']"
                                            :value="i['id']">{{ keywords[i['name']] }}</option>
                                </select>
                                <p class="alert alert-danger"></p>
                            </div>
                            <input type="hidden" v-if="user_type_id == null" name="role_id" :value="data.find((e)=>{return e['name'] == 'buyer' })['id']">
                            <input type="hidden" v-else name="role_id" :value="data.find((e)=>{return e['name'] == 'seller' })['id']">

                            <div class="form-group" >
                                <input type="submit" name="send"
                                       class="btn btn-primary"
                                       :value="switchWord('save')">
                            </div>
                            <p class="text-center" >
                                <span>{{ keywords.have_already_account }} ? </span>
                                <inertia-link href="/login">{{ keywords.sign_in }}</inertia-link>
                            </p>
                        </form>
                    </div>
                    <div class="col-md-6" data-aos="fade-right">
                        <div class="image">
                            <div class="layer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-component data-aos="fade-down"></footer-component>
    </div>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapActions} from "vuex";
export default {
    name: "sign_up",
    mixins:[SwitchLangWord],
    props:['keywords','data','stored_info','user_type_id','countries'],
    methods:{
      ...mapActions({
          'store_local_data':'register/store_personal_data',
      }),
      change_role:function(){
         if(event.target.value == 3){
             $('.progress-form').fadeOut();
         }else{
             $('.progress-form').css('display','flex');
         }
      },
      nextPage:function(url){
          this.$inertia.visit(url);
      }
    },
    components: {FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "../../../sass/variables";
@import "../../../sass/auth_form_progress";
.alert-danger{
    display: none;
}
.auth{
    margin-top: 80px;
}

.image {
    background-image: url("/images/auth/register.jpg");
    height: 100%;
    background-size: cover;
    background-position: bottom;
    border-radius: 5px;
    overflow: hidden;
    .layer{
        background-color: #0452991f;
        width: 100%;
        height: 100%;
    }
}
form{
    p{
        span,a{
            font-size: $paragraph;
        }

    }
}
</style>

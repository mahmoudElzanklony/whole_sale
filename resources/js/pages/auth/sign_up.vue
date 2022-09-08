<template>
    <div>
        <navbar-component></navbar-component>
        <div class="auth mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <form method="post" @submit.prevent="register">
                            <div class="progress-form" data-aos="fade-down">
                                <span class="active"><i class="ri-check-line"></i></span>
                                <p>{{ keywords.personal_info }}</p>
                                <span><i class="ri-check-line"></i></span>
                                <p>{{ keywords.bank_info }}</p>
                                <span><i class="ri-check-line"></i></span>
                                <p>{{ keywords.brands_dealing }}</p>
                                <span><i class="ri-check-line"></i></span>
                            </div>
                            <div class="form-group" data-aos="fade-up" data-aos-delay="500">
                                <label>{{ keywords.username }}</label>
                                <input name="username" type="text" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group" data-aos="fade-up" data-aos-delay="1000">
                                <label>{{ keywords.email }}</label>
                                <input name="email" type="email" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group" data-aos="fade-up" data-aos-delay="1500">
                                <label>{{ keywords.password }}</label>
                                <input name="password" type="password" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group" data-aos="fade-up" data-aos-delay="2000">
                                <label>{{ keywords.phone }}</label>
                                <input name="phone" type="number" min="0" pattern=".{7,}" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>

                            <div class="form-group" data-aos="fade-up" data-aos-delay="2500">
                                <label>{{ keywords.user_type }}</label>
                                <select name="type"  class="form-control" required>
                                    <option value="seller">{{ keywords.seller }}</option>
                                    <option value="buyer">{{ keywords.buyer }}</option>
                                    <option value="seller_buyer">{{ keywords.seller_buyer }}</option>
                                </select>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group" data-aos="fade-up" data-aos-delay="3000">
                                <input type="button" name="send"
                                       class="btn btn-primary"
                                       @click="nextPage('/register?type=bank-info')"
                                       :value="switchWord('next')">
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
    props:['keywords'],
    methods:{
      ...mapActions({
          'register':'register/register',
      }),
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

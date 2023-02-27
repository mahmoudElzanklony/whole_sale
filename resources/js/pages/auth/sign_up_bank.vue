<template>
    <div>
        <navbar-component></navbar-component>
        <div class="loading">
            <img src="images/loading.gif">
            <p>{{ switchWord('please_wait_until_finish_processing') }}</p>
        </div>
        <div class="auth mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <form method="post" @submit.prevent="store_bank_data">
                            <div class="progress-form" data-aos="fade-down">
                                <span><i class="ri-check-line"></i></span>
                                <p>{{ keywords.personal_info }}</p>
                                <span class="active"><i class="ri-check-line"></i></span>
                                <p>{{ keywords.bank_info }}</p>
                                <span><i class="ri-check-line"></i></span>
                                <p>{{ keywords.brands_dealing }}</p>
                                <span><i class="ri-check-line"></i></span>
                            </div>
                            <div>
                                <img class="preview"
                                     :src="data != null ? '/images/bank_licence/'+data['bank_licence']:'images/preview.png'">
                            </div>
                            <div class="form-group" data-aos="fade-up" data-aos-delay="500" >
                                <label>{{ keywords.account_number }}</label>
                                <input name="account_number" type="text" class="form-control"
                                       :value="data != null ? data['account_number']:''"
                                       required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group" data-aos="fade-up" data-aos-delay="1000">
                                <label>IBAN</label>
                                <input name="iban" type="text" class="form-control"
                                       :value="data != null ? data['iban']:''"
                                       required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group" data-aos="fade-up" data-aos-delay="1500">
                                <label>Swift Code</label>
                                <input name="swift_code" class="form-control"
                                       :value="data != null ? data['swift_code']:''"
                                       required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="drag-drop-files mb-3" data-aos="fade-up" data-aos-delay="2000">
                                <input type="file" name="bank_licence" accept="image/*"
                                       selector=".preview"
                                       class="preview-image" :required="data == null">
                                <p class="alert alert-danger"></p>
                                <button type="button" class="btn btn-primary">
                                    <span>{{ keywords.bank_info_document }}</span>
                                    <span><i class="ri-add-line"></i></span>
                                </button>
                            </div>
                            <div class="form-group" data-aos="fade-up" data-aos-delay="2500">
                                <input type="submit" name="send"
                                       class="btn btn-primary"
                                       :value="switchWord('next')">
                                <input type="button" name="send"
                                       class="btn btn-outline-primary"
                                       @click="nextPage('/register')"
                                       :value="switchWord('prev')">
                            </div>
                            <p class="text-center">
                                <span>{{ keywords.have_already_account }} ? </span>
                                <inertia-link href="/login">{{ keywords.sign_in }}</inertia-link>
                            </p>
                        </form>
                    </div>
                    <div class="col-md-6" data-aos="fade-left">
                        <div class="image">
                            <div class="layer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-component ></footer-component>
    </div>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapActions} from "vuex";
export default {
    name: "sign_up_bank",
    mixins:[SwitchLangWord],
    props:['keywords','data'],
    methods:{
        ...mapActions({
            'store_bank_data':'register/store_bank_data',
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
.preview{
    width:100px;
    display: block;
    margin: auto;
}
form{
    p{
        span,a{
            font-size: $paragraph;
        }

    }
}
</style>

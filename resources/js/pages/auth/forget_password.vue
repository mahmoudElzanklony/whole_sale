<template>
    <section class="forget_password">
        <navbar-component></navbar-component>
        <div class="loading">
            <img src="/images/loading.gif">
            <p>{{ switchWord('please_wait_until_finish_processing') }}</p>
        </div>
        <div class="auth mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <form method="post" @submit.prevent="send_email">
                            <h2 class="mb-4" data-aos="fade-down"  data-aos-delay="500">{{ keywords.forget_password }}</h2>
                            <div class="form-group" data-aos="fade-down"  data-aos-delay="1000">
                                <label>{{ keywords.email }}</label>
                                <input name="email" type="email" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group" data-aos="fade-down"  data-aos-delay="1500">
                                <input type="submit" name="send"
                                       class="btn btn-primary"
                                       :value="keywords.send">
                            </div>
                            <p class="text-center">
                                <span>{{ keywords.have_already_account }} ? </span>
                                <inertia-link href="/login">{{ keywords.sign_in }}</inertia-link>
                            </p>
                        </form>
                    </div>
                    <div class="col-md-6" data-aos="fade-left" >
                        <div class="image">
                            <div class="layer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer-component data-aos="fade-down"></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapActions , mapMutations , mapGetters} from "vuex";
export default {
    name: "forget_password",
    props:['keywords'],
    mixins:[SwitchLangWord],
    methods:{
        ...mapActions({
            'send_email':'send_email/send_email',
        })
    },
    components: {FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "../../../sass/variables";
.alert-danger{
    display: none;
}
.auth{
    margin-top: 100px;
}
.image {
    background-image: url("/images/auth/register_new.jpg");
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
</style>

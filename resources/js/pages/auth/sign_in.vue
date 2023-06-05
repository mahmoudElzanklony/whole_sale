<template>
    <div>
        <navbar-component></navbar-component>

        <div class="auth mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6" data-aos="fade-left">
                        <form method="post" @submit.prevent="login">
                            <h2 class="mb-4">{{ keywords.sign_in }}</h2>
                            <div class="inputs">
                                <div class="form-group input-icon">
                                    <label>{{ keywords.email }}</label>
                                    <input name="email" type="email" class="form-control" required>
                                    <p class="alert alert-danger"></p>
                                    <span class="required"><i class="ri-asterisk"></i></span>
                                </div>
                                <div class="form-group input-icon">
                                    <label>{{ keywords.password }}</label>
                                    <input name="password" type="password" class="form-control" required>
                                    <p class="alert alert-danger"></p>
                                    <span>
                                    <i class="ri-eye-line show_password cursor-pointer"></i>
                                </span>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="send"
                                       class="btn btn-primary"
                                       :value="keywords.sign_in">
                            </div>
                            <p class="text-center">
                                <inertia-link href="/forget-password">{{ keywords.forget_password }}</inertia-link>
                            </p>
                            <p class="text-center">
                                <span>{{ keywords.dont_have_account }} ? </span>
                                <inertia-link href="/register">{{ keywords.sign_up }}</inertia-link>
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

        <footer-component></footer-component>
    </div>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import {mapActions,mapGetters} from "vuex";
export default {
    name: "sign_in",
    props:['keywords'],
    components: {FooterComponent, NavbarComponent},
    methods:{
        ...mapActions({
          'login':'login/login'
        })
    }
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

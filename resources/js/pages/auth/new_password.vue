<template>
    <section class="forget_password">
        <navbar-component></navbar-component>

        <div class="auth mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <form>
                            <h2 class="mb-4" data-aos="fade-down"
                                data-aos-delay="500">{{ keywords.make_new_password }}</h2>
                            <div class="form-group" data-aos="fade-down"  data-aos-delay="1000">
                                <label>{{ keywords.password }}</label>
                                <input name="password" type="password" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group" data-aos="fade-down"  data-aos-delay="1500">
                                <label>{{ keywords.password_confirmed }}</label>
                                <input name="password_confirmed" type="password" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group" data-aos="fade-down"  data-aos-delay="2000">
                                <input type="submit" name="send"
                                       class="btn btn-primary"
                                       :value="keywords.save">
                            </div>
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

        <footer-component data-aos="fade-down"  ></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
export default {
    name: "new_password",
    props:['keywords'],
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
</style>

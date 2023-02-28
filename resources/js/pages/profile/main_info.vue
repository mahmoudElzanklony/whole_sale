<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <div class="inner-profile">
            <ProfileNavComponent></ProfileNavComponent>
            <div class="change_data">
                <div class="container">
                    <p class="alert alert-warning" v-if="role == 'buyer' && false">
                        <span>{{ keywords.current_balance }}</span>
                        <strong>100 SR</strong>
                    </p>
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <div class="section_inputs">
                                <form method="post" @submit.prevent="update_username_image">
                                    <h2 class="d-flex align-items-center">
                                        <span>{{ keywords.edit_main_info }}</span>
                                    </h2>
                                    <div>
                                        <img :src="'/images/users/'+$page.props.user.image">
                                    </div>
                                    <div class="form-group input-icon">
                                        <label>{{ keywords.profile_picture }}</label>
                                        <input class="form-control preview-image"
                                               accept="image/*"
                                               selector=".profile .change_data .section_inputs img"
                                               type="file" name="profile_picture">
                                        <p class="alert alert-danger"></p>
                                        <span class="required"><i class="ri-asterisk"></i></span>
                                    </div>
                                    <div class="form-group input-icon">
                                        <label>{{ keywords.email }}</label>
                                        <input class="form-control" type="email"
                                               :value="$page.props.user.email"
                                               name="email"
                                                required>
                                        <p class="alert alert-danger"></p>
                                        <span class="required"><i class="ri-asterisk"></i></span>
                                    </div>
                                    <div class="form-group input-icon">
                                        <label>{{ keywords.username }}</label>
                                        <input class="form-control"
                                               :value="$page.props.user.username"
                                               name="username"
                                               required>
                                        <p class="alert alert-danger"></p>
                                        <span class="required"><i class="ri-asterisk"></i></span>
                                    </div>
                                    <div class="form-group input-icon">
                                        <label>{{ keywords.phone }}</label>
                                        <input class="form-control"
                                               :value="$page.props.user.phone"
                                               name="phone"
                                               required>
                                        <p class="alert alert-danger"></p>
                                        <span class="required"><i class="ri-asterisk"></i></span>
                                    </div>
                                    <div class="form-group input-icon">
                                        <label>{{ keywords.country }}</label>
                                        <select class="form-control" name="country_id" required>
                                            <option value="">{{ switchWord('select_best_choice') }}</option>
                                            <option v-for="(c,index)  in data['countries']" :key="index"
                                                    :value="c['id']" :selected="$page.props.user.country_id == c['id']">
                                                {{ c['name'] }}
                                            </option>
                                        </select>
                                        <p class="alert alert-danger"></p>
                                        <span class="required"><i class="ri-asterisk"></i></span>
                                    </div>
                                    <div class="form-group input-icon" v-if="role == 'buyer'">
                                        <label>{{ keywords.vat }}</label>
                                        <input class="form-control"
                                               :value="$page.props.user.VAT"
                                               name="vat"
                                               required>
                                        <p class="alert alert-danger"></p>
                                        <span class="required"><i class="ri-asterisk"></i></span>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div class="col-md-6 col-12">
                            <div class="section_inputs">
                                <form method="post" @submit.prevent="update_password">
                                    <h2 class="d-flex align-items-center mb-4 ">
                                        <span>{{ keywords.change_password }}</span>
                                    </h2>
                                    <div class="form-group input-icon">
                                        <label>{{ keywords.current_password }}</label>
                                        <input class="form-control" type="password" name="current_password">
                                        <p class="alert alert-danger"></p>
                                        <span class="required"><i class="ri-asterisk"></i></span>
                                    </div>
                                    <div class="form-group input-icon">
                                        <label>{{ keywords.make_new_password }}</label>
                                        <input class="form-control" type="password" name="password">
                                        <p class="alert alert-danger"></p>
                                        <span class="required"><i class="ri-asterisk"></i></span>
                                    </div>
                                    <div class="form-group input-icon">
                                        <label>{{ keywords.password_confirmed }}</label>
                                        <input class="form-control" type="password" name="password_confirmation">
                                        <p class="alert alert-danger"></p>
                                        <span class="required"><i class="ri-asterisk"></i></span>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>
                            </div>
                    </div>



                    </div>
                    <div class="row">

                        <div class="col-md-6 col-12" v-if="(role == 'seller' || role == 'buyer_seller') && false">
                            <div class="section_inputs">
                                <form method="post" class="bank_info">
                                    <h2 class="d-flex align-items-center mb-4 ">
                                        <span>{{ keywords.change_bank_info }}</span>
                                    </h2>
                                    <div v-if="false">
                                        <img style="border-radius: 5px" src="/images/users/default.png">
                                    </div>
                                    <div class="form-group" >
                                        <label>{{ keywords.account_number }}</label>
                                        <input name="account_number" type="text"
                                               :value="data['bank_info']['account_number']"
                                               class="form-control" required>
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group" >
                                        <label>IBAN</label>
                                        <input name="iban" type="text"
                                               :value="data['bank_info']['iban']"
                                               class="form-control" required>
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <label>Swift Code</label>
                                        <input name="swift_code" class="form-control"
                                               :value="data['bank_info']['swift_code']"
                                               required>
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="drag-drop-files mb-3">
                                        <input type="file" name="bank_licence"
                                               selector=".profile .bank_info  img"
                                               accept="image/*" class="preview-image">
                                        <button type="button" class="btn btn-primary">
                                            <span>{{ keywords.bank_info_document }}</span>
                                            <span><i class="ri-add-line"></i></span>
                                        </button>
                                    </div>
                                    <div class="drag-drop-files mb-3">
                                        <input type="file" name="trade_licence"
                                               selector=".profile .bank_info  img"
                                               accept="image/*" class="preview-image">
                                        <button type="button" class="btn btn-primary">
                                            <span>{{ keywords.trade_licence }}</span>
                                            <span><i class="ri-add-line"></i></span>
                                        </button>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div class="col-md-6 col-12" v-if="(role == 'seller' || role == 'buyer_seller') && false">
                            <div class="section_inputs">
                                <form method="post" class="bank_info">
                                    <h2 class="d-flex align-items-center mb-4 ">
                                        <span>{{ keywords.change_brands_info }}</span>
                                    </h2>
                                    <div class="form-group" >
                                        <label>{{ keywords.brands_dealing }}</label>
                                        <brands_selections :data="data['all_brands']"></brands_selections>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>
                            </div>
                        </div>



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
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapActions} from "vuex";
import Brands_selections from "../../components/brands_selections";
export default {
    name: "main_info",
    props:['keywords','data','role'],
    mixins:[SwitchLangWord],
    computed:{
        user:function (){
            return this.$inertia.page.props.user
        }
    },
    methods:{
      ...mapActions({
         'update_username_image':'personal_info/update_username_image',
         'update_password':'personal_info/change_password',
         'update_personal_data':'personal_info/update_personal_data',
         'update_company_data':'personal_info/update_company_data',
         'update_secondary_data':'personal_info/update_secondary_data',
      }),
    },
    components: {Brands_selections, ProfileNavComponent, FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.profile{
    margin-top: 100px;
    .change_data{
        margin-top: 20px;
        .section_inputs{
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 10px;
            margin-bottom: 10px;
            img{
                height: 110px;
                display: block;
                margin: auto;
                object-fit: cover;
                width: 110px;
                border-radius: 50%;
                border:1px solid #ddd;
            }
            .what_app_status{
                span:first-of-type{
                    color:$sub_main_color;
                }
                span:last-of-type{
                    position: relative;
                    top:-6px
                }
            }
        }
    }
}

.ar{
    .profile{
        .inner-profile{
            .section_inputs{
                .what_app_status{
                    span{
                        margin-left: 5px;
                    }
                }
            }
        }
    }
}

.en{
    .profile{
        .inner-profile{
            .section_inputs{
                .what_app_status{
                    span{
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}
.alert-danger{
    display: none;
}

</style>

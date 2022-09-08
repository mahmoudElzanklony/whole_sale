<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <div class="inner-profile">
            <ProfileNavComponent></ProfileNavComponent>
            <div class="change_data">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <div class="section_inputs">
                                <form method="post" @submit.prevent="update_username_image">
                                    <h2 class="d-flex align-items-center">
                                        <span>{{ keywords.edit_main_info }}</span>
                                    </h2>
                                    <div>
                                        <img src="/images/users/default.png">
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.profile_picture }}</label>
                                        <input class="form-control preview-image"
                                               accept="image/*"
                                               selector=".profile .change_data .section_inputs img"
                                               type="file" name="profile_picture">
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.email }}</label>
                                        <input class="form-control" type="email" name="email"
                                                required>
                                        <p class="alert alert-danger"></p>
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
                                    <div class="form-group">
                                        <label>{{ keywords.current_password }}</label>
                                        <input class="form-control" type="password" name="current_password">
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.make_new_password }}</label>
                                        <input class="form-control" type="password" name="password">
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.password_confirmed }}</label>
                                        <input class="form-control" type="password" name="password_confirmation">
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>
                            </div>
                    </div>



                    </div>
                    <div class="row">

                        <div class="col-md-6 col-12">
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
                                        <input name="account_number" type="text" class="form-control" required>
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group" >
                                        <label>IBAN</label>
                                        <input name="iban" type="text" class="form-control" required>
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <label>Swift Code</label>
                                        <input name="swift_code" class="form-control" required>
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="drag-drop-files mb-3" v-if="false">
                                        <input type="file" name="bank_info_document"
                                               selector=".profile .bank_info  img"
                                               accept="image/*" class="preview-image">
                                        <button type="button" class="btn btn-primary">
                                            <span>{{ keywords.bank_info_document }}</span>
                                            <span><i class="ri-add-line"></i></span>
                                        </button>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div class="col-md-6 col-12">
                            <div class="section_inputs">
                                <form method="post" class="bank_info">
                                    <h2 class="d-flex align-items-center mb-4 ">
                                        <span>{{ keywords.change_brands_info }}</span>
                                    </h2>
                                    <div class="form-group" >
                                        <label>{{ keywords.brands_dealing }}</label>
                                        <select name="brands_dealing"  class="form-control" multiple required>
                                            <option value="" disabled>{{ switchWord('select_best_for_you') }}</option>
                                            <option value="toytoa">Toyta</option>
                                            <option value="Nysan">Nysan</option>
                                            <option value="BMW">BMW</option>
                                            <option value="Marcedis">Marcedis</option>
                                        </select>
                                        <p class="alert alert-danger"></p>
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
    components: {ProfileNavComponent, FooterComponent, NavbarComponent}
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

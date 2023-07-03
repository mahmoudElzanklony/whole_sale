<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <div class="inner-profile">
            <ProfileNavComponent></ProfileNavComponent>
            <div class="change_data">
                <div class="container">
                    <h2 class="mt-3 mb-4">{{ keywords.main_title }}</h2>
                    <form method="post" @submit.prevent="save_addresses">
                        <div class="row mb-3" v-if="data.length > 0">
                            <div :class="'col-md-6  col-12 mb-2 add_'+index" v-for="(i,index) in data" :key="index">
                                <div class="d-flex align-items-center justify-content-between">
                                    <label>{{ switchWord('address') }}</label>
                                    <span class="red cursor-pointer" @click="delete_item('addresses',i['id'],'.add_'+index)"><i class="ri-close-line"></i></span>
                                </div>
                                <input type="hidden" name="ids[]" :value="i['id']">

                                <input class="form-control" name="addresses[]" :value="i['address']" required>
                            </div>
                        </div>
                        <div class="row mb-3" v-else>
                            <div class="col-md-6  col-12 mb-2" >
                                <div class="d-flex align-items-center justify-content-between">
                                    <label>{{ switchWord('address') }}</label>
                                </div>
                                <input class="form-control" name="addresses[]"  required>
                            </div>
                        </div>
                        <input type="submit" class="btn btn-primary" :value="switchWord('save')">
                        <input type="button"
                               @click="add_new_address"
                               class="btn btn-outline-primary"
                               :value="switchWord('add_new_address')">
                    </form>
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
import delete_item from "../../mixin/delete_item";
export default {
    name: "profile_addresses",
    props:['keywords','data'],

    mixins:[SwitchLangWord,delete_item],
    methods:{
        ...mapActions({
            'save_addresses':'personal_info/save_addresses',
        }),
        add_new_address:function (){
            var output = '<div class="col-md-6 col-12 mb-2"><div class="d-flex align-items-center justify-content-between"><label>'+this.switchWord('address')+'</label> <span class="red cursor-pointer delete-icon-input"><i class="ri-close-line"></i></span></div> <input  type="hidden" name="ids[]" > <input name="addresses[]" required="required" class="form-control"></div>';
            $('.row').eq(0).append(output);
        },
    },
    components: {ProfileNavComponent, FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.alert-danger{
    display: none;
}

</style>

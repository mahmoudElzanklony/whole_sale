<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content">
            <div class="container settings">
                <h2>{{ main_title }}</h2>

                <form @submit.prevent="save_tax" class="mb-3">
                    <div class="row">
                        <div class="col-9">
                            <input type="number" step="0.5" name="tax" class="form-control" :value="tax_val" required>
                        </div>
                        <div class="col-3">
                            <input type="submit" name="send"
                                   :value="switchWord('save')" class="btn btn-primary">
                        </div>
                    </div>
                </form>
            </div>

        </div>

    </div>
</template>

<script>
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapActions} from  "vuex";
export default {
    name: "settings",
    props:['main_title','tax_val'],
    mixins:[SwitchLangWord],
    components:{
        SideNavbarComponent
    },
    methods:{
      ...mapActions({
            'save_settings':'settings_dash/save_settings',
            'save_tax':'quotations_dash/save_tax',

      })
    },
}
</script>

<style lang="scss" scoped>
.settings{
    h2{
        padding-top: 45px;
    }
    form{
        margin: 20px auto;
    }

}
.alert{
    display: none;
}
</style>

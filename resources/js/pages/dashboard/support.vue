<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span @click="incrementAction({amount:100})">{{ main_title }}</span>
                    <span>
                        <i class="ri-arrow-down-s-line toggle_next"></i>
                    </span>
                </p>
                <div class="overflow-auto">
                    <table class="myTable table text-center table-bordered table-striped table-hover">
                        <thead>
                        <tr>
                            <td v-for="i in handling_data['table_head_keys']" :key="i">
                                {{ i }}
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(i,index) in vuex_data" :key="index" :class="'tr_'+i['id']">
                            <td>{{ i['username'] }}</td>
                            <td>{{ i['email'] }}</td>
                            <td>{{ i['message'] }}</td>
                            <td>{{ i['reply'] }}</td>
                            <td class="actions">
                                <span><i data-toggle="modal" data-target="#update_box" @click="update_item(i)" class="ri-edit-line"></i></span>
                                <span><i @click="delete_item('supports',i['id'],'.tr_'+i['id'])" class="ri-close-line"></i></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade" id="update_box" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_users_box">{{ switchWord('update_new_item') }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" @submit.prevent="save_support">
                            <input type="hidden" name="id" :value="item != null ? item['id']:null">
                            <div class="form-group"
                                 v-for="input in Object.keys(handling_data['data_model'])" :key="input">
                                <label>{{ handling_data['data_model'][input] }}</label>
                                <textarea class="form-control" :name="input"
                                          v-if="input == 'message' || input == 'reply'"
                                          :value="item != null ? item[input]:''" required>
                                    {{ item != null ? item[input]:'' }}
                                </textarea>
                                <input :name="input" class="form-control" v-else
                                       :value="item != null ? item[input]:''"
                                       :required="input.indexOf('tu') == -1">
                                <p class="alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary" :value="switchWord('save')">
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ switchWord('close') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";
import tableData from "../../mixin/tableData";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import delete_item from "../../mixin/delete_item";
import update_item from "../../mixin/update_item"
import {mapMutations ,mapGetters, mapActions} from 'vuex';
export default {
    name: "support",
    mixins:[tableData,SwitchLangWord,delete_item,update_item],
    props:['main_title','handling_data'],
    components: {SideNavbarComponent},
    methods:{
        ...mapActions({
            'save_support':'support_dash/save_support'
        }),
        ...mapMutations({
           'inilalize_data':'support_dash/inilaize_data'
        }),
    },
    computed:{
      ...mapGetters({
         'vuex_data':'support_dash/get_data',
      }),
    },
    created() {
        this.inilalize_data(this.handling_data['data']);
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

</style>

<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
                    <button class="btn black-btn btn-outline-primary"
                            data-toggle="modal" data-target="#update_box" @click="update_item(null)">
                        {{ switchWord('add_new_item') }}
                    </button>
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
                        <tr v-for="(i,index) in vuex_data"
                            :key="index" :class="'row_'+index">
                            <td>{{ i['ar_question'] }}</td>
                            <td>{{ i['en_question'] }}</td>
                            <td>{{ i['ar_answer'] }}</td>
                            <td>{{ i['en_answer'] }}</td>
                            <td class="actions">
                                <span>
                                    <i data-toggle="modal" @click="update_item(i)" data-target="#update_box"
                                       class="ri-edit-line">
                                    </i>
                                </span>
                                <span class="delete" @click="delete_item('common_questions',i['id'],'.row_'+index)"><i class="ri-close-line"></i></span>
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
                        <h5 class="modal-title" id="update_box_data">{{ item == null ? switchWord('add_new_item'):switchWord('update_new_item')+item.ar_name }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" @submit.prevent="save_brand">
                            <input v-if="item != null" type="hidden" name="id" :value="item.id">
                            <div class="form-group"
                                 v-for="input in modal_data" :key="input">
                                <label>{{ handling_data['data_model'][input] }}</label>
                                <input :name="input" class="form-control"
                                       v-if="input.indexOf('answer') == -1"
                                       :value="item != null ? item[input]:''" :required="input.indexOf('tu') == -1">
                                <textarea v-else class="form-control" :name="input" :value="item != null ? item[input]:''" :required="input.indexOf('tu') == -1">{{ item != null ? item[input]:'' }}</textarea>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="save" class="btn btn-primary"
                                       :value="switchWord('save')">
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
import update_item from "../../mixin/update_item";
import {mapState,mapActions , mapGetters , mapMutations} from "vuex";
export default {
    name: "common_questions",
    mixins:[tableData,SwitchLangWord,update_item,delete_item],
    props:['main_title','handling_data'],
    data:function(){
        return {
            modal_data:[],
        }
    },
    computed:{
        ...mapGetters({
            'vuex_data':'common_questions/get_data',
        }),
    },
    methods:{
        ...mapActions({
            'save_brand':'common_questions/save_common_question'
        }),
        ...mapMutations({
            'update_data':'common_questions/update_data',
            'inilaize_data':'common_questions/inilalize_data',
        }),
    },
    created() {
        this.inilaize_data(this.handling_data['data'])
        this.modal_data = Object.keys(this.handling_data['data_model']);
    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.alert-danger{
    display: none;
}
</style>

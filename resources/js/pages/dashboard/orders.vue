<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
                    <button class="btn black-btn btn-outline-primary" v-if="false"
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

                        <tr>
                            <td><img src="/images/brands/toyta.png"></td>
                            <td rowspan="2" style="vertical-align : middle;">0</td>
                            <td>11</td>
                            <td>ahmed ali</td>
                            <td rowspan="2" style="vertical-align : middle;">gamal mohsen</td>
                            <td>toyta</td>
                            <td>5</td>
                            <td>100</td>
                            <td>500</td>
                            <td>Rounded to uop</td>
                            <td>3</td>
                            <td>550</td>
                            <td>10:30</td>
                            <td>pending</td>
                            <td class="actions">
                                <span>
                                    <i data-toggle="modal" data-target="#update_box"
                                       class="ri-edit-line">
                                    </i>
                                </span>
                                <span class="delete"><i class="ri-close-line"></i></span>
                            </td>
                        </tr>

                        <tr>
                            <td><img src="/images/brands/toyta.png"></td>
                            <td style="display: none">0</td>
                            <td>11</td>
                            <td>saad mazen</td>
                            <td style="display: none">gamal mohsen</td>
                            <td>toyta</td>
                            <td>5</td>
                            <td>100</td>
                            <td>500</td>
                            <td>Rounded to uop</td>
                            <td>3</td>
                            <td>550</td>
                            <td>10:30</td>
                            <td>pending</td>
                            <td class="actions">
                                <span>
                                    <i data-toggle="modal" data-target="#update_box"
                                       class="ri-edit-line">
                                    </i>
                                </span>
                                <span class="delete"><i class="ri-close-line"></i></span>
                            </td>
                        </tr>

                        <tr v-for="(i,index) in 6"
                            :key="index" >
                            <td><img src="/images/brands/toyta.png"></td>
                            <td>{{ i }}</td>
                            <td>10</td>
                            <td>ahmed ali</td>
                            <td>gamal mohsen</td>
                            <td>toyta</td>
                            <td>5</td>
                            <td>100</td>
                            <td>500</td>
                            <td>Rounded to uop</td>
                            <td>3</td>
                            <td>550</td>
                            <td>10:30</td>
                            <td>pending</td>
                            <td class="actions">
                                <span>
                                    <i data-toggle="modal" data-target="#update_box"
                                       class="ri-edit-line">
                                    </i>
                                </span>
                                <span class="delete"><i class="ri-close-line"></i></span>
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
                        <form method="post" @submit.prevent="save_category">
                            <input v-if="item != null" type="hidden" name="id" :value="item.id">
                            <div class="form-group">
                                <img class="box-image" v-if="item == null"
                                     src="/images/users/default.png">
                                <img class="box-image" v-else
                                     :src="'/images/categories/'+item['image']">

                            </div>
                            <div class="form-group"
                                 v-for="input in modal_data" :key="input">
                                <label>{{ handling_data['data_model'][input] }}</label>
                                <select :name="input" v-if="input == 'brand_id'" class="form-control" required>
                                    <option value="">{{ switchWord('select_best_choice') }}</option>
                                    <option v-for="(i,index) in 5" :key="index">Toyta</option>
                                </select>
                                <input v-else :name="input" class="form-control"
                                       :value="item != null ? item[input]:''" :required="input.indexOf('tu') == -1">
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
    name: "orders",
    mixins:[tableData,SwitchLangWord,update_item,delete_item],
    props:['main_title','handling_data'],
    data:function(){
        return {
            modal_data:[],
        }
    },
    computed:{
        ...mapGetters({
            'vuex_data':'categories_dash/get_data',
        }),
    },
    methods:{
        ...mapActions({
            'save_category':'categories_dash/save_category'
        }),
        ...mapMutations({
            'update_data':'categories_dash/update_data',
            'inilaize_data':'categories_dash/inilalize_data',
        }),
        initalize_data:function (){
            this.inilaize_data(this.handling_data['data']);
        },
    },
    created() {
        this.initalize_data();
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

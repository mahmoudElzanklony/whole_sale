<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
                    <button v-if="false" class="btn black-btn btn-outline-primary"
                            data-toggle="modal" data-target="#update_box" @click="update_item(null)">
                        {{ switchWord('add_new_item') }}
                    </button>
                </p>
                <div class="overflow-auto">
                    <table class="myTable table text-center table-bordered table-striped table-hover">
                        <thead>
                        <tr>
                            <td></td>
                            <td v-for="i in handling_data['table_head_keys']" :key="i">
                                {{ i }}
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(i,index) in handling_data['data']"
                            :key="index" :class="'row_'+index">
                            <td>
                                <input type="checkbox" @click="detect_row_to_export">
                            </td>
                            <td>{{ i['user']['username'] }}</td>
                            <td>{{ i['brand']['name'] }}</td>
                            <td>{{ i['part_number'] }}</td>
                            <td>{{ i['quantity'] }}</td>
                            <td>{{ i['serial'] }}</td>
                            <td class="actions">
                                <span class="accept" v-if="false">
                                    <i
                                       class="ri-check-line">
                                    </i>
                                </span>
                                <span class="delete"  @click="delete_item('quotations'
                                       ,i['id'],'.row_'+index)"><i class="ri-close-line"></i></span>
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
                                <input :name="input" class="form-control"
                                       :value="item != null ? item[input]:''" :required="input.indexOf('tu') == -1">
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <div class="drag-drop-files">
                                    <input type="file" class="preview-image" name="image" accept="image/*"
                                           selector=".modal-dialog img.box-image">
                                    <button type="button" class="btn btn-primary">
                                        <span>{{ switchWord('upload_image') }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </button>
                                </div>
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
import detect_row_for_export from "../../mixin/detect_row_for_export";
import {mapState,mapActions , mapGetters , mapMutations} from "vuex";
export default {
    name: "quotations",
    mixins:[tableData,SwitchLangWord,update_item,delete_item,detect_row_for_export],
    props:['main_title','handling_data'],
    data:function(){
        return {
            modal_data:[],
        }
    },
    computed:{

    },
    methods:{

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

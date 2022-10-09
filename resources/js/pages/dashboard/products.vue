<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container products-dashboard mb-4">
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
<!--                            <td v-for="i in handling_data['table_head_keys']" :key="i">
                                {{ i }}
                            </td>-->
                            <td>id</td>
                            <td>brand</td>
                            <td>actions</td>
                        </tr>
                        </thead>
                        <tbody>

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
                            <div class="slabs save_product">
                                <div class="slab input-has-delete">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label>{{ keywords.min_quantity }}</label>
                                                <input class="form-control" name="min_quantity[]" required>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label>{{ keywords.price }}</label>
                                                <input class="form-control" name="price[]" required>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button"
                                    @click="add_specific_slab"
                                    class="btn btn-outline-primary mb-3">{{ keywords.add_specific_slab }}</button>
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
import SwitchLangWord from "../../mixin/SwitchLangWord";
import delete_item from "../../mixin/delete_item";
import update_item from "../../mixin/update_item";
import {mapState,mapActions , mapGetters , mapMutations} from "vuex";
export default {
    name: "products",
    mixins:[SwitchLangWord,update_item,delete_item],
    props:['keywords','main_title','handling_data'],
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
        add_specific_slab:function(){
            var html = $(event.target).prev().find('.slab').html();
            var output = '<div class="slab input-has-delete">';
            output+= html;
            output+= '<span><i class="ri-close-line delete-icon-input"></i></span></div>'
            $('.slabs').append(output);

        }
    },
    mounted() {
        if(this.$inertia.page.props.lang == 'ar'){
            var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json';
        }else{
            var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json';
        }
        jQuery( document ).ready(function( $ ) {
            var data_table = null;
            data_table = $('.myTable').DataTable( {
                language: {
                    url: url,
                },
                serverSide: true,
                ajax:'/dashboard/paginate-orders',
                columns:[
                    {data:"id"},
                    {data:"brand"},
                    {data:null},
                ],
                columnDefs: [{
                    targets: -1,
                    render: function (data, type, row) {
                        var checkbox = '<div class="actions"><span><i data-toggle="modal" data-target="#update_box" class="ri-edit-line"></i></span><span style="position:unset" class="delete delete-icon-input" no_parent="3"><i class="ri-close-line"></i></span></div>';
                        return checkbox;
                    }
                }],
                dom: 'lBfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'print'
                ]
            } );
            window.table_data = data_table;
        });
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

table{
    tr{
        td{
            min-width: 170px !important;
        }
    }
}
</style>

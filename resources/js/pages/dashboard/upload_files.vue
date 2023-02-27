<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
                </p>
                <div>
                    <form method="post" @submit.prevent="save_files">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <a class="d-block mb-3"
                                       href="/excels/template.csv"
                                    >{{ handling_data['keywords']['download_current_version'] }}</a>
                                    <div class="drag-drop-files">
                                        <input type="file" name="quotation_file" >
                                        <p class="alert alert-danger"></p>
                                        <button type="button" class="btn btn-primary">
                                            <span>{{ switchWord('upload_quotation_file') }}</span>
                                            <span><i class="ri-add-line"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <a href="/excels/product_template.csv" class="d-block mb-3"
                                    >{{ handling_data['keywords']['download_current_version'] }}</a>
                                    <div class="drag-drop-files">
                                        <input type="file" name="product_file" >
                                        <p class="alert alert-danger"></p>
                                        <button type="button" class="btn btn-primary">
                                            <span>{{ switchWord('upload_product_file') }}</span>
                                            <span><i class="ri-add-line"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="submit" name="save" class="btn btn-primary"
                                   :value="switchWord('save')">
                        </div>
                    </form>
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
    name: "brands",
    mixins:[tableData,SwitchLangWord,update_item,delete_item],
    props:['main_title','handling_data'],
    data:function(){
        return {
            modal_data:[],
        }
    },
    methods:{
        ...mapActions({
            'save_files':'upload_files/save_files'
        }),
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

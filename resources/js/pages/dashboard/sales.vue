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
                                <span class="delete"><i class="ri-close-line"></i></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
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
    name: "sales",
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

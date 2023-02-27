<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
                    <span>
                        <i class="ri-arrow-down-s-line toggle_next"></i>
                    </span>
                </p>
                <form>
                    <div class="container">
                        <form method="post" @submit.prevent="filter_to_find_areas">
                            <div class="row">
                                    <div class="col-md-3 col-6"
                                         v-for="(input,index) in Object.keys(handling_data['search_form'])"
                                         :key="index">
                                        <select class="form-control" :name="input" @change="update_location" required>
                                            <option value="">{{ handling_data['search_form'][input] }}</option>
                                            <option v-for="c in get_items_data(input)" :value="c['id']">
                                                {{ c['name'] }}
                                            </option>
                                        </select>

                                    </div>
                                    <div class="col-md-3 col-6">
                                        <input type="submit" class="btn btn-primary d-block w-100" :value="switchWord('filter')">
                                    </div>
                            </div>
                        </form>
                    </div>
                </form>
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
import {mapMutations , mapGetters , mapActions} from "vuex";
export default {
    name: "reports",
    mixins:[tableData,SwitchLangWord],
    props:['main_title','handling_data'],
    computed:{
       ...mapGetters({
           'get_items_data':'countries_govenrn_cities_areas/get_items_data',
           'price_data':'countries_govenrn_cities_areas/get_price_data',
       }),
    },
    methods:{
        ...mapMutations({
           'inilaize_items':'countries_govenrn_cities_areas/inialize_items',
        }),
        ...mapActions({
            'update_location':'countries_govenrn_cities_areas/update_location',
            'filter_to_find_areas':'countries_govenrn_cities_areas/filter_to_find_areas',
        })
    },
    components: {SideNavbarComponent},
    created() {
        this.inilaize_items({name:'countries',value:this.handling_data['data']['countries']})
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

</style>

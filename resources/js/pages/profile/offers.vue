<template>
    <section class="profile profile-offers">
        <navbar-component></navbar-component>
        <div class="inner-profile">
            <ProfileNavComponent></ProfileNavComponent>
            <div class="change_data">
                <div class="container">
                  <p class="alert alert-warning" v-if="data.length == 0">{{ keywords.there_is_no_offers_yet }}</p>

                  <div v-else class="overflow-auto">
                        <table class="myTable table text-center table-bordered table-striped table-hover">
                            <thead>
                            <tr>
                                <td>{{ keywords.brand }}</td>
                                <td>{{ keywords.file }}</td>
                                <td>{{ keywords.start_date }}</td>
                                <td>{{ keywords.end_date }}</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(i,index) in data"
                                :key="index" :class="'row_'+index">
                                <td>{{ i['brand']['name'] }}</td>
                                <td>
                                    <a
                                        target="_blank"
                                        :href="'/quotations/export-offer?ids='+i['offer_items'].map((e)=>{return e['item_info_id']}).toString()">{{ switchWord('download_file') }}</a>
                                </td>
                                <td>{{ i['start_date'] }}</td>
                                <td>{{ i['end_date'] }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

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
import delete_item from "../../mixin/delete_item";
import tableData from "../../mixin/tableData";
import SwitchLangWord from "../../mixin/SwitchLangWord";
export default {
    name: "offers",
    props:['keywords','data'],
    mixins:[delete_item,tableData,SwitchLangWord],
    components: {ProfileNavComponent, FooterComponent, NavbarComponent}
}
</script>

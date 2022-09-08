<template>

    <form action="/ads">
        <input type="hidden" name="main_cat" :value="main_cat_id_query">
        <div class="form-group input-icon" >
            <label>{{ keywords.area }}</label>
            <input class="form-control" name="area" @keyup="search_areas" :value="(searched_data != undefined && searched_data.hasOwnProperty('area') && searched_data['area'] != null) ? searched_data['area']:'' ">
            <span style="top:32px"><i class="ri-map-line"></i></span>
            <div class="search-outcoming-data">
                <ul>
                    <li v-for="(area,index) in get_serached_areas" :key="index">{{ area['name'] }}</li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label>{{ keywords.type }}</label>
            <div class="special_radio_container">
                <div class="special_radio" @click="change_type('sale')">
                    <span>{{ keywords.sale }}</span>
                    <input :class="(searched_data == undefined || searched_data != undefined && searched_data.hasOwnProperty('type') && searched_data['type'] == 'sale')?'active':''"

                           type="radio" name="type" value="sale" :checked="searched_data == undefined || (searched_data != undefined && searched_data.hasOwnProperty('type') && searched_data['type'] != null && searched_data['type'] == 'sale') ">
                </div>
                <div class="special_radio" @click="change_type('rent')">
                    <span>{{ keywords.rent }}</span>
                    <input
                        :class="(searched_data != undefined && searched_data.hasOwnProperty('type') && searched_data['type'] == 'rent')?'active':''"
                        type="radio" name="type" value="rent" :checked="searched_data != undefined && searched_data.hasOwnProperty('type') && searched_data['type'] != null && searched_data['type'] == 'rent' ">
                </div>
            </div>
        </div>
        <div class="form-group">
            <label>{{ keywords.category }}</label>
            <div class="d-flex align-items-center flex-wrap">
                <div class="input-radius-radio active">
                    <span>{{ keywords.all_options }}</span>
                    <input type="radio" name="category" value="all" checked>
                </div>
                <div class="input-radius-radio" v-for="(i,index) in sub_cats" :key="index"
                     @click="find_questions(i['id'])">
                    <span>{{ i['name'] }}</span>
                    <input type="radio" name="category" :value="i['id']">
                </div>
            </div>
        </div>
        <div class="form-group two_inputs_together d-flex justify-content-between flex-wrap">
            <label class="d-block w-100">{{ keywords.price_range }}</label>
            <input class="form-control half" name="min_price"
                   :value="(searched_data != undefined && searched_data.hasOwnProperty('min_price') && searched_data['min_price'] != null) ? searched_data['min_price']:''"
                   :placeholder="keywords.min_price">
            <input class="form-control half" name="max_price"
                   :value="(searched_data != undefined && searched_data.hasOwnProperty('max_price') && searched_data['max_price'] != null) ? searched_data['max_price']:''"
                   :placeholder="keywords.max_price">
        </div>
        <p class="d-flex justify-content-between
                            cursor-pointer
                            align-items-center mb-3"
           @click="show_hide_filters">
            <strong>{{ keywords.more_filters }}</strong>
            <span><i class="ri-arrow-drop-down-line"></i></span>
        </p>
        <div class="reset_of_filter">

            <div class="form-group two_inputs_together d-flex justify-content-between flex-wrap">
                <label class="d-block w-100">{{ keywords.area }}</label>
                <input class="form-control half" name="min_area"
                       :value="(searched_data != undefined && searched_data.hasOwnProperty('min_area') && searched_data['min_area'] != null) ? searched_data['min_area']:''"
                       :placeholder="keywords.min_area">
                <input class="form-control half" name="max_area"
                       :value="(searched_data != undefined && searched_data.hasOwnProperty('max_area') && searched_data['max_area'] != null) ? searched_data['max_area']:''"
                       :placeholder="keywords.max_area">
            </div>

            <div class="form-group" v-if="get_payment_methods.length > 0">
                <label>{{ keywords.payment_methods }}</label>
                <div class="d-flex align-items-center flex-wrap">
                    <div class="input-radius-radio active">
                        <span>{{ keywords.all_options }}</span>
                        <input type="radio" name="payment" value="all" checked>
                    </div>
                    <div class="input-radius-radio" v-for="(i,index) in get_payment_methods" :key="index">
                        <span>{{ switchWord(i) }}</span>
                        <input type="radio" name="payment" :value="i">
                    </div>
                </div>
            </div>

            <div class="form-group" v-if="false">
                <label>{{ keywords.listings_available_for_mortgage }}</label>
                <div class="d-flex align-items-center flex-wrap">
                    <div class="input-radius-radio active">
                        <span>{{ keywords.all_financing_options }}</span>
                        <input type="radio" name="bank_type" value="all_financing_options">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.cbe_initiative }}</span>
                        <input type="radio" name="bank_type" value="cbe_initiative">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.cbe_another_initiative }}</span>
                        <input type="radio" name="bank_type" value="cbe_another_initiative">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.commercial_financing }}</span>
                        <input type="radio" name="bank_type" value="commercial_financing">
                    </div>
                </div>
            </div>

            <div class="questions">
                <div class="form-group" v-for="(q,index) in all_questions" :key="index">
                    <label>{{ q['question'][$page.props.lang+'_name'] }}</label>
                    <input v-if="q['question']['type'] == 'text'" class="form-control" :name="'questions['+q['question']['id']+']'">

                    <input v-else-if="q['question']['type'] == 'radio'"
                           type="checkbox"
                           value="1"
                           class="form-control toggle-checkbox-status" :name="'questions['+q['question']['id']+']'">

                    <select v-else class="form-control" :name="'questions['+q['question']['id']+']'">
                        <option value="">{{ switchWord('select_best_choice') }}</option>
                        <option v-for="(answer , index) in q['question']['answers']"
                                :value="answer['id']">{{ answer[$page.props.lang+'_name'] }}</option>
                    </select>
                </div>
            </div>

            <div class="form-group" v-if="false">
                <label>{{ keywords.type }}</label>
                <div class="d-flex align-items-center flex-wrap">
                    <div class="input-radius-radio active">
                        <span>{{ keywords.all_options }}</span>
                        <input type="radio" name="view" value="all">
                    </div>
                    <div class="input-radius-radio" v-for="i in 10" :key="i">
                        <span>شارع رئيسي</span>
                        <input type="radio" name="view" value="شارع رئيسي">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label>{{ keywords.keywords }}</label>
                <textarea class="form-control"
                          :value="(searched_data != undefined && searched_data.hasOwnProperty('keywords') && searched_data['keywords'] != null) ? searched_data['keywords']:''"
                          name="keywords"></textarea>
            </div>

            <div class="form-group" v-if="false">
                <label>{{ keywords.result_filtering }}</label>
                <div class="d-flex align-items-center mb-2">
                    <input name="filter_result"
                           type="checkbox" value="listings_with_photos_only">
                    <span>{{ keywords.listings_with_photos_only }}</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <input name="filter_result"
                           type="checkbox" value="listings_inside_compounds_only">
                    <span>{{ keywords.listings_inside_compounds_only }}</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <input name="filter_result"
                           type="checkbox" value="direct_from_the_owner_listings">
                    <span>{{ keywords.direct_from_the_owner_listings }}</span>
                </div>
            </div>

            <div class="form-group">
                <label>{{ keywords.sort_by }}</label>
                <div class="d-flex align-items-center flex-wrap">
                    <div class="input-radius-radio active">
                        <span>{{ keywords.newest_first }}</span>
                        <input type="radio" name="sort_by[id]" value="DESC" checked>
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.lowest_price }}</span>
                        <input type="radio" name="sort_by[price]" value="ASC">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.height_price }}</span>
                        <input type="radio" name="sort_by[price]" value="DESC">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.smallest_area }}</span>
                        <input type="radio" name="sort_by[meters_number]" value="ASC">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.largest_area }}</span>
                        <input type="radio" name="sort_by[meters_number]" value="DESC">
                    </div>

                </div>
            </div>
        </div>
        <div class="form-group">
            <input type="submit"
                   class="btn btn-primary"
                   :value="keywords.search">
        </div>
    </form>

</template>

<script>
import {mapGetters , mapActions , mapMutations} from "vuex";
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "FilterComponent",
    props:['keywords','sub_cats','searched_data','parent_cat_id'],
    mixins:[SwitchLangWord],
    data:function(){
        return {
            main_cat_id_query:this.parent_cat_id,
        }
    },
    computed:{
       ...mapGetters({
           'get_serached_areas':'areas/get_searched_areas',
           'get_payment_methods':'payment_ways/get_payment_ways',
           'all_questions':'questions/get_questions_data',
       })
    },
    methods:{
        show_hide_filters:function(){
            $(event.target).parent().parent().parent().find('.reset_of_filter').slideToggle();
        },
        /*hide_search_data:function(){
           event.stopPropagation();
        },*/
        ...mapMutations({
            'inilaize_sub_cats':'categories/inialize_sub_categories_items',
        }),
        ...mapActions({
            'search_areas':'areas/search_areas',
            'change_type':'payment_ways/find_payment_ways',
            'find_questions':'questions/get_questions_where',
        })
    },
    created() {
        if(this.main_cat_id_query == undefined) {
            if (document.URL.split('cat_id=')[1] != undefined) {
                this.main_cat_id_query = document.URL.split('cat_id=')[1];
            }
        }
    },
    mounted() {
        this.change_type(document.querySelector('input[name="type"]').value);
        /*document.querySelector('form[action="/ads"]').addEventListener('click',function (e){
            $(e.target).find('.search-outcoming-data').hide();
        })*/
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
form{
    label{
        font-size: $paragraph;
        color:$black;
        font-weight: bold;
    }
    input[type="submit"]{
        width:200px;
        border-radius: 20px;
    }
}
textarea{
    height: 80px;
    resize: none;
}
input[type="checkbox"]{
    width: 18px;
    height: 18px;
}
.toggle-checkbox-status{
    width:60px !important;
    height: 30px !important;
    background-color: #ccc;
}
.ar{
    input[type="checkbox"]{
        margin-left: 10px;
    }
}
.en{
    input[type="checkbox"]{
        margin-right: 10px;
    }
}
.search-outcoming-data{
    ul{
        border: 1px solid #eeeeee;
        li{
            padding: 10px;
            cursor: pointer;
        }
        li:not(:last-of-type){
            border-bottom: 1px solid #eeeeee;
        }
    }
}

@media (max-width: 992px) {
    .special_radio_container .special_radio input{
        width:180px;
    }
}

</style>

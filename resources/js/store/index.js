import Vuex from 'vuex'
import Vue from 'vue';
Vue.use(Vuex);

import register from "./modules/auth/register";
import login from "./modules/auth/login";
import personal_info from "./modules/profile/personal_info";
import notes from"./modules/profile/notes";
import areas from "./modules/areas";
import payment_ways from "./modules/payment_ways";
//------------------- start of  dashboard---------------------------
import categories_dash from "./modules/dashboard/categories";
import sub_categories_dash from "./modules/dashboard/sub_categories";
import questions_dash from "./modules/dashboard/questions";
import map_locations_dash from "./modules/dashboard/map_locations";
import packages_dash from "./modules/dashboard/packages";
import currencies_dash from "./modules/dashboard/currencies";
import listings_dash from "./modules/dashboard/listings";
import users_dash from "./modules/dashboard/users";
import support_dash from "./modules/dashboard/support"
import pointad_dash from "./modules/dashboard/poindad"
import settings_dash from "./modules/dashboard/settings";
import favourite from "./modules/users/favourite";
import show_seller_phone from "./modules/show_seller_phone";
import listing_statistics_count from "./modules/listings/listing_statistics_count";

import countries_govenrn_cities_areas from "./modules/map_data";
import notifications from "./modules/notifications";
import categories from "./modules/categories";
import listings from "./modules/listings/save_listings";
import listing_payment from "./modules/listings/payment_points";
import questions from "./modules/questions/get_questions";
import discussions_questions from "./modules/discussions/questions";
import answer_reactions from "./modules/discussions/answer_reactions";
import answer from "./modules/discussions/answer";
//------------------- end of  dashboard---------------------------
// Create a new store instance.
const store = new Vuex.Store({
    modules:{
        register,
        login,
        personal_info,
        notes,
        areas,
        payment_ways,
        discussions_questions,
        favourite,
        show_seller_phone,
        listing_statistics_count,
        answer_reactions,
        answer,
        // dashboard modules
        categories_dash,
        sub_categories_dash,
        questions_dash,
        map_locations_dash,
        packages_dash,
        currencies_dash,
        listings_dash,
        users_dash,
        support_dash,
        pointad_dash,
        settings_dash,
        // end dashboard modules
        countries_govenrn_cities_areas,
        notifications,
        categories,
        listings,
        questions,
        listing_payment
    }
})

export {store};

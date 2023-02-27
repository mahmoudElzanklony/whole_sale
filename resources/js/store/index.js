import Vuex from 'vuex'
import Vue from 'vue';
Vue.use(Vuex);

import register from "./modules/auth/register";
import login from "./modules/auth/login";
import send_email from "./modules/auth/sendmail";
import reset_password from "./modules/auth/reset_password";
import personal_info from "./modules/profile/personal_info";
import send_qutoation from "./modules/profile/send_qutoation";
import areas from "./modules/areas";
import brands from "./modules/brands/brands";

import save_quotation_at_draft from "./modules/quotations/save_quotation_at_draft";
//------------------- start of  dashboard---------------------------
import categories_dash from "./modules/dashboard/categories";
import offers_dash from "./modules/dashboard/offers";
import brands_dash from "./modules/dashboard/brands";
import countries_dash from "./modules/dashboard/countries";
import upload_files from "./modules/dashboard/upload_files";

import users_dash from "./modules/dashboard/users";
import support_dash from "./modules/dashboard/support"
import settings_dash from "./modules/dashboard/settings";
import favourite from "./modules/users/favourite";

import notifications from "./modules/notifications";
import categories from "./modules/categories";


import quotations_dash from "./modules/dashboard/quotations";
import privillages from "./modules/dashboard/privillages";
import common_questions from "./modules/dashboard/common_questions";
//------------------- end of  dashboard---------------------------
// Create a new store instance.
const store = new Vuex.Store({
    modules:{
        register,
        login,
        reset_password,
        send_email,
        personal_info,
        send_qutoation,
        areas,
        favourite,
        brands,
        save_quotation_at_draft,

        // dashboard modules
        categories_dash,
        offers_dash,
        brands_dash,
        upload_files,
        users_dash,
        support_dash,
        settings_dash,
        quotations_dash,
        privillages,
        common_questions,
        countries_dash,
        // end dashboard modules
        notifications,
        categories,
    }
})

export {store};

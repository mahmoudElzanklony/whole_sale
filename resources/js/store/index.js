import Vuex from 'vuex'
import Vue from 'vue';
Vue.use(Vuex);

import register from "./modules/auth/register";
import login from "./modules/auth/login";
import personal_info from "./modules/profile/personal_info";
import send_qutoation from "./modules/profile/send_qutoation";
import areas from "./modules/areas";
import brands from "./modules/brands/brands";
import save_quotation_at_draft from "./modules/quotations/save_quotation_at_draft";
//------------------- start of  dashboard---------------------------
import categories_dash from "./modules/dashboard/categories";
import brands_dash from "./modules/dashboard/brands";
import upload_files from "./modules/dashboard/upload_files";

import users_dash from "./modules/dashboard/users";
import support_dash from "./modules/dashboard/support"
import settings_dash from "./modules/dashboard/settings";
import favourite from "./modules/users/favourite";

import notifications from "./modules/notifications";
import categories from "./modules/categories";


import quotations_dash from "./modules/dashboard/quotations";
//------------------- end of  dashboard---------------------------
// Create a new store instance.
const store = new Vuex.Store({
    modules:{
        register,
        login,
        personal_info,
        send_qutoation,
        areas,
        favourite,
        brands,
        save_quotation_at_draft,

        // dashboard modules
        categories_dash,
        brands_dash,
        upload_files,
        users_dash,
        support_dash,
        settings_dash,
        quotations_dash,
        // end dashboard modules
        notifications,
        categories,
    }
})

export {store};

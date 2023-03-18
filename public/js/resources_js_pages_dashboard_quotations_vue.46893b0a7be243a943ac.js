(self["webpackChunkphpsocket"] = self["webpackChunkphpsocket"] || []).push([["resources_js_pages_dashboard_quotations_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SideNavbarComponent",
  mixins: [_mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__.default],
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    'get_privillages_pages': 'privillages/get_data'
  })),
  mounted: function mounted() {
    var active_li = document.URL.split('/')[document.URL.split('/').length - 1];
    $('ul').find('li[custom="' + active_li + '"]').addClass('active');
    this.get_privillages();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)({
    'get_privillages': 'privillages/get_privillages'
  })), {}, {
    toggleSideNav: function toggleSideNav() {
      $(event.target).parent().parent().toggleClass('icons_only');

      if ($(event.target).parent().parent().hasClass('icons_only')) {
        $('.dashboard .content').css('width', $(document).innerWidth() - 50);
      } else {
        $('.dashboard .content').css('width', $(document).innerWidth() - 200);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SwitchLangWord",
  data: function data() {
    return {
      words: {
        // navbar words
        Home: {
          ar: 'الرئيسية',
          en: 'Home',
          tu: ''
        },
        Profile: {
          ar: 'الملف الشخصي',
          en: 'profile',
          tu: ''
        },
        Search: {
          ar: 'أبحث',
          en: 'Search',
          tu: ''
        },
        part_number_of_part_name: {
          ar: 'رقم القطعة او اسم القطعة',
          en: 'part number of part name',
          tu: ''
        },
        Arabic_Language: {
          ar: 'Arabic',
          en: 'عربي',
          tu: ''
        },
        English_Language: {
          ar: 'English',
          en: 'انجليزي',
          tu: ''
        },
        Turkish_Language: {
          ar: 'اللغة التركية',
          en: 'Turkish Language',
          tu: ''
        },
        Help: {
          ar: 'مساعدة',
          en: 'Help',
          tu: ''
        },
        sign_in: {
          ar: 'تسجيل دخول',
          en: 'Sign in',
          tu: ''
        },
        sign_up: {
          ar: 'تسجيل حساب',
          en: 'Sign up',
          tu: ''
        },
        logout: {
          ar: 'تسجيل خروج',
          en: 'logout',
          tu: ''
        },
        registered_from_date: {
          ar: 'سجل منذ تاريخ ',
          en: 'registered from date ',
          tu: ''
        },
        activities: {
          ar: 'نشاطاتي',
          en: 'my activities',
          tu: ''
        },
        add_ad: {
          ar: 'تستطيع تصفح كل ما يخص قطع غيار السيارات وشراء ما تريد و اضافته الي المفضلة و اكثر ...',
          en: 'You can browse everything related to auto parts, buy what you want, add it to your favorites, and more...',
          tu: ''
        },
        my_offers: {
          ar: 'عروضي',
          en: 'my_offers',
          tu: ''
        },
        offers: {
          ar: 'عروض',
          en: 'offers',
          tu: ''
        },
        get_best_offers: {
          ar: 'احصل على أفضل عروض برنداتك المفضلة  من مكان واحد ، فقط لعملاء مكينة جملة',
          en: 'Get deals from your favorite brands, all at one place only for mkena wholesale customers',
          tu: ''
        },
        // footer words
        website: {
          ar: 'مكينة جملة',
          en: 'Mkena wholesale',
          tu: ''
        },
        footer_info: {
          ar: 'نوفر افضل قطع الغيار بأفضل الاسعار يصلك في اي مكان تريده داخل و خارج المملكة العربية السعودية',
          en: 'We provide the best spare parts at the best prices, delivered to you anywhere you want inside and outside the Kingdom of Saudi Arabia',
          tu: ''
        },
        jobs: {
          ar: 'وظائف',
          en: 'Jobs',
          tu: ''
        },
        common_questions: {
          ar: 'الاسئلة الشائعة',
          en: 'Common questions',
          tu: ''
        },
        contact_us: {
          ar: 'تواصل معنا',
          en: 'ContactUs',
          tu: ''
        },
        site_map: {
          ar: 'خريطة الموقع',
          en: 'Sitemap',
          tu: ''
        },
        conditions: {
          ar: 'الاحكام',
          en: 'Terms',
          tu: ''
        },
        searches: {
          ar: 'أبحاث',
          en: 'Market Research',
          tu: ''
        },
        big_photo_upload: {
          ar: 'مساحه الصوره المرفوعه اكبر من 2 ميجا',
          en: 'size of photo uploaded is more than 2 mega',
          tu: ''
        },
        upload_good_image: {
          ar: 'ارفع صورة صحيحة',
          en: 'Upload good image',
          tu: ''
        },
        big_photo_upload_error_preview: {
          ar: 'لن نستطع من عرض الصور التي مساحتها اكبر من 2 ميجا',
          en: 'we cant preview photo uploaded that size is more than 2 mega',
          tu: ''
        },
        you_exceed_number_of_uploaded: {
          ar: 'لقد تجاوزت عدد الصور المسموح به للرفع',
          en: 'you exceed number of photos uploaded',
          tu: ''
        },
        added_to_fav: {
          ar: 'تم الأضافه الي المفضلة بنجاح',
          en: 'added to favourite successfully',
          tu: ''
        },
        removed_from_fav: {
          ar: 'تمت الأزالة من المفضلة بنجاح',
          en: 'removed from favourite successfully',
          tu: ''
        },
        do_you_need_help: {
          ar: 'هل تحتاج الي مساعده',
          en: 'Do you need help',
          tu: ''
        },
        registered_at_date: {
          ar: 'سجل في تاريخ',
          en: 'Registered at date',
          tu: ''
        },
        request_contact: {
          ar: 'طلب اتصال',
          en: 'Request contact',
          tu: ''
        },
        personal_info: {
          ar: 'حسابي',
          en: 'My Account',
          tu: ''
        },
        select_status: {
          ar: 'اختر الحالة',
          en: 'Select Status',
          tu: ''
        },
        live_listings: {
          ar: 'نشطة',
          en: 'Live',
          tu: ''
        },
        rejected_listings: {
          ar: 'مرفوضة',
          en: 'Rejected',
          tu: ''
        },
        expired_listings: {
          ar: 'منتهية',
          en: 'Expired',
          tu: ''
        },
        pending_listings: {
          ar: 'معلقة',
          en: 'Pending',
          tu: ''
        },
        payment_done: {
          ar: 'تم الدفع',
          en: 'payment done',
          tu: ''
        },
        pending: {
          ar: 'معلقة',
          en: 'pending',
          tu: ''
        },
        statistics: {
          ar: 'احصائياتي',
          en: 'Statistics',
          tu: ''
        },
        my_favourite: {
          ar: 'المفضلة',
          en: 'Favourite',
          tu: ''
        },
        my_orders: {
          ar: 'مشترياتي',
          en: 'Orders',
          tu: ''
        },
        last_quotations: {
          ar: 'طلباتي السابقة',
          en: 'Last quotations',
          tu: ''
        },
        my_sales: {
          ar: 'مبيعاتي',
          en: 'Sales',
          tu: ''
        },
        quotations: {
          ar: 'طلب تسعير جديد',
          en: 'new quotation',
          tu: ''
        },
        vendor_pricing: {
          ar: 'ملفات التسعير',
          en: 'vendor pricing',
          tu: ''
        },
        my_notes: {
          ar: 'ملاحظاتي',
          en: 'My Notes',
          tu: ''
        },
        notifications: {
          ar: 'الأشعارات',
          en: 'notifications',
          tu: ''
        },
        settings: {
          ar: 'الاعدادت',
          en: 'settings',
          tu: ''
        },
        personalinfo: {
          ar: 'بيانتي الشخصية',
          en: 'Personal Info',
          tu: ''
        },
        added_to_fav_successfully: {
          ar: 'تم الأضافة الي المفضلة بنجاح',
          en: 'added to favourite successfully',
          tu: ''
        },
        removed_from_fav_successfully: {
          ar: 'تمت الأزالة من المفضلة بنجاح',
          en: 'removed from favourite successfully',
          tu: ''
        },
        about_us: {
          ar: 'عن المنصة',
          en: 'who us',
          tu: ''
        },
        please_contact_with_this_number: {
          ar: 'برجاء التواصل مع الرقم',
          en: 'please contact with this number',
          tu: ''
        },
        contact_with_us: {
          ar: 'يمكنك التواصل معنا هنا',
          en: 'you can contact with us',
          tu: ''
        },
        sale: {
          ar: 'بيع',
          en: 'Sale'
        },
        share_this_link: {
          ar: 'مشاركة هذا الرابط',
          en: 'Share this link',
          tu: ''
        },
        close: {
          ar: 'اغلاق',
          en: 'Close',
          tu: ''
        },
        // dashboard words
        dashboard: {
          ar: 'الاداره',
          en: 'Dashboard'
        },
        users: {
          ar: 'المستخدمين',
          en: 'Users',
          tu: ''
        },
        chart: {
          ar: 'الإحصائيات',
          en: 'Chart',
          tu: ''
        },
        orders: {
          ar: 'الطلبات',
          en: 'Orders',
          tu: ''
        },
        sales: {
          ar: 'المبيعات',
          en: 'Sales',
          tu: ''
        },
        brands: {
          ar: 'الأنواع',
          en: 'brands',
          tu: ''
        },
        products: {
          ar: 'المنتجات',
          en: 'Products',
          tu: ''
        },
        countries: {
          ar: 'الدول',
          en: 'Countries'
        },
        governments: {
          ar: 'المحافظات',
          en: 'Governments'
        },
        cities: {
          ar: 'المدن',
          en: 'Cities'
        },
        areas: {
          ar: 'المناطق',
          en: 'Areas'
        },
        reports: {
          ar: 'التقارير',
          en: 'Reports',
          tu: ''
        },
        client_support: {
          ar: 'الدعم الفني',
          en: 'client support',
          tu: ''
        },
        timer: {
          ar: 'ظبط المواعيد',
          en: 'Timer',
          tu: ''
        },
        see_statics: {
          ar: 'رؤيه الاحصائيات',
          en: 'See Statics',
          tu: ''
        },
        see_details: {
          ar: 'عرض التفاصيل',
          en: 'See Details',
          tu: ''
        },
        are_you_sure_about_approve: {
          ar: 'هل انت متأكد من عملية الموافقة',
          en: 'Are you sure from approving this request',
          tu: ''
        },
        are_you_sure_about_delete: {
          ar: 'هل انت متأكد من عملية المسح',
          en: 'Are you sure from delete operation',
          tu: ''
        },
        in_case_you_approved_listing_will_be_at_public: {
          ar: 'في حالة الموافقة علي الطلب سيصبح هذا الطلب متاح يستطيع اي شخص رؤيتة',
          en: 'In case you approved this request , the request will be available to any one to see it',
          tu: ''
        },
        in_case_you_delete_you_cant_retrieve_it: {
          ar: 'في حالة الموافقة علي طلب المسح لن تستطيع استرجاع البيانات مرة اخري',
          en: 'In case you delete you cant retrieve data another time',
          tu: ''
        },
        yes_iam_sure: {
          ar: 'نعم انا متأكد',
          en: 'yes iam sure',
          tu: ''
        },
        cancel: {
          ar: 'إلغاء',
          en: 'Cancel',
          tu: ''
        },
        approved_done: {
          ar: 'تمت الموافقة',
          en: 'Approved !',
          tu: ''
        },
        deleted_done: {
          ar: 'تم المسح',
          en: 'Deleted !',
          tu: ''
        },
        approved_done_successfully: {
          ar: 'تمت عملية الموافقة بنجاح',
          en: 'Approved done successfully',
          tu: ''
        },
        deleted_done_successfully: {
          ar: 'تمت عملية المسح بنجاح',
          en: 'Deleted done successfully',
          tu: ''
        },
        add_new_item: {
          ar: 'إضافة عنصر جديد',
          en: 'Add new Item',
          tu: ''
        },
        update_new_item: {
          ar: 'تعديل بيانات ',
          en: 'update info of',
          tu: ''
        },
        delete_item: {
          ar: 'مسح',
          en: 'delete',
          tu: ''
        },
        cancel_request: {
          ar: 'الغاء الطلب',
          en: 'Cancel request',
          tu: ''
        },
        upload_image: {
          ar: 'أرفع صورة',
          en: 'upload image',
          tu: ''
        },
        upload_files: {
          ar: 'رفع الملفات',
          en: 'upload files',
          tu: ''
        },
        upload_quotation_file: {
          ar: 'ارفع ملف التسعيره',
          en: 'upload quotation file',
          tu: ''
        },
        upload_product_file: {
          ar: 'ارفع ملف اضافه المنتجات',
          en: 'upload file of upload products',
          tu: ''
        },
        upload_images: {
          ar: 'أرفع الصور',
          en: 'upload images',
          tu: ''
        },
        appearance: {
          ar: 'عملية الظهور',
          en: 'appearance',
          tu: ''
        },
        actions: {
          ar: 'الأوامر',
          en: 'actions',
          tu: ''
        },
        update_status_successfully: {
          ar: 'تم تحديث الحالة بنجاح',
          en: 'Status updated Successfully',
          tu: ''
        },
        select_year: {
          ar: 'أختر السنة',
          en: 'Select year',
          tu: ''
        },
        area: {
          ar: 'منطقة',
          en: 'Area',
          tu: ''
        },
        city: {
          ar: 'مدينة',
          en: 'City',
          tu: ''
        },
        government: {
          ar: 'محافظة',
          en: 'Government',
          tu: ''
        },
        country: {
          ar: 'دولة',
          en: 'Country',
          tu: ''
        },
        select_country: {
          ar: 'اختر الدولة',
          en: 'Select country',
          tu: ''
        },
        select_government: {
          ar: 'اختر المحافظة',
          en: 'Select government',
          tu: ''
        },
        select_city: {
          ar: 'اختر المدينة',
          en: 'Select city',
          tu: ''
        },
        select_area: {
          ar: 'اختر المنطقة',
          en: 'Select area',
          tu: ''
        },
        visible: {
          ar: 'متاح',
          en: 'visible',
          tu: ''
        },
        not_visible: {
          ar: 'غير متاح',
          en: 'not visible',
          tu: ''
        },
        save: {
          ar: 'ارسال',
          en: 'Send',
          tu: ''
        },
        send: {
          ar: 'ارسال',
          en: 'Send',
          tu: ''
        },
        name: {
          ar: 'الأسم',
          en: 'Name',
          tu: ''
        },
        add_new_question: {
          ar: 'أضف سؤال جديد',
          en: 'Add new question',
          tu: ''
        },
        filter: {
          ar: 'فلترة',
          en: 'Filter',
          tu: ''
        },
        related_to: {
          ar: 'تابعة ل',
          en: 'Related to',
          tu: ''
        },
        block: {
          ar: 'محظور',
          en: 'Block',
          tu: ''
        },
        auto_publish: {
          ar: 'النشر التلقائي',
          en: 'Auto Publish',
          tu: ''
        },
        yes: {
          ar: 'نعم',
          en: 'Yes',
          tu: ''
        },
        no: {
          ar: 'لا',
          en: 'No',
          tu: ''
        },
        leave_password: {
          ar: 'أترك كلمة المرور فارغة في حالة عدم رغبتك في التعديل عليها',
          en: '',
          tu: ''
        },
        press_here: {
          ar: 'أضغط هنا',
          en: 'Press Here',
          tu: ''
        },
        press_here_to_preview_bill: {
          ar: 'اضغط هنا لعرض الايصال',
          en: 'press here to preview bill'
        },
        select_best_choice: {
          ar: 'أختر من القائمة',
          en: 'please select',
          tu: ''
        },
        search_for_you_best: {
          ar: 'ابحث عن ما يناسبك',
          en: 'search about anything',
          tu: ''
        },
        "in": {
          ar: 'في',
          en: 'in',
          tu: ''
        },
        "for": {
          ar: 'ل',
          en: 'for ',
          tu: ''
        },
        currency: {
          ar: 'دولار',
          en: 'dollar',
          tu: ''
        },
        you_should_login: {
          ar: 'من فضلك سجل دخول اولا',
          en: 'You should login first',
          tu: ''
        },
        register_as_seller: {
          ar: 'سجل  كمورد',
          en: 'Register as supplier',
          tu: ''
        },
        seller_phone: {
          ar: 'رقم تليفون البائع',
          en: 'Phone Seller',
          tu: ''
        },
        next: {
          ar: 'التالي',
          en: 'next',
          tu: ''
        },
        prev: {
          ar: 'السابق',
          en: 'previous',
          tu: ''
        },
        select_best_for_you: {
          ar: 'اختر ما يناسبك',
          en: 'Select what you want',
          tu: ''
        },
        add_another_item: {
          ar: 'اضافه عنصر جديد',
          en: 'Add another item',
          tu: ''
        },
        please_enter_all_required_data: {
          ar: 'من فضلك ادخل قيم للبيانات الاجبارية',
          en: 'Please enter all required inputs',
          tu: ''
        },
        part_slabs_should_be_unit_of_packing: {
          ar: 'لابد ان تكون اقل كميات لوضع لها اسعار معينه هي مضاعفات وحدات التعبئه مثل ',
          en: 'quantities that related to prices should be multiplayer of unit of packing like ',
          tu: ''
        },
        print_bill: {
          ar: 'طباعه الفاتورة',
          en: 'Print bill',
          tu: ''
        },
        share: {
          ar: 'اعاده توجيه للموردين',
          en: 'send to vendors',
          tu: ''
        },
        please_wait_until_finish_processing: {
          ar: 'من فضلك انتظر حتي يتم اكتمال التحميل',
          en: 'please wait until finish processing',
          tu: ''
        },
        order_confirmed: {
          ar: 'تم انهاء الطلب بنجاح',
          en: 'order has been done successfully',
          tu: ''
        },
        all: {
          ar: 'الجميع',
          en: 'All',
          tu: ''
        },
        sent_to_admin: {
          ar: 'تم الارسال للادراة',
          en: 'has been sent to admin',
          tu: ''
        },
        vendors_reply: {
          ar: 'تم الرد من الموردين',
          en: 'vendors reply',
          tu: ''
        },
        see_edits: {
          ar: 'رؤيه سجل التعديلات',
          en: 'See old update',
          tu: ''
        },
        no_edits_history: {
          ar: 'لا يوجد سجل تعديلات',
          en: 'no update history'
        },
        agree_request: {
          ar: 'الموافقه علي الطلب',
          en: 'agree request',
          tu: ''
        },
        sent_agreement: {
          ar: 'تم ارسال الموافقة',
          en: 'agreement sent',
          tu: ''
        },
        parts_from: {
          ar: 'قطع من ',
          en: 'Parts from ',
          tu: ''
        },
        basic_value: {
          ar: 'القيمة الاساسية',
          en: 'Basic value',
          tu: ''
        },
        export_selected: {
          ar: 'الحصول علي ملف اكسل',
          en: 'Get an excel file',
          tu: ''
        },
        please_select_rows_to_export: {
          ar: 'من فضلك اختر الصفوف المناسبة لعملية الاستيراد',
          en: 'please select rows to export operation',
          tu: ''
        },
        unit_price: {
          ar: 'سعر الوحدة',
          en: 'Unit price',
          tu: ''
        },
        tax_percentage: {
          ar: 'ضريبه القيمه المضافه (15%)',
          en: 'tax percentage is 15% '
        },
        tax_number: {
          ar: 'الرقم الضريبي',
          en: 'VAT number'
        },
        receipt_photo: {
          ar: 'صورة الايصال',
          en: 'Receipt photo',
          tu: ''
        },
        upload_excel: {
          ar: 'رفع ملف الاكسل',
          en: 'upload excel file',
          tu: ''
        },
        bank_document: {
          ar: 'وثيقة  البنك',
          en: 'Bank Document',
          tu: ''
        },
        active_email: {
          ar: 'لابد عليك من تفعيل الحساب الخاص بك من خلال رسالة البريد الالكتروني التي استلمتها خلال عمليه تسجيل مستخدم جديد',
          en: 'You must activate your account through the email you received during the new user registration process'
        },
        send_verfication: {
          ar: 'اعادة ارسال تفعيل الحساب مره اخري',
          en: 'send activation again',
          tu: ''
        },
        download_file: {
          ar: 'تحميل الملف',
          en: 'Download file',
          tu: ''
        },
        not_reply_yet: {
          ar: 'لم يتم الرد بعد',
          en: 'Not reply yet',
          tu: ''
        },
        newest_clients_requests: {
          ar: 'أحدث طلبات العملاء',
          en: 'Newest clients requests',
          tu: ''
        },
        in_progress: {
          ar: 'قيد التنفيذ',
          en: 'In progress'
        },
        supervisor: {
          ar: 'مشرف',
          en: 'Supervisor'
        },
        buyer: {
          ar: 'مشتري',
          en: 'Buyer'
        },
        seller: {
          ar: 'بائع',
          en: 'Seller'
        },
        visit_mkena: {
          ar: 'موقع مكينة للتجزئة',
          en: 'mkena retail'
        },
        error_in_price: {
          ar: 'هناك خطأ في تحديد السعر حيث انك قمت بطلب كميه اقل من الحد المسموح له',
          en: 'There is an error in determining the price as you have ordered less than the allowable amount'
        },
        edit_my_quantity: {
          ar: 'تعديل الكمية الخاصه بي',
          en: 'update my quantity'
        },
        there_are_error_at_quantity_of_part_numbers: {
          ar: 'هناك خطأ في الكمية التي طلبتها حيث انها اقل من الحد الادني المسموح به لدي القطع الاتيه ',
          en: 'There is an error in the quantity you ordered as it is less than the minimum allowed for the following part numbers '
        },
        initial_bill: {
          ar: 'فاتورة مبندئية',
          en: 'proforma invoice'
        }
      }
    };
  },
  methods: {
    switchWord: function switchWord(word) {
      // find word first
      if (Object.keys(this.words).includes(word)) {
        // yes found it  =======> you passed english
        if (this.$inertia.page.props.lang == "tu") {
          return this.words[word]['en'];
        } else {
          return this.words[word][this.$inertia.page.props.lang];
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "delete_item",
  methods: {
    delete_item: function delete_item(table, id) {
      var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var closeall = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var url = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (window.vm.$inertia.page.props.lang == 'ar') {
        var msg = 'هل أنت متأكد من عملية المسح';
        var confirm = 'نعم أنا متأكد';
        var cancel = 'إلغاء';
      } else {
        var msg = 'are you sure from delete operation';
        var confirm = 'yes';
        var cancel = 'cancel';
      }

      Swal.fire({
        title: msg,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#035397',
        cancelButtonColor: '#aaa',
        confirmButtonText: confirm,
        cancelButtonText: cancel
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post('/deleteitem', {
            table: table,
            id: id
          }).then(function (e) {
            /*if(table == 'listings_infos'){
                $(target).parent().parent().parent().parent().remove();
            }else {
                $(target).parent().parent().remove();
            }*/
            Toast.fire({
              icon: 'success',
              title: e.data.message[0]
            });

            if (closeall == true) {
              $('.modal').modal('hide');
            }

            if (url != false) {
              window.vm.$inertia.visit(url);
            }

            if (selector != '') {
              console.log($(selector));
              $(selector).remove();
            }
          });
        }
      });
    },
    cancel_request: function cancel_request(table, id) {
      var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var closeall = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var url = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (window.vm.$inertia.page.props.lang == 'ar') {
        var msg = 'هل أنت متأكد من عملية الغاء الطلب';
        var confirm = 'نعم أنا متأكد';
        var cancel = 'إلغاء';
      } else {
        var msg = 'are you sure from cancel request';
        var confirm = 'yes';
        var cancel = 'cancel';
      }

      Swal.fire({
        title: msg,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#035397',
        cancelButtonColor: '#aaa',
        confirmButtonText: confirm,
        cancelButtonText: cancel
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post('/quotations/cancel', {
            table: table,
            id: id
          }).then(function (e) {
            /*if(table == 'listings_infos'){
                $(target).parent().parent().parent().parent().remove();
            }else {
                $(target).parent().parent().remove();
            }*/
            Toast.fire({
              icon: 'success',
              title: e.data.message[0]
            });

            if (closeall == true) {
              $('.modal').modal('hide');
            }

            if (url != false) {
              window.vm.$inertia.visit(url);
            }

            if (selector != '') {
              console.log($(selector));
              $(selector).remove();
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/detect_right_part_number.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/detect_right_part_number.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "detect_right_part_number",
  methods: {
    detect_supplied_part_name: function detect_supplied_part_name(part_number) {
      var el = this.admin_quotation.find(function (e) {
        return e['part_number'] == part_number;
      });

      if (el['supplied_part_number'] != null) {
        return el['supplied_part_number']['part_number'];
      } else {
        return el['part_number'];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/detect_row_for_export.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/detect_row_for_export.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "detect_row_for_export",
  methods: {
    detect_row_to_export: function detect_row_to_export() {
      if ($(event.target).is(":checked")) {
        event.target.parentElement.parentElement.classList.add('selected');
      } else {
        event.target.parentElement.parentElement.classList.remove('selected');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableData.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableData.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "tableData",
  mounted: function mounted() {
    if (this.$inertia.page.props.lang == 'ar') {
      var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json';
      var export_selected = 'الحصول علي ملف بصيغة اكسل';
    } else {
      var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json';
      var export_selected = 'get an excel file';
    }

    jQuery(document).ready(function ($) {
      var data_table = null;
      data_table = $('.myTable').DataTable({
        stateSave: true,
        "bDestroy": true,
        language: {
          url: url
        },
        dom: 'lBfrtip',
        buttons: ['copy', 'csv', 'excel', 'print', {
          extend: 'excel',
          text: export_selected,
          exportOptions: {
            columns: ':visible:not(.not-exported)',
            rows: '.selected'
          }
        }]
      });
      window.table_data = data_table;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableDataServer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableDataServer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "tableDataServer",
  data: function data() {
    return {
      tableObj: null
    };
  },
  mounted: function mounted() {
    var url_request = this.table_url;
    var table_requested = this.table_requested_table;
    var columns = this.table_columns;
    var this_component = this;

    if (this.$inertia.page.props.lang == 'ar') {
      var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json';
      var export_selected = 'الحصول علي ملف بصيغة اكسل';
    } else {
      var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json';
      var export_selected = 'get an excel file';
    }

    jQuery(document).ready(function ($) {
      var data_table = null;
      data_table = $('.myTableServer').DataTable({
        order: [[1, "desc"]],
        language: {
          url: url
        },
        searching: false,
        serverSide: true,
        ajax: function ajax(data, callback, settings) {
          // check if thead has searches
          var searches = new Object();

          if (document.querySelectorAll('thead tr td input').length > 0) {
            var _iterator = _createForOfIteratorHelper(document.querySelectorAll('thead tr td input')),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var input = _step.value;
                searches[input.name] = input.value;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          if ($('.last-quotations-filter form div:last-of-type div input').length > 0) {
            var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll('.last-quotations-filter form div:last-of-type div input')),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _input = _step2.value;
                searches[_input.name] = _input.value;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          axios.post(url_request + '?page=' + (Number(data_table.page.info().page) + 1), {
            length: data.length,
            table: table_requested,
            searches: searches
          }).then(function (e) {
            this_component.page_data = e.data.data;
            callback({
              recordsTotal: e.data.total,
              recordsFiltered: e.data.total,
              data: e.data.data
            });
          });
        },
        columns: columns,
        createdRow: function createdRow(row, data, dataIndex) {
          var class_name = '';

          if (data.hasOwnProperty('is_completed') && data.is_completed > 2) {
            class_name = 'active';
          }

          $(row).addClass(class_name).find('span[name="order"]').html(dataIndex + 1);
          $(row).find('td:last-of-type').addClass('actions');
        },
        dom: 'lBfrtip',
        buttons: ['copy', 'csv', 'excel', 'print', {
          extend: 'excel',
          text: export_selected,
          exportOptions: {
            columns: ':visible:not(.not-exported)',
            rows: '.selected'
          }
        }]
      });
      this_component.tableObj = data_table;
      window.table_data = data_table;
    });
  },
  methods: {
    get_obj_wanted: function get_obj_wanted(id) {
      return this.page_data.find(function (e) {
        return e['id'] == id;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/update_item.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/update_item.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "update_item",
  data: function data() {
    return {
      item: null
    };
  },
  methods: {
    update_item: function update_item(e) {
      this.item = e;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/quotations.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/quotations.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dashboard_SideNavbarComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dashboard/SideNavbarComponent */ "./resources/js/components/dashboard/SideNavbarComponent.vue");
/* harmony import */ var _mixin_tableData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixin/tableData */ "./resources/js/mixin/tableData.vue");
/* harmony import */ var _mixin_tableDataServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixin/tableDataServer */ "./resources/js/mixin/tableDataServer.vue");
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
/* harmony import */ var _mixin_delete_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixin/delete_item */ "./resources/js/mixin/delete_item.vue");
/* harmony import */ var _mixin_update_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixin/update_item */ "./resources/js/mixin/update_item.vue");
/* harmony import */ var _mixin_detect_row_for_export__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixin/detect_row_for_export */ "./resources/js/mixin/detect_row_for_export.vue");
/* harmony import */ var _mixin_detect_right_part_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixin/detect_right_part_number */ "./resources/js/mixin/detect_right_part_number.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "quotations",
  mixins: [_mixin_tableData__WEBPACK_IMPORTED_MODULE_2__.default, _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_4__.default, _mixin_update_item__WEBPACK_IMPORTED_MODULE_6__.default, _mixin_delete_item__WEBPACK_IMPORTED_MODULE_5__.default, _mixin_detect_row_for_export__WEBPACK_IMPORTED_MODULE_7__.default, _mixin_tableDataServer__WEBPACK_IMPORTED_MODULE_3__.default, _mixin_detect_right_part_number__WEBPACK_IMPORTED_MODULE_8__.default],
  props: ['main_title', 'handling_data', 'keywords'],
  data: function data() {
    return {
      modal_data: [],
      quotations_info: [],
      current_admin_quotation: null,
      table_url: '/paginate-data',
      table_requested_table: 'quotation_orders',
      table_columns: null,
      page_data: null,
      tax: this.tax_val
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)({
    'get_my_quotation': 'quotations_dash/get_data_quotations',
    'vuex_data': 'quotations_dash/get_data',
    'admin_quotation': 'quotations_dash/get_data_quotations_admin',
    'all_brands': 'brands/get_brands',
    'get_receipt': 'quotations_dash/get_receipt',
    'get_file_money': 'quotations_dash/get_file_money',
    'vendors_per_request': 'quotations_dash/get_vendors_per_request'
  })),
  mounted: function mounted() {
    var _this = this;

    var all_thead_tds = document.querySelectorAll('.myTableServer thead tr td:nth-of-type(2) p,.myTableServer thead tr td:nth-of-type(3) p,.myTableServer thead tr td:nth-of-type(4) p,.myTableServer thead tr td:nth-of-type(6) p');

    var _iterator = _createForOfIteratorHelper(all_thead_tds),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var input = _step.value;
        console.log(input);
        input.innerHTML = '<input class="form-control" name="' + input.parentElement.getAttribute('name') + '" placeholder="' + input.textContent.trim() + '">';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    setTimeout(function () {
      _this.inlize_data(_this.page_data);
    }, 2500);
  },
  created: function created() {
    this.update_qotation_data([]);
    var component = this;
    this.table_columns = [{
      "data": "id",
      "render": function render(data, type, row) {
        return '<input type="checkbox" @click="detect_row_to_export">';
      }
    }, {
      "data": "id"
    }, {
      "data": "id",
      "render": function render(data, type, row) {
        return row['user']['username'];
      }
    }, {
      "data": "id",
      "render": function render(data, type, row) {
        return row['user']['phone'];
      }
    }, {
      "data": "id",
      "render": function render(data, type, row) {
        return '<button class="client_request btn btn-outline-primary" el_id="' + row['id'] + '">' + component.switchWord('see_details') + '</button>';
      }
    }, {
      "data": "is_completed",
      "render": function render(data, type, row) {
        return row['is_completed'] == 0 ? component.switchWord('sent_to_admin') : row['is_completed'] == 1 ? component.keywords.reply_from_admin : row['is_completed'] == 11 ? component.switchWord('vendors_reply') : row['is_completed'] == 2 ? '<button el_id="' + row['id'] + '" class="confirm btn btn-outline-primary">' + component.keywords.click_here_to_finish_request + '</button>' : component.switchWord('order_confirmed');
      }
    }, {
      "data": "id",
      // get my quotation
      "render": function render(data, type, row) {
        return new Date(row['created_at']).toLocaleString();
      }
    }, {
      "data": "is_completed",
      "render": function render(data, type, row) {
        if (row['is_completed'] >= 1 && row['is_completed'] != 11) {
          return '<button class="admin_response btn btn-outline-primary" el_id="' + row['id'] + '" >' + component.switchWord('see_details') + '</button>';
        } else {
          return '';
        }
      }
    }, {
      "data": "id",
      "render": function render(data, type, row, option) {
        var output = '<span><i class="ri-upload-2-line" title="' + component.switchWord('upload_excel') + '"  el_id="' + row['id'] + '"></i> </span><span class="receipt accept" title="' + component.switchWord('receipt_photo') + '"  el_id="' + row['id'] + '"><i class="ri-file-paper-line"></i></span><span class="repositry_upload"  title="' + component.switchWord('bank_document') + '"  el_id="' + row['id'] + '"><i class="ri-money-dollar-box-line"></i></span>';

        if (row['is_completed'] == 3) {
          output += '<span class="print"  title="' + component.switchWord('print_bill') + '"  el_id="' + row['id'] + '"><i class="ri-printer-line"></i></span>';
        } // <i class="ri-share-forward-line"></i>


        output += '<span class="share"  title="' + component.switchWord('share') + '"  el_id="' + row['id'] + '"><i class="ri-share-forward-line"></i></span>'; // cancel request

        if (row['is_completed'] != 3) {
          output += '<span class="delete cancel_request" style="color:darkred;" title="' + component.switchWord('cancel_request') + '"  el_id="' + row['id'] + '"><i class="ri-delete-back-line"></i></span>';
        }

        output += '<span class="delete" title="' + component.switchWord('delete_item') + '"  el_id="' + row['id'] + '"><i class="ri-close-line"></i></span>';
        return output;
      }
    }]; // add events
    // export file

    $('.content').on('click', '.data table tbody tr td:first-of-type', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              component.detect_row_to_export();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))); // show details

    $('.content').on('click', '.data table tbody tr td button.client_request', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var item;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              item = component.get_obj_wanted($(this).attr('el_id'));
              _context2.next = 3;
              return component.get_data_of_quotation($(this).attr('el_id'));

            case 3:
              _context2.next = 5;
              return component.update_item(item);

            case 5:
              $('#my_quotations').modal('show');

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }))); // finish order

    $('.content').on('click', '.data table tbody tr td button.confirm', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var item;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              item = component.get_obj_wanted($(this).attr('el_id'));
              _context3.next = 3;
              return component.finish_order(item);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }))); // get admin file data reply

    $('.content').on('click', '.data table tbody tr td button.admin_response', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      var item;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log($(this));
              item = component.get_obj_wanted($(this).attr('el_id'));
              _context4.next = 4;
              return component.update_item(item);

            case 4:
              _context4.next = 6;
              return component.get_data_admin_of_quotation($(this).attr('el_id'));

            case 6:
              $('#admin_quotation_data').modal('show');

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }))); // agree request

    $('.content').on('click', '.data table tbody tr td.actions .receipt', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
      var item;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              item = component.get_obj_wanted($(this).attr('el_id')); //await component.send_agreement_to_admin(item);

              _context5.next = 3;
              return component.update_item(item);

            case 3:
              _context5.next = 5;
              return component.get_receipt_action(item);

            case 5:
              $('.modal#agree_quotation_and_upload_bill').modal('show');

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }))); // send quotations to vendors

    $('.content').on('click', '.data table tbody tr td.actions .share', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
      var item;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              item = component.get_obj_wanted($(this).attr('el_id')); //await component.send_agreement_to_admin(item);

              _context6.next = 3;
              return component.update_item(item);

            case 3:
              _context6.next = 5;
              return component.get_vendor_request(item);

            case 5:
              // await component.get_receipt_action(item);
              $('.modal#share_vendors').modal('show');

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }))); // get file money

    $('.content').on('click', '.data table tbody tr td.actions .repositry_upload', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
      var item;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              item = component.get_obj_wanted($(this).attr('el_id')); //await component.send_agreement_to_admin(item);

              _context7.next = 3;
              return component.update_item(item);

            case 3:
              _context7.next = 5;
              return component.get_money_file_action(item);

            case 5:
              $('.modal#update_file_money').modal('show');

            case 6:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }))); // print bill

    $('.content').on('click', '.data table tbody tr td.actions span.print', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
      var item;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              item = component.get_obj_wanted($(this).attr('el_id'));
              _context8.next = 3;
              return component.print_bill(item);

            case 3:
              _context8.next = 5;
              return component.update_item(item);

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }))); // upload excel file

    $('.content').on('click', '.data table tbody tr td:last-of-type span:first-of-type i', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
      var item;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              item = component.get_obj_wanted($(this).attr('el_id'));
              _context9.next = 3;
              return component.update_item(item);

            case 3:
              $('#upload_excel').modal('show');

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }))); // cancel request

    $('.content').on('click', '.data table tbody tr td:last-of-type span.cancel_request', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
      var item;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              item = component.get_obj_wanted($(this).attr('el_id'));
              _context10.next = 3;
              return component.cancel_request('quotation_orders', $(this).attr('el_id'), $(this).parent().parent());

            case 3:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }))); // delete

    $('.content').on('click', '.data table tbody tr td:last-of-type span:last-of-type', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11() {
      var item;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              item = component.get_obj_wanted($(this).attr('el_id'));
              _context11.next = 3;
              return component.delete_item('quotation_orders', $(this).attr('el_id'), $(this).parent().parent());

            case 3:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    })));
  },
  methods: _objectSpread(_objectSpread({
    change_file: function change_file() {
      event.target.nextElementSibling.innerHTML = event.target.files[0].name;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapActions)({
    'get_info_about_quotation': 'quotations_dash/get_info_about_quotation',
    'get_info_about_quotation_admin': 'quotations_dash/get_info_about_quotation_reply_admin',
    // get brands
    'get_all_brands': 'brands/get_brands',
    'update_quotation_at_draft': 'quotations_dash/save_quotation_at_draft',
    'send_excel': 'quotations_dash/upload_file',
    'finish_order': 'quotations_dash/finish_order',
    'get_receipt_action': 'quotations_dash/get_receipt_action',
    'get_money_file_action': 'quotations_dash/get_money_file_action',
    'get_info_to_print_bill': 'quotations_dash/get_info_to_print_bill',
    'send_agreement_to_admin': 'quotations_dash/send_agreement_to_admin',
    'send_file_money_to_admin': 'quotations_dash/send_file_money_to_admin',
    'get_vendor_request': 'quotations_dash/get_vendor_request',
    'add_vendor_per_request': 'quotations_dash/add_vendor'
  })), {}, {
    get_data_of_quotation: function get_data_of_quotation(id) {
      this.get_info_about_quotation(id);
    },
    get_data_admin_of_quotation: function get_data_admin_of_quotation(id) {
      this.get_info_about_quotation_admin(id);
    },
    update_sub_quotation: function update_sub_quotation(item) {
      this.sub_quotation = item;
    },
    detect_right_price: function detect_right_price(i) {
      var d = this.admin_quotation.find(function (e) {
        return e['part_number'] == (i['last_draft'] == null ? i['part_number'] : i['last_draft']['part_number']);
      });

      if (d != undefined) {
        d = d['prices'].find(function (p) {
          return (i['last_draft'] == null ? i['quantity'] : i['last_draft']['quantity']) >= p['min_quantity'];
        });
      }

      if (d == undefined) {
        return this.switchWord('error_in_price');
      } else {
        return d['price'];
      }
    },
    print_bill: function () {
      var _print_bill = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12(i) {
        var total, _iterator2, _step2, price;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.item = i;
                _context12.next = 3;
                return this.get_info_to_print_bill(i['id']);

              case 3:
                $('#print_box').modal('show');
                total = 0;
                _iterator2 = _createForOfIteratorHelper($('#print_box table tr:not(:first-of-type,:last-of-type,.tax_row) td:last-of-type'));

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    price = _step2.value;
                    total += Number($(price).html());
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                $('#print_box table tr.tax td:last-of-type').html(total * this.item.tax / 100);
                total += total * this.item.tax / 100;
                $('#print_box table tr:last-of-type td:last-of-type').html(total);

              case 10:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function print_bill(_x) {
        return _print_bill.apply(this, arguments);
      }

      return print_bill;
    }(),
    printOrder: function printOrder() {
      window.print();
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapMutations)({
    'inlize_data': 'quotations_dash/inilalize_data',
    'update_qotation_data': 'quotations_dash/update_qotation_data'
  })),
  components: {
    TableData: _mixin_tableData__WEBPACK_IMPORTED_MODULE_2__.default,
    SideNavbarComponent: _components_dashboard_SideNavbarComponent__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.swal2-container{\n    z-index: 99999999999999999999999999;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ar .orange_class[data-v-218a8ca0]:hover, .ar .side-bar-nav ul li[data-v-218a8ca0]:hover, .side-bar-nav ul .ar li[data-v-218a8ca0]:hover {\n  padding-right: 10px;\n}\n.ar .orange_class[data-v-218a8ca0]::before, .ar .side-bar-nav ul li[data-v-218a8ca0]::before, .side-bar-nav ul .ar li[data-v-218a8ca0]::before {\n  left: 0px;\n}\n.ar .side-bar-nav[data-v-218a8ca0] {\n  right: 0px;\n}\n.ar .side-bar-nav > span[data-v-218a8ca0] {\n  right: 5px;\n}\n.ar .side-bar-nav ul li a span[data-v-218a8ca0]:first-of-type {\n  margin-left: 10px;\n}\n.ar .side-bar-nav ul li.active[data-v-218a8ca0]::before {\n  left: 0px;\n}\n.en .orange_class[data-v-218a8ca0]:hover, .en .side-bar-nav ul li[data-v-218a8ca0]:hover, .side-bar-nav ul .en li[data-v-218a8ca0]:hover {\n  padding-left: 10px;\n}\n.en .orange_class[data-v-218a8ca0]::before, .en .side-bar-nav ul li[data-v-218a8ca0]::before, .side-bar-nav ul .en li[data-v-218a8ca0]::before {\n  right: 0px;\n}\n.en .side-bar-nav[data-v-218a8ca0] {\n  left: 0px;\n}\n.en .side-bar-nav > span[data-v-218a8ca0] {\n  left: 5px;\n}\n.en .side-bar-nav ul li a span[data-v-218a8ca0]:first-of-type {\n  margin-right: 10px;\n}\n.en .side-bar-nav ul li.active[data-v-218a8ca0]::before {\n  right: 0px;\n}\n.orange_class[data-v-218a8ca0]::before, .side-bar-nav ul li[data-v-218a8ca0]::before {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  transition: 0.5s all;\n  background-color: #035397;\n  width: 4px;\n}\n.orange_class[data-v-218a8ca0]:hover::before, .side-bar-nav ul li[data-v-218a8ca0]:hover::before {\n  height: 100%;\n}\n.orange_class:hover span[data-v-218a8ca0], .side-bar-nav ul li:hover span[data-v-218a8ca0] {\n  color: #035397;\n}\n.side-bar-nav[data-v-218a8ca0] {\n  transition: 0.5s all;\n  position: fixed;\n  background-color: #eeeeee38;\n  width: 200px;\n  height: 100%;\n  padding: 0px !important;\n}\n.side-bar-nav > span[data-v-218a8ca0] {\n  position: absolute;\n  top: 14px;\n  color: #03071E;\n}\n.side-bar-nav .logo img[data-v-218a8ca0] {\n  padding-top: 10px;\n  width: 115px;\n  display: block;\n  margin: auto;\n}\n.side-bar-nav ul[data-v-218a8ca0] {\n  padding-top: 50px;\n  height: calc(100% - 50px);\n  overflow: auto;\n}\n.side-bar-nav ul li[data-v-218a8ca0] {\n  transition: 0.5s all;\n  position: relative;\n}\n.side-bar-nav ul li a[data-v-218a8ca0] {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\n.side-bar-nav ul li a span[data-v-218a8ca0] {\n  color: #03071E;\n}\n.side-bar-nav ul li.active span[data-v-218a8ca0] {\n  color: #035397;\n}\n.side-bar-nav ul li.active[data-v-218a8ca0]::before {\n  content: \"\";\n  position: absolute;\n  transition: 0.5s all;\n  background-color: #035397;\n  width: 4px;\n  height: 100%;\n}\n.side-bar-nav ul li[data-v-218a8ca0]:not(:last-of-type) {\n  border-bottom: 1px solid #eeeeee;\n}\n.side-bar-nav.icons_only[data-v-218a8ca0] {\n  width: 50px;\n}\n.side-bar-nav.icons_only > span[data-v-218a8ca0] {\n  right: 10px;\n}\n.side-bar-nav.icons_only .logo img[data-v-218a8ca0] {\n  display: none;\n}\n.side-bar-nav.icons_only ul li a[data-v-218a8ca0] {\n  align-items: center;\n  justify-content: center;\n}\n.side-bar-nav.icons_only ul li a span[data-v-218a8ca0]:not(:first-of-type) {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/quotations.vue?vue&type=style&index=0&id=bcc89aaa&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/quotations.vue?vue&type=style&index=0&id=bcc89aaa&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".alert-danger[data-v-bcc89aaa] {\n  display: none;\n}\n#update_quotations .modal-dialog[data-v-bcc89aaa] {\n  width: 70%;\n  max-width: 900px;\n}\n.loading-img[data-v-bcc89aaa] {\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  text-align: center;\n  margin: auto;\n  display: none;\n  height: 380px;\n}\ntable tr td p[data-v-bcc89aaa] {\n  text-align: center;\n}\ntable tr td p button[data-v-bcc89aaa] {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: #035397;\n}\n#my_quotations .modal-dialog[data-v-bcc89aaa],\n#old_update .modal-dialog[data-v-bcc89aaa],\n#see_prices .modal-dialog[data-v-bcc89aaa],\n#admin_quotation_data .modal-dialog[data-v-bcc89aaa] {\n  max-width: 1100px;\n}\n#print_box > div[data-v-bcc89aaa] {\n  max-width: 900px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/dashboard/SideNavbarComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/dashboard/SideNavbarComponent.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true& */ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true&");
/* harmony import */ var _SideNavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNavbarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& */ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SideNavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "218a8ca0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/SideNavbarComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/mixin/SwitchLangWord.vue":
/*!***********************************************!*\
  !*** ./resources/js/mixin/SwitchLangWord.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true& */ "./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true&");
/* harmony import */ var _SwitchLangWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchLangWord.vue?vue&type=script&lang=js& */ "./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SwitchLangWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "62c21d50",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/mixin/SwitchLangWord.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/mixin/delete_item.vue":
/*!********************************************!*\
  !*** ./resources/js/mixin/delete_item.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _delete_item_vue_vue_type_template_id_5a5de98b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete_item.vue?vue&type=template&id=5a5de98b& */ "./resources/js/mixin/delete_item.vue?vue&type=template&id=5a5de98b&");
/* harmony import */ var _delete_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete_item.vue?vue&type=script&lang=js& */ "./resources/js/mixin/delete_item.vue?vue&type=script&lang=js&");
/* harmony import */ var _delete_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete_item.vue?vue&type=style&index=0&lang=css& */ "./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _delete_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _delete_item_vue_vue_type_template_id_5a5de98b___WEBPACK_IMPORTED_MODULE_0__.render,
  _delete_item_vue_vue_type_template_id_5a5de98b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/mixin/delete_item.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/mixin/detect_right_part_number.vue":
/*!*********************************************************!*\
  !*** ./resources/js/mixin/detect_right_part_number.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detect_right_part_number_vue_vue_type_template_id_1fe4fabc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detect_right_part_number.vue?vue&type=template&id=1fe4fabc&scoped=true& */ "./resources/js/mixin/detect_right_part_number.vue?vue&type=template&id=1fe4fabc&scoped=true&");
/* harmony import */ var _detect_right_part_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detect_right_part_number.vue?vue&type=script&lang=js& */ "./resources/js/mixin/detect_right_part_number.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _detect_right_part_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _detect_right_part_number_vue_vue_type_template_id_1fe4fabc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _detect_right_part_number_vue_vue_type_template_id_1fe4fabc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1fe4fabc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/mixin/detect_right_part_number.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/mixin/detect_row_for_export.vue":
/*!******************************************************!*\
  !*** ./resources/js/mixin/detect_row_for_export.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detect_row_for_export_vue_vue_type_template_id_79d1c3ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detect_row_for_export.vue?vue&type=template&id=79d1c3ef&scoped=true& */ "./resources/js/mixin/detect_row_for_export.vue?vue&type=template&id=79d1c3ef&scoped=true&");
/* harmony import */ var _detect_row_for_export_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detect_row_for_export.vue?vue&type=script&lang=js& */ "./resources/js/mixin/detect_row_for_export.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _detect_row_for_export_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _detect_row_for_export_vue_vue_type_template_id_79d1c3ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _detect_row_for_export_vue_vue_type_template_id_79d1c3ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "79d1c3ef",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/mixin/detect_row_for_export.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/mixin/tableData.vue":
/*!******************************************!*\
  !*** ./resources/js/mixin/tableData.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tableData_vue_vue_type_template_id_e3419908_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableData.vue?vue&type=template&id=e3419908&scoped=true& */ "./resources/js/mixin/tableData.vue?vue&type=template&id=e3419908&scoped=true&");
/* harmony import */ var _tableData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableData.vue?vue&type=script&lang=js& */ "./resources/js/mixin/tableData.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _tableData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _tableData_vue_vue_type_template_id_e3419908_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _tableData_vue_vue_type_template_id_e3419908_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e3419908",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/mixin/tableData.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/mixin/tableDataServer.vue":
/*!************************************************!*\
  !*** ./resources/js/mixin/tableDataServer.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tableDataServer_vue_vue_type_template_id_063eab42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableDataServer.vue?vue&type=template&id=063eab42&scoped=true& */ "./resources/js/mixin/tableDataServer.vue?vue&type=template&id=063eab42&scoped=true&");
/* harmony import */ var _tableDataServer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableDataServer.vue?vue&type=script&lang=js& */ "./resources/js/mixin/tableDataServer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _tableDataServer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _tableDataServer_vue_vue_type_template_id_063eab42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _tableDataServer_vue_vue_type_template_id_063eab42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "063eab42",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/mixin/tableDataServer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/mixin/update_item.vue":
/*!********************************************!*\
  !*** ./resources/js/mixin/update_item.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _update_item_vue_vue_type_template_id_7398d82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update_item.vue?vue&type=template&id=7398d82d&scoped=true& */ "./resources/js/mixin/update_item.vue?vue&type=template&id=7398d82d&scoped=true&");
/* harmony import */ var _update_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update_item.vue?vue&type=script&lang=js& */ "./resources/js/mixin/update_item.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _update_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _update_item_vue_vue_type_template_id_7398d82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _update_item_vue_vue_type_template_id_7398d82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7398d82d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/mixin/update_item.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboard/quotations.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/dashboard/quotations.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quotations_vue_vue_type_template_id_bcc89aaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotations.vue?vue&type=template&id=bcc89aaa&scoped=true& */ "./resources/js/pages/dashboard/quotations.vue?vue&type=template&id=bcc89aaa&scoped=true&");
/* harmony import */ var _quotations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotations.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboard/quotations.vue?vue&type=script&lang=js&");
/* harmony import */ var _quotations_vue_vue_type_style_index_0_id_bcc89aaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotations.vue?vue&type=style&index=0&id=bcc89aaa&lang=scss&scoped=true& */ "./resources/js/pages/dashboard/quotations.vue?vue&type=style&index=0&id=bcc89aaa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _quotations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _quotations_vue_vue_type_template_id_bcc89aaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _quotations_vue_vue_type_template_id_bcc89aaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bcc89aaa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboard/quotations.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNavbarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchLangWord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/mixin/delete_item.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/mixin/delete_item.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./delete_item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/mixin/detect_right_part_number.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/mixin/detect_right_part_number.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detect_right_part_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detect_right_part_number.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/detect_right_part_number.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detect_right_part_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/mixin/detect_row_for_export.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/mixin/detect_row_for_export.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detect_row_for_export_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detect_row_for_export.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/detect_row_for_export.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detect_row_for_export_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/mixin/tableData.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/mixin/tableData.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tableData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableData.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/mixin/tableDataServer.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/mixin/tableDataServer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableDataServer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tableDataServer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableDataServer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableDataServer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/mixin/update_item.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/mixin/update_item.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./update_item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/update_item.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/dashboard/quotations.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/dashboard/quotations.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quotations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./quotations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/quotations.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quotations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true&");


/***/ }),

/***/ "./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true&");


/***/ }),

/***/ "./resources/js/mixin/delete_item.vue?vue&type=template&id=5a5de98b&":
/*!***************************************************************************!*\
  !*** ./resources/js/mixin/delete_item.vue?vue&type=template&id=5a5de98b& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_template_id_5a5de98b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_template_id_5a5de98b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_template_id_5a5de98b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./delete_item.vue?vue&type=template&id=5a5de98b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=template&id=5a5de98b&");


/***/ }),

/***/ "./resources/js/mixin/detect_right_part_number.vue?vue&type=template&id=1fe4fabc&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/mixin/detect_right_part_number.vue?vue&type=template&id=1fe4fabc&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detect_right_part_number_vue_vue_type_template_id_1fe4fabc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detect_right_part_number_vue_vue_type_template_id_1fe4fabc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detect_right_part_number_vue_vue_type_template_id_1fe4fabc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detect_right_part_number.vue?vue&type=template&id=1fe4fabc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/detect_right_part_number.vue?vue&type=template&id=1fe4fabc&scoped=true&");


/***/ }),

/***/ "./resources/js/mixin/detect_row_for_export.vue?vue&type=template&id=79d1c3ef&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/mixin/detect_row_for_export.vue?vue&type=template&id=79d1c3ef&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detect_row_for_export_vue_vue_type_template_id_79d1c3ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detect_row_for_export_vue_vue_type_template_id_79d1c3ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detect_row_for_export_vue_vue_type_template_id_79d1c3ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detect_row_for_export.vue?vue&type=template&id=79d1c3ef&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/detect_row_for_export.vue?vue&type=template&id=79d1c3ef&scoped=true&");


/***/ }),

/***/ "./resources/js/mixin/tableData.vue?vue&type=template&id=e3419908&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/mixin/tableData.vue?vue&type=template&id=e3419908&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_template_id_e3419908_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_template_id_e3419908_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_template_id_e3419908_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tableData.vue?vue&type=template&id=e3419908&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableData.vue?vue&type=template&id=e3419908&scoped=true&");


/***/ }),

/***/ "./resources/js/mixin/tableDataServer.vue?vue&type=template&id=063eab42&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/mixin/tableDataServer.vue?vue&type=template&id=063eab42&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableDataServer_vue_vue_type_template_id_063eab42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableDataServer_vue_vue_type_template_id_063eab42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableDataServer_vue_vue_type_template_id_063eab42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tableDataServer.vue?vue&type=template&id=063eab42&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableDataServer.vue?vue&type=template&id=063eab42&scoped=true&");


/***/ }),

/***/ "./resources/js/mixin/update_item.vue?vue&type=template&id=7398d82d&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/mixin/update_item.vue?vue&type=template&id=7398d82d&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_item_vue_vue_type_template_id_7398d82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_item_vue_vue_type_template_id_7398d82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_item_vue_vue_type_template_id_7398d82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./update_item.vue?vue&type=template&id=7398d82d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/update_item.vue?vue&type=template&id=7398d82d&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/dashboard/quotations.vue?vue&type=template&id=bcc89aaa&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/quotations.vue?vue&type=template&id=bcc89aaa&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quotations_vue_vue_type_template_id_bcc89aaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quotations_vue_vue_type_template_id_bcc89aaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quotations_vue_vue_type_template_id_bcc89aaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./quotations.vue?vue&type=template&id=bcc89aaa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/quotations.vue?vue&type=template&id=bcc89aaa&scoped=true&");


/***/ }),

/***/ "./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./delete_item.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/pages/dashboard/quotations.vue?vue&type=style&index=0&id=bcc89aaa&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/quotations.vue?vue&type=style&index=0&id=bcc89aaa&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quotations_vue_vue_type_style_index_0_id_bcc89aaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./quotations.vue?vue&type=style&index=0&id=bcc89aaa&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/quotations.vue?vue&type=style&index=0&id=bcc89aaa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quotations_vue_vue_type_style_index_0_id_bcc89aaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quotations_vue_vue_type_style_index_0_id_bcc89aaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quotations_vue_vue_type_style_index_0_id_bcc89aaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quotations_vue_vue_type_style_index_0_id_bcc89aaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "side-bar-nav" }, [
    _c("span", { staticClass: "cursor-pointer" }, [
      _vm.$page.props.lang == "ar"
        ? _c("i", {
            staticClass: "ri-menu-3-line",
            on: { click: _vm.toggleSideNav },
          })
        : _c("i", {
            staticClass: "ri-menu-2-line",
            on: { click: _vm.toggleSideNav },
          }),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "logo" },
      [
        _c("inertia-link", { attrs: { href: "/" } }, [
          _c("img", { attrs: { src: "/images/logo.png" } }),
        ]),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "ul",
      _vm._l(_vm.get_privillages_pages, function (i, index) {
        return _c(
          "li",
          { attrs: { custom: i["privillage"]["en_name"] } },
          [
            _c(
              "inertia-link",
              {
                key: index,
                attrs: {
                  href:
                    "/dashboard/" +
                    i["privillage"]["en_name"]
                      .replace(" ", "-")
                      .toLocaleLowerCase(),
                },
              },
              [
                _c("span", [_c("i", { class: i["privillage"]["icon"] })]),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    _vm._s(
                      i["privillage"][_vm.$page.props.lang + "_name"].replace(
                        "-",
                        " "
                      )
                    )
                  ),
                ]),
                _vm._v(" "),
                _c("span"),
              ]
            ),
          ],
          1
        )
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=template&id=5a5de98b&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=template&id=5a5de98b& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/detect_right_part_number.vue?vue&type=template&id=1fe4fabc&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/detect_right_part_number.vue?vue&type=template&id=1fe4fabc&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/detect_row_for_export.vue?vue&type=template&id=79d1c3ef&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/detect_row_for_export.vue?vue&type=template&id=79d1c3ef&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableData.vue?vue&type=template&id=e3419908&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableData.vue?vue&type=template&id=e3419908&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableDataServer.vue?vue&type=template&id=063eab42&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableDataServer.vue?vue&type=template&id=063eab42&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/update_item.vue?vue&type=template&id=7398d82d&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/update_item.vue?vue&type=template&id=7398d82d&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/quotations.vue?vue&type=template&id=bcc89aaa&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/quotations.vue?vue&type=template&id=bcc89aaa&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "dashboard" },
    [
      _c("side-navbar-component"),
      _vm._v(" "),
      _c("div", { staticClass: "content users table-data-page" }, [
        _c("div", { staticClass: "container mb-4" }, [
          _c(
            "p",
            {
              staticClass:
                "d-flex mb-3 align-items-center justify-content-between main-title-toggle",
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.main_title))]),
              _vm._v(" "),
               false
                ? 0
                : _vm._e(),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "m-auto mb-3 filters last-quotations-filter" },
            [
              _c("form", [
                _c("p", [
                  _c("input", {
                    attrs: { type: "radio", name: "is_completed" },
                    domProps: { value: _vm.switchWord("sent_to_admin") },
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.switchWord("sent_to_admin")))]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("input", {
                    attrs: { type: "radio", name: "is_completed" },
                    domProps: { value: _vm.switchWord("vendors_reply") },
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.switchWord("vendors_reply")))]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("input", {
                    attrs: { type: "radio", name: "is_completed" },
                    domProps: { value: _vm.keywords.reply_from_admin },
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.keywords.reply_from_admin))]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("input", {
                    attrs: { type: "radio", name: "is_completed" },
                    domProps: { value: _vm.keywords.order_confirmed },
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.keywords.order_confirmed))]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("input", {
                    attrs: { type: "radio", name: "is_completed" },
                    domProps: { value: _vm.switchWord("order_confirmed") },
                  }),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(_vm._s(_vm.switchWord("order_confirmed"))),
                  ]),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "overflow-auto data" }, [
            _c(
              "table",
              {
                staticClass:
                  "myTableServer table text-center table-bordered table-striped table-hover",
              },
              [
                _c("thead", [
                  _c(
                    "tr",
                    [
                      _c("td"),
                      _vm._v(" "),
                      _vm._l(
                        _vm.handling_data["table_head_keys"],
                        function (i, index) {
                          return _c(
                            "td",
                            { key: index, attrs: { name: index } },
                            [
                              _c("p", { attrs: { name: index } }, [
                                _vm._v(_vm._s(i)),
                              ]),
                            ]
                          )
                        }
                      ),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _c("tbody"),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _vm.get_my_quotation != null
        ? _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "my_quotations",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
              },
            },
            [
              _c(
                "div",
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _c(
                        "h5",
                        {
                          staticClass: "modal-title",
                          attrs: { id: "my_quotations_box" },
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.switchWord("see_details")) +
                              "\n                        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(0),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "overflow-auto hide-buttons" }, [
                        _vm.item != null
                          ? _c(
                              "a",
                              {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  href:
                                    "/quotations/export-file?ids=" +
                                    _vm.item["id"],
                                  target: "_blank",
                                },
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.switchWord("export_selected")) +
                                    "\n                            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "table",
                          {
                            staticClass:
                              "myTable box-model-table table text-center table-bordered table-striped table-hover",
                          },
                          [
                            _c("thead", [
                              _c("tr", [
                                _c("td"),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.keywords.brand))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.keywords.part_no)),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.keywords.quantity)),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.keywords.actions)),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.get_my_quotation, function (i, index) {
                                return i["last_draft"].length == 0 ||
                                  (i["last_draft"].length > 0 &&
                                    i["last_draft"][0]["deleted_at"] == null)
                                  ? _c(
                                      "tr",
                                      {
                                        key: index,
                                        class: "row_child_" + index,
                                      },
                                      [
                                        _c("td", [
                                          _c("input", {
                                            attrs: { type: "checkbox" },
                                            on: {
                                              click: _vm.detect_row_to_export,
                                            },
                                          }),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              i["last_draft"].length == 0
                                                ? i["brand"] != null
                                                  ? i["brand"]["name"]
                                                  : i["brand_id"]
                                                : i["last_draft"][0]["brand"] !=
                                                  null
                                                ? i["last_draft"][0]["brand"][
                                                    "name"
                                                  ]
                                                : i["last_draft"][0]["brand_id"]
                                            ) +
                                              "\n                                    "
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              i["last_draft"].length == 0
                                                ? i["part_number"]
                                                : i["last_draft"][0][
                                                    "part_number"
                                                  ]
                                            )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              i["last_draft"].length == 0
                                                ? i["quantity"]
                                                : i["last_draft"][0]["quantity"]
                                            )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", { staticClass: "actions" }, [
                                          i["last_draft"].length > 0
                                            ? _c(
                                                "span",
                                                {
                                                  attrs: {
                                                    "data-toggle": "modal",
                                                    title:
                                                      _vm.switchWord(
                                                        "see_edits"
                                                      ),
                                                    "data-target":
                                                      "#old_update",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      _vm.item = i
                                                    },
                                                  },
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "ri-file-line",
                                                  }),
                                                ]
                                              )
                                            : _c("p", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.switchWord(
                                                      "no_edits_history"
                                                    )
                                                  )
                                                ),
                                              ]),
                                        ]),
                                      ]
                                    )
                                  : _vm._e()
                              }),
                              0
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button", "data-dismiss": "modal" },
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.switchWord("close")) +
                              "\n                        "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "admin_quotation_data",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "admin_quotation_data_box" },
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.switchWord("see_details")) +
                          "\n                        "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(2),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _vm.item != null
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-primary mb-3",
                          attrs: {
                            href:
                              "/quotations/export-file?ids=" + _vm.item["id"],
                            download: "",
                          },
                        },
                        [_vm._v(_vm._s(_vm.switchWord("download_file")))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "overflow-auto hide-buttons" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "box-model-table table text-center table-bordered table-striped table-hover",
                      },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("td"),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.keywords.seq))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.keywords.part_no))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.keywords.brand))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.keywords.offered_stock)),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm.keywords.min_quantity_per_transaction
                                )
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm.keywords.max_quantity_per_transaction
                                )
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.keywords.unit_price))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm.keywords
                                    .estimated_required_days_for_delivery
                                )
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.keywords.actions))]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.admin_quotation, function (i, index) {
                            return _c(
                              "tr",
                              { key: index, class: "row_child_" + index },
                              [
                                _c("td", [
                                  _c("input", {
                                    attrs: { type: "checkbox" },
                                    on: { click: _vm.detect_row_to_export },
                                  }),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(index + 1))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(i["part_number"]))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      i["brand"] != null
                                        ? i["brand"]["name"]
                                        : i["brand_id"]
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(i["offered_stock"]))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(i["min_quantity_per_transaction"])
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(i["max_quantity_per_transaction"])
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(i["prices"][0]["price"])),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(3))]),
                                _vm._v(" "),
                                i["prices"].length >= 2
                                  ? _c("td", [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-outline-primary",
                                          attrs: {
                                            "data-toggle": "modal",
                                            "data-target": "#see_prices",
                                          },
                                          on: {
                                            click: function ($event) {
                                              _vm.current_admin_quotation = i
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.keywords.see_prices)
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                              ]
                            )
                          }),
                          0
                        ),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" },
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.switchWord("close")) +
                          "\n                        "
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _vm.current_admin_quotation != null
        ? _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "see_prices",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
              },
            },
            [
              _c(
                "div",
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _c(
                        "h5",
                        {
                          staticClass: "modal-title",
                          attrs: { id: "see_prices_box" },
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.switchWord("see_details")) +
                              "\n                        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(4),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "overflow-auto" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "box-model-table table text-center table-bordered table-striped table-hover",
                          },
                          [
                            _c("thead", [
                              _c("tr", [
                                _c("td", [_vm._v(_vm._s(_vm.keywords.seq))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.keywords.min_quantity)),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.keywords.price))]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(
                                _vm.current_admin_quotation["prices"],
                                function (i, index) {
                                  return _c(
                                    "tr",
                                    { key: index, class: "row_child_" + index },
                                    [
                                      _c("td", [_vm._v(_vm._s(index + 1))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(i["min_quantity"])),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(i["price"]))]),
                                    ]
                                  )
                                }
                              ),
                              0
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button", "data-dismiss": "modal" },
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.switchWord("close")) +
                              "\n                        "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "upload_excel",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "upload_excel_box" },
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.switchWord("upload_quotation_file")) +
                          "\n                        "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(5),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "form",
                    {
                      attrs: { method: "post" },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.send_excel.apply(null, arguments)
                        },
                      },
                    },
                    [
                      _vm.item != null
                        ? _c("input", {
                            attrs: {
                              type: "hidden",
                              name: "quotation_order_id",
                            },
                            domProps: { value: _vm.item.id },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "div",
                          {
                            staticClass: "drag-drop-files mb-3",
                            attrs: {
                              "data-aos": "fade-up",
                              "data-aos-delay": "2000",
                            },
                          },
                          [
                            _c("input", {
                              attrs: { type: "file", name: "excel_file" },
                              on: { change: _vm.change_file },
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "ml-2 mr-2" }),
                            _vm._v(" "),
                            _c("p", { staticClass: "alert alert-danger" }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                attrs: { type: "button" },
                              },
                              [
                                _c("span", [
                                  _vm._v(_vm._s(_vm.keywords.excel_file)),
                                ]),
                                _vm._v(" "),
                                _vm._m(6),
                              ]
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit", name: "send" },
                          domProps: { value: _vm.switchWord("save") },
                        }),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" },
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.switchWord("close")) +
                          "\n                        "
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _vm.item != null
        ? _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "old_update",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
              },
            },
            [
              _c(
                "div",
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _vm.item != null
                        ? _c(
                            "h5",
                            {
                              staticClass: "modal-title",
                              attrs: { id: "update_quotations_box" },
                            },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.switchWord("see_details")) +
                                  "\n                                "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._m(7),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "overflow-auto" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table text-center table-bordered table-striped table-hover",
                          },
                          [
                            _c("thead", [
                              _c(
                                "tr",
                                _vm._l(
                                  _vm.handling_data["table_head_keys_model"],
                                  function (i) {
                                    return i != "actions"
                                      ? _c("td", { key: i }, [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(i) +
                                              "\n                                            "
                                          ),
                                        ])
                                      : _vm._e()
                                  }
                                ),
                                0
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm._l(
                                  _vm.item["last_draft"],
                                  function (i, index) {
                                    return _c(
                                      "tr",
                                      {
                                        key: index,
                                        class: "row_child_" + index,
                                      },
                                      [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              i["brand"] != null
                                                ? i["brand"]["name"]
                                                : i["brand_id"]
                                            )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(i["part_number"])),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(i["quantity"])),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              new Date(
                                                i["created_at"]
                                              ).toLocaleString()
                                            )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              i["deleted_at"] != null
                                                ? _vm.switchWord("delete_item")
                                                : _vm.switchWord(
                                                    "update_new_item"
                                                  )
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  }
                                ),
                                _vm._v(" "),
                                _vm.item.hasOwnProperty("last_draft") &&
                                _vm.item["last_draft"].length > 0
                                  ? _c("tr", [
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.item["last_draft"][0][
                                              "brand"
                                            ] != null
                                              ? _vm.item["last_draft"][0][
                                                  "brand"
                                                ]["name"]
                                              : _vm.item["last_draft"][0][
                                                  "brand_id"
                                                ]
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.item["last_draft"][0][
                                              "part_number"
                                            ]
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.item["quantity"])),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            new Date(
                                              _vm.item["created_at"]
                                            ).toLocaleString()
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(_vm.switchWord("basic_value"))
                                        ),
                                      ]),
                                    ])
                                  : _vm._e(),
                              ],
                              2
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button", "data-dismiss": "modal" },
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.switchWord("close")) +
                              "\n                                "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "agree_quotation_and_upload_bill",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "agree_quotation_and_upload_bill_box" },
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.keywords.agree_request) +
                          "\n                        "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(8),
                ]),
                _vm._v(" "),
                _vm.item != null
                  ? _c("div", { staticClass: "modal-body" }, [
                      _vm.item.is_completed == 2
                        ? _c("p", { staticClass: "alert alert-warning" }, [
                            _vm._v(
                              _vm._s(_vm.keywords.on_agree_request_condition)
                            ),
                          ])
                        : _c("p", { staticClass: "alert alert-warning" }, [
                            _vm._v(_vm._s(_vm.keywords.you_can_change_receipt)),
                          ]),
                      _vm._v(" "),
                      _vm.get_receipt.hasOwnProperty("image") &&
                      _vm.get_receipt["image"].indexOf("pdf") == -1
                        ? _c("img", {
                            staticClass: "d-block m-auto w-100",
                            staticStyle: {
                              "max-height": "300px",
                              "object-fit": "contain",
                            },
                            attrs: {
                              src:
                                "/images/receipts/" + _vm.get_receipt["image"],
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.get_receipt.hasOwnProperty("image") &&
                      _vm.get_receipt["image"].indexOf("pdf") == -1
                        ? _c(
                            "a",
                            {
                              attrs: {
                                href:
                                  "/images/receipts/" +
                                  _vm.get_receipt["image"],
                                target: "_blank",
                              },
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.switchWord("press_here")) +
                                  "\n                        "
                              ),
                            ]
                          )
                        : _vm.get_receipt.hasOwnProperty("image") &&
                          _vm.get_receipt["image"].indexOf("pdf") != -1
                        ? _c(
                            "a",
                            {
                              attrs: {
                                href:
                                  "/pdf/receipts/" + _vm.get_receipt["image"],
                                target: "_blank",
                              },
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.switchWord("press_here")) +
                                  "\n                        "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          on: {
                            submit: function ($event) {
                              $event.preventDefault()
                              return _vm.send_agreement_to_admin(_vm.item)
                            },
                          },
                        },
                        [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [
                              _vm._v(_vm._s(_vm.keywords.receipt_image)),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "file",
                                name: "receipt",
                                required: "",
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("input", {
                              staticClass: "btn btn-primary",
                              attrs: { type: "submit" },
                              domProps: { value: _vm.switchWord("save") },
                            }),
                          ]),
                        ]
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" },
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.switchWord("close")) +
                          "\n                        "
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _vm.admin_quotation.length > 0
        ? _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "print_box",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
              },
            },
            [
              _c(
                "div",
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _c(
                        "h5",
                        {
                          staticClass: "modal-title",
                          attrs: { id: "update_box_data" },
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.switchWord("print_bill")) +
                              "\n                        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(9),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "receipt" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex align-items-center justify-content-between mb-5",
                          },
                          [
                            _c("div", [
                              _c("img", {
                                staticClass: "d-block m-auto",
                                staticStyle: { width: "150px" },
                                attrs: { src: "/images/logo.png" },
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "mt-3 font-weight-bold" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.keywords.invoice_number) +
                                      "\n                                        #W\n                                        " +
                                      _vm._s(
                                        (
                                          "0" +
                                          new Date(
                                            _vm.item.created_at
                                          ).getFullYear()
                                        ).slice(-2)
                                      ) +
                                      "\n                                        " +
                                      _vm._s(
                                        (
                                          "0" +
                                          (new Date(
                                            _vm.item.created_at
                                          ).getMonth() +
                                            1)
                                        ).slice(-2)
                                      ) +
                                      "\n                                        " +
                                      _vm._s(_vm.item.id) +
                                      "\n                                    "
                                  ),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _vm._m(10),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-bordered table-hover table-striped",
                          },
                          [
                            _c(
                              "tbody",
                              [
                                _c("tr", [
                                  _c("td", [
                                    _vm._v(_vm._s(_vm.keywords.part_no)),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(_vm.keywords.brand)),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(_vm.keywords.quantity)),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm.switchWord("unit_price"))
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(_vm.keywords.total)),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _vm._l(
                                  _vm.get_my_quotation,
                                  function (i, index) {
                                    return i["last_draft"].length == 0 ||
                                      i["last_draft"][0]["deleted_at"] == null
                                      ? _c("tr", { key: index }, [
                                          _c("td", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  i["last_draft"].length == 0
                                                    ? _vm.detect_supplied_part_name(
                                                        i["part_number"]
                                                      )
                                                    : _vm.detect_supplied_part_name(
                                                        i["last_draft"][0][
                                                          "part_number"
                                                        ]
                                                      )
                                                ) +
                                                "\n                                    "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  i["last_draft"].length == 0
                                                    ? i["brand"] != null
                                                      ? i["brand"]["name"]
                                                      : i["brand_id"]
                                                    : i["last_draft"][0][
                                                        "brand"
                                                      ] != null
                                                    ? i["last_draft"][0][
                                                        "brand"
                                                      ]["name"]
                                                    : i["last_draft"][0][
                                                        "brand_id"
                                                      ]
                                                ) +
                                                "\n                                    "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  i["last_draft"].length == 0
                                                    ? i["quantity"]
                                                    : i["last_draft"][0][
                                                        "quantity"
                                                      ]
                                                ) +
                                                "\n                                    "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  _vm.detect_right_price(i)
                                                ) +
                                                "\n                                    "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  isNaN(
                                                    _vm.detect_right_price(i)
                                                  )
                                                    ? _vm.detect_right_price(i)
                                                    : _vm.detect_right_price(
                                                        i
                                                      ) *
                                                        (i["last_draft"] == null
                                                          ? i["quantity"]
                                                          : i["last_draft"][
                                                              "quantity"
                                                            ]
                                                        ).toFixed()
                                                ) +
                                                "\n                                    "
                                            ),
                                          ]),
                                        ])
                                      : _vm._e()
                                  }
                                ),
                                _vm._v(" "),
                                _c("tr", { staticClass: "tax_row" }, [
                                  _c("td", { attrs: { colspan: "4" } }, [
                                    _vm._v(_vm._s(_vm.keywords.tax)),
                                  ]),
                                  _vm._v(" "),
                                  _vm.item != null
                                    ? _c("td", [
                                        _vm._v(_vm._s(_vm.item.tax) + "%"),
                                      ])
                                    : _c("td"),
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { attrs: { colspan: "4" } }, [
                                    _vm._v(_vm._s(_vm.keywords.total)),
                                  ]),
                                  _vm._v(" "),
                                  _c("td"),
                                ]),
                              ],
                              2
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-center mb-3" }, [
                          _c("strong", [
                            _vm._v(_vm._s(_vm.keywords.wholesale_bill_info)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-center mb-3" }, [
                          _c("strong", [
                            _vm._v(_vm._s(_vm.keywords.bill_export_date)),
                          ]),
                          _vm._v(" "),
                          _vm.item != null
                            ? _c("strong", [
                                _vm._v(
                                  _vm._s(
                                    new Date(
                                      _vm.item["created_at"]
                                    ).toLocaleString()
                                  )
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-primary",
                          on: { click: _vm.printOrder },
                        },
                        [_vm._v(_vm._s(_vm.switchWord("print_bill")))]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button", "data-dismiss": "modal" },
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.switchWord("close")) +
                              "\n                        "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "update_file_money",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "update_file_money_box" },
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.keywords.upload_bank_document) +
                          "\n                        "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(11),
                ]),
                _vm._v(" "),
                _vm.item != null
                  ? _c("div", { staticClass: "modal-body" }, [
                      _vm.get_file_money.hasOwnProperty("file") &&
                      !(
                        _vm.get_file_money["file"].split(".pdf")[1] != undefined
                      )
                        ? _c("img", {
                            staticClass: "d-block m-auto w-100",
                            staticStyle: {
                              "max-height": "300px",
                              "object-fit": "contain",
                            },
                            attrs: {
                              src:
                                "/images/money_files/" +
                                _vm.get_file_money["file"],
                            },
                          })
                        : _vm.get_file_money.hasOwnProperty("file")
                        ? _c(
                            "a",
                            {
                              attrs: {
                                href:
                                  "/images/money_files/" +
                                  _vm.get_file_money["file"],
                                target: "_blank",
                              },
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.switchWord("press_here")) +
                                  "\n                        "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          on: {
                            submit: function ($event) {
                              $event.preventDefault()
                              return _vm.send_file_money_to_admin(_vm.item)
                            },
                          },
                        },
                        [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v(_vm._s(_vm.keywords.file))]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "file",
                                name: "file",
                                required: "",
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("input", {
                              staticClass: "btn btn-primary",
                              attrs: { type: "submit" },
                              domProps: { value: _vm.switchWord("save") },
                            }),
                          ]),
                        ]
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" },
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.switchWord("close")) +
                          "\n                        "
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "share_vendors",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "share_vendor_file" },
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.keywords.share_quotation_file) +
                          "\n                        "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(12),
                ]),
                _vm._v(" "),
                _vm.item != null
                  ? _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function ($event) {
                              $event.preventDefault()
                              return _vm.add_vendor_per_request(_vm.item)
                            },
                          },
                        },
                        [
                          _c("div", { staticClass: "row align-items-center" }, [
                            _c("div", { staticClass: "col-md-6 col-12" }, [
                              _c(
                                "div",
                                { staticClass: "form-group input-icon" },
                                [
                                  _c("label", [
                                    _vm._v(_vm._s(_vm.keywords.add_vendor)),
                                  ]),
                                  _vm._v(" "),
                                  _vm.vendors_per_request
                                    ? _c(
                                        "select",
                                        {
                                          staticClass: "form-control",
                                          attrs: {
                                            name: "user_id",
                                            required: "",
                                          },
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "" } },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.switchWord(
                                                    "select_best_choice"
                                                  )
                                                )
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.handling_data["sellers"],
                                            function (i, index) {
                                              return !_vm.vendors_per_request.find(
                                                function (e) {
                                                  return e["user_id"] == i["id"]
                                                }
                                              )
                                                ? _c(
                                                    "option",
                                                    {
                                                      key: index,
                                                      domProps: {
                                                        value: i["id"],
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(i["username"])
                                                      ),
                                                    ]
                                                  )
                                                : _vm._e()
                                            }
                                          ),
                                        ],
                                        2
                                      )
                                    : _vm._e(),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6 col-12" }, [
                              _c("input", {
                                staticClass: "btn btn-primary w-100",
                                attrs: { type: "submit" },
                                domProps: { value: _vm.switchWord("save") },
                              }),
                            ]),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "table",
                        {
                          staticClass:
                            "myTable table text-center table-bordered table-striped table-hover",
                        },
                        [
                          _c("thead", [
                            _c("tr", [
                              _c("td", [
                                _vm._v(_vm._s(_vm.keywords.vendor_name)),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(_vm.keywords.vendor_file)),
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(_vm.keywords.actions))]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(
                              _vm.vendors_per_request,
                              function (i, index) {
                                return _c(
                                  "tr",
                                  { key: index, class: "row_ven_" + index },
                                  [
                                    _c("td", [
                                      _vm._v(_vm._s(i["user"]["username"])),
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      i[
                                        "check_user_from_vendor_at_items_count"
                                      ] > 0
                                        ? _c(
                                            "a",
                                            {
                                              attrs: {
                                                target: "_blank",
                                                href:
                                                  "/quotations/export-file?user_id=" +
                                                  i["user"]["id"] +
                                                  "&ids=" +
                                                  i["quotation_order_id"],
                                                download: "",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.switchWord(
                                                    "download_file"
                                                  )
                                                )
                                              ),
                                            ]
                                          )
                                        : _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.switchWord("not_reply_yet")
                                              )
                                            ),
                                          ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "actions" }, [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "delete",
                                          on: {
                                            click: function ($event) {
                                              return _vm.delete_item(
                                                "vendors_requests",
                                                i["id"],
                                                ".row_ven_" + index
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-close-line",
                                          }),
                                        ]
                                      ),
                                    ]),
                                  ]
                                )
                              }
                            ),
                            0
                          ),
                        ]
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" },
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.switchWord("close")) +
                          "\n                        "
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "loading-img" }, [
      _c("img", { attrs: { src: "/images/loading.gif" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "loading-img" }, [
      _c("img", { attrs: { src: "/images/loading.gif" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-add-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        staticClass: "qr_code",
        staticStyle: { "max-height": "130px" },
        attrs: { src: "/images/qr.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./delete_item.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7093795c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("de938f0a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/quotations.vue?vue&type=style&index=0&id=bcc89aaa&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/quotations.vue?vue&type=style&index=0&id=bcc89aaa&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./quotations.vue?vue&type=style&index=0&id=bcc89aaa&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/quotations.vue?vue&type=style&index=0&id=bcc89aaa&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("36e77076", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
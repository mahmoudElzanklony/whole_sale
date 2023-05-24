(self["webpackChunkphpsocket"] = self["webpackChunkphpsocket"] || []).push([["resources_js_pages_profile_sales_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NavbarComponent",
  mixins: [_mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__.default],
  data: function data() {
    return {
      link: ''
    };
  },
  created: function created() {
    this.link = window.location.host;
  },
  computed: {
    user: function user() {
      return this.$inertia.page.props.user;
    }
  },
  methods: {
    showList: function showList() {
      var arrow = $(event.target).parent().find('span i');

      if (arrow.hasClass('ri-arrow-drop-down-fill')) {
        arrow.removeClass('ri-arrow-drop-down-fill').addClass('ri-arrow-drop-up-fill');
      } else {
        arrow.removeClass('ri-arrow-drop-up-fill').addClass('ri-arrow-drop-down-fill');
      }

      $(event.target).parent().next().fadeToggle();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProfileNavComponent",
  mixins: [_mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__.default],
  methods: {
    toggleNav: function toggleNav() {
      console.log($(event.target).parent().parent());
      $(event.target).parent().parent().siblings().fadeToggle();
    }
  },
  mounted: function mounted() {
    var url = document.URL;

    var _iterator = _createForOfIteratorHelper(document.querySelectorAll('.profile-nav ul li a')),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var a = _step.value;

        if (url.indexOf(a.getAttribute('href')) >= 0) {
          a.parentElement.className = 'active';
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
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
          en: 'FAQs',
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
          en: 'Terms & Conditions',
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
          en: 'Previous transactions',
          tu: ''
        },
        my_sales: {
          ar: 'مبيعاتي',
          en: 'Sales',
          tu: ''
        },
        quotations: {
          ar: 'طلب تسعير جديد',
          en: 'New quotation request',
          tu: ''
        },
        vendor_pricing: {
          ar: 'ملفات التسعير',
          en: 'Quotations',
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
        because: {
          ar: 'بسبب',
          en: 'because'
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
        cancelled_requests: {
          ar: 'الطلبات الملغاة',
          en: 'cancelled orders'
        },
        cancel_done: {
          ar: 'تم الغاء الطلب',
          en: 'Cancel request has been done',
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
        add_another_part_number: {
          ar: 'اضافه رقم قطعة اخر',
          en: 'Add another part number',
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
          en: 'order has been completed successfully',
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
        sent_to_vendors: {
          ar: 'تم الارسال للموردين',
          en: 'sent to vendors'
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
          ar: 'طلبات العملاء',
          en: 'Quotations requests',
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
          ar: 'هناك خطأ في تحديد السعر حيث انك قمت بطلب كميه اقل من الحد المسموح له او تجاوزت الكمية المتوفرة',
          en: 'There is an error in determining the price as you have ordered less than the allowable amount'
        },
        edit_my_quantity: {
          ar: 'تعديل الكمية الخاصه بي',
          en: 'update my quantity'
        },
        there_are_error_at_quantity_of_part_numbers: {
          ar: 'هناك خطأ في الكمية التي طلبتها حيث انها اقل من الحد الادني او انك تجاوزت الكمية المتوفرة المسموح به لدي القطع الاتيه ',
          en: 'There is an error in the quantity you ordered as it is less than the minimum allowed or you exceeded offered stock for the following part numbers '
        },
        initial_bill: {
          ar: 'فاتورة مبدئية',
          en: 'proforma invoice'
        },
        tax_bill: {
          ar: 'فاتورة ضريبية',
          en: 'Tax invoice'
        },
        client_name: {
          ar: 'اسم العميل',
          en: 'Client name',
          tu: ''
        },
        phone_number: {
          ar: 'رقم الهاتف',
          en: 'Phone number',
          tu: ''
        },
        please_wait_seconds: {
          ar: 'من فضلك انتظر لحظات ...',
          en: 'Please wait seconds...'
        },
        total_part_number_price: {
          ar: 'مجموع اسعار القطع',
          en: 'total price of part numbers',
          tu: ''
        },
        order_quantity_offer: {
          ar: 'طلب كمية من هذا العرض',
          en: 'order quantity form this offer'
        },
        this_order_made_from_offer_number: {
          ar: 'هذا الطلب تم عن طريق عرض رقم ',
          en: 'this order done from offer number '
        },
        rows_that_has_no_receipt: {
          ar: 'عندما تري طلب باللون الرصاصي يضئ وينطفئ هذا تذكير لك بأن هذا الطلب لم يتم ارسال صورة ايصال ويلزم عليك في اسرع وقت ارسال صوره الايصال',
          en: 'When you see a request in gray that turns on and off, this is a reminder to you that a copy of the receipt has not been sent to this request, and you must send a copy of the receipt as soon as possible'
        },
        wait_receipt: {
          ar: 'في انتظار صورة الايصال',
          en: 'wait receipt photo'
        },
        search_by: {
          ar: 'ابحث عن طريق',
          en: 'search by'
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/sales.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/sales.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_NavbarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/NavbarComponent */ "./resources/js/components/NavbarComponent.vue");
/* harmony import */ var _components_ProfileNavComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ProfileNavComponent */ "./resources/js/components/ProfileNavComponent.vue");
/* harmony import */ var _mixin_tableData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixin/tableData */ "./resources/js/mixin/tableData.vue");
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "sales",
  props: ['keywords'],
  mixins: [_mixin_tableData__WEBPACK_IMPORTED_MODULE_2__.default, _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_3__.default],
  methods: {
    printOrder: function printOrder() {
      window.print();
    }
  },
  components: {
    ProfileNavComponent: _components_ProfileNavComponent__WEBPACK_IMPORTED_MODULE_1__.default,
    NavbarComponent: _components_NavbarComponent__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ar .navbar-brand[data-v-485090b2] {\n  margin-left: 5%;\n}\n.ar .dropdown-menu img[data-v-485090b2] {\n  margin-left: 5px;\n}\n.ar .mrl-1[data-v-485090b2] {\n  margin-right: 10px;\n}\n.ar .nav-link > span[data-v-485090b2]:first-of-type {\n  margin-left: 7px;\n}\n.ar .auth-form .user_image img[data-v-485090b2] {\n  margin-left: 10px;\n}\n.ar .auth-form .list ul li p span[data-v-485090b2]:first-of-type {\n  margin-left: 5px;\n}\n.en .navbar-brand[data-v-485090b2] {\n  margin-right: 5%;\n}\n.en .mrl-1[data-v-485090b2] {\n  margin-left: 10px;\n}\n.en .dropdown-menu img[data-v-485090b2] {\n  margin-right: 5px;\n}\n.en .nav-link > span[data-v-485090b2]:first-of-type {\n  margin-right: 7px;\n}\n.en .auth-form .user_image img[data-v-485090b2] {\n  margin-right: 10px;\n}\n.en .auth-form .list ul li p span[data-v-485090b2]:first-of-type {\n  margin-right: 5px;\n}\nnav[data-v-485090b2] {\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  left: 0px;\n  z-index: 9999;\n  padding: 0px;\n  box-shadow: 1px 1px 1px 1px #ddd;\n  background-color: white !important;\n}\nnav .navbar-brand img[data-v-485090b2] {\n  height: 50px;\n}\nnav .nav-item > a[data-v-485090b2] {\n  color: #03071E !important;\n}\nnav .navbar-brand[data-v-485090b2] {\n  margin: 0px;\n  font-size: 30px;\n  font-weight: bold;\n  color: #035397;\n  padding: 0px;\n  position: relative;\n  top: -3px;\n}\nnav .navbar-brand[data-v-485090b2]:hover {\n  color: #007e72;\n}\nnav .nav-item[data-v-485090b2] {\n  cursor: pointer;\n}\nnav form input[data-v-485090b2]:first-of-type {\n  width: 230px;\n}\nnav .dropdown-menu[data-v-485090b2] {\n  padding: 10px;\n}\nnav .dropdown-menu a[data-v-485090b2] {\n  display: flex;\n  align-items: center;\n}\nnav .dropdown-menu a img[data-v-485090b2] {\n  height: 30px;\n}\nnav .dropdown-menu a span:first-of-type i[data-v-485090b2] {\n  /*color:$main_color;*/\n}\nnav .user-info-auth[data-v-485090b2] {\n  max-width: 320px;\n  width: 320px;\n  overflow: hidden;\n}\nnav .user-info-auth .sign-form h2[data-v-485090b2] {\n  margin-bottom: 10px;\n  color: #035397;\n  font-weight: bold;\n}\nnav .user-info-auth .sign-form p[data-v-485090b2] {\n  color: #c9cacf;\n  margin-bottom: 10px;\n}\nnav .user-info-auth .sign-form div[data-v-485090b2]:nth-of-type(2) {\n  background-color: #035397;\n  padding: 15px;\n}\nnav .user-info-auth .sign-form div:nth-of-type(2) p[data-v-485090b2] {\n  color: white;\n}\nnav .user-info-auth .sign-form a[data-v-485090b2] {\n  display: block;\n  text-align: center;\n  color: #035397;\n  padding: 8px;\n  border-radius: 24px;\n}\nnav .user-info-auth .sign-form a[data-v-485090b2]:first-of-type {\n  color: white;\n  background-color: #035397;\n  margin-bottom: 10px;\n}\nnav .user-info-auth .sign-form a[data-v-485090b2]:nth-of-type(2) {\n  background-color: #e4e5ea40;\n}\nnav .user-info-auth .auth-form .user_image[data-v-485090b2] {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\nnav .user-info-auth .auth-form .user_image img[data-v-485090b2] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nnav .user-info-auth .auth-form .user_image div p[data-v-485090b2]:last-of-type {\n  color: #c9cacf;\n  margin-top: 5px;\n}\nnav .user-info-auth .auth-form .list > p[data-v-485090b2] {\n  padding: 0px 10px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\nnav .user-info-auth .auth-form .list ul li[data-v-485090b2] {\n  padding: 3px 10px;\n}\nnav .user-info-auth .auth-form .list ul li p span[data-v-485090b2] {\n  font-size: 11px;\n}\nnav .user-info-auth .auth-form .list ul li p span[data-v-485090b2]:last-of-type {\n  font-weight: bold;\n}\nnav .user-info-auth .auth-form .list ul li > span[data-v-485090b2] {\n  color: white;\n  padding: 0px 5px;\n  border-radius: 3px;\n  background-color: #035397;\n}\n.nav-link[data-v-485090b2] {\n  color: #03071E;\n}\n.nav-link .box[data-v-485090b2] {\n  position: absolute;\n  top: 0px;\n  display: none;\n}\n.nav-link p[data-v-485090b2] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.nav-link p span[data-v-485090b2]:nth-of-type(2) {\n  margin-right: 7px;\n  margin-left: 7px;\n}\n.dropdown-toggle span[data-v-485090b2]:nth-of-type(2) {\n  margin-right: 7px;\n  margin-left: 7px;\n}\n.dropdown-toggle .user_profile[data-v-485090b2] {\n  text-align: center;\n}\n.dropdown-toggle .user_profile img[data-v-485090b2] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid #eee;\n}\n.dropdown-toggle .user_profile span[data-v-485090b2] {\n  background-color: #035397;\n  color: white;\n  font-size: 10px;\n  display: block;\n  text-align: center;\n  position: absolute;\n  top: 7px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50px;\n  padding: 0;\n}\n.dropdown-toggle[data-v-485090b2]::after {\n  display: none;\n}\n@media (min-width: 992px) {\nnav ul:first-of-type .nav-item:nth-of-type(2) div[data-v-485090b2] {\n    width: 203px;\n}\n}\n@media (max-width: 992px) {\n.navbar-collapse[data-v-485090b2] {\n    flex-wrap: wrap;\n}\n.navbar-collapse .navbar-nav[data-v-485090b2] {\n    width: 100%;\n}\n.user-info-auth[data-v-485090b2] {\n    width: 320px;\n}\nul.d-flex[data-v-485090b2] {\n    flex-direction: column;\n}\n.ar .nav-link[data-v-485090b2] {\n    padding-right: 0px;\n}\n.en .nav-link[data-v-485090b2] {\n    padding-left: 0px;\n}\n}\n@media (max-width: 767px) {\n.auth-form[data-v-485090b2], .sign-form[data-v-485090b2] {\n    max-height: 400px;\n    overflow: auto;\n}\n.ar nav ul > li:last-of-type > span[data-v-485090b2]:first-of-type {\n    margin-left: 10px;\n}\n.en nav ul > li:last-of-type > span[data-v-485090b2]:first-of-type {\n    margin-right: 10px;\n}\nnav ul[data-v-485090b2] {\n    align-items: flex-start !important;\n}\nnav ul > li[data-v-485090b2] {\n    margin-bottom: 10px;\n}\nnav ul > li a i[data-v-485090b2] {\n    position: relative;\n    top: -1px;\n}\nnav ul > li[data-v-485090b2]:last-of-type {\n    margin-right: 0px !important;\n    margin-left: 0px !important;\n    align-items: center;\n}\nnav form[data-v-485090b2] {\n    margin: auto;\n}\nnav form input[data-v-485090b2]:first-of-type {\n    margin-left: 5px;\n    margin-right: 5px;\n}\nnav .user-info-auth[data-v-485090b2] {\n    left: 0px;\n    right: 0px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".profile-nav[data-v-080dc7c8] {\n  border-top: 1px solid #ddd;\n  margin-top: 25px;\n}\n.profile-nav ul li[data-v-080dc7c8] {\n  width: 100%;\n  padding: 5px;\n  padding-right: 0px;\n  padding-left: 0px;\n  transition: 0.5s all;\n}\n.profile-nav ul li a[data-v-080dc7c8] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.profile-nav ul li a span[data-v-080dc7c8]:last-of-type {\n  color: #03071E;\n}\n.profile-nav ul li[data-v-080dc7c8]:first-of-type {\n  border-right: none !important;\n  border-left: none !important;\n  background-color: #bdbdbd;\n}\n.profile-nav ul li:first-of-type span[data-v-080dc7c8] {\n  color: white;\n}\n.profile-nav ul li:first-of-type > span[data-v-080dc7c8] {\n  display: none;\n}\n.profile-nav ul li:not(:first-of-type) a[data-v-080dc7c8]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  width: 0%;\n  height: 2px;\n  background-color: #035397;\n  transition: 0.5s all;\n}\n.profile-nav ul li:not(:first-of-type):hover span[data-v-080dc7c8] {\n  color: #035397;\n}\n.profile-nav ul li:not(:first-of-type) a[data-v-080dc7c8]:hover::before {\n  width: 100%;\n}\n.profile-nav ul li.active[data-v-080dc7c8] {\n  padding: 0px;\n}\n.profile-nav ul li.active a[data-v-080dc7c8] {\n  color: #035397;\n}\n.profile-nav ul li.active a span[data-v-080dc7c8] {\n  color: #035397;\n}\n.profile-nav ul li.active a[data-v-080dc7c8]::before {\n  width: 100%;\n}\n.profile-nav-line[data-v-080dc7c8] {\n  margin: 0px;\n}\n.ar .profile-nav ul li span[data-v-080dc7c8]:first-of-type {\n  margin-left: 4px;\n}\n.ar .profile-nav ul li[data-v-080dc7c8] {\n  border-right: 1px solid #dddddd;\n}\n.en .profile-nav ul li span[data-v-080dc7c8]:first-of-type {\n  margin-right: 4px;\n}\n.en .profile-nav ul li[data-v-080dc7c8] {\n  border-left: 1px solid #dddddd;\n}\n@media (min-width: 768px) and (max-width: 1000px) {\n.profile-nav ul li span[data-v-080dc7c8]:last-of-type {\n    font-size: 11px;\n}\n}\n@media (max-width: 767px) {\n.profile-nav .container[data-v-080dc7c8] {\n    padding: 0px;\n}\n.profile-nav .container ul[data-v-080dc7c8] {\n    flex-wrap: wrap;\n}\n.profile-nav .container ul li[data-v-080dc7c8] {\n    justify-content: unset !important;\n    padding: 6px;\n}\n.profile-nav .container ul li a[data-v-080dc7c8] {\n    justify-content: unset !important;\n}\n.profile-nav .container ul li[data-v-080dc7c8]:first-of-type {\n    justify-content: space-between !important;\n}\n.profile-nav .container ul li:first-of-type > span[data-v-080dc7c8] {\n    display: inline-block;\n}\n.profile-nav .container ul li[data-v-080dc7c8]:not(:first-of-type) {\n    display: none;\n}\n.profile-nav ul li.active a[data-v-080dc7c8]::before {\n    bottom: -5px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/sales.vue?vue&type=style&index=0&id=9f9148e6&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/sales.vue?vue&type=style&index=0&id=9f9148e6&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".sales h2[data-v-9f9148e6] {\n  margin-top: 30px;\n  margin-bottom: 50px;\n}\n.sales table tr td[data-v-9f9148e6] {\n  text-align: center;\n}\n@media print {\nbody *[data-v-9f9148e6] {\n    visibility: hidden;\n}\n.receipt[data-v-9f9148e6] {\n    height: auto;\n}\n.receipt *[data-v-9f9148e6] {\n    visibility: visible;\n}\n.receipt button[data-v-9f9148e6] {\n    visibility: hidden;\n}\n#receipt .modal-footer[data-v-9f9148e6] {\n    display: none;\n}\n#fb-root[data-v-9f9148e6] {\n    display: none;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/NavbarComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/NavbarComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true& */ "./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true&");
/* harmony import */ var _NavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _NavbarComponent_vue_vue_type_style_index_0_id_485090b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true& */ "./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _NavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "485090b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NavbarComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProfileNavComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/ProfileNavComponent.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileNavComponent_vue_vue_type_template_id_080dc7c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true& */ "./resources/js/components/ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true&");
/* harmony import */ var _ProfileNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileNavComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ProfileNavComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _ProfileNavComponent_vue_vue_type_style_index_0_id_080dc7c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true& */ "./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ProfileNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProfileNavComponent_vue_vue_type_template_id_080dc7c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileNavComponent_vue_vue_type_template_id_080dc7c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "080dc7c8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProfileNavComponent.vue"
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

/***/ "./resources/js/pages/profile/sales.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/profile/sales.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sales_vue_vue_type_template_id_9f9148e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales.vue?vue&type=template&id=9f9148e6&scoped=true& */ "./resources/js/pages/profile/sales.vue?vue&type=template&id=9f9148e6&scoped=true&");
/* harmony import */ var _sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales.vue?vue&type=script&lang=js& */ "./resources/js/pages/profile/sales.vue?vue&type=script&lang=js&");
/* harmony import */ var _sales_vue_vue_type_style_index_0_id_9f9148e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales.vue?vue&type=style&index=0&id=9f9148e6&lang=scss&scoped=true& */ "./resources/js/pages/profile/sales.vue?vue&type=style&index=0&id=9f9148e6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _sales_vue_vue_type_template_id_9f9148e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _sales_vue_vue_type_template_id_9f9148e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9f9148e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/profile/sales.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/ProfileNavComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ProfileNavComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileNavComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/pages/profile/sales.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/profile/sales.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/sales.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true&");


/***/ }),

/***/ "./resources/js/components/ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_template_id_080dc7c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_template_id_080dc7c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_template_id_080dc7c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true&");


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

/***/ "./resources/js/pages/profile/sales.vue?vue&type=template&id=9f9148e6&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/profile/sales.vue?vue&type=template&id=9f9148e6&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_template_id_9f9148e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_template_id_9f9148e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_template_id_9f9148e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sales.vue?vue&type=template&id=9f9148e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/sales.vue?vue&type=template&id=9f9148e6&scoped=true&");


/***/ }),

/***/ "./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_style_index_0_id_080dc7c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_style_index_0_id_080dc7c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_style_index_0_id_080dc7c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_style_index_0_id_080dc7c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_style_index_0_id_080dc7c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/pages/profile/sales.vue?vue&type=style&index=0&id=9f9148e6&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/profile/sales.vue?vue&type=style&index=0&id=9f9148e6&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_style_index_0_id_9f9148e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sales.vue?vue&type=style&index=0&id=9f9148e6&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/sales.vue?vue&type=style&index=0&id=9f9148e6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_style_index_0_id_9f9148e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_style_index_0_id_9f9148e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_style_index_0_id_9f9148e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_vue_vue_type_style_index_0_id_9f9148e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true& ***!
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
    "nav",
    { staticClass: "navbar navbar-expand-lg navbar-light bg-light" },
    [
      _c(
        "div",
        { staticClass: "container" },
        [
          _vm.user != null && _vm.user.role.name == "buyer"
            ? _c(
                "inertia-link",
                {
                  staticClass: "navbar-brand",
                  attrs: { href: "/profile/quotations" },
                },
                [_c("img", { attrs: { src: "/images/logo.png" } })]
              )
            : _c(
                "inertia-link",
                { staticClass: "navbar-brand", attrs: { href: "/" } },
                [_c("img", { attrs: { src: "/images/logo.png" } })]
              ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse  justify-content-between",
              attrs: { id: "navbarSupportedContent" },
            },
            [
              _c("ul", { staticClass: "d-flex align-items-center" }, [
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: { href: "https://mkena.com/", target: "_blank" },
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.switchWord("visit_mkena")) +
                          "\n                    "
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _vm.$page.props.user == null
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "inertia-link",
                          {
                            staticClass: "nav-link",
                            attrs: { href: "/register?user_type=seller" },
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.switchWord("register_as_seller")) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.user != null &&
                (_vm.user.role_id == 1 || _vm.user.role_id == 5)
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "inertia-link",
                          {
                            staticClass: "font-weight-bold nav-link",
                            attrs: { href: "/dashboard" },
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.switchWord("dashboard")) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _vm.$page.props.lang == "en"
                    ? _c(
                        "a",
                        {
                          staticClass:
                            "font-weight-bold d-inline-flex align-items-center",
                          attrs: { href: "/lang/ar" },
                        },
                        [
                          _c("i", { staticClass: "ri-global-line" }),
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.switchWord("Arabic_Language")) +
                              "\n                    "
                          ),
                        ]
                      )
                    : _c(
                        "a",
                        {
                          staticClass:
                            "font-weight-bold d-inline-flex align-items-center",
                          attrs: { href: "/lang/en" },
                        },
                        [
                          _c("i", { staticClass: "ri-global-line" }),
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.switchWord("English_Language")) +
                              "\n                    "
                          ),
                        ]
                      ),
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item dropdown" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link dropdown-toggle",
                      attrs: {
                        href: "#",
                        role: "button",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                      },
                    },
                    [
                      _c("div", { staticClass: "user_profile" }, [
                        _vm.user == null
                          ? _c("img", {
                              attrs: { src: "/images/icons/profile.svg" },
                            })
                          : _c("img", {
                              attrs: {
                                src: "/images/users/" + _vm.user["image"],
                              },
                            }),
                        _vm._v(" "),
                        _c("span"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "dropdown-menu p-0 user-info-auth",
                          attrs: { "aria-labelledby": "navbarDropdown" },
                        },
                        [
                          _vm.user == null
                            ? _c("div", { staticClass: "sign-form" }, [
                                _c(
                                  "div",
                                  { staticClass: "p-4" },
                                  [
                                    _c("h2", [
                                      _vm._v(_vm._s(_vm.switchWord("sign_in"))),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(_vm._s(_vm.switchWord("add_ad"))),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "inertia-link",
                                      {
                                        staticClass: "d-block",
                                        attrs: { href: "/login" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.switchWord("sign_in")) +
                                            "\n                                    "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "inertia-link",
                                      {
                                        staticClass: "d-block",
                                        attrs: { href: "/register" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.switchWord("sign_up")) +
                                            "\n                                    "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "p-4" }, [
                                  _c("p", [
                                    _vm._v(_vm._s(_vm.switchWord("my_offers"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      _vm._s(_vm.switchWord("get_best_offers"))
                                    ),
                                  ]),
                                ]),
                              ])
                            : _c("div", { staticClass: "auth-form" }, [
                                _c("div", { staticClass: "user_image" }, [
                                  _c("img", {
                                    attrs: {
                                      src: "/images/users/" + _vm.user.image,
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c("p", [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(_vm.user.email) +
                                          "\n                                        "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.switchWord("registered_from_date")
                                        ) +
                                          "\n                                            " +
                                          _vm._s(
                                            new Date(
                                              _vm.user.created_at
                                            ).toLocaleDateString()
                                          ) +
                                          "\n                                        "
                                      ),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _c("div", { staticClass: "list" }, [
                                  _c(
                                    "p",
                                    [
                                      _c(
                                        "inertia-link",
                                        { attrs: { href: "/profile/edit" } },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.switchWord("activities")
                                              ) +
                                              "\n                                        "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("ul", [
                                     false
                                      ? 0
                                      : _vm._e(),
                                    _vm._v(" "),
                                     false
                                      ? 0
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "li",
                                      {
                                        staticClass:
                                          "d-flex align-items-center justify-content-between",
                                      },
                                      [
                                        _c("p", [
                                          _vm._m(3),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            [
                                              _c(
                                                "inertia-link",
                                                {
                                                  attrs: {
                                                    href: "/notifications",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                        " +
                                                      _vm._s(
                                                        _vm.switchWord(
                                                          "notifications"
                                                        )
                                                      ) +
                                                      "\n                                                    "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _vm.$page.props.numberofnotifications >
                                        0
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                                " +
                                                  _vm._s(
                                                    _vm.$page.props
                                                      .numberofnotifications
                                                  ) +
                                                  "\n                                            "
                                              ),
                                            ])
                                          : _vm._e(),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("hr"),
                                    _vm._v(" "),
                                     false
                                      ? 0
                                      : _vm._e(),
                                    _vm._v(" "),
                                     false
                                      ? 0
                                      : _vm._e(),
                                    _vm._v(" "),
                                     false
                                      ? 0
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "li",
                                      {
                                        staticClass:
                                          "d-flex align-items-center justify-content-between",
                                      },
                                      [
                                        _c("p", [
                                          _vm._m(7),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            [
                                              _c(
                                                "inertia-link",
                                                { attrs: { href: "/logout" } },
                                                [
                                                  _vm._v(
                                                    "\n                                                         " +
                                                      _vm._s(
                                                        _vm.switchWord("logout")
                                                      ) +
                                                      "\n                                                    "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("span"),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]),
                        ]
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item d-flex align-items-center mrl-1" },
                  [
                    _c("span", [_vm._v(_vm._s(_vm.switchWord("Help")) + "?")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: { href: "mailto:mailto:wholesale@mkena.com" },
                      },
                      [_vm._m(8)]
                    ),
                    _vm._v(" "),
                    _vm._m(9),
                  ]
                ),
              ]),
            ]
          ),
        ],
        1
      ),
    ]
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
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
        },
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-heart-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-file-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-notification-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-building-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-bank-card-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-wallet-3-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-logout-box-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri ri-mail-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          href: "https://api.whatsapp.com/send?phone=966541006608",
          target: "_blank",
        },
      },
      [
        _c("span", { staticStyle: { color: "green" } }, [
          _c("i", { staticClass: "ri-whatsapp-line" }),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true& ***!
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
  return _c("div", [
    _c("div", { staticClass: "profile-nav" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "ul",
          { staticClass: "d-flex align-items-center justify-content-between" },
          [
            _c(
              "li",
              {
                staticClass: "d-flex align-items-center justify-content-center",
              },
              [
                _c("p", { staticClass: "mb-0 d-flex align-items-center" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.$page.props.user.username) +
                        "\n                    "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("span", [
                  _c("i", {
                    staticClass: "ri-arrow-down-s-line",
                    on: { click: _vm.toggleNav },
                  }),
                ]),
              ]
            ),
            _vm._v(" "),
            _vm.$page.props.user.role.name != "seller"
              ? _c(
                  "li",
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: "/profile/quotations" } },
                      [
                        _c("span", [
                          _c("i", { staticClass: "ri-file-list-3-line" }),
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.switchWord("quotations"))),
                        ]),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$page.props.user.role.name == "seller"
              ? _c(
                  "li",
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: "/profile/pricing" } },
                      [
                        _c("span", [
                          _c("i", { staticClass: "ri-file-list-3-line" }),
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.switchWord("vendor_pricing"))),
                        ]),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("inertia-link", { attrs: { href: "/profile/offers" } }, [
                  _c("span", [_c("i", { staticClass: "ri-price-tag-3-line" })]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.switchWord("offers")))]),
                ]),
              ],
              1
            ),
            _vm._v(" "),
             false
              ? 0
              : _vm._e(),
            _vm._v(" "),
            _vm.$page.props.user.role.name != "seller"
              ? _c(
                  "li",
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: "/profile/last-quotations" } },
                      [
                        _c("span", [
                          _c("i", { staticClass: "ri-shopping-cart-line" }),
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.switchWord("last_quotations"))),
                        ]),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            (_vm.$page.props.user.role.name == "seller" ||
              _vm.$page.props.user.role.name == "buyer_seller") &&
            false
              ? _c(
                  "li",
                  [
                    _c("inertia-link", { attrs: { href: "/profile/sales" } }, [
                      _c("span", [
                        _c("i", { staticClass: "ri-money-dollar-circle-line" }),
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.switchWord("my_sales")))]),
                    ]),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$page.props.user.role.name != "seller"
              ? _c(
                  "li",
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: "/profile/statistics" } },
                      [
                        _c("span", [
                          _c("i", { staticClass: "ri-line-chart-line" }),
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.switchWord("statistics"))),
                        ]),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("inertia-link", { attrs: { href: "/profile/edit" } }, [
                  _c("span", [_c("i", { staticClass: "ri-user-line" })]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.switchWord("personal_info")))]),
                ]),
              ],
              1
            ),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("hr", { staticClass: "profile-nav-line" }),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-file-user-line" })])
  },
]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/sales.vue?vue&type=template&id=9f9148e6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/sales.vue?vue&type=template&id=9f9148e6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "profile" },
    [
      _c("navbar-component"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "inner-profile" },
        [
          _c("profile-nav-component"),
          _vm._v(" "),
          _c("div", { staticClass: "sales" }, [
            _c("div", { staticClass: "container" }, [
              _c("h2", { staticClass: "text-center main-title" }, [
                _c("span", [_vm._v(_vm._s(_vm.keywords.main_title_sales))]),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "alert alert-info" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.keywords.print_data_info) +
                    "\n                "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "data" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "myTable table table-hover table-striped table-bordered",
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.keywords.seq))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.keywords.username))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.keywords.part_no))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.keywords.brand))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.keywords.quantity))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.keywords.unit_price))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.keywords.total_value))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.keywords.remarks))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.keywords.estimated_required_days_for_delivery
                            )
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.keywords.total))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.keywords.status))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.keywords.actions))]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(10, function (i, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(i))]),
                          _vm._v(" "),
                          _c("td", [_vm._v("ahmed ali")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("10")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("toyta")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("5")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("100")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("500")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Rounded to uop")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("3")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("550")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("completed")]),
                          _vm._v(" "),
                          _vm._m(0, true),
                        ])
                      }),
                      0
                    ),
                  ]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c(
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
                      _vm._m(1),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "receipt" }, [
                        _c("img", {
                          staticClass: "d-block m-auto",
                          staticStyle: { "margin-bottom": "20px !important" },
                          attrs: { src: "/images/logo.png" },
                        }),
                        _vm._v(" "),
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-bordered table-hover table-striped",
                          },
                          [
                            _c("tbody", [
                              _c("tr", [
                                _c("td", [
                                  _vm._v(_vm._s(_vm.keywords.username)),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("ahmed ali")]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(_vm._s(_vm.keywords.part_no)),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("10")]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(_vm._s(_vm.keywords.brand))]),
                                _vm._v(" "),
                                _c("td", [_vm._v("toyta")]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(_vm._s(_vm.keywords.quantity)),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("5")]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(_vm._s(_vm.keywords.total_value)),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("500")]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.keywords
                                        .estimated_required_days_for_delivery
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("3")]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(_vm._s(_vm.keywords.total))]),
                                _vm._v(" "),
                                _c("td", [_vm._v("550")]),
                              ]),
                            ]),
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
                          _c("strong", [
                            _vm._v(_vm._s(new Date().toLocaleString())),
                          ]),
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
          ),
        ],
        1
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
    return _c("td", { staticClass: "actions" }, [
      _c("span", [_c("i", { staticClass: "ri-edit-line" })]),
      _vm._v(" "),
      _c("span", { staticClass: "print" }, [
        _c("i", {
          staticClass: "ri-printer-line",
          attrs: { "data-toggle": "modal", "data-target": "#print_box" },
        }),
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "delete" }, [
        _c("i", { staticClass: "ri-close-line" }),
      ]),
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("9801a512", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("705e3938", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/sales.vue?vue&type=style&index=0&id=9f9148e6&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/sales.vue?vue&type=style&index=0&id=9f9148e6&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sales.vue?vue&type=style&index=0&id=9f9148e6&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/sales.vue?vue&type=style&index=0&id=9f9148e6&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1e86b434", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
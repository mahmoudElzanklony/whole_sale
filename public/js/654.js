(self.webpackChunkphpsocket=self.webpackChunkphpsocket||[]).push([[654],{4435:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s});var n=t(3645),r=t.n(n)()((function(e){return e[1]}));r.push([e.id,".swal2-container{z-index:1e+26}",""]);const s=r},7927:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s});var n=t(3645),r=t.n(n)()((function(e){return e[1]}));r.push([e.id,'.ar .orange_class[data-v-af6cb8ae]:hover,.ar .side-bar-nav ul li[data-v-af6cb8ae]:hover,.side-bar-nav ul .ar li[data-v-af6cb8ae]:hover{padding-right:10px}.ar .orange_class[data-v-af6cb8ae]:before,.ar .side-bar-nav ul li[data-v-af6cb8ae]:before,.side-bar-nav ul .ar li[data-v-af6cb8ae]:before{left:0}.ar .side-bar-nav[data-v-af6cb8ae]{right:0}.ar .side-bar-nav>span[data-v-af6cb8ae]{right:5px}.ar .side-bar-nav ul li a span[data-v-af6cb8ae]:first-of-type{margin-left:10px}.ar .side-bar-nav ul li.active[data-v-af6cb8ae]:before{left:0}.en .orange_class[data-v-af6cb8ae]:hover,.en .side-bar-nav ul li[data-v-af6cb8ae]:hover,.side-bar-nav ul .en li[data-v-af6cb8ae]:hover{padding-left:10px}.en .orange_class[data-v-af6cb8ae]:before,.en .side-bar-nav ul li[data-v-af6cb8ae]:before,.side-bar-nav ul .en li[data-v-af6cb8ae]:before{right:0}.en .side-bar-nav[data-v-af6cb8ae]{left:0}.en .side-bar-nav>span[data-v-af6cb8ae]{left:5px}.en .side-bar-nav ul li a span[data-v-af6cb8ae]:first-of-type{margin-right:10px}.en .side-bar-nav ul li.active[data-v-af6cb8ae]:before{right:0}.orange_class[data-v-af6cb8ae]:before,.side-bar-nav ul li[data-v-af6cb8ae]:before{content:"";position:absolute;height:0;transition:all .5s;background-color:#035397;width:4px}.orange_class[data-v-af6cb8ae]:hover:before,.side-bar-nav ul li[data-v-af6cb8ae]:hover:before{height:100%}.orange_class:hover span[data-v-af6cb8ae],.side-bar-nav ul li:hover span[data-v-af6cb8ae]{color:#035397}.side-bar-nav[data-v-af6cb8ae]{transition:all .5s;position:fixed;background-color:hsla(0,0%,93.3%,.2196078431372549);width:200px;height:100%;padding:0!important}.side-bar-nav>span[data-v-af6cb8ae]{position:absolute;top:14px;color:#03071e}.side-bar-nav .logo img[data-v-af6cb8ae]{padding-top:10px;width:115px;display:block;margin:auto}.side-bar-nav ul[data-v-af6cb8ae]{padding-top:50px;height:calc(100% - 50px);overflow:auto}.side-bar-nav ul li[data-v-af6cb8ae]{transition:all .5s;position:relative}.side-bar-nav ul li a[data-v-af6cb8ae]{display:flex;align-items:center;padding:5px}.side-bar-nav ul li a span[data-v-af6cb8ae]{color:#03071e}.side-bar-nav ul li.active span[data-v-af6cb8ae]{color:#035397}.side-bar-nav ul li.active[data-v-af6cb8ae]:before{content:"";position:absolute;transition:all .5s;background-color:#035397;width:4px;height:100%}.side-bar-nav ul li[data-v-af6cb8ae]:not(:last-of-type){border-bottom:1px solid #eee}.side-bar-nav.icons_only[data-v-af6cb8ae]{width:50px}.side-bar-nav.icons_only>span[data-v-af6cb8ae]{right:10px}.side-bar-nav.icons_only .logo img[data-v-af6cb8ae]{display:none}.side-bar-nav.icons_only ul li a[data-v-af6cb8ae]{align-items:center;justify-content:center}.side-bar-nav.icons_only ul li a span[data-v-af6cb8ae]:not(:first-of-type){display:none}',""]);const s=r},2610:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s});var n=t(3645),r=t.n(n)()((function(e){return e[1]}));r.push([e.id,".alert-danger[data-v-5a32c405]{display:none}table tr td[data-v-5a32c405]{min-width:170px!important}",""]);const s=r},6063:(e,a,t)=>{"use strict";t.d(a,{Z:()=>u});var n=t(6298),r=t(629);function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const l={name:"SideNavbarComponent",mixins:[n.Z],computed:i({},(0,r.Se)({get_privillages_pages:"privillages/get_data"})),mounted:function(){var e=document.URL.split("/")[document.URL.split("/").length-1];$("ul").find('li[custom="'+e+'"]').addClass("active"),this.get_privillages()},methods:i(i({},(0,r.nv)({get_privillages:"privillages/get_privillages"})),{},{toggleSideNav:function(){$(event.target).parent().parent().toggleClass("icons_only"),$(event.target).parent().parent().hasClass("icons_only")?$(".dashboard .content").css("width",$(document).innerWidth()-50):$(".dashboard .content").css("width",$(document).innerWidth()-200)}})};t(376);const u=(0,t(1900).Z)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("nav",{staticClass:"side-bar-nav"},[t("span",{staticClass:"cursor-pointer"},["ar"==e.$page.props.lang?t("i",{staticClass:"ri-menu-3-line",on:{click:e.toggleSideNav}}):t("i",{staticClass:"ri-menu-2-line",on:{click:e.toggleSideNav}})]),e._v(" "),t("div",{staticClass:"logo"},[t("inertia-link",{attrs:{href:"/"}},[t("img",{attrs:{src:"/images/logo.png"}})])],1),e._v(" "),t("ul",e._l(e.get_privillages_pages,(function(a,n){return t("li",{attrs:{custom:a.privillage.en_name}},[t("inertia-link",{key:n,attrs:{href:"/dashboard/"+a.privillage.en_name.replace(" ","-").toLocaleLowerCase()}},[t("span",[t("i",{class:a.privillage.icon})]),e._v(" "),t("span",[e._v(e._s(a.privillage[e.$page.props.lang+"_name"].replace("-"," ")))]),e._v(" "),t("span")])],1)})),0)])}),[],!1,null,"af6cb8ae",null).exports},6298:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});const n={name:"SwitchLangWord",data:function(){return{words:{Home:{ar:"الرئيسية",en:"Home",tu:""},Profile:{ar:"الملف الشخصي",en:"profile",tu:""},Search:{ar:"أبحث",en:"Search",tu:""},part_number_of_part_name:{ar:"رقم القطعة او اسم القطعة",en:"part number of part name",tu:""},part_name:{ar:"اسم القطعة",en:"Part Name"},Arabic_Language:{ar:"Arabic",en:"عربي",tu:""},English_Language:{ar:"English",en:"انجليزي",tu:""},Turkish_Language:{ar:"اللغة التركية",en:"Turkish Language",tu:""},Help:{ar:"مساعدة",en:"Help",tu:""},sign_in:{ar:"تسجيل دخول",en:"Sign in",tu:""},sign_up:{ar:"تسجيل حساب",en:"Sign up",tu:""},logout:{ar:"تسجيل خروج",en:"logout",tu:""},registered_from_date:{ar:"سجل منذ تاريخ ",en:"registered from date ",tu:""},activities:{ar:"نشاطاتي",en:"my activities",tu:""},add_ad:{ar:"تستطيع تصفح كل ما يخص قطع غيار السيارات وشراء ما تريد و اضافته الي المفضلة و اكثر ...",en:"You can browse everything related to auto parts, buy what you want, add it to your favorites, and more...",tu:""},my_offers:{ar:"عروضي",en:"my_offers",tu:""},offers:{ar:"عروض",en:"offers",tu:""},get_best_offers:{ar:"احصل على أفضل عروض برنداتك المفضلة  من مكان واحد ، فقط لعملاء مكينة جملة",en:"Get deals from your favorite brands, all at one place only for mkena wholesale customers",tu:""},website:{ar:"مكينة جملة",en:"Mkena wholesale",tu:""},footer_info:{ar:"نوفر افضل قطع الغيار بأفضل الاسعار يصلك في اي مكان تريده داخل و خارج المملكة العربية السعودية",en:"We provide the best spare parts at the best prices, delivered to you anywhere you want inside and outside the Kingdom of Saudi Arabia",tu:""},jobs:{ar:"وظائف",en:"Jobs",tu:""},common_questions:{ar:"الاسئلة الشائعة",en:"FAQs",tu:""},contact_us:{ar:"تواصل معنا",en:"ContactUs",tu:""},site_map:{ar:"خريطة الموقع",en:"Sitemap",tu:""},conditions:{ar:"الشروط والاحكام",en:"Terms & Conditions",tu:""},searches:{ar:"أبحاث",en:"Market Research",tu:""},big_photo_upload:{ar:"مساحه الصوره المرفوعه اكبر من 2 ميجا",en:"size of photo uploaded is more than 2 mega",tu:""},upload_good_image:{ar:"ارفع صورة صحيحة",en:"Upload good image",tu:""},big_photo_upload_error_preview:{ar:"لن نستطع من عرض الصور التي مساحتها اكبر من 2 ميجا",en:"we cant preview photo uploaded that size is more than 2 mega",tu:""},you_exceed_number_of_uploaded:{ar:"لقد تجاوزت عدد الصور المسموح به للرفع",en:"you exceed number of photos uploaded",tu:""},added_to_fav:{ar:"تم الأضافه الي المفضلة بنجاح",en:"added to favourite successfully",tu:""},removed_from_fav:{ar:"تمت الأزالة من المفضلة بنجاح",en:"removed from favourite successfully",tu:""},do_you_need_help:{ar:"هل تحتاج الي مساعده",en:"Do you need help",tu:""},registered_at_date:{ar:"سجل في تاريخ",en:"Registered at date",tu:""},request_contact:{ar:"طلب اتصال",en:"Request contact",tu:""},personal_info:{ar:"حسابي",en:"My Account",tu:""},select_status:{ar:"اختر الحالة",en:"Select Status",tu:""},live_listings:{ar:"نشطة",en:"Live",tu:""},rejected_listings:{ar:"مرفوضة",en:"Rejected",tu:""},expired_listings:{ar:"منتهية",en:"Expired",tu:""},pending_listings:{ar:"معلقة",en:"Pending",tu:""},payment_done:{ar:"تم الدفع",en:"payment done",tu:""},pending:{ar:"معلقة",en:"pending",tu:""},statistics:{ar:"احصائياتي",en:"Statistics",tu:""},my_favourite:{ar:"المفضلة",en:"Favourite",tu:""},my_orders:{ar:"مشترياتي",en:"Orders",tu:""},last_quotations:{ar:"طلباتي السابقة",en:"Previous transactions",tu:""},my_sales:{ar:"مبيعاتي",en:"Sales",tu:""},quotations:{ar:"طلب تسعير جديد",en:"New quotation request",tu:""},vendor_pricing:{ar:"ملفات التسعير",en:"Quotations",tu:""},my_notes:{ar:"ملاحظاتي",en:"My Notes",tu:""},notifications:{ar:"الأشعارات",en:"notifications",tu:""},settings:{ar:"الاعدادت",en:"settings",tu:""},personalinfo:{ar:"بيانتي الشخصية",en:"Personal Info",tu:""},added_to_fav_successfully:{ar:"تم الأضافة الي المفضلة بنجاح",en:"added to favourite successfully",tu:""},removed_from_fav_successfully:{ar:"تمت الأزالة من المفضلة بنجاح",en:"removed from favourite successfully",tu:""},about_us:{ar:"عن المنصة",en:"who us",tu:""},please_contact_with_this_number:{ar:"برجاء التواصل مع الرقم",en:"please contact with this number",tu:""},contact_with_us:{ar:"يمكنك التواصل معنا هنا",en:"you can contact with us",tu:""},sale:{ar:"بيع",en:"Sale"},share_this_link:{ar:"مشاركة هذا الرابط",en:"Share this link",tu:""},close:{ar:"اغلاق",en:"Close",tu:""},dashboard:{ar:"الاداره",en:"Dashboard"},users:{ar:"المستخدمين",en:"Users",tu:""},chart:{ar:"الإحصائيات",en:"Chart",tu:""},orders:{ar:"الطلبات",en:"Orders",tu:""},sales:{ar:"المبيعات",en:"Sales",tu:""},brands:{ar:"الأنواع",en:"brands",tu:""},products:{ar:"المنتجات",en:"Products",tu:""},countries:{ar:"الدول",en:"Countries"},governments:{ar:"المحافظات",en:"Governments"},cities:{ar:"المدن",en:"Cities"},areas:{ar:"المناطق",en:"Areas"},reports:{ar:"التقارير",en:"Reports",tu:""},client_support:{ar:"الدعم الفني",en:"client support",tu:""},timer:{ar:"ظبط المواعيد",en:"Timer",tu:""},see_statics:{ar:"رؤيه الاحصائيات",en:"See Statics",tu:""},see_details:{ar:"عرض التفاصيل",en:"See Details",tu:""},are_you_sure_about_approve:{ar:"هل انت متأكد من عملية الموافقة",en:"Are you sure from approving this request",tu:""},are_you_sure_about_delete:{ar:"هل انت متأكد من عملية المسح",en:"Are you sure from delete operation",tu:""},in_case_you_approved_listing_will_be_at_public:{ar:"في حالة الموافقة علي الطلب سيصبح هذا الطلب متاح يستطيع اي شخص رؤيتة",en:"In case you approved this request , the request will be available to any one to see it",tu:""},in_case_you_delete_you_cant_retrieve_it:{ar:"في حالة الموافقة علي طلب المسح لن تستطيع استرجاع البيانات مرة اخري",en:"In case you delete you cant retrieve data another time",tu:""},yes_iam_sure:{ar:"نعم انا متأكد",en:"yes iam sure",tu:""},cancel:{ar:"إلغاء",en:"Cancel",tu:""},because:{ar:"بسبب",en:"because"},approved_done:{ar:"تمت الموافقة",en:"Approved !",tu:""},deleted_done:{ar:"تم المسح",en:"Deleted !",tu:""},approved_done_successfully:{ar:"تمت عملية الموافقة بنجاح",en:"Approved done successfully",tu:""},deleted_done_successfully:{ar:"تمت عملية المسح بنجاح",en:"Deleted done successfully",tu:""},add_new_item:{ar:"إضافة عنصر جديد",en:"Add new Item",tu:""},update_new_item:{ar:"تعديل بيانات ",en:"update info of",tu:""},delete_item:{ar:"مسح",en:"delete",tu:""},cancel_request:{ar:"الغاء الطلب",en:"Cancel request",tu:""},cancelled_requests:{ar:"الطلبات الملغاة",en:"cancelled orders"},cancel_done:{ar:"تم الغاء الطلب",en:"Cancel request has been done",tu:""},upload_image:{ar:"أرفع صورة",en:"upload image",tu:""},upload_files:{ar:"رفع الملفات",en:"upload files",tu:""},upload_quotation_file:{ar:"ارفع ملف التسعيره",en:"upload quotation file",tu:""},upload_product_file:{ar:"ارفع ملف اضافه المنتجات",en:"upload file of upload products",tu:""},upload_images:{ar:"أرفع الصور",en:"upload images",tu:""},appearance:{ar:"عملية الظهور",en:"appearance",tu:""},actions:{ar:"الأوامر",en:"actions",tu:""},update_status_successfully:{ar:"تم تحديث الحالة بنجاح",en:"Status updated Successfully",tu:""},select_year:{ar:"أختر السنة",en:"Select year",tu:""},area:{ar:"منطقة",en:"Area",tu:""},city:{ar:"مدينة",en:"City",tu:""},government:{ar:"محافظة",en:"Government",tu:""},country:{ar:"دولة",en:"Country",tu:""},select_country:{ar:"اختر الدولة",en:"Select country",tu:""},select_government:{ar:"اختر المحافظة",en:"Select government",tu:""},select_city:{ar:"اختر المدينة",en:"Select city",tu:""},select_area:{ar:"اختر المنطقة",en:"Select area",tu:""},visible:{ar:"متاح",en:"visible",tu:""},not_visible:{ar:"غير متاح",en:"not visible",tu:""},save:{ar:"ارسال",en:"Send",tu:""},send:{ar:"ارسال",en:"Send",tu:""},name:{ar:"الأسم",en:"Name",tu:""},add_new_question:{ar:"أضف سؤال جديد",en:"Add new question",tu:""},filter:{ar:"فلترة",en:"Filter",tu:""},related_to:{ar:"تابعة ل",en:"Related to",tu:""},block:{ar:"محظور",en:"Block",tu:""},auto_publish:{ar:"النشر التلقائي",en:"Auto Publish",tu:""},yes:{ar:"نعم",en:"Yes",tu:""},no:{ar:"لا",en:"No",tu:""},leave_password:{ar:"أترك كلمة المرور فارغة في حالة عدم رغبتك في التعديل عليها",en:"",tu:""},press_here:{ar:"أضغط هنا",en:"Press Here",tu:""},press_here_to_preview_bill:{ar:"اضغط هنا لعرض الايصال",en:"press here to preview bill"},select_best_choice:{ar:"أختر من القائمة",en:"please select",tu:""},search_for_you_best:{ar:"ابحث عن ما يناسبك",en:"search about anything",tu:""},in:{ar:"في",en:"in",tu:""},for:{ar:"ل",en:"for ",tu:""},currency:{ar:"دولار",en:"dollar",tu:""},you_should_login:{ar:"من فضلك سجل دخول اولا",en:"You should login first",tu:""},register_as_seller:{ar:"سجل  كمورد",en:"Register as supplier",tu:""},seller_phone:{ar:"رقم تليفون البائع",en:"Phone Seller",tu:""},next:{ar:"التالي",en:"next",tu:""},prev:{ar:"السابق",en:"previous",tu:""},select_best_for_you:{ar:"اختر ما يناسبك",en:"Select what you want",tu:""},add_another_item:{ar:"اضافه عنصر جديد",en:"Add another item",tu:""},add_another_part_number:{ar:"اضافه رقم قطعة اخر",en:"Add another part number",tu:""},please_enter_all_required_data:{ar:"من فضلك ادخل قيم للبيانات الاجبارية",en:"Please enter all required inputs",tu:""},part_slabs_should_be_unit_of_packing:{ar:"لابد ان تكون اقل كميات لوضع لها اسعار معينه هي مضاعفات وحدات التعبئه مثل ",en:"quantities that related to prices should be multiplayer of unit of packing like ",tu:""},print_bill:{ar:"طباعه الفاتورة",en:"Print bill",tu:""},share:{ar:"اعاده توجيه للموردين",en:"send to vendors",tu:""},please_wait_until_finish_processing:{ar:"من فضلك انتظر حتي يتم اكتمال التحميل",en:"please wait until finish processing",tu:""},order_confirmed:{ar:"تم انهاء الطلب بنجاح",en:"order has been completed successfully",tu:""},all:{ar:"الجميع",en:"All",tu:""},sent_to_admin:{ar:"تم الارسال للادراة",en:"has been sent to admin",tu:""},sent_to_vendors:{ar:"تم الارسال للموردين",en:"sent to vendors"},vendors_reply:{ar:"تم الرد من الموردين",en:"vendors reply",tu:""},see_edits:{ar:"رؤيه سجل التعديلات",en:"See old update",tu:""},no_edits_history:{ar:"لا يوجد سجل تعديلات",en:"no update history"},agree_request:{ar:"الموافقه علي الطلب",en:"Approve quotation",tu:""},sent_agreement:{ar:"تم ارسال الموافقة",en:"agreement sent",tu:""},parts_from:{ar:"قطع من ",en:"Parts from ",tu:""},basic_value:{ar:"القيمة الاساسية",en:"Basic value",tu:""},export_selected:{ar:"الحصول علي ملف اكسل",en:"Get an excel file",tu:""},please_select_rows_to_export:{ar:"من فضلك اختر الصفوف المناسبة لعملية الاستيراد",en:"please select rows to export operation",tu:""},unit_price:{ar:"سعر الوحدة",en:"Unit price",tu:""},tax_percentage:{ar:"ضريبه القيمه المضافه (15%)",en:"tax percentage is 15% "},tax_number:{ar:"الرقم الضريبي",en:"VAT number"},cr_number:{ar:"رقم السجل التجاري",en:"CR number"},receipt_photo:{ar:"صورة الايصال",en:"Receipt photo",tu:""},upload_excel:{ar:"رفع ملف الاكسل",en:"upload excel file",tu:""},bank_document:{ar:"وثيقة  البنك",en:"Bank Document",tu:""},active_email:{ar:"لابد عليك من تفعيل الحساب الخاص بك من خلال رسالة البريد الالكتروني التي استلمتها خلال عمليه تسجيل مستخدم جديد",en:"You must activate your account through the email you received during the new user registration process"},send_verfication:{ar:"اعادة ارسال تفعيل الحساب مره اخري",en:"send activation again",tu:""},download_file:{ar:"تحميل الملف",en:"Download file",tu:""},not_reply_yet:{ar:"لم يتم الرد بعد",en:"Not reply yet",tu:""},newest_clients_requests:{ar:"طلبات العملاء",en:"Quotations requests",tu:""},in_progress:{ar:"قيد التنفيذ",en:"In progress"},supervisor:{ar:"مشرف",en:"Supervisor"},buyer:{ar:"مشتري",en:"Buyer"},seller:{ar:"بائع",en:"Seller"},visit_mkena:{ar:"موقع مكينة للتجزئة",en:"mkena retail"},error_in_price:{ar:"هناك خطأ في تحديد السعر حيث انك قمت بطلب كميه اقل من الحد المسموح له او تجاوزت اقصي كمية متاحة لك",en:"There is an error in determining the price as you have ordered less than the allowable amount or exceeded max quantity per transaction"},edit_my_quantity:{ar:"تعديل الكمية الخاصه بي",en:"update my quantity"},there_are_error_at_quantity_of_part_numbers:{ar:"هناك خطأ في الكمية التي طلبتها حيث انها اقل من الحد الادني او انك تجاوزت الكمية المتوفرة المسموح به لدي القطع الاتيه ",en:"There is an error in the quantity you ordered as it is less than the minimum allowed or you exceeded offered stock for the following part numbers "},initial_bill:{ar:"فاتورة مبدئية",en:"proforma invoice"},tax_bill:{ar:"فاتورة ضريبية",en:"Tax invoice"},client_name:{ar:"اسم العميل",en:"Client name",tu:""},phone_number:{ar:"رقم الهاتف",en:"Phone number",tu:""},address:{ar:"العنوان",en:"Address"},addresses:{ar:"العنواين",en:"Addresses"},select_address:{ar:"اختر عنوان الشحن",en:"Select your address delivery"},add_new_address:{ar:"اضافة عنوان جديد",en:"Add new address"},please_wait_seconds:{ar:"من فضلك انتظر لحظات ...",en:"Please wait seconds..."},total_part_number_price:{ar:"الأجمالى",en:"Sub-Total",tu:""},order_quantity_offer:{ar:"طلب كمية من هذا العرض",en:"order quantity form this offer"},this_order_made_from_offer_number:{ar:"هذا الطلب تم عن طريق عرض رقم ",en:"this order done from offer number "},rows_that_has_no_receipt:{ar:"عندما تري طلب باللون الرصاصي يضئ وينطفئ هذا تذكير لك بأن هذا الطلب لم يتم ارسال صورة ايصال ويلزم عليك في اسرع وقت ارسال صوره الايصال",en:"When you see a request in gray that turns on and off, this is a reminder to you that a copy of the receipt has not been sent to this request, and you must send a copy of the receipt as soon as possible"},wait_receipt:{ar:"في انتظار صورة الايصال",en:"wait receipt photo"},search_by:{ar:"ابحث عن طريق",en:"search by"},your_offer_no:{ar:"رقم العرض الخاص بك ",en:"Your Offer Number "},start_date:{ar:"يبدا في تاريخ ",en:"End date"},end_date:{ar:"ينتهي في تاريخ ",en:"End of date "},still_pending:{ar:"مازال مقيدا ",en:"Still pending"},terms_conditions:{ar:"الشروط والاحكام",en:"Terms and conditions"},quantity_shouldnt_exceed:{ar:"الكمية لا يجب ان تتعدي ",en:"Quantity can't exceed "},quantity_shouldnt_less_than:{ar:"الكمية لا يجب ان تقل عن ",en:"Quantity can't be less than "},wait_admin_reply_and_you_can_change_data:{ar:"يرجي انتظار رد الادارة بالرد عليك بالكميات و الاسعار المناسب و بعدها يمكنك التحكم في اختيار الكمية او جعل القيمه بصفر في حاله عدم رغبتك في الشراء",en:"Please wait for the management's response to respond to you with the appropriate quantities and prices, and then you can control the selection of the quantity or make the value zero in the event that you do not want to buy"},search_part_number_or_brand:{ar:"ابحث  برقم القطعه او  الماركة",en:"Search by part number or brand"},search_part_number_or_brand_or_price:{ar:"ابحث  برقم القطعه  او اسم القطعه او الماركة او الكميه",en:"Search by part number or part name or brand or quantity"},order_no:{ar:"رقم الطلب",en:"Order number"},order_info:{ar:"تفاصيل الطلب",en:"Order info"},order_status:{ar:"حالة الطلب",en:"Order status"},client_info:{ar:"تفاصيل العميل",en:"Client info"},mkena_address:{ar:"3511 طريق الأمير سلطان – حي الجوهرة الخبر 34434 – 9497, مبنى 61 مكتب رقم 2  ",en:"3511 Al Amir Sultan Road – Al Jawharah Dist Unit 61, Office No 2, Al Khubar 34434 - 9497 "},sudia:{ar:"المملكة العربية السعودية",en:"Kingdom of Saudi Arabia"},create_account_mkena_wholesale:{ar:"إنشاء حساب في موقع  مكينة",en:"Creating an Account in Mkena Website "},you_may_not:{ar:"لا يحق لك",en:"You may not"},access_mkena:{ar:"استخدام والوصول إلى محتوى وخدمات موقع مكينة",en:"Using and Accessing Mkena Website Content and Services"},you_agree_on:{ar:"انت توافق علي",en:"You agree to"},product_info:{ar:"معلومات المنتج",en:"Product Information"},product_availability:{ar:"توافر المنتج",en:"Product Availability"},prices_duties_taxes:{ar:"الأسعار والرسوم والضرائب",en:"Prices, Duties, and Taxes"},orders_and_payments:{ar:"الطلب و الدفع",en:"Order and Payments"},order_cancellation:{ar:"الغاء الطلب",en:"Order Cancellation"},delivery:{ar:"التسليم",en:"Delivery"},loss_or_damage_in_transit:{ar:"الفقدان او التلف اثناء النقل",en:"Loss or Damage in Transit"},variation:{ar:"إمكانية التعديل",en:"Variation"},entire_agreement:{ar:"الأتفاقية بالمجمل",en:"Entire Agreement"},law_jurisdiction_disputes:{ar:"القانون والولاية والنزاعات",en:"Law and Jurisdiction and Disputes"},registrations_authorizations:{ar:"التسجيلات والتراخيص",en:"Registrations and Authorizations"},customer_support:{ar:"مساندة العملاء",en:"Customer Support"}}}},methods:{switchWord:function(e){if(Object.keys(this.words).includes(e))return"tu"==this.$inertia.page.props.lang?this.words[e].en:this.words[e][this.$inertia.page.props.lang]}}};const r=(0,t(1900).Z)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"86deb63a",null).exports},3479:(e,a,t)=>{"use strict";t.d(a,{Z:()=>c});var n=t(8311),r=t.n(n);function s(e,a){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,a){if(!e)return;if("string"==typeof e)return i(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,a)}(e))||a&&e&&"number"==typeof e.length){t&&(e=t);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){l=!0,s=e},f:function(){try{o||null==t.return||t.return()}finally{if(l)throw s}}}}function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function o(e,a,t,n,r,s,i){try{var o=e[s](i),l=o.value}catch(e){return void t(e)}o.done?a(l):Promise.resolve(l).then(n,r)}var l,u;const d={name:"delete_item",methods:{delete_item:function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if("ar"==window.vm.$inertia.page.props.lang)var s="هل أنت متأكد من عملية المسح",i="نعم أنا متأكد",o="إلغاء";else s="are you sure from delete operation",i="yes",o="cancel";Swal.fire({title:s,icon:"info",showCancelButton:!0,confirmButtonColor:"#035397",cancelButtonColor:"#aaa",confirmButtonText:i,cancelButtonText:o}).then((function(s){s.isConfirmed&&axios.post("/deleteitem",{table:e,id:a}).then((function(e){"info"==e.data.data?Toast.fire({icon:"info",title:e.data.message[0]}):(Toast.fire({icon:"success",title:e.data.message[0]}),0!=r&&window.vm.$inertia.visit(r),""!=t&&(console.log($(t)),$(t).remove())),1==n&&$(".modal").modal("hide")}))}))},cancel_request:(l=r().mark((function e(a,t){var n,i,o,l,u,d,c,p,_=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.length>2&&void 0!==_[2]&&_[2],_.length>3&&void 0!==_[3]&&_[3],_.length>4&&void 0!==_[4]&&_[4],n={},i=s(this.handling_data.reasons);try{for(i.s();!(o=i.n()).done;)l=o.value,n[l.id]=l.name}catch(e){i.e(e)}finally{i.f()}return console.log(n),"ar"==window.vm.$inertia.page.props.lang?(u="هل أنت متأكد من عملية الغاء الطلب",d="اختر سبب الغاء الطلب"):(u="are you sure from cancel request",d="give reason to cancel order"),e.next=11,Swal.fire({title:u,input:"select",inputOptions:n,inputPlaceholder:d,showCancelButton:!0,inputValidator:function(e){return new Promise((function(e){e()}))}});case 11:c=e.sent,(p=c.value)&&axios.post("/quotations/cancel-request",{table:a,id:t,reason:p}).then((function(e){Toast.fire({icon:"success",title:e.data.message[0]})}));case 14:case"end":return e.stop()}}),e,this)})),u=function(){var e=this,a=arguments;return new Promise((function(t,n){var r=l.apply(e,a);function s(e){o(r,t,n,s,i,"next",e)}function i(e){o(r,t,n,s,i,"throw",e)}s(void 0)}))},function(e,a){return u.apply(this,arguments)})}};t(6247);const c=(0,t(1900).Z)(d,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports},7638:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});const n={name:"update_item",data:function(){return{item:null}},methods:{update_item:function(e){this.item=e}}};const r=(0,t(1900).Z)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"b1cbf9ae",null).exports},3654:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>p});var n=t(6063),r=t(6298),s=t(3479),i=t(7638),o=t(629);function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){d(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const c={name:"products",mixins:[r.Z,i.Z,s.Z],props:["keywords","main_title","handling_data"],data:function(){return{modal_data:[]}},computed:u({},(0,o.Se)({vuex_data:"categories_dash/get_data"})),methods:u(u(u({},(0,o.nv)({save_category:"categories_dash/save_category"})),(0,o.OI)({update_data:"categories_dash/update_data",inilaize_data:"categories_dash/inilalize_data"})),{},{initalize_data:function(){this.inilaize_data(this.handling_data.data)},add_specific_slab:function(){var e='<div class="slab input-has-delete">';e+=$(event.target).prev().find(".slab").html(),e+='<span><i class="ri-close-line delete-icon-input"></i></span></div>',$(".slabs").append(e)}}),mounted:function(){if("ar"==this.$inertia.page.props.lang)var e="https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json";else e="https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json";jQuery(document).ready((function(a){var t;t=a(".myTable").DataTable({language:{url:e},serverSide:!0,ajax:"/dashboard/paginate-orders",columns:[{data:"id"},{data:"brand"},{data:null}],columnDefs:[{targets:-1,render:function(e,a,t){return'<div class="actions"><span><i data-toggle="modal" data-target="#update_box" class="ri-edit-line"></i></span><span style="position:unset" class="delete delete-icon-input" no_parent="3"><i class="ri-close-line"></i></span></div>'}}],dom:"lBfrtip",buttons:["copy","csv","excel","print"]}),window.table_data=t}))},created:function(){this.initalize_data(),this.modal_data=Object.keys(this.handling_data.data_model)},components:{SideNavbarComponent:n.Z}};t(8953);const p=(0,t(1900).Z)(c,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"dashboard"},[t("side-navbar-component"),e._v(" "),t("div",{staticClass:"content users table-data-page"},[t("div",{staticClass:"container products-dashboard mb-4"},[t("p",{staticClass:"d-flex mb-3 align-items-center justify-content-between main-title-toggle"},[t("span",[e._v(e._s(e.main_title))]),e._v(" "),t("button",{staticClass:"btn black-btn btn-outline-primary",attrs:{"data-toggle":"modal","data-target":"#update_box"},on:{click:function(a){return e.update_item(null)}}},[e._v("\n                        "+e._s(e.switchWord("add_new_item"))+"\n                    ")])]),e._v(" "),e._m(0)])]),e._v(" "),t("div",{staticClass:"modal fade",attrs:{id:"update_box",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title",attrs:{id:"update_box_data"}},[e._v(e._s(null==e.item?e.switchWord("add_new_item"):e.switchWord("update_new_item")+e.item.ar_name))]),e._v(" "),e._m(1)]),e._v(" "),t("div",{staticClass:"modal-body"},[t("form",{attrs:{method:"post"},on:{submit:function(a){return a.preventDefault(),e.save_category.apply(null,arguments)}}},[null!=e.item?t("input",{attrs:{type:"hidden",name:"id"},domProps:{value:e.item.id}}):e._e(),e._v(" "),t("div",{staticClass:"form-group"},[null==e.item?t("img",{staticClass:"box-image",attrs:{src:"/images/users/default.png"}}):t("img",{staticClass:"box-image",attrs:{src:"/images/categories/"+e.item.image}})]),e._v(" "),e._l(e.modal_data,(function(a){return t("div",{key:a,staticClass:"form-group"},[t("label",[e._v(e._s(e.handling_data.data_model[a]))]),e._v(" "),t("input",{staticClass:"form-control",attrs:{name:a,required:-1==a.indexOf("tu")},domProps:{value:null!=e.item?e.item[a]:""}}),e._v(" "),t("p",{staticClass:"alert alert-danger"})])})),e._v(" "),t("div",{staticClass:"slabs save_product"},[t("div",{staticClass:"slab input-has-delete"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-6"},[t("div",{staticClass:"form-group"},[t("label",[e._v(e._s(e.keywords.min_quantity))]),e._v(" "),t("input",{staticClass:"form-control",attrs:{name:"min_quantity[]",required:""}})])]),e._v(" "),t("div",{staticClass:"col-6"},[t("div",{staticClass:"form-group"},[t("label",[e._v(e._s(e.keywords.price))]),e._v(" "),t("input",{staticClass:"form-control",attrs:{name:"price[]",required:""}})])])])])]),e._v(" "),t("button",{staticClass:"btn btn-outline-primary mb-3",attrs:{type:"button"},on:{click:e.add_specific_slab}},[e._v(e._s(e.keywords.add_specific_slab))]),e._v(" "),t("div",{staticClass:"form-group"},[t("div",{staticClass:"drag-drop-files"},[t("input",{staticClass:"preview-image",attrs:{type:"file",name:"image",accept:"image/*",selector:".modal-dialog img.box-image"}}),e._v(" "),t("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t("span",[e._v(e._s(e.switchWord("upload_image")))]),e._v(" "),e._m(2)])])]),e._v(" "),t("div",{staticClass:"form-group"},[t("input",{staticClass:"btn btn-primary",attrs:{type:"submit",name:"save"},domProps:{value:e.switchWord("save")}})])],2)]),e._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("\n                            "+e._s(e.switchWord("close"))+"\n                        ")])])])])])],1)}),[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"overflow-auto"},[t("table",{staticClass:"myTable table text-center table-bordered table-striped table-hover"},[t("thead",[t("tr",[t("td",[e._v("id")]),e._v(" "),t("td",[e._v("brand")]),e._v(" "),t("td",[e._v("actions")])])]),e._v(" "),t("tbody")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("span",[a("i",{staticClass:"ri-add-line"})])}],!1,null,"5a32c405",null).exports},6247:(e,a,t)=>{var n=t(4435);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,t(5346).Z)("7093795c",n,!0,{})},376:(e,a,t)=>{var n=t(7927);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,t(5346).Z)("b483109e",n,!0,{})},8953:(e,a,t)=>{var n=t(2610);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,t(5346).Z)("522545dc",n,!0,{})}}]);
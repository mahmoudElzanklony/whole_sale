(self.webpackChunkphpsocket=self.webpackChunkphpsocket||[]).push([[795],{4435:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(3645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,".swal2-container{z-index:1e+26}",""]);const s=r},7927:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(3645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,'.ar .orange_class[data-v-af6cb8ae]:hover,.ar .side-bar-nav ul li[data-v-af6cb8ae]:hover,.side-bar-nav ul .ar li[data-v-af6cb8ae]:hover{padding-right:10px}.ar .orange_class[data-v-af6cb8ae]:before,.ar .side-bar-nav ul li[data-v-af6cb8ae]:before,.side-bar-nav ul .ar li[data-v-af6cb8ae]:before{left:0}.ar .side-bar-nav[data-v-af6cb8ae]{right:0}.ar .side-bar-nav>span[data-v-af6cb8ae]{right:5px}.ar .side-bar-nav ul li a span[data-v-af6cb8ae]:first-of-type{margin-left:10px}.ar .side-bar-nav ul li.active[data-v-af6cb8ae]:before{left:0}.en .orange_class[data-v-af6cb8ae]:hover,.en .side-bar-nav ul li[data-v-af6cb8ae]:hover,.side-bar-nav ul .en li[data-v-af6cb8ae]:hover{padding-left:10px}.en .orange_class[data-v-af6cb8ae]:before,.en .side-bar-nav ul li[data-v-af6cb8ae]:before,.side-bar-nav ul .en li[data-v-af6cb8ae]:before{right:0}.en .side-bar-nav[data-v-af6cb8ae]{left:0}.en .side-bar-nav>span[data-v-af6cb8ae]{left:5px}.en .side-bar-nav ul li a span[data-v-af6cb8ae]:first-of-type{margin-right:10px}.en .side-bar-nav ul li.active[data-v-af6cb8ae]:before{right:0}.orange_class[data-v-af6cb8ae]:before,.side-bar-nav ul li[data-v-af6cb8ae]:before{content:"";position:absolute;height:0;transition:all .5s;background-color:#035397;width:4px}.orange_class[data-v-af6cb8ae]:hover:before,.side-bar-nav ul li[data-v-af6cb8ae]:hover:before{height:100%}.orange_class:hover span[data-v-af6cb8ae],.side-bar-nav ul li:hover span[data-v-af6cb8ae]{color:#035397}.side-bar-nav[data-v-af6cb8ae]{transition:all .5s;position:fixed;background-color:hsla(0,0%,93.3%,.2196078431372549);width:200px;height:100%;padding:0!important}.side-bar-nav>span[data-v-af6cb8ae]{position:absolute;top:14px;color:#03071e}.side-bar-nav .logo img[data-v-af6cb8ae]{padding-top:10px;width:115px;display:block;margin:auto}.side-bar-nav ul[data-v-af6cb8ae]{padding-top:50px;height:calc(100% - 50px);overflow:auto}.side-bar-nav ul li[data-v-af6cb8ae]{transition:all .5s;position:relative}.side-bar-nav ul li a[data-v-af6cb8ae]{display:flex;align-items:center;padding:5px}.side-bar-nav ul li a span[data-v-af6cb8ae]{color:#03071e}.side-bar-nav ul li.active span[data-v-af6cb8ae]{color:#035397}.side-bar-nav ul li.active[data-v-af6cb8ae]:before{content:"";position:absolute;transition:all .5s;background-color:#035397;width:4px;height:100%}.side-bar-nav ul li[data-v-af6cb8ae]:not(:last-of-type){border-bottom:1px solid #eee}.side-bar-nav.icons_only[data-v-af6cb8ae]{width:50px}.side-bar-nav.icons_only>span[data-v-af6cb8ae]{right:10px}.side-bar-nav.icons_only .logo img[data-v-af6cb8ae]{display:none}.side-bar-nav.icons_only ul li a[data-v-af6cb8ae]{align-items:center;justify-content:center}.side-bar-nav.icons_only ul li a span[data-v-af6cb8ae]:not(:first-of-type){display:none}',""]);const s=r},2159:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(3645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,".alert-danger[data-v-eaa721ea]{display:none}table .priv[data-v-eaa721ea]{border:1px solid #035397;padding:4px 8px;border-radius:10px;margin:3px 3px 10px;display:inline-block}.modal .privillages input input[data-v-eaa721ea]{width:17px;height:17px}",""]);const s=r},6063:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(1428),r=a(629);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const l={name:"SideNavbarComponent",mixins:[n.Z],computed:i({},(0,r.Se)({get_privillages_pages:"privillages/get_data"})),mounted:function(){var e=document.URL.split("/")[document.URL.split("/").length-1];$("ul").find('li[custom="'+e+'"]').addClass("active"),this.get_privillages()},methods:i(i({},(0,r.nv)({get_privillages:"privillages/get_privillages"})),{},{toggleSideNav:function(){$(event.target).parent().parent().toggleClass("icons_only"),$(event.target).parent().parent().hasClass("icons_only")?$(".dashboard .content").css("width",$(document).innerWidth()-50):$(".dashboard .content").css("width",$(document).innerWidth()-200)}})};a(376);const u=(0,a(1900).Z)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"side-bar-nav"},[a("span",{staticClass:"cursor-pointer"},["ar"==e.$page.props.lang?a("i",{staticClass:"ri-menu-3-line",on:{click:e.toggleSideNav}}):a("i",{staticClass:"ri-menu-2-line",on:{click:e.toggleSideNav}})]),e._v(" "),a("div",{staticClass:"logo"},[a("inertia-link",{attrs:{href:"/"}},[a("img",{attrs:{src:"/images/logo.png"}})])],1),e._v(" "),a("ul",e._l(e.get_privillages_pages,(function(t,n){return a("li",{attrs:{custom:t.privillage.en_name}},[a("inertia-link",{key:n,attrs:{href:"/dashboard/"+t.privillage.en_name.replace(" ","-").toLocaleLowerCase()}},[a("span",[a("i",{class:t.privillage.icon})]),e._v(" "),a("span",[e._v(e._s(t.privillage[e.$page.props.lang+"_name"].replace("-"," ")))]),e._v(" "),a("span")])],1)})),0)])}),[],!1,null,"af6cb8ae",null).exports},1428:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const n={name:"SwitchLangWord",data:function(){return{words:{Home:{ar:"الرئيسية",en:"Home",tu:""},Profile:{ar:"الملف الشخصي",en:"profile",tu:""},Search:{ar:"أبحث",en:"Search",tu:""},part_number_of_part_name:{ar:"رقم القطعة او اسم القطعة",en:"part number of part name",tu:""},Arabic_Language:{ar:"Arabic",en:"عربي",tu:""},English_Language:{ar:"English",en:"انجليزي",tu:""},Turkish_Language:{ar:"اللغة التركية",en:"Turkish Language",tu:""},Help:{ar:"مساعدة",en:"Help",tu:""},sign_in:{ar:"تسجيل دخول",en:"Sign in",tu:""},sign_up:{ar:"تسجيل حساب",en:"Sign up",tu:""},logout:{ar:"تسجيل خروج",en:"logout",tu:""},registered_from_date:{ar:"سجل منذ تاريخ ",en:"registered from date ",tu:""},activities:{ar:"نشاطاتي",en:"my activities",tu:""},add_ad:{ar:"تستطيع تصفح كل ما يخص قطع غيار السيارات وشراء ما تريد و اضافته الي المفضلة و اكثر ...",en:"You can browse everything related to auto parts, buy what you want, add it to your favorites, and more...",tu:""},my_offers:{ar:"عروضي",en:"my_offers",tu:""},offers:{ar:"عروض",en:"offers",tu:""},get_best_offers:{ar:"احصل على أفضل عروض برنداتك المفضلة  من مكان واحد ، فقط لعملاء مكينة جملة",en:"Get deals from your favorite brands, all at one place only for mkena wholesale customers",tu:""},website:{ar:"مكينة جملة",en:"Mkena wholesale",tu:""},footer_info:{ar:"نوفر افضل قطع الغيار بأفضل الاسعار يصلك في اي مكان تريده داخل و خارج المملكة العربية السعودية",en:"We provide the best spare parts at the best prices, delivered to you anywhere you want inside and outside the Kingdom of Saudi Arabia",tu:""},jobs:{ar:"وظائف",en:"Jobs",tu:""},common_questions:{ar:"الاسئلة الشائعة",en:"Common questions",tu:""},contact_us:{ar:"تواصل معنا",en:"ContactUs",tu:""},site_map:{ar:"خريطة الموقع",en:"Sitemap",tu:""},conditions:{ar:"الاحكام",en:"Terms",tu:""},searches:{ar:"أبحاث",en:"Market Research",tu:""},big_photo_upload:{ar:"مساحه الصوره المرفوعه اكبر من 2 ميجا",en:"size of photo uploaded is more than 2 mega",tu:""},upload_good_image:{ar:"ارفع صورة صحيحة",en:"Upload good image",tu:""},big_photo_upload_error_preview:{ar:"لن نستطع من عرض الصور التي مساحتها اكبر من 2 ميجا",en:"we cant preview photo uploaded that size is more than 2 mega",tu:""},you_exceed_number_of_uploaded:{ar:"لقد تجاوزت عدد الصور المسموح به للرفع",en:"you exceed number of photos uploaded",tu:""},added_to_fav:{ar:"تم الأضافه الي المفضلة بنجاح",en:"added to favourite successfully",tu:""},removed_from_fav:{ar:"تمت الأزالة من المفضلة بنجاح",en:"removed from favourite successfully",tu:""},do_you_need_help:{ar:"هل تحتاج الي مساعده",en:"Do you need help",tu:""},registered_at_date:{ar:"سجل في تاريخ",en:"Registered at date",tu:""},request_contact:{ar:"طلب اتصال",en:"Request contact",tu:""},personal_info:{ar:"حسابي",en:"My Account",tu:""},select_status:{ar:"اختر الحالة",en:"Select Status",tu:""},live_listings:{ar:"نشطة",en:"Live",tu:""},rejected_listings:{ar:"مرفوضة",en:"Rejected",tu:""},expired_listings:{ar:"منتهية",en:"Expired",tu:""},pending_listings:{ar:"معلقة",en:"Pending",tu:""},payment_done:{ar:"تم الدفع",en:"payment done",tu:""},pending:{ar:"معلقة",en:"pending",tu:""},statistics:{ar:"احصائياتي",en:"Statistics",tu:""},my_favourite:{ar:"المفضلة",en:"Favourite",tu:""},my_orders:{ar:"مشترياتي",en:"Orders",tu:""},last_quotations:{ar:"طلباتي السابقة",en:"Last quotations",tu:""},my_sales:{ar:"مبيعاتي",en:"Sales",tu:""},quotations:{ar:"طلب تسعير جديد",en:"new quotation",tu:""},vendor_pricing:{ar:"ملفات التسعير",en:"vendor pricing",tu:""},my_notes:{ar:"ملاحظاتي",en:"My Notes",tu:""},notifications:{ar:"الأشعارات",en:"notifications",tu:""},settings:{ar:"الاعدادت",en:"settings",tu:""},personalinfo:{ar:"بيانتي الشخصية",en:"Personal Info",tu:""},added_to_fav_successfully:{ar:"تم الأضافة الي المفضلة بنجاح",en:"added to favourite successfully",tu:""},removed_from_fav_successfully:{ar:"تمت الأزالة من المفضلة بنجاح",en:"removed from favourite successfully",tu:""},about_us:{ar:"عن المنصة",en:"who us",tu:""},please_contact_with_this_number:{ar:"برجاء التواصل مع الرقم",en:"please contact with this number",tu:""},contact_with_us:{ar:"يمكنك التواصل معنا هنا",en:"you can contact with us",tu:""},sale:{ar:"بيع",en:"Sale"},share_this_link:{ar:"مشاركة هذا الرابط",en:"Share this link",tu:""},close:{ar:"اغلاق",en:"Close",tu:""},dashboard:{ar:"الاداره",en:"Dashboard"},users:{ar:"المستخدمين",en:"Users",tu:""},chart:{ar:"الإحصائيات",en:"Chart",tu:""},orders:{ar:"الطلبات",en:"Orders",tu:""},sales:{ar:"المبيعات",en:"Sales",tu:""},brands:{ar:"الأنواع",en:"brands",tu:""},products:{ar:"المنتجات",en:"Products",tu:""},countries:{ar:"الدول",en:"Countries"},governments:{ar:"المحافظات",en:"Governments"},cities:{ar:"المدن",en:"Cities"},areas:{ar:"المناطق",en:"Areas"},reports:{ar:"التقارير",en:"Reports",tu:""},client_support:{ar:"الدعم الفني",en:"client support",tu:""},timer:{ar:"ظبط المواعيد",en:"Timer",tu:""},see_statics:{ar:"رؤيه الاحصائيات",en:"See Statics",tu:""},see_details:{ar:"عرض التفاصيل",en:"See Details",tu:""},are_you_sure_about_approve:{ar:"هل انت متأكد من عملية الموافقة",en:"Are you sure from approving this request",tu:""},are_you_sure_about_delete:{ar:"هل انت متأكد من عملية المسح",en:"Are you sure from delete operation",tu:""},in_case_you_approved_listing_will_be_at_public:{ar:"في حالة الموافقة علي الطلب سيصبح هذا الطلب متاح يستطيع اي شخص رؤيتة",en:"In case you approved this request , the request will be available to any one to see it",tu:""},in_case_you_delete_you_cant_retrieve_it:{ar:"في حالة الموافقة علي طلب المسح لن تستطيع استرجاع البيانات مرة اخري",en:"In case you delete you cant retrieve data another time",tu:""},yes_iam_sure:{ar:"نعم انا متأكد",en:"yes iam sure",tu:""},cancel:{ar:"إلغاء",en:"Cancel",tu:""},approved_done:{ar:"تمت الموافقة",en:"Approved !",tu:""},deleted_done:{ar:"تم المسح",en:"Deleted !",tu:""},approved_done_successfully:{ar:"تمت عملية الموافقة بنجاح",en:"Approved done successfully",tu:""},deleted_done_successfully:{ar:"تمت عملية المسح بنجاح",en:"Deleted done successfully",tu:""},add_new_item:{ar:"إضافة عنصر جديد",en:"Add new Item",tu:""},update_new_item:{ar:"تعديل بيانات ",en:"update info of",tu:""},delete_item:{ar:"مسح",en:"delete",tu:""},cancel_request:{ar:"الغاء الطلب",en:"Cancel request",tu:""},cancel_done:{ar:"تم الغاء الطلب",en:"Cancel request has been done",tu:""},upload_image:{ar:"أرفع صورة",en:"upload image",tu:""},upload_files:{ar:"رفع الملفات",en:"upload files",tu:""},upload_quotation_file:{ar:"ارفع ملف التسعيره",en:"upload quotation file",tu:""},upload_product_file:{ar:"ارفع ملف اضافه المنتجات",en:"upload file of upload products",tu:""},upload_images:{ar:"أرفع الصور",en:"upload images",tu:""},appearance:{ar:"عملية الظهور",en:"appearance",tu:""},actions:{ar:"الأوامر",en:"actions",tu:""},update_status_successfully:{ar:"تم تحديث الحالة بنجاح",en:"Status updated Successfully",tu:""},select_year:{ar:"أختر السنة",en:"Select year",tu:""},area:{ar:"منطقة",en:"Area",tu:""},city:{ar:"مدينة",en:"City",tu:""},government:{ar:"محافظة",en:"Government",tu:""},country:{ar:"دولة",en:"Country",tu:""},select_country:{ar:"اختر الدولة",en:"Select country",tu:""},select_government:{ar:"اختر المحافظة",en:"Select government",tu:""},select_city:{ar:"اختر المدينة",en:"Select city",tu:""},select_area:{ar:"اختر المنطقة",en:"Select area",tu:""},visible:{ar:"متاح",en:"visible",tu:""},not_visible:{ar:"غير متاح",en:"not visible",tu:""},save:{ar:"ارسال",en:"Send",tu:""},send:{ar:"ارسال",en:"Send",tu:""},name:{ar:"الأسم",en:"Name",tu:""},add_new_question:{ar:"أضف سؤال جديد",en:"Add new question",tu:""},filter:{ar:"فلترة",en:"Filter",tu:""},related_to:{ar:"تابعة ل",en:"Related to",tu:""},block:{ar:"محظور",en:"Block",tu:""},auto_publish:{ar:"النشر التلقائي",en:"Auto Publish",tu:""},yes:{ar:"نعم",en:"Yes",tu:""},no:{ar:"لا",en:"No",tu:""},leave_password:{ar:"أترك كلمة المرور فارغة في حالة عدم رغبتك في التعديل عليها",en:"",tu:""},press_here:{ar:"أضغط هنا",en:"Press Here",tu:""},press_here_to_preview_bill:{ar:"اضغط هنا لعرض الايصال",en:"press here to preview bill"},select_best_choice:{ar:"أختر من القائمة",en:"please select",tu:""},search_for_you_best:{ar:"ابحث عن ما يناسبك",en:"search about anything",tu:""},in:{ar:"في",en:"in",tu:""},for:{ar:"ل",en:"for ",tu:""},currency:{ar:"دولار",en:"dollar",tu:""},you_should_login:{ar:"من فضلك سجل دخول اولا",en:"You should login first",tu:""},register_as_seller:{ar:"سجل  كمورد",en:"Register as supplier",tu:""},seller_phone:{ar:"رقم تليفون البائع",en:"Phone Seller",tu:""},next:{ar:"التالي",en:"next",tu:""},prev:{ar:"السابق",en:"previous",tu:""},select_best_for_you:{ar:"اختر ما يناسبك",en:"Select what you want",tu:""},add_another_item:{ar:"اضافه عنصر جديد",en:"Add another item",tu:""},please_enter_all_required_data:{ar:"من فضلك ادخل قيم للبيانات الاجبارية",en:"Please enter all required inputs",tu:""},part_slabs_should_be_unit_of_packing:{ar:"لابد ان تكون اقل كميات لوضع لها اسعار معينه هي مضاعفات وحدات التعبئه مثل ",en:"quantities that related to prices should be multiplayer of unit of packing like ",tu:""},print_bill:{ar:"طباعه الفاتورة",en:"Print bill",tu:""},share:{ar:"اعاده توجيه للموردين",en:"send to vendors",tu:""},please_wait_until_finish_processing:{ar:"من فضلك انتظر حتي يتم اكتمال التحميل",en:"please wait until finish processing",tu:""},order_confirmed:{ar:"تم انهاء الطلب بنجاح",en:"order has been done successfully",tu:""},all:{ar:"الجميع",en:"All",tu:""},sent_to_admin:{ar:"تم الارسال للادراة",en:"has been sent to admin",tu:""},sent_to_vendors:{ar:"تم الارسال للموردين",en:"sent to vendors"},vendors_reply:{ar:"تم الرد من الموردين",en:"vendors reply",tu:""},see_edits:{ar:"رؤيه سجل التعديلات",en:"See old update",tu:""},no_edits_history:{ar:"لا يوجد سجل تعديلات",en:"no update history"},agree_request:{ar:"الموافقه علي الطلب",en:"agree request",tu:""},sent_agreement:{ar:"تم ارسال الموافقة",en:"agreement sent",tu:""},parts_from:{ar:"قطع من ",en:"Parts from ",tu:""},basic_value:{ar:"القيمة الاساسية",en:"Basic value",tu:""},export_selected:{ar:"الحصول علي ملف اكسل",en:"Get an excel file",tu:""},please_select_rows_to_export:{ar:"من فضلك اختر الصفوف المناسبة لعملية الاستيراد",en:"please select rows to export operation",tu:""},unit_price:{ar:"سعر الوحدة",en:"Unit price",tu:""},tax_percentage:{ar:"ضريبه القيمه المضافه (15%)",en:"tax percentage is 15% "},tax_number:{ar:"الرقم الضريبي",en:"VAT number"},receipt_photo:{ar:"صورة الايصال",en:"Receipt photo",tu:""},upload_excel:{ar:"رفع ملف الاكسل",en:"upload excel file",tu:""},bank_document:{ar:"وثيقة  البنك",en:"Bank Document",tu:""},active_email:{ar:"لابد عليك من تفعيل الحساب الخاص بك من خلال رسالة البريد الالكتروني التي استلمتها خلال عمليه تسجيل مستخدم جديد",en:"You must activate your account through the email you received during the new user registration process"},send_verfication:{ar:"اعادة ارسال تفعيل الحساب مره اخري",en:"send activation again",tu:""},download_file:{ar:"تحميل الملف",en:"Download file",tu:""},not_reply_yet:{ar:"لم يتم الرد بعد",en:"Not reply yet",tu:""},newest_clients_requests:{ar:"أحدث طلبات العملاء",en:"Newest clients requests",tu:""},in_progress:{ar:"قيد التنفيذ",en:"In progress"},supervisor:{ar:"مشرف",en:"Supervisor"},buyer:{ar:"مشتري",en:"Buyer"},seller:{ar:"بائع",en:"Seller"},visit_mkena:{ar:"موقع مكينة للتجزئة",en:"mkena retail"},error_in_price:{ar:"هناك خطأ في تحديد السعر حيث انك قمت بطلب كميه اقل من الحد المسموح له",en:"There is an error in determining the price as you have ordered less than the allowable amount"},edit_my_quantity:{ar:"تعديل الكمية الخاصه بي",en:"update my quantity"},there_are_error_at_quantity_of_part_numbers:{ar:"هناك خطأ في الكمية التي طلبتها حيث انها اقل من الحد الادني المسموح به لدي القطع الاتيه ",en:"There is an error in the quantity you ordered as it is less than the minimum allowed for the following part numbers "},initial_bill:{ar:"فاتورة مبدئية",en:"proforma invoice"},tax_bill:{ar:"فاتورة ضريبية",en:"Tax invoice"},client_name:{ar:"اسم العميل",en:"Client name",tu:""},phone_number:{ar:"رقم الهاتف",en:"Phone number",tu:""},please_wait_seconds:{ar:"من فضلك انتظر لحظات ...",en:"Please wait seconds..."},total_part_number_price:{ar:"مجموع اسعار القطع",en:"total price of part numbers",tu:""}}}},methods:{switchWord:function(e){if(Object.keys(this.words).includes(e))return"tu"==this.$inertia.page.props.lang?this.words[e].en:this.words[e][this.$inertia.page.props.lang]}}};const r=(0,a(1900).Z)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"2bba1f68",null).exports},3461:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const n={name:"delete_item",methods:{delete_item:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if("ar"==window.vm.$inertia.page.props.lang)var s="هل أنت متأكد من عملية المسح",i="نعم أنا متأكد",o="إلغاء";else s="are you sure from delete operation",i="yes",o="cancel";Swal.fire({title:s,icon:"info",showCancelButton:!0,confirmButtonColor:"#035397",cancelButtonColor:"#aaa",confirmButtonText:i,cancelButtonText:o}).then((function(s){s.isConfirmed&&axios.post("/deleteitem",{table:e,id:t}).then((function(e){"info"==e.data.data?Toast.fire({icon:"info",title:e.data.message[0]}):(Toast.fire({icon:"success",title:e.data.message[0]}),0!=r&&window.vm.$inertia.visit(r),""!=a&&(console.log($(a)),$(a).remove())),1==n&&$(".modal").modal("hide")}))}))},cancel_request:function(e,t){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("ar"==window.vm.$inertia.page.props.lang)var n="هل أنت متأكد من عملية الغاء الطلب",r="نعم أنا متأكد",s="إلغاء";else n="are you sure from cancel request",r="yes",s="cancel";Swal.fire({title:n,icon:"info",showCancelButton:!0,confirmButtonColor:"#035397",cancelButtonColor:"#aaa",confirmButtonText:r,cancelButtonText:s}).then((function(n){n.isConfirmed&&axios.post("/quotations/cancel-request",{table:e,id:t}).then((function(e){Toast.fire({icon:"success",title:e.data.message[0]}),1==a&&$(".modal").modal("hide"),window.vm.$inertia.visit(document.URL)}))}))}}};a(6247);const r=(0,a(1900).Z)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports},6618:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const n={name:"tableData",mounted:function(){if("ar"==this.$inertia.page.props.lang)var e="https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json",t="الحصول علي ملف بصيغة اكسل";else e="https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json",t="get an excel file";jQuery(document).ready((function(a){var n;n=a(".myTable").DataTable({stateSave:!0,bDestroy:!0,language:{url:e},dom:"lBfrtip",buttons:["copy","csv","excel","print",{extend:"excel",text:t,exportOptions:{columns:":visible:not(.not-exported)",rows:".selected"}}]}),window.table_data=n}))}};const r=(0,a(1900).Z)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"30e95f86",null).exports},795:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var n=a(6063),r=a(6618),s=a(1428),i=a(3461),o=a(629);function l(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==a.return||a.return()}finally{if(o)throw s}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const _={name:"supervisors",mixins:[r.Z,s.Z,i.Z],props:["keywords","handling_data"],data:function(){return{modal_data:[],item:null}},computed:c({},(0,o.Se)({data_vuex:"users_dash/get_data"})),methods:c(c({update_item:function(e){var t=this;this.item=e;var a,n=l($('.modal input[type="checkbox"]'));try{var r=function(){var e=a.value;null!=t.item.privileges.find((function(t){return t.id==$(e).attr("value")}))?$(e).prop("checked",!0):$(e).prop("checked",!1)};for(n.s();!(a=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}}},(0,o.OI)({inilalize:"users_dash/inilaize"})),(0,o.nv)({save_supervisor:"users_dash/save_user"})),created:function(){this.modal_data=Object.keys(this.handling_data.data_model),this.inilalize(this.handling_data.data.supervisors)},components:{SideNavbarComponent:n.Z}};a(7413);const v=(0,a(1900).Z)(_,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard"},[a("side-navbar-component"),e._v(" "),a("div",{staticClass:"content users table-data-page"},[a("div",{staticClass:"container mt-4 mb-4"},[a("p",{staticClass:"d-flex mb-3 align-items-center justify-content-between main-title-toggle"},[a("span",[e._v(e._s(e.keywords.main_title))]),e._v(" "),a("button",{staticClass:"btn black-btn btn-outline-primary",attrs:{"data-toggle":"modal","data-target":"#update_users"},on:{click:function(t){return e.update_item(null)}}},[e._v("\n                    "+e._s(e.switchWord("add_new_item"))+"\n                ")])]),e._v(" "),a("div",{staticClass:"overflow-auto"},[a("table",{staticClass:"myTable table text-center table-bordered table-striped table-hover"},[a("thead",[a("tr",e._l(e.handling_data.table_head_keys,(function(t){return a("td",{key:t},[e._v("\n                            "+e._s(t)+"\n                        ")])})),0)]),e._v(" "),a("tbody",e._l(e.data_vuex,(function(t,n){return a("tr",{key:n,class:"tr_"+t.id},[a("td",[a("img",{attrs:{src:"/images/users/"+t.image}})]),e._v(" "),a("td",[e._v(e._s(t.username))]),e._v(" "),a("td",[e._v(e._s(t.email))]),e._v(" "),a("td",[e._v(e._s(t.phone))]),e._v(" "),a("td",[e._v(e._s(t.country.name))]),e._v(" "),a("td",e._l(t.privileges,(function(t,n){return a("span",{key:n,staticClass:"priv"},[e._v("\n                                "+e._s(t[e.$page.props.lang+"_name"])+"\n                            ")])})),0),e._v(" "),a("td",{staticClass:"actions"},[a("span",[a("i",{staticClass:"ri-edit-line",attrs:{"data-toggle":"modal","data-target":"#update_users"},on:{click:function(a){return e.update_item(t)}}})]),e._v(" "),a("span",{staticClass:"delete"},[a("i",{staticClass:"ri-close-line",on:{click:function(a){return e.delete_item("users",t.id,".tr_"+t.id)}}})])])])})),0)])])])]),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"update_users",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[null!=e.item?a("h5",{staticClass:"modal-title",attrs:{id:"update_users_box"}},[e._v("\n                        "+e._s(e.keywords.update_user+" "+e.item.username)+"\n                    ")]):a("h5",{staticClass:"modal-title",attrs:{id:"update_users_box_"}},[e._v("\n                        "+e._s(e.switchWord("add_new_item"))+"\n                    ")]),e._v(" "),e._m(0)]),e._v(" "),a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.save_supervisor.apply(null,arguments)}}},[null!=e.item?a("input",{attrs:{type:"hidden",name:"id"},domProps:{value:e.item.id}}):e._e(),e._v(" "),a("div",{staticClass:"form-group"},[a("img",{staticClass:"box-image",attrs:{src:"/images/users/"+(null!=e.item?e.item.image:"default.png")}})]),e._v(" "),e._l(e.modal_data,(function(t){return a("div",{key:t,staticClass:"form-group input-icon"},[a("label",[e._v(e._s(e.handling_data.data_model[t]))]),e._v(" "),"country_id"==t?a("select",{staticClass:"form-control",attrs:{name:t}},[a("option",{attrs:{value:""}},[e._v(e._s(e.switchWord("select_best_choice")))]),e._v(" "),e._l(e.handling_data.countries,(function(n,r){return a("option",{key:r,domProps:{selected:null!=e.item&&e.item[t]==n.id,value:n.id}},[e._v(e._s(n.name))])}))],2):"privileges"!=t?a("input",{staticClass:"form-control",attrs:{name:t,type:"password"==t?"password":"text",placeholder:"password"==t?e.switchWord("leave_password"):"",required:"password"!=t},domProps:{value:null!=e.item?e.item[t]:""}}):a("div",{staticClass:"privillages"},[a("div",{staticClass:"row"},e._l(e.handling_data.data.privileges,(function(t,n){return a("div",{key:n,staticClass:"col-lg-4 col-md-6 mb-2"},[a("div",[a("input",{attrs:{name:"privillage[]",type:"checkbox"},domProps:{value:t.id,checked:1==(null!=e.item&&null!=e.item.privileges.find((function(e){return e.id==t.id})))&&"checked"}}),e._v(" "),a("p",{staticClass:"d-inline"},[e._v(e._s(t.name))])])])})),0)]),e._v(" "),a("p",{staticClass:"alert alert-danger"}),e._v(" "),"password"==t?a("span",[a("i",{staticClass:"ri-eye-line show_password cursor-pointer"})]):e._e()])})),e._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"drag-drop-files"},[a("input",{staticClass:"preview-image",attrs:{type:"file",name:"image",accept:"image/*",selector:".modal-dialog img.box-image"}}),e._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[a("span",[e._v(e._s(e.keywords.upload_image))]),e._v(" "),e._m(1)])])]),e._v(" "),a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",name:"save"},domProps:{value:e.switchWord("save")}})])],2)]),e._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("\n                        "+e._s(e.switchWord("close"))+"\n                    ")])])])])])],1)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("i",{staticClass:"ri-add-line"})])}],!1,null,"eaa721ea",null).exports},1900:(e,t,a)=>{"use strict";function n(e,t,a,n,r,s,i,o){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=a,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=l):r&&(l=o?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var d=u.render;u.render=function(e,t){return l.call(t),d(e,t)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:u}}a.d(t,{Z:()=>n})},6247:(e,t,a)=>{var n=a(4435);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,a(5346).Z)("7093795c",n,!0,{})},376:(e,t,a)=>{var n=a(7927);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,a(5346).Z)("b483109e",n,!0,{})},7413:(e,t,a)=>{var n=a(2159);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,a(5346).Z)("3cb55192",n,!0,{})}}]);
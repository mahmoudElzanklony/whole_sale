<template>

</template>

<script>
export default {
    name: "SwitchLangWord",
    data:function (){
      return {
          words:{
              // navbar words
              Home:{
                ar:'الرئيسية',
                en:'Home',
                tu:'',
              },
              Profile:{
                ar:'الملف الشخصي',
                en:'profile',
                tu:'',
              },
              Search:{
                  ar:'أبحث',
                  en:'Search',
                  tu:'',
              },
              part_number_of_part_name:{
                 ar:'رقم القطعة او اسم القطعة',
                 en:'part number of part name',
                 tu:'',
              },
              Know:{
                  ar:'أعرف',
                  en:'Know',
                  tu:'',
              },
              List:{
                  ar:'أعلن',
                  en:'List',
                  tu:'',
              },
              Arabic_Language:{
                  ar:'اللغة العربية',
                  en:'Arabic Language',
                  tu:'',
              },
              English_Language:{
                  ar:'اللغة الأنجليزية',
                  en:'English Language',
                  tu:'',
              },
              Turkish_Language:{
                  ar:'اللغة التركية',
                  en:'Turkish Language',
                  tu:'',
              },
              Help:{
                  ar:'مساعدة',
                  en:'Help',
                  tu:'',
              },
              Blue:{
                  ar:'الأزرق',
                  en:'Blue',
                  tu:'',
              },
              buildings:{
                  ar:'عقارات',
                  en:'Buildings',
                  tu:'',
              },
              ad_points:{
                  ar:'نقاط الاعلان',
                  en:'Ad Points',
                  tu:'',
              },
              Componds:{
                  ar:'كومبودات',
                  en:'Componds',
                  tu:'',
              },
              Beds:{
                  ar:'مساكن',
                  en:'Bed',
                  tu:'',
              },
              rate_building:{
                  ar:'تقييم عقاري',
                  en:'Rate Building',
                  tu:'',
              },
              building_prices:{
                  ar:'اسعار العقارات',
                  en:'Rate Building',
                  tu:'',
              },
              ask_people_area:{
                  ar:'أسئل أهل المنطه',
                  en:'Ask People area',
                  tu:'',
              },
              premium_people:{
                  ar:'وساط متميزون',
                  en:'Top Agent',
                  tu:'',
              },
              real_state_index:{
                  ar:'المؤشر العقاري',
                  en:'real state index',
                  tu:'',
              },
              public_advice:{
                  ar:'نصائح عامة',
                  en:'public advice',
                  tu:'',
              },
              List_your_property:{
                  ar:'أعلن عن عقارك',
                  en:'List Your Property',
                  tu:'',
              },
              List_Companies_properties:{
                  ar:'أعلن عن عقار شركتك',
                  en:'List Companies properties',
                  tu:'',
              },
              sign_in:{
                  ar:'تسجيل دخول',
                  en:'Sign in',
                  tu:'',
              },
              sign_up:{
                  ar:'تسجيل حساب',
                  en:'Sign up',
                  tu:'',
              },
              logout:{
                  ar:'تسجيل خروج',
                  en:'logout',
                  tu:'',
              },
              registered_from_date:{
                 ar:'سجل منذ تاريخ ',
                 en:'registered from date ',
                 tu:'',
              },
              activities:{
                 ar:'نشاطاتي',
                 en:'my activities',
                 tu:'',
              },
              add_ad:{
                  ar:'تستطيع تصفح كل ما يخص قطع غيار السيارات وشراء ما تريد و اضافته الي المفضلة و اكثر ...',
                  en:'You can browse everything related to auto parts, buy what you want, add it to your favorites, and more...',
                  tu:'',
              },
              my_offers:{
                  ar:'عروضي',
                  en:'my_offers',
                  tu:'',
              },
              get_best_offers:{
                  ar:'احصل على أفضل عروض برنداتك المفضلة  من مكان واحد ، فقط لعملاء هولسيل',
                  en:'Get deals from your favorite brands, all at one place only for wholesale customers',
                  tu:'',
              },
              // footer words
              website:{
                  ar:'هولسيل',
                  en:'Wholesale',
                  tu:'',
              },
              footer_info:{
                  ar:'نوفر افضل قطع الغيار بأفضل الاسعار يصلك في اي مكان تريدة داخل و خارج المملكة العربية السعودية' ,
                  en:'We provide the best spare parts at the best prices, delivered to you anywhere you want inside and outside the Kingdom of Saudi Arabia',
                  tu:'',
              },
              jobs:{
                  ar:'وظائف',
                  en:'Jobs',
                  tu:'',
              },
              contact_us:{
                  ar:'تواصل معنا',
                  en:'ContactUs',
                  tu:'',
              },
              site_map:{
                  ar:'خريطة الموقع',
                  en:'Sitemap',
                  tu:'',
              },
              conditions:{
                  ar:'الاحكام',
                  en:'Terms',
                  tu:'',
              },
              searches:{
                  ar:'أبحاث',
                  en:'Market Research',
                  tu:'',
              },
              big_photo_upload:{
                  ar:'مساحه الصوره المرفوعه اكبر من 2 ميجا',
                  en:'size of photo uploaded is more than 2 mega',
                  tu:'',
              },
              upload_good_image:{
                ar:'ارفع صورة صحيحة',
                en:'Upload good image',
                tu:'',
              },
              big_photo_upload_error_preview:{
                  ar:'لن نستطع من عرض الصور التي مساحتها اكبر من 2 ميجا',
                  en:'we cant preview photo uploaded that size is more than 2 mega',
                  tu:'',
              },
              you_exceed_number_of_uploaded:{
                  ar:'لقد تجاوزت عدد الصور المسموح به للرفع',
                  en:'you exceed number of photos uploaded',
                  tu:'',
              },
              added_to_fav:{
                  ar:'تم الأضافه الي المفضلة بنجاح',
                  en:'added to favourite successfully',
                  tu:'',
              },
              removed_from_fav:{
                  ar:'تمت الأزالة من المفضلة بنجاح',
                  en:'removed from favourite successfully',
                  tu:'',
              },
              do_you_need_help:{
                  ar:'هل تحتاج الي مساعده',
                  en:'Do you need help',
                  tu:'',
              },
              to_get_best_results:{
                  ar:'للحصول على نتائج اسرع و اكثر ، نرشح لك أن نتواصل مع أكبر المكاتب العقارية - لمساعدتك في العثور على ماتبحث عنه .',
                  en:'To get faster and more results, we recommend that you contact the largest real estate offices - to help you find what you are looking for.',
                  tu:'',
              },
              registered_at_date:{
                  ar:'سجل في تاريخ',
                  en:'Registered at date',
                  tu:'',
              },
              ads:{
                ar:'اعلانات',
                en:'Ads',
                tu:'',
              },
              properties:{
                  ar:'عقارات مصر',
                  en:'Properties',
                  tu:'',
              },
              request_contact:{
                  ar:'طلب اتصال',
                  en:'Request contact',
                  tu:'',
              },
              personal_info:{
                  ar:'حسابي',
                  en:'My Account',
                  tu:'',
              },
              my_listings:{
                  ar:'عقاراتي',
                  en:'My Listings',
                  tu:'',
              },
              select_status:{
                  ar:'اختر الحالة',
                  en:'Select Status',
                  tu:'',
              },
              live_listings:{
                  ar:'نشطة',
                  en:'Live',
                  tu:'',
              },
              rejected_listings:{
                  ar:'مرفوضة',
                  en:'Rejected',
                  tu:'',
              },
              expired_listings:{
                  ar:'منتهية',
                  en:'Expired',
                  tu:'',
              },
              pending_listings:{
                  ar:'معلقة',
                  en:'Pending',
                  tu:'',
              },
              payment_done:{
                 ar:'تم الدفع',
                 en:'payment done',
                 tu:'',
              },
              cash:{
                ar:'كاش',
                en:'cash',
                tu:'',
              },
              installment:{
                 ar:'تقسيط',
                 en:'installment',
                 tu:'',
              },
              one_payment:{
                 ar:'دفعة واحدة',
                 en:'one payment',
                 tu:'',
              },
              two_payments:{
                  ar:'دفعتان',
                  en:'two payments',
                  tu:'',
              },
              three_payments:{
                  ar:'ثلاث دفعات',
                  en:'three payments',
                  tu:'',
              },
              four_payments:{
                  ar:'أربع دفعات',
                  en:'four payments',
                  tu:'',
              },
              pending:{
                  ar:'معلقة',
                  en:'pending',
                  tu:'',
              },
              my_balance:{
                  ar:'رصيدي',
                  en:'Credit',
                  tu:'',
              },
              charge_credit:{
                  ar:'شحن رصيد',
                  en:'charge credit',
                  tu:'',
              },

              statistics:{
                  ar:'احصائياتي',
                  en:'Statistics',
                  tu:'',
              },
              my_favourite:{
                  ar:'المفضلة',
                  en:'Favourite',
                  tu:'',
              },
              my_orders:{
                ar:'مشترياتي',
                en:'Orders',
                tu:'',
              },
              my_sales:{
                ar:'مبيعاتي',
                en:'Sales',
                tu:'',
              },
              quotations:{
                ar:'الطلبات',
                en:'quotations',
                tu:'',
              },
              my_notes:{
                  ar:'ملاحظاتي',
                  en:'My Notes',
                  tu:'',
              },
              notifications:{
                 ar:'الأشعارات',
                 en:'notifications',
                 tu:'',
              },
              settings:{
                 ar:'الاعدادت',
                 en:'settings',
                 tu:'',
              },
              meter:{
                  ar:'متر',
                  en:'Meter',
                  tu:'',
              },
              bed:{
                  ar:'سراير',
                  en:'beds',
                  tu:'',
              },
              baths:{
                  ar:'حمام',
                  en:'baths',
                  tu:'',
              },
              added_to_fav_successfully:{
                  ar:'تم الأضافة الي المفضلة بنجاح',
                  en:'added to favourite successfully',
                  tu:'',
              },
              removed_from_fav_successfully:{
                  ar:'تمت الأزالة من المفضلة بنجاح',
                  en:'removed from favourite successfully',
                  tu:'',
              },
              about_us:{
                  ar:'عن المنصة',
                  en:'who us',
                  tu:'',
              },
              ask_home:{
                  ar:'اطلب مسكن',
                  en:'request accommodation',
                  tu:'',
              },
              please_contact_with_this_number:{
                  ar:'برجاء التواصل مع الرقم',
                  en:'please contact with this number',
                  tu:'',
              },
              work_daily:{
                  ar:'ساعات العمل هي من العاشره صباحا الي الثامنة مساء',
                  en:'Business hours are from ten in the morning until eight in the evening',
                  tu:'',
              },
              contact_with_us:{
                  ar:'يمكنك التواصل معنا هنا',
                  en:'you can contact with us',
                  tu:'',
              },
              search_inside_the_cities:{
                  ar:'عقارات خاصة بالمدن',
                  en:'Search inside the cities',
                  tu:'',
              },
              rent:{
                  ar:'تأجير',
                  en:'Rent',
                  tu:'',
              },
              sale:{
                  ar:'بيع',
                  en:'Sale',
              },
              share_this_link:{
                  ar:'مشاركة هذا الرابط',
                  en:'Share this link',
                  tu:'',
              },
              close:{
                  ar:'اغلاق',
                  en:'Close',
                  tu:'',
              },
              like_answer:{
                  ar:'لقد تمت عملية الاعجاب بنجاح',
                  en:'like on this answer has done successfully',
                  tu:'',
              },
              // dashboard words
              users:{
                  ar:'المستخدمين',
                  en:'Users',
                  tu:'',
              },
              chart:{
                  ar:'الإحصائيات',
                  en:'Chart',
                  tu:'',
              },
              packages:{
                  ar:'الباقات',
                  en:'Packages',
                  tu:'',
              },
              currencies:{
                  ar:'العملات',
                  en:'Currencies',
                  tu:'',
              },
              used_currency:{
                 ar:'العملة المستخدمة',
                 en:'Used Currency',
                  tu:'',
              },
              subscriptions:{
                 ar:'الاشتراكات',
                 en:'Subscriptions',
                 tu:'',
              },
              categories:{
                  ar:'الأقسام',
                  en:'Categories',
                  tu:'',
              },
              questions:{
                  ar:'الأسئلة',
                  en:'Questions',
                  tu:'',
              },
              countries:{
                  ar:'الدول',
                  en:'Countries',
              },
              governments:{
                  ar:'المحافظات',
                  en:'Governments',
              },
              cities:{
                  ar:'المدن',
                  en:'Cities',
              },
              areas:{
                  ar:'المناطق',
                  en:'Areas',
              },
              reports:{
                  ar:'التقارير',
                  en:'Reports',
                  tu:'',
              },
              client_support:{
                  ar:'الدعم الفني',
                  en:'client support',
                  tu:'',
              },
              explore_listings:{
                  ar:'تصفح العقارات',
                  en:'Explore Listings',
                  tu:'',
              },
              see_statics:{
                  ar:'رؤيه الاحصائيات',
                  en:'See Statics',
                  tu:'',
              },
              are_you_sure_about_approve:{
                  ar:'هل انت متأكد من عملية الموافقة',
                  en:'Are you sure from approving this request',
                  tu:'',
              },
              are_you_sure_about_delete:{
                  ar:'هل انت متأكد من عملية المسح',
                  en:'Are you sure from delete operation',
                  tu:'',
              },
              in_case_you_approved_listing_will_be_at_public:{
                  ar:'في حالة الموافقة علي الطلب سيصبح هذا الطلب متاح يستطيع اي شخص رؤيتة',
                  en:'In case you approved this request , the request will be available to any one to see it',
                  tu:'',
              },
              in_case_you_delete_you_cant_retrieve_it:{
                  ar:'في حالة الموافقة علي طلب المسح لن تستطيع استرجاع البيانات مرة اخري',
                  en:'In case you delete you cant retrieve data another time',
                  tu:'',
              },
              yes_iam_sure:{
                  ar:'نعم انا متأكد',
                  en:'yes iam sure',
                  tu:'',
              },
              cancel:{
                  ar:'إلغاء',
                  en:'Cancel',
                  tu:'',
              },
              approved_done:{
                  ar:'تمت الموافقة',
                  en:'Approved !',
                  tu:'',
              },
              deleted_done:{
                  ar:'تم المسح',
                  en:'Deleted !',
                  tu:'',
              },
              approved_done_successfully:{
                  ar:'تمت عملية الموافقة بنجاح',
                  en:'Approved done successfully',
                  tu:'',
              },
              deleted_done_successfully:{
                  ar:'تمت عملية المسح بنجاح',
                  en:'Deleted done successfully',
                  tu:'',
              },
              add_new_item:{
                  ar:'إضافة عنصر جديد',
                  en:'Add new Item',
                  tu:'',
              },
              update_new_item:{
                  ar:'تعديل بيانات ',
                  en:'update info of',
                  tu:'',
              },
              upload_image:{
                  ar:'أرفع صورة',
                  en:'upload image',
                  tu:'',
              },
              upload_images:{
                  ar:'أرفع الصور',
                  en:'upload images',
                  tu:'',
              },
              select_question:{
                  ar:'اختر السؤال',
                  en:'Select question',
                  tu:'',
              },
              // question at dashboard
              ar_question:{
                  ar:'السؤال بالعربي',
                  en:'arabic question',
                  tu:'',
              },
              en_question:{
                  ar:'السؤال بالانجليزي',
                  en:'english question',
                  tu:'',
              },
              tu_question:{
                  ar:'السؤال بالتركي',
                  en:'turkish question',
                  tu:'',
              },
              question_type:{
                  ar:'نوع السؤال',
                  en:'question type',
                  tu:'',
              },
              question_type_text:{
                 ar:'نص',
                 en:'text',
                 tu:'',
              },
              question_type_select:{
                  ar:'اختر من متعدد',
                  en:'Select from options',
                  tu:'',
              },
              question_type_radio:{
                  ar:'نعم او لا ',
                  en:'yes or no',
                  tu:'',
              },
              question_required:{
                ar:'اختر نوع حقل الادخال من حيث إجباري ام لا',
                en:'required or not required',
                tu:'',
              },
              required:{
                  ar:'مطلوب',
                  en:'required',
                  tu:''
              },
              not_required:{
                  ar:'غير مطلوب',
                  en:'not required',
                  tu:''
              },
              cover_appearance:{
                 ar:'ظهور السؤال في كافر الاعلان',
                 en:'show question at cover of ad',
                 tu:'',
              },
              appearance:{
                  ar:'عملية الظهور',
                  en:'appearance',
                  tu:'',
              },
              question_answers:{
                  ar:'اجابات السؤال',
                  en:'question answers',
                  tu:'',
              },
              question_answer_ar:{
                  ar:'اجابة السؤال بالعربي',
                  en:'question answer in arabic',
                  tu:'',
              },
              question_answer_en:{
                  ar:'اجابة السؤال بالأنجليزي',
                  en:'question answer in english',
                  tu:'',
              },
              question_answer_tu:{
                  ar:'اجابة السؤال بالتركي',
                  en:'question answer in turkish',
                  tu:'',
              },

              add_question_answer:{
                  ar:'اضف اجابة جديدة',
                  en:'add question answer',
                  tu:'',
              },
              actions:{
                  ar:'الأوامر',
                  en:'actions',
                  tu:'',
              },
              update_status_successfully:{
                  ar:'تم تحديث الحالة بنجاح',
                  en:'Status updated Successfully',
                  tu:'',
              },
              select_year:{
                  ar:'أختر السنة',
                  en:'Select year',
                  tu:'',
              },
              please_select_type_of_area_you_want_to_be_added:{
                  ar:'من فضلك اختر نوع المنطقة التي تود اضافتها',
                  en:'Please select type of area you want to be added',
                  tu:'',
              },
              area:{
                  ar:'منطقة',
                  en:'Area',
                  tu:'',
              },
              city:{
                  ar:'مدينة',
                  en:'City',
                  tu:'',
              },
              government:{
                  ar:'محافظة',
                  en:'Government',
                  tu:'',
              },
              country:{
                  ar:'دولة',
                  en:'Country',
                  tu:'',
              },
              select_country:{
                  ar:'اختر الدولة',
                  en:'Select country',
                  tu:'',
              },
              select_government:{
                  ar:'اختر المحافظة',
                  en:'Select government',
                  tu:'',
              },
              select_city:{
                  ar:'اختر المدينة',
                  en:'Select city',
                  tu:'',
              },
              select_area:{
                  ar:'اختر المنطقة',
                  en:'Select area',
                  tu:'',
              },
              select_currency:{
                ar:'اختر العملة',
                en:'Select Currency',
                tu:'',
              },
              is_visible:{
                  ar:'هل متاحة',
                  en:'Is Visible',
                  tu:'',
              },
              visible:{
                  ar:'متاح',
                  en:'visible',
                  tu:'',
              },
              not_visible:{
                  ar:'غير متاح',
                  en:'not visible',
                  tu:'',
              },
              point_price:{
                  ar:'سعر النقطة',
                  en:'Point Price',
                  tu:'',
              },
              coutry_selected:{
                  ar:'أختر الدولة التي تود انشاء سعر خاص بها',
                  en:'Select country that you want to make special price',
                  tu:'',
              },
              save:{
                  ar:'حفظ',
                  en:'Save',
                  tu:'',
              },
              name:{
                  ar:'الأسم',
                  en:'Name',
                  tu:'',
              },
              add_new_question:{
                  ar:'أضف سؤال جديد',
                  en:'Add new question',
                  tu:'',
              },
              filter:{
                  ar:'فلترة',
                  en:'Filter',
                  tu:'',
              },
              related_to:{
                  ar:'تابعة ل',
                  en:'Related to',
                  tu:'',
              },
              block:{
                  ar:'محظور',
                  en:'Block',
                  tu:'',
              },
              auto_publish:{
                  ar:'النشر التلقائي',
                  en:'Auto Publish',
                  tu:'',
              },
              yes:{
                  ar:'نعم',
                  en:'Yes',
                  tu:'',
              },
              no:{
                  ar:'لا',
                  en:'No',
                  tu:'',
              },
              leave_password:{
                  ar:'أترك كلمة المرور فارغة في حالة عدم رغبتك في التعديل عليها',
                  en:'',
                  tu:'',
              },
              press_here:{
                  ar:'أضغط هنا',
                  en:'Press Here',
                  tu:'',
              },
              select_best_choice:{
                  ar:'أختر ما يناسبك',
                  en:'Select best choice',
                  tu:'',
              },
              in:{
                  ar:'في',
                  en:'in',
                  tu:'',
              },
              for:{
                  ar:'ل',
                  en:'for ',
                  tu:'',
              },
              currency:{
                  ar:'دولار',
                  en:'dollar',
                  tu:'',
              },
              you_should_login:{
                  ar:'من فضلك سجل دخول اولا',
                  en:'You should login first',
                  tu:'',
              },
              seller_phone:{
                  ar:'رقم تليفون المعلن',
                  en:'Phone Seller',
                  tu:'',
              },
              reactions_questions:{
                  ar:'عدد الاجابات لهذا السؤال هي ',
                  en:'number of answers for this question is',
                  tu:'',
              },
              press_here_to_show_my_discussions:{
                  ar:'اضغط هنا لعرض جميع نقاشاتي',
                  en:'press here to show all my discussions',
                  tu:'',
              },
              next:{
                  ar:'التالي',
                  en:'next',
                  tu:'',
              },
              prev:{
                  ar:'السابق',
                  en:'previous',
                  tu:'',
              },
              select_best_for_you:{
                  ar:'اختر ما يناسبك',
                  en:'Select what you want',
                  tu:'',
              },
              add_another_item:{
                  ar:'اضافه عنصر جديد',
                  en:'Add another item',
                  tu:'',
              },
              please_enter_all_required_data:{
                  ar:'من فضلك ادخل قيم للبيانات الاجبارية',
                  en:'Please enter all required inputs',
                  tu:'',
              }


















          }
      }
    },
    methods:{
        switchWord:function (word){
            // find word first
            if(Object.keys(this.words).includes(word)){
                // yes found it  =======> you passed english
                if(this.$inertia.page.props.lang == "tu"){
                    return this.words[word]['en'];
                }else {
                    return this.words[word][this.$inertia.page.props.lang];
                }
            }
        },
    }
}
</script>

<style scoped>

</style>

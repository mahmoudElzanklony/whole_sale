<template>
    <div>
        <navbar-component ></navbar-component>
        <div class="container">
            <h2 class="mb-2">{{ switchWord('conditions') }}</h2>
            <p class="gray mb-4" v-if="$page.props.lang == 'ar'">باستخدامك لخدمات ومعلومات وموقع مكينة الالكتروني وتطبيقاته، فإنك توافق على الالتزام بشروط الاستخدام (الموضحة أدناه) وجميع الشروط والأحكام التي تظهر في أي مكان آخر على مواقع  و تطبيقات مكينة.
                ننأى بمسؤوليتنا عن تعرضك لأي خسارة أو ضرر نتيجة عدم استخدام موقع مكينة وخدماته دون الالتزام التام بهذه الاتفاقية.
            </p>
            <p class="gray mb-4" v-else>By using the services, information, website, and applications of Mkena, you agree to be bound by its conditions of use (explained below) and all disclaimers and terms and conditions that appear elsewhere on Mkena sites or applications.
                We exclude our liability for any loss or damage arising from the use of the Mkena website and services by a user in contravention of our Agreement
            </p>

            <h2 class="mb-2">{{ switchWord('create_account_mkena_wholesale') }}</h2>
            <p>
                <span class="gray" v-if="$page.props.lang == 'ar'">عند إنشاء حساب على موقع مكينة ، فإنك توافق على تقديم معلومات دقيقة وحديثة وكاملة وتحديث المعلومات التي تقدمها لنا على الفور عند تغييرها. لدينا الحق في ايقاف أو تعليق أو تقييد أي حساب في أي وقت ، حسب تقديرنا ، بما في ذلك إذا رأينا أنك لم تتلتزم بأي من أحكام هذا الاتفاق. يجب عليك الحفاظ على سرية بيانات تسجيل الدخول إلى حسابك وأنت مسؤول بالكامل عن جميع الأنشطة التي تحدث تحت حسابك في ضمن  حدود هذا الاتفاق. يجب أن يكون أي حساب يتم إنشاؤه بواسطتك أو يتم تقديمه لك لاستخدام موقع مكينة هو فقط لاستخدامك الشخصي ولا يمكن تحويله لأي مستخدم آخر.</span>
                <span class="gray" v-else>When creating an account on Mkena website you agree to provide accurate, current, and complete information and to immediately update the information you provide to us when it changes. We have the right to disable, suspend or restrict any account at any time, at our discretion, including if, in our opinion, you have failed to comply with any of the provisions of this Agreement. You shall be responsible for maintaining the confidentiality of your account login credentials and are fully responsible for all activities that occur under your account in connection with this Agreement. Any account created by you or submitted for your access to the Mkena website shall be for your personal use only and are non-transferable</span>
            </p>
            <p class="gray mb-2">{{ switchWord('you_may_not') }}</p>
            <ol v-if="$page.props.lang == 'ar'">
                <li>استخدام اسم أو عنوان بريد إلكتروني  يملكه شخص آخر أو يتحكم فيه بهدف انتحال شخصية هذا الشخص</li>
                <li>استخدام رقم هاتف محمول أو رقم هاتف ثابت أو بريد إلكتروني ليس مسجل لحسابك، أولست الموكل باستخدامه.</li>
            </ol>
            <ol v-else>
                <li>Use or provide a false name or an email address owned or controlled by another person with the intent to impersonate that person</li>
                <li>Use or provide a mobile, landline numbers, or email of which you are not the registered owner, bill-payer and or account holder</li>
            </ol>
            <p class="mb-2 gray" v-if="$page.props.lang == 'ar'">في حال تزويدك باسم مستخدم ورمز مرور (بيانات تسجيل الدخول) لتمكينك من الوصول إلى مناطق محظورة من الموقع أو محتوى آخر أو خدمات خاصة بنا ، فيجب عليك التأكد من</p>
            <p class="mb-2 gray" v-else>If we provide you with a user ID and password (login credentials) to enable you to access restricted areas of our website or other content or services, you must ensure that:</p>

            <ol class="mb-4" v-if="$page.props.lang == 'ar'">
                <li>تغيبر رمز المرور الخاص بك فورًا قبل بدء استخدام خدماتنا.</li>
                <li>يجب الحفاظ على بيانات تسجيل الدخول الخاصة بك سرية.</li>
                <li> مسؤوليتك الكاملة عن جميع الأنشطة التي تحدث تحت حسابك في ضمن  حدود هذا الاتفاق.</li>
            </ol>
            <ol class="mb-4" v-else>
                <li>You change immediately your password before starting using our services.</li>
                <li>Your login credentials are kept confidential.</li>
                <li>You accept responsibility for all activities that occur under your login credentials.</li>
            </ol>

            <h2 class="mb-2">{{ switchWord('access_mkena') }}</h2>
            <p class="mb-2" v-if="$page.props.lang == 'ar'">لا يحق لك و لا يحق لك تمكين أي طرف ثالث من:</p>
            <p class="mb-2" v-else>You may not and you agree not to allow any third party to</p>

            <ol class="mb-4" v-if="$page.props.lang == 'ar'">
                <li>انتهاك أي من قوانين المملكة العربية السعودية أو أي دولة أخرى يتم تقديم خدماتنا فيها.</li>
                <li>إعادة نشر المواد من هذا الموقع (بما في ذلك إعادة النشر على موقع آخر). </li>
                <li> بيع أو تأجير أو ترخيص المواد على الموقع.</li>
                <li> تحرير أو تعديل أو استخدام هندسة عكسية لأي جزء أو مادة على الموقع.</li>
                <li>إعادة توزيع المواد من هذا الموقع باستثناء المحتوى المتاح بشكل صريح لإعادة التوزيع (مثل النشرات الدورية). </li>
                <li>لوصول إلى أي جزء من موقع مكينة لأغراض بناء قاعدة بيانات.</li>
                <li>جمع أي معلومات حول المستخدمين الآخرين لموقع مكينة لأي غرض آخر غير استخدام الموقع بالطريقة التي تحدد من قبلنا</li>
                <li>إنشاء حسابات المستخدمين بواسطة وسائل آلية أو بموجب وسائل احتيالية.</li>
                <li>إنشاء أو إرسال أي اتصالات إلكترونية غير مرغوب فيها مثل “البريد التطفلي” إلى مستخدمي الموقع أو التدخل بأي شكل من الأشكال في استخدام المستخدم الآخر للموقع</li>
                <li>نقل أي فيروسات أو برامج خبيثة أو عناصر أخرى ذات طبيعة تخريبية.</li>
                <li>	استخدام الموقع لانتهاك أمان أي شبكة كمبيوتر ، وكسر رموز المرور أو رموز التشفير الأمنية ، ونقل أو تخزين مواد غير قانونية بما في ذلك تلك التي يتم اعتبارها تهديدًا أو مسيئة.</li>
                <li>نسخ أو تخزين أي محتوى يتم تقديمه على الموقع لغير استخدامك الشخصي</li>
                <li>استخدام أي جهاز أو برنامج أو روتين يتداخل مع عمل الموقع ، أو محاولة التدخل بأي شكل من الأشكال في العمل الصحيح للموقع</li>
                <li>اتخاذ أي إجراء يفرض ، أو قد يفرض بتقديرنا الحصري ، عبئًا غير معقول أو مفرطًا على بنية الأجهزة والبرامج التابعة لدينا. </li>
                <li>استخدام الموقع بشكل متعمد أو غير متعمد لانتهاك أي قانون سارٍ</li>
                <li>انتحال صفة أي شخصية أو كيان آخر</li>
                <li> أجراء أي عمليات تحميل أونشرأوإرسال بريد إلكتروني أو نقل أو غيرها باستخدام محتوى الموقع والذي ليس لديك حقًا في استخدامه بموجب أي قانون أو التزام عقدي، و يشمل  ذلك خرق حقوق الملكية الفكرية لأي طرف ثالث</li>
            </ol>
            <ol class="mb-4" v-else>
                <li>Violate any of the laws of Saudi Arabia or any other countries our services are offered to.</li>
                <li>Republish material from this website (including republication on another website).</li>
                <li>Republish material from this website (including republication on another website).</li>
                <li>Edit, modify, or reverse engineer any portion or material on the website.</li>
                <li>Redistribute material from this website except for content specifically and expressly made available for redistribution (such as our newsletter).</li>
                <li>Access, retrieve or index any portion of the Mkena website for purposes of constructing or populating any database.</li>
                <li>Collect any information about other users of the Mkena website for any purpose other than to use the website in the manner intended by us.</li>
                <li>Create user accounts by automated means or under false or fraudulent pretenses.</li>
                <li>Create or transmit unwanted electronic communications such as "spam" to other users of the website or otherwise interfere with other user's usage of the website.</li>
                <li>Transmit any viruses, worms, defects, Trojan horses or other items of a destructive nature.</li>
                <li>Use the website to violate the security of any computer network, crack passwords or security encryption codes, transfer or store illegal material including that are deemed threatening or obscene</li>
                <li>Copy or store any content offered on the website for other than your own use</li>
                <li>Use any device, software or routine that interferes with the proper working of the website, or otherwise attempt to interfere with the proper working of the website</li>
                <li>Take any action that imposes, or may impose in our sole discretion, an unreasonable or disproportionately large load on our IT infrastructure</li>
                <li>Use the website intentionally or unintentionally, to violate any applicable law</li>
                <li>Impersonate any person or entity</li>
                <li>Upload, post, e-mail, transmit or otherwise make available using the website’s any material that you do not have a right to make available under any law or contractual obligation which includes a breach of third-party intellectual property rights.</li>
            </ol>

            <p class="mb-2 bold fw-bold">{{ switchWord('you_agree_on') }}</p>
            <ol class="mb-4" v-if="$page.props.lang == 'ar'">
                <li>إخطارنا على الفور بأي استخدام غير مصرح به لحساب موقع مكينة الخاص بك ، أو أي خرق آخر لأمان الموقع.</li>
                <li>التأكد من تسجيل الخروج في نهاية كل جلسة وفقًا للتعليمات الموجودة على الموقع. لا يمكننا ولن نكون مسؤولين عن أي خسارة أو ضرر ينشأ عن عدم الامتثال لهذا البند.</li>
                <li>السماح باستخدام موقعنا يتم بشكل مؤقت ، ونحتفظ بالحق في سحب أي جانب أو ميزة من الموقع دون إشعارمسبق دون ترتب أي مسؤولية علينا</li>
            </ol>
            <ol class="mb-4" v-else>
                <li>Immediately notify us of any unauthorized use of your Mkena website account, or any other related breach of security</li>
                <li>Ensure that you logout at the end of each session following the instructions on the website. We cannot and will not be liable for any loss or damage arising from your failure to comply with this section</li>
                <li>Access to our website is permitted on a temporary basis, and we reserve the right to withdraw, suspend or amend any aspect or feature of the website without notice or liability.</li>
            </ol>

            <h2 class="mb-2">{{ switchWord('product_info') }}</h2>
            <p class="gray mb-4" v-if="$page.props.lang == 'ar'">تسعى مكينة إلى تحري الدقة في جميع المعلومات المدرجة  أو المشار لها بالموقع  من أوصاف للمنتجات و معلومات المطابقة والصور والتسعير والروابط وأي معلومات أخرى متعلقة بالمنتجات المدرجة. ومع ذلك ،نتستند في هذه المعلومات على تلك التي تقدمها الشركات المصنعة والموردون ، ولا يمكننا ضمان أن جميع المعلومات بما في ذلك الأوصاف والصور والتسعير أو أي معلومات أخرى متعلقة بالمنتج المدرج هي دقيقة تمامًا أو كاملة أو حديثة ، كما لا يمكننا تحمل المسؤولية عن هذه الأخطاء.
                في حال تم تسجيل منتج على موقعنا بسعر خاطئ بسبب أخطاء ادخال أو معلوماتية أو فنية أخرى ، نحتفظ - بتقديرنا الحصري- بالحق في رفض / أو إلغاء أي طلب للمنتج المذكور وتصحيح / إزالة المعلومات غير الدقيقة. بالإضافة إلى ذلك ، يتم اتاحة جميع الروابط إلى مواقع الإنترنت الأخرى من مكينة كمصدر للمشترين الذين يبحثون عن مزيد من المعلومات و / أو المشورة التقنية. لا تتحمل مكينة المسؤولية عن المعلومات الموجودة بهذه المواقع أو أي مواقع أخر
            </p>
            <p class="gray mb-4" v-else>Mkena strives for accuracy in all item descriptions, pictures, compatibility references, detailed specifications, pricing, links, and any other product-related information listed or referenced on our website. However, Product descriptions and specifications on the site are based on information provided by manufacturers and vendors and we cannot guarantee that all item information including descriptions, pictures and pricing or any other product-related information listed is entirely accurate, complete, or current, nor can we assume responsibility for these errors. In the event a product listed on our website is labeled with an incorrect price due to some typographical, informational, technical, or other error, Mkena shall, at its sole discretion, have the right to refuse and/or cancel any order for the said product and correct and/or remove the inaccurate information. Additionally, all hyperlinks to other websites from Mkena are provided as resources to Buyers looking for additional information and/or professional opinion. Mkena does not assume responsibility for the claims and/or representations made on these or any other websites.</p>

            <h2 class="mb-2">{{ switchWord('product_availability') }}</h2>
            <p class="gray mb-4" v-if="$page.props.lang == 'ar'">على الرغم من أن معلومات توافر المنتج يتم تحديثها بشكل دوري ، إلا أن الحجم الكبير والمتكررلعمليات البيع على الموقع تتم على أساس أولوية وصول الطلبات ، و عليه لا يمكننا ضمان التوافر دائمًا. إذا كان طلب المشتري يتضمن بنودا غير متاحة للشحن الفوري ، وبعد التنسيق مع المشتري ، سنقوم بإلغاء الطلب المعني ، أو حذف الكمية غير المتاحة من الطلب ، في كلتا الحالتين ، سنقوم بإعادة المبلغ المدفوع للمنتجات الملغاة.</p>
            <p class="gray mb-4" v-else>While Product availability information is updated at frequent intervals, we sell high volumes of stock on first-come-first served bases and cannot always guarantee availability. If Buyer’s order included unavailable items for immediate shipping, and after coordinating with the Buyer, we will cancel the respective order, or delete the unavailable quantity from the Order, in either case, we will refund you for the price you paid for the cancelled Products.</p>

            <h2 class="mb-2">{{ switchWord('prices_duties_taxes') }}</h2>
            <p class="gray mb-4" v-if="$page.props.lang == 'ar'">باستثناء الأوقات التي يتم تحديد شروط مغايرة عند إصدار أي عرض أو تقديم أي عرض سعر من مكينة ، فإن جميع الأسعار المذكورة هي بالريال السعودي شاملة  للرسوم الجمركية وغير شاملة لضريبة القيمة المضافة.
                على الرغم من توخينا الحيطة دائما، قد تتغير بعض أسعار المنتجات المدرجة، في مثل هذه الحالات ، نحتفظ بالحق في إلغاء طلب المشتري وإعادة المبلغ، حتى لو تم الدفع  وقبول الطلب مسبقًا من قبلنا. سنتصل بالمشتري في أقرب وقت ممكن. نحتفظ بهذا الحق لحين اتمام عملية تسليم الطلبية
            </p>
            <p class="gray mb-4" v-else>Unless other conditions are mentioned at the time of releasing any offer or providing any quotation from Mkena, all quoted prices are in SAR including custom duties and excluding VAT.
                Despite our reasonable precautions, prices of the listed Product/s may be changed. In such circumstances, we reserve the right to cancel and refund Buyer order, even if your order has been paid for and previously accepted by us. We will contact the Buyer as soon as possible. We reserve this right up until we deliver the Product
            </p>

            <h2 class="mb-2">{{ switchWord('orders_and_payments') }}</h2>
            <p class="gray mb-4" v-if="$page.props.lang == 'ar'">تقوم مكينة بتحديد شروط الدفع للطلبات عند نشر أي عرض أو ارسال عرض سعر. يتم قبول طلبك من قِبَلنا عند تأكيد استلام دفعتك ايذانا ببدء عقد مُلزِم بينك وبيننا. بمجرد قبول الطلب من قِبَلنا ، ستتلقى رسالة بريد إلكتروني تؤكد أستلام المبلغ والبدء بعمليات التحضير و الشحن.</p>

            <p class="gray mb-4" v-else>Mkena’s orders payments shall be communicated in case-by-case basis by Mkena management upon posting any offer or before closing any deal. Your order is accepted by us when we process your payment, which results in a binding contract between you and us. Once the order is accepted by us, you will receive e-mails, confirming that the payment has already been received (i.e. your Order has been paid for) and in the process of shipping.</p>

            <h2 class="mb-2">{{ switchWord('order_cancellation') }}</h2>
            <p class="gray mb-4" v-if="$page.props.lang == 'ar'">يمكن إلغاء الطلبات المتوفرمخزونها لدى المورد-عند تقديم العرض- في حال تم الاتفاق على الالغاء قبل البدء بتجهيزالطلب من قبل المورد. بينما لا يمكن إلغاء الطلبات المشحونة من المصدر و مطلوبة خصيصا بعد تأكيد الطلب.
                لإلغاء الطلب ، يجب عليك إلغاؤه على موقعنا ، ولا بد من قبول الإلغاء من طرفنا إذا لم يتم معالجة الطلب بعد من قِبَل المورد.
                إذا قبلنا الإلغاء ، سيتم إرجاع المبلغ لحساب المشتري المستخدم للدفع بعد خصم أي رسوم أو عمولات تم اقتطاعها من مزودي خدمات الدفع. يتوقف الوقت المطلوب لظهور / انعكاس المبلغ المسترد في حساب المشتري على سرعة إجراءات بنكه.
            </p>
            <p class="gray mb-4" v-else>Ready stock orders can only be canceled before the order has been processed by the vendor. While Back-to-back orders cannot be canceled after placing the order.
                To cancel an order, you must cancel it on our website, important - we could accept the cancellation If the order still not processed by our vendor.
                If we accept the cancellation, the return value amount will be returned to Buyer account used for the payment less any fees or commissions have been truncated by the service providers of the payment process. This time required for the refunded amount to be shown / reflected in the Buyer’s account depends on the speed of his bank in processing the refund.
            </p>

            <h2 class="mb-2">{{ switchWord('delivery') }}</h2>
            <ol class="mb-4" v-if="$page.props.lang == 'ar'">
                <li>بمجرد تأكيد الطلب ، لا يمكن تغيير عنوان الشحن على الموقع. ومع ذلك ، في حالة أي تغييرات مطلوبة في العنوان بعد تأكيد الطلب ، يجب على المشتري التواصل مع إدارة مكينة على الفور لتقوم بالتواصل مع شركة الشحن لتحديث العنوان وتحصيل أي تكاليف إضافية ذات صلة من المشتري. </li>
                <li>يتم شحن جميع المنتجات من مستودعاتنا أو من مستودعات موردينا وإرسالها عبر شركات نقل مختلفة. </li>
                <li>قد تخضع الطلبات التي يتم تسليمها إلى بعض الدول لتشريعات جمركية أو ضرائب إضافية مثل رسوم الاستيراد. نوصي بشدة بالتحقق من القوانين المحلية بعناية قبل الطلب حيث قد تكون مسؤولًا عن تكاليف إضافية أو تأخير.</li>
                <li>سنسعى جاهدين – قدر الامكان- لشحن وتسليم جميع الطلبات في الإطار الزمني المذكور عند تقديم العرض بمجرد تأكيد استلام الدفعة. ومع ذلك ، فإن أوقات الشحن والتسليم المقدمة هي تقديرات فقط، و لسنا مسؤولين عن التأخر أو الخطأ ال في التسليم الناتج عن عوامل خارجة عن سيطرتنا. </li>
                <li>قد يتم تسليم الطلبية إليك في أكثر من شحنة واحدة حيث يتم استيفاءها من مواقع مختلفة أو مباشرة من موردينا.</li>
                <li>قد لا نتمكن من التسليم إلى بعض المواقع. في مثل هذه الحالات ، سوف نبلغك باستخدام معلومات الاتصال التي قدمتها لنا عند إجراء طلبك لترتيب إلغاء الطلب أو التسليم إلى عنوان بديل. </li>
                <li>إذا تم إعادة الشحنة لنا تحت بند “ارجاع للمرسل” بسبب خطأ بعنوان التسليم، أو لعدم  الاستلام في الوقت المحدَّد، سوف نتواصل معك لإعادة التسليم وقد يترتب على ذلك دفع رسوم اضافية  قبل محاولة إعادة التسليم</li>

            </ol>
            <ol class="mb-4" v-else>
                <li>Once an order is placed the shipping address cannot be changed. However, in case of any required changes in the address after order confirmation, Buyer need to communicate the details with Mkena management immediately and Mkena shall work with the shipper update the address and charging any related additional cost to the Buyer.</li>
                <li>All orders are dispatched from our warehouse or from our vendors and sent via various carriers.</li>
                <li>Orders being delivered to some countries may be subject to customs regulations or additional taxes such as import duty. We strongly recommend you to check local laws carefully before ordering as you may be liable for additional costs or delays.</li>
                <li>We will endeavor to dispatch all Orders within the time frame mentioned when quoted possible once we have confirmed receipt of payment. However, all dispatch times and delivery times are estimates only. We are not liable for late delivery or mis-delivery caused by factors outside of our control.</li>
                <li>Items may be delivered to you in more than one shipment where they are fulfilled from different locations or directly from our vendors.</li>
                <li>We may not be able to deliver to some locations. If this is the case, we will inform you using the contact details that you provide to us when you make your Order and arrange for cancellation of the Order or delivery to an alternative delivery address.</li>
                <li>If any shipment is returned to us marked 'Return to Sender' because of an incorrect address, or you have failing to collect the shipment in a timely manner after being provided with a delivery note/ document, we will contact you to arrange for redelivery and we may require payment of applicable freight costs before attempting redelivery.</li>
            </ol>

            <h2 class="mb-2">{{ switchWord('loss_or_damage_in_transit') }}</h2>
            <p class="mb-2 gray" v-if="$page.props.lang == 'ar'">عادةً ما يتم تغطية شحنات مكينة بالتأمين العادي المعتمد من قبل شركات الشحن. إذا كان المشتري يحتاج إلى أي تغطية تأمين إضافية ، فيجب عليه التواصل بوضوح مع إدارة مكينة قبل تأكيد الطلب لتحمل أي تكلفة إضافية ذات صلة.</p>

            <p class="mb-2 gray" v-else>Mkena’s shipments are usually covered by the normal insurance covering Shippers’ transportation. If the Buyer requires any additional insurance coverage, then the Buyer needs to communicate that clearly to Mkena’s management before confirming the order and bears any related additional cost.</p>
            <ol class="mb-4" v-if="$page.props.lang == 'ar'">
                <li>يجب عليك أخذ الحذر عند فتح العبوات حتى لا تتعرض المحتويات للتلف ، وخاصةً عند استخدام أي أدوات حادة. لن نقبل أي مطالبة بفقدان أو تلف أثناء النقل ناتج عن إجراءات خاطئة في استلام و فتح الشحنة.</li>
                <li>يجب فحص الشحنات المستلمة على الفور من قِبَل المشتري عند الاستلام. في حالة وجود أي اختلاف في عدد القطع المذكور في مذكرة / وثيقة التسليم أو لاحظت  أضرارا بعبوات الشحن ، يجب عليك: </li>
               <ol>
                   <li>كتابة تفاصيل اختلاف الاعداد / الأضرار على مذكرة / وثيقة التسليم قبل التوقيع عليها. </li>
                   <li>التقاط صور / فيديوهات واضحة توضح الاختلاف / الضرر.</li>
                   <li>الاحتفاظ بنسخة من المستند مع الملاحظات المذكورة. </li>
                   <li>تقديم مطالبة الاختلاف / الضرر إلى إدارة مكينة عبر البريد الإلكتروني    info@mkena.com  في غضون 24 ساعة من استلام الشحنة وإرفاق جميع المستندات ذات الصلة والصور / مقاطع الفيديو.</li>
                   <li>بمجرد قبول استلام الشحنة دون الابلاغ عن نواقص أو أضرار ظاهرة ، قد لا يكون بإمكانك تقديم مطالبة بالفقدان أو التلف في النقل  بعد ذلك.</li>
                   <li>بمجرد تحققنا من وجود نقص أو تلف في الشحنة خلال النقل ، فسنقوم، و بقرارنا الحصري:</li>
                   <ol>
                       <li>إرسال منتج بديل، على نفقتنا، أو</li>
                       <li>ارجاع المبلغ الذي دفعه المشتري لشراء المنتج المعني.</li>
                   </ol>
               </ol>
            </ol>
            <ol class="mb-4" v-else>
                <li>You must take care when opening the shipment so as not to damage it, particularly when using any sharp instruments. We will not accept any claim for loss or damage in transit where the Product has been damaged by your own actions in opening the shipment</li>
                <li>You must take care when opening the shipment so as not to damage it, particularly when using any sharp instruments. We will not accept any claim for loss or damage in transit where the Product has been damaged by your own actions in opening the shipment</li>
                <ol>
                    <li>write down the variations / damages’ details on the delivery note/ document before signing it</li>
                    <li>take clear pictures/ videos illustrating the variation/ damage</li>
                    <li>keep a copy of the document with the notes mentioned</li>
                    <li>submit a variation/ damage claim to Mkena management on email to info@mkena.com within 24 hours of receiving the shipment attaching all related documents, pictures/ videos.</li>
                    <li>Once you have accepted delivery of the shipment as being complete and physically undamaged, you may not be able to make a claim for loss or damage in transit.</li>
                    <li>Once we have verified that the shipment has been a loss or damage in transit, we may at our sole discretion:</li>
                    <ol>
                        <li>send you a replacement Product, at our cost, or</li>
                        <li>refund you for the price you paid for the related product.</li>
                    </ol>
                </ol>
            </ol>

            <h2 class="mb-2">{{ switchWord('variation') }}</h2>
            <p class="mb-4 gray" v-if="$page.props.lang == 'ar'">قد نقوم بمراجعة هذه الشروط والأحكام من وقت لآخر. يرجى التحقق من هذه الصفحة بانتظام للتأكد من أنك على دراية بالإصدار الحالي.</p>
            <p class="mb-4 gray" v-else>We may revise these terms and conditions from time-to-time. Please check this page regularly to ensure you are familiar with the current version.</p>

            <h2 class="mb-2">{{ switchWord('entire_agreement') }}</h2>
            <p class="mb-4 gray" v-if="$page.props.lang == 'ar'">تشكل هذه الشروط والأحكام الاتفاقية المتكاملة بينك وبيننا فيما يتعلق باستخدام موقعنا وخدماتنا وتحل محل جميع الاتفاقيات السابقة. نحتفظ بالحق في قبول أو رفض أي طلبيات في أي وقت.</p>
            <p class="mb-4 gray" v-else>These terms and conditions constitute the entire agreement between you and us in relation to your use of our website and services and supersede all previous agreements. We reserve the right to accept or reject any orders at any time.</p>

            <h2 class="mb-2">{{ switchWord('law_jurisdiction_disputes') }}</h2>
            <p class="mb-4 gray" v-if="$page.props.lang == 'ar'">تخضع مكينة لقانون المملكة العربية السعودية ، ويجب تفسير أي نزاعات تتعلق بهذه الاتفاقية بصورة حصرية من قبل محاكم المملكة.</p>
            <p class="mb-4 gray" v-else>Mkena is governed by and construed in accordance with Kingdom of Saudi Arabia law, and any disputes relating to this agreement shall be subject to the exclusive jurisdiction of the courts of Saudi.</p>

            <h2 class="mb-2">{{ switchWord('registrations_authorizations') }}</h2>
            <p class="mb-4 gray" v-if="$page.props.lang == 'ar'">موقع مكينة  مملوك من مؤسسة السيارة المتقدمة  للتسويق الالكتروني (سمتا)، (سجل تجاري رقم: 2051224564) و (الرقم الضريبي: 310188508400003)</p>
            <p class="mb-4 gray" v-else>Mkena is owned by Advanced Auto E-commerce Marketing Est.  (AAEM) (CR no: 2051224564) and ( VAT number :  310188508400003  )</p>

            <h2 class="mb-2">{{ switchWord('address') }}</h2>
            <p class="mb-4 gray" v-if="$page.props.lang == 'ar'">
                3511 شارع الأمير سلطان - حي الجوهرة وحدة 61 ، مكتب رقم 2 ، الخبر 34434 - 9497 المملكة العربية السعودية
                البريد الإلكتروني: info@mkena.com
            </p>
            <p class="mb-4 gray" v-else>3511 Al Amir Sultan Road – Al Jawharah Dist.
                Unit 61, Office No 2, Al Khubar 34434 - 9497
                Kingdom of Saudi Arabia
                email: info@mkena.com
            </p>

            <h2 class="mb-2">{{ switchWord('customer_support') }}</h2>
            <p class="mb-4 gray" v-if="$page.props.lang == 'ar'">إذا لم تستطع لأي سبب كان من العمل على الموقع بنجاح ، أو لديك أسئلة أو تحتاج إلى استشارة ، يرجى التواصل مع مديرحسابك من خلال البريد الالكتروني: info@mkena.com، أو مع فريق خدمة العملاء عبر رابط WhatsApp المتاح في الموقع.</p>
            <p class="mb-4 gray" v-else>If for any reason you are unable to operate on the site successfully, have questions or need consultations, please contact our managers at info@mkena.com, or our Customer Support Team via the WhatsApp link available in the website.</p>

        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import switchLang from "../mixin/SwitchLangWord";
import FooterComponent from "../components/FooterComponent";
export default {
    name: "terms",
    mixins:[switchLang],
    components:{
        NavbarComponent,FooterComponent
    }
}
</script>

<style lang="scss" scoped>
ol{
    li{
        color:#616161;
    }
}
</style>

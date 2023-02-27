<template>
    <div>
        <navbar-component data-aos="fade-left"></navbar-component>
        <header data-aos="fade-up">
            <div class="layer">
                <div class="container">
                    <h2 class="text-center">{{ keywords.website_name }}</h2>
                    <p class="text-center">{{ keywords.website_word }}</p>
                    <div class="text-center" v-if="$page.props.user == null">
                        <inertia-link href="/login" class="btn btn-main-color">
                            {{ keywords.login }}
                        </inertia-link>
                        <inertia-link href="/register" class="btn btn-main-color-outline">
                            {{ keywords.register }}
                        </inertia-link>
                    </div>
                    <div class="text-center" v-else>
                        <inertia-link href="/logout" class="btn btn-main-color">
                            {{ keywords.logout }}
                        </inertia-link>
                    </div>
                    <div style="display: none" class="row">
                        <div class="col-md-8">
                            <p>
                                <span>10000</span>
                                <span>{{  }}</span>
                            </p>
                            <p v-if="$page.props.user == null">
                                <span>{{ keywords.for }}</span>
                                <inertia-link href="#">
                                    {{ keywords.sale }}
                                </inertia-link>
                                <span>{{ keywords.and }}</span>
                                <inertia-link href="#">
                                    {{ keywords.rent }}
                                </inertia-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!------------------start of brands section------------------------ -->
        <section class="brands mt-4 overflow-hidden">
            <div class="container">
                <h2 class="main-title">
                    <span>{{ keywords.active_brands }}</span>
                </h2>
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-12"
                         data-aos="fade-left"
                         :data-aos-delay="100 * index"
                         v-for="(i,index) in brands" :key="index">
                        <div class="brand mb-2 rounded">
                            <div class="image">
                                <img :src="'/images/brands/'+i['image']">
                            </div>
                            <p class="bold p-2 text-center">
                                {{ i['name'] }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!------------------end of brands section------------------------ -->
        <!------------------start of mobile section------------------------ -->

        <section class="mobile">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-12"data-aos="fade-left" >
                        <div class="content">
                            <h2 class="small_line_heading">{{ keywords.mobile_experience }}</h2>
                            <p>{{ keywords.mobile_experience_info }}</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12">
                        <div class="image" data-aos="fade-right">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!------------------end of mobile section------------------------ -->
        <!------------------start of transfer section------------------------ -->

        <section class="transfer">
            <div class="container">
                <h2 class="main-title">
                    <span>{{ keywords.wholesale_features }}</span>
                </h2>
                <div class="row align-items-center">
                    <div class="col-md-6 col-12" data-aos="fade-left">
                        <div class="content mb-2">
                            <h2 class="mb-3 small_line_heading">{{ keywords.fast_transfer }}</h2>
                            <p>{{keywords.fast_transfer_info}}</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-12" data-aos="fade-right">
                        <div class="image mb-2">
                            <img class="img-thumbnail" src="images/home/transfer.jpg">
                        </div>
                    </div>
                    <div class="col-md-6 col-12" data-aos="fade-right">
                        <div class="image mb-2">
                            <img class="img-thumbnail" src="images/home/wrap.jpg">
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="content mb-2" data-aos="fade-left">
                            <h2 class="mb-3 small_line_heading">{{ keywords.wrap_goods }}</h2>
                            <p>{{keywords.wrap_goods_info}}</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-12" data-aos="fade-left">
                        <div class="content mb-2" >
                            <h2 class="mb-3 small_line_heading">{{ keywords.do_you_face_problem }}</h2>
                            <p>{{keywords.do_you_face_problem_info}}</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-12" data-aos="fade-right">
                        <div class="image mb-2">
                            <img class="img-thumbnail" src="images/home/support.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!------------------end of transfer section------------------------ -->


        <!----------------------------start of support----------------------------------- -->
        <section class="support_customer" data-aos="fade-down" data-aos-delay="500">
            <div class="layer">
                <div class="container text-center">
                    <p>{{ keywords.customer_support }}</p>
                    <a :href="'mailto:info@'+link" class="btn btn-primary">{{ keywords.send_message }}</a>
                    <a href="tel:+201152296646" class="btn btn-outline-primary">{{ keywords.call_us_by_phone }}</a>
                </div>
            </div>
        </section>
        <!----------------------------end of support----------------------------------- -->

        <footer-component data-aos="fade-up" data-aos-delay="500"></footer-component>

    </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import switchLang from "../mixin/SwitchLangWord";
import FooterComponent from "../components/FooterComponent";
export default {
    name: "home",
    props:['keywords','brands','approved_status'],
    mixins:[switchLang],
    components: {FooterComponent, NavbarComponent},
    data(){
        return {
            link:'',
        }
    },
    created(){
        this.link = window.location.host
    },
    mounted() {
        // change arrow direction at english page
        if(this.$inertia.page.props.lang == 'en'){
            $('i.ri-arrow-drop-left-line').removeClass('ri-arrow-drop-left-line').addClass('ri-arrow-drop-right-line');
        }
        if(this.approved_status != ''){
            Toast.fire({
                icon:this.approved_status[0],
                title:this.approved_status[1]
            })
        }
    },
    methods:{
        send_data:function(){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/import',data).then((e)=>{
               console.log(e);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.layer{
    background-color: rgb(255 255 255 / 35%);
    width: 100%;
    height: 100%;
}
header{
    background-image: url("/images/home/header.jpg");
    background-size: cover;
    height: 650px;
    background-position: center;
    margin-top: 55px;
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        height: 100%;
        h2{
            font-size: 65px;
            margin-bottom: 25px;
            text-shadow: 1px 1px 1px;
        }
        p{
            font-size:$big;
        }
        >div,h2,p{
            width: 100%;
        }
        .row{
            width:100%;
        }
    }
    p{
        font-size: $big;
        margin-top: 0px;
    }
    p:last-of-type{
        margin-bottom: 25px;
    }
}

.brands{
    .brand{
        border: 1px solid #dddddd;
        .image {
            overflow: hidden;
            img {
                width: 100%;
                height: 150px;
                object-fit: contain;
                transition: 1s all;

                &:hover {
                    transform: scale(2);
                }
            }
        }
    }
}
.mobile{
    background-color: $sub_main_color_white;
    position: relative;
    height: 200px;
    margin-top: 80px !important;
    margin-bottom: 120px;
    .container , .row{
        height: 100%;
    }
    .content{
        p{
            font-size: $paragraph;
        }
    }
    .image{
        background-image: url('/images/home/wholesale.jpg');
        height: 347px;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: -175px;
        width: 100%;
        z-index: -1;
    }
}
.transfer{
    .image{
        img{
            width: 100%;
            border-radius: 8px;
        }
    }
    .content{
        p{
            line-height: 35px;
        }
    }
}
.support_customer{
    background-image: url('/images/home/customer_support.webp');
    height: 350px;
    background-size: cover;
    background-position: top;
    .layer{
        height: 100%;
    }
    .container{
        height: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    p{
        color:white;
        width:100%;
        font-size: $semi_big;
        margin-bottom: 20px;
        text-align:center;
    }
    a:first-of-type{
        margin-left: 5px;
        margin-right: 5px;
    }
}


.sub{
    a{
        display: flex;
        align-items: center;
        position: relative;
        transition: 0.5s all;
        padding: 15px;
        border-radius: 10px;
        &:hover{
            box-shadow: 0px 0px 10px 1px #eeeaea;
        }
        &:hover >span:last-of-type{
            display: block;
        }
        >span:first-of-type{
            color:$main_color;
        }
        div{
            p:first-of-type{
                font-weight: bold;
                margin-bottom: 5px;
                span:nth-of-type(2){
                    background-color: $sub_main_color;
                    padding: 2px 6px;
                    border-radius: 3px;
                }
            }
            p:last-of-type{
                color:$gray;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                min-height: 50%;
                line-height: 30px;
            }
        }
        >span:last-of-type{
            position: absolute;
            top:8px;
            display: none;
        }
    }
}
.know.sub-data{
    a{
        >span:first-of-type{
            color:$sub_main_color;
        }
    }
}
.ad.sub-data{
    a{
        >span:first-of-type{
            color:$black;
        }
    }
}


@media (max-width: 767px) {
    header{
        height: 820px;
    }
    .mobile{
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 20px;
        height: unset;
        h2,p{
            text-align: center;
        }
        .image{
            display: none;
        }
    }
}
</style>

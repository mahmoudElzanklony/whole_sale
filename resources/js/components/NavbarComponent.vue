<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <inertia-link class="navbar-brand"  href="/profile/quotations" v-if="user != null && user.role.name == 'buyer'">
                <img src="/images/logo.png">
            </inertia-link>
            <inertia-link class="navbar-brand"  href="/" v-else>
                <img src="/images/logo.png">
            </inertia-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse  justify-content-between" id="navbarSupportedContent">
                <ul class="d-flex align-items-center">
                    <li class="nav-item">
                        <a class="nav-link" href="https://mkena.com/" target="_blank">
                            {{ switchWord('visit_mkena') }}
                        </a>
                    </li>
                    <li class="nav-item" v-if="$page.props.user == null">
                        <inertia-link class="nav-link" href="/register?user_type=seller">
                            {{ switchWord('register_as_seller') }}
                        </inertia-link>
                    </li>
                    <li class="nav-item" v-if="user != null && (user.role_id == 1 || user.role_id == 5)">
                        <inertia-link class="font-weight-bold nav-link" href="/dashboard">
                            {{ switchWord('dashboard') }}
                        </inertia-link>
                    </li>

                    <li class="nav-item">
                        <a v-if="$page.props.lang == 'en'" class="font-weight-bold d-inline-flex align-items-center" href="/lang/ar">
                            <i class="ri-global-line"></i>
                            {{ switchWord('Arabic_Language') }}
                        </a>
                        <a  v-else class="font-weight-bold d-inline-flex align-items-center" href="/lang/en">
                            <i class="ri-global-line"></i>
                            {{ switchWord('English_Language') }}
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="user_profile">
                                <img v-if="user == null" src="/images/icons/profile.svg">
                                <img v-else :src="'/images/users/'+user['image']">
                                <span></span>
                            </div>
                            <div class="dropdown-menu p-0 user-info-auth" aria-labelledby="navbarDropdown">
                                <div class="sign-form" v-if="user == null">
                                    <div class="p-4">
                                        <h2>{{ switchWord('sign_in') }}</h2>
                                        <p>{{ switchWord('add_ad') }}</p>
                                        <inertia-link class="d-block" href="/login">
                                            {{ switchWord('sign_in') }}
                                        </inertia-link>
                                        <inertia-link class="d-block" href="/register">
                                            {{ switchWord('sign_up') }}
                                        </inertia-link>
                                    </div>
                                    <div class="p-4" >
                                        <p>{{ switchWord('my_offers') }}</p>
                                        <p>{{ switchWord('get_best_offers') }}</p>
                                    </div>
                                </div>
                                <div class="auth-form" v-else>
                                    <div class="user_image">
                                        <img :src="'/images/users/'+user.image">
                                        <div>
                                            <p>
                                                {{ user.email }}
                                            </p>
                                            <p>{{ switchWord('registered_from_date') }}
                                                {{ new Date(user.created_at).toLocaleDateString() }}
                                            </p>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="list">
                                        <p>
                                            <inertia-link href="/profile/edit">
                                                {{ switchWord('activities') }}
                                            </inertia-link>
                                        </p>
                                        <ul>
                                            <li class="d-flex align-items-center justify-content-between" v-if="false">
                                                <p>
                                                    <span><i class="ri-heart-line"></i></span>
                                                    <span>{{ switchWord('my_favourite') }}</span>
                                                </p>
                                                <span>4</span>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between" v-if="false">
                                                <p>
                                                    <span><i class="ri-file-line"></i></span>
                                                    <span>{{ switchWord('my_notes') }}</span>
                                                </p>
                                                <span>2</span>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span><i class="ri-notification-line"></i></span>
                                                    <span>
                                                        <inertia-link href="/notifications">
                                                            {{ switchWord('notifications') }}
                                                        </inertia-link>
                                                    </span>
                                                </p>
                                                <span v-if="$page.props.numberofnotifications > 0">
                                                    {{ $page.props.numberofnotifications }}
                                                </span>
                                            </li>
                                            <hr>
                                            <li class="d-flex align-items-center justify-content-between" v-if="false">
                                                <p>
                                                    <span><i class="ri-building-line"></i></span>
                                                    <span>{{ switchWord('my_listings') }}</span>
                                                </p>
                                                <span>2</span>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between" v-if="false">
                                                <p>
                                                    <span><i class="ri-bank-card-line"></i></span>
                                                    <span>{{ switchWord('my_balance') }}</span>
                                                </p>
                                                <span></span>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between" v-if="false">
                                                <p>
                                                    <span><i class="ri-wallet-3-line"></i></span>
                                                    <span>{{ switchWord('charge_credit') }}</span>
                                                </p>
                                                <span></span>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <p>

                                                    <span><i class="ri-logout-box-line"></i></span>
                                                    <span>
                                                        <inertia-link href="/logout">
                                                             {{ switchWord('logout') }}
                                                        </inertia-link>
                                                    </span>

                                                </p>
                                                <span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!--                            <div class="dropdown-divider"></div>-->
                            </div>
                        </a>
                    </li>
                    <li class="nav-item d-flex align-items-center mrl-1">
                        <span>{{ switchWord('Help') }}?</span>
                        <a :href="'mailto:mailto:wholesale@mkena.com'" class="nav-link">
                            <span><i class="ri ri-mail-line"></i></span>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=966541006608" target="_blank">
                                <span style="color:green">
                                    <i class="ri-whatsapp-line"></i>
                                </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import SwitchLangWord from '../mixin/SwitchLangWord';
export default {
    name: "NavbarComponent",
    mixins:[SwitchLangWord],
    data(){
        return{
            link:'',
        }
    },
    created() {
        this.link = window.location.host
    },
    computed:{
        user:function(){
            return this.$inertia.page.props.user;
        },
    },
    methods:{
        showList:function (){
            let arrow = $(event.target).parent().find('span i');
            if(arrow.hasClass('ri-arrow-drop-down-fill')){
                arrow.removeClass('ri-arrow-drop-down-fill').addClass('ri-arrow-drop-up-fill')
            }else{
                arrow.removeClass('ri-arrow-drop-up-fill').addClass('ri-arrow-drop-down-fill')
            }
            $(event.target).parent().next().fadeToggle();
        },
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.ar{
    .navbar-brand{
        margin-left: 5%;
    }
    .dropdown-menu{
        img{
            margin-left: 5px;
        }
    }
    .mrl-1{
        margin-right: 10px;
    }
    .nav-link{
        >span:first-of-type{
            margin-left: 7px;
        }
    }
    .auth-form{
        .user_image{
            img{
                margin-left: 10px;
            }
        }
        .list{
            ul{
                li{
                    p{
                        span:first-of-type{
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
    }

}
.en{
    .navbar-brand{
        margin-right: 5%;
    }
    .mrl-1{
        margin-left: 10px;
    }
    .dropdown-menu{
        img{
            margin-right: 5px;
        }
    }

    .nav-link{
        >span:first-of-type{
            margin-right: 7px;
        }
    }
    .auth-form{
        .user_image{
            img{
                margin-right: 10px;
            }
        }
        .list{
            ul{
                li{
                    p{
                        span:first-of-type{
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
    }
}
nav {
    position: fixed;
    top:0px;
    right: 0px;
    left: 0px;
    z-index: 9999;
    .navbar-brand{
        img{
            height: 50px;
        }
    }
    .nav-item{
        >a{
            color:$black !important;
        }
    }
    padding: 0px;
    box-shadow: 1px 1px 1px 1px #ddd;
    background-color: white !important;

    .navbar-brand{
        margin: 0px;
        font-size: 30px;
        font-weight: bold;
        color:$main_color;
        padding: 0px;
        position: relative;
        top:-3px;
        &:hover{
            color:#007e72;
        }
    }
    .nav-item {
        cursor: pointer;
    }
    form{
        input:first-of-type{
            width:230px;
        }
    }
    .dropdown-menu{
        padding: 10px;
        a{
            display: flex;
            align-items: center;
            img{
                height:30px;
            }
            span:first-of-type{
                i{
                    /*color:$main_color;*/
                }
            }
        }

    }
    .user-info-auth {
        max-width: 320px;
        width: 320px;
        overflow: hidden;
        .sign-form {
            h2 {
                margin-bottom: 10px;
                color: $main_color;
                font-weight: bold;
            }

            p {
                color: $gray;
                margin-bottom: 10px;
            }

            div:nth-of-type(2) {
                background-color: $main_color;
                padding: 15px;

                p {
                    color: white;
                }
            }

            a {
                display: block;
                text-align: center;
                color: $main_color;
                padding: 8px;
                border-radius: 24px;
            }

            a:first-of-type {
                color: white;
                background-color: $main_color;
                margin-bottom: 10px;
            }

            a:nth-of-type(2) {
                background-color: $white_gray;
            }
        }

        .auth-form{
            .user_image{
                display: flex;
                align-items: center;
                padding: 10px;
                img{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    object-fit: cover;
                }
                div{
                    p:last-of-type{
                        color:$gray;
                        margin-top: 5px;
                    }
                }
            }
            .list{
                >p{
                    padding: 0px 10px;
                    margin-top: 15px;
                    margin-bottom: 10px;
                }
                ul{
                    li{
                        padding:3px 10px;
                        p{
                            span{
                                font-size: $small;
                            }
                            span:last-of-type{
                                font-weight: bold;
                            }
                        }
                        >span{
                            color:white;
                            padding:0px 5px;
                            border-radius: 3px;
                            background-color: $main_color;
                        }
                    }
                }
            }
        }

    }
}
.nav-link{
    color:$black;
    .box{
        position: absolute;
        top:0px;
        display: none;
    }
    p{
        display: flex;
        align-items: center;
        justify-content: space-between;
        span:nth-of-type(2){
            margin-right: 7px;
            margin-left: 7px;
        }
    }
}
.dropdown-toggle{
    span:nth-of-type(2){
        margin-right: 7px;
        margin-left: 7px;
    }
    .user_profile{
        text-align: center;
        img{
            width:40px;
            height: 40px;
            border-radius: 50%;
            border:1px solid #eee;
        }
        span{
            background-color: $main_color;
            color: white;
            font-size: 10px;
            display: block;
            text-align: center;
            position: absolute;
            top: 7px;
            width: 10px;
            height: 10px;
            border-radius: 50px;
            padding: 0;
        }
    }
}
.dropdown-toggle::after{
    display: none;
}
@media (min-width: 992px) {
    nav ul:first-of-type .nav-item:nth-of-type(2) div{
        width:203px;
    }
}
@media (max-width:992px) {
    .navbar-collapse {
        flex-wrap: wrap;
        .navbar-nav {
            width: 100%;
        }
    }
    .user-info-auth{
        width:320px;
    }
    ul.d-flex{
        flex-direction: column;
    }
    .ar {
        .nav-link {
            padding-right: 0px;
        }
    }
    .en{
        .nav-link {
            padding-left: 0px;
        }
    }
}

@media (max-width: 767px) {

    .auth-form , .sign-form{
        max-height: 400px;
        overflow: auto;
    }
    .ar{
        nav{
            ul{
                >li{
                    &:last-of-type{
                        >span:first-of-type{
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
    .en{
        nav{
            ul{
                >li{
                    &:last-of-type{
                        >span:first-of-type{
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
    nav{
        ul{
            align-items: flex-start !important;
            >li{
                margin-bottom: 10px;
                a{
                    i{
                        position: relative;
                        top:-1px;
                    }
                }
                &:last-of-type{
                    margin-right: 0px !important;
                    margin-left: 0px !important;
                    align-items: center;
                }
            }
        }
        form{
            margin: auto;
            input:first-of-type{
                margin-left: 5px;
                margin-right: 5px;
            }
        }
      .user-info-auth{
          left:0px;
          right:0px;
      }
    }
}

</style>

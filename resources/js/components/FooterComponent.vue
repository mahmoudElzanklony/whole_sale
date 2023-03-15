<template>
    <footer class="p-4 mt-3">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>{{ switchWord('website') }}</h1>
                    <p>{{switchWord('footer_info')}}</p>
                </div>
                <div class="col-md-6">
                    <div class="info">
                        <ul>
                            <li>
                                <inertia-link href="/common-questions">
                                    {{ switchWord('common_questions') }}
                                </inertia-link>
                            </li>
                            <li>
                                <inertia-link href="#">
                                    {{ switchWord('jobs') }}
                                </inertia-link>
                            </li>
                            <li>
                                <inertia-link href="/home#contactus">
                                    {{ switchWord('contact_us') }}
                                </inertia-link>
                            </li>
                            <li>
                                <inertia-link href="#">
                                    {{ switchWord('site_map') }}
                                </inertia-link>
                            </li>
                            <li>
                                <inertia-link href="#">
                                    {{ switchWord('conditions') }}
                                </inertia-link>
                            </li>
                        </ul>
                        <div class="downloads">
                            <inertia-link href="#" style="display: none">
                                <img src="/images/icons/google.svg">
                            </inertia-link>
                            <inertia-link href="#" style="display: none">
                                <img src="/images/icons/IOS.svg">
                            </inertia-link>
                            <inertia-link href="#" style="display: none">
                                <img src="/images/icons/huawei.svg">
                            </inertia-link>
                        </div>
                        <div class="social">
                            <a target="_blank" href="https://www.facebook.com/mkena.autoparts">
                                <span>
                                    <i class="ri-facebook-line"></i>
                                </span>
                            </a>
                            <a href="https://twitter.com/AutoMkena" target="_blank">
                                <span>
                                    <i class="ri-linkedin-box-line"></i>
                                </span>
                            </a>
                            <a href="https://www.instagram.com/mkenaautoparts/" target="_blank">
                                <span>
                                    <i class="ri-instagram-line"></i>
                                </span>
                            </a>
                            <a href="https://www.youtube.com/@mkenaautoparts6282" target="_blank">
                                <span>
                                    <i class="ri-youtube-line"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "FooterComponent",
    mixins:[SwitchLangWord],
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
footer{
    background-color: $main_color;
    .row{
        >div:first-of-type{
            h1{
                margin-bottom: 15px;
                font-size: $big;
            }
            h1,p{
                color:white;
            }
        }
        >div:last-of-type{
            .info{
                ul{
                    display:flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    li{
                        a{
                            color:white;
                        }
                    }
                }
                .downloads{
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 15px;
                    margin-bottom: 15px;
                    img{
                        height: 60px;
                        max-width: 170px;
                    }
                }
                .social{
                    display: flex;
                    align-items: center;
                    a{
                        span{
                            color:white;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 900px) {
    footer{
        h1,p{
            text-align: center;
        }
        ul{
            margin-top: 12px;
        }
        .downloads{
            img{
                max-width: 95px !important;
            }
        }
        .downloads,.social{
            justify-content: center;
        }
    }
}

.ar{
    footer{
        .downloads{
            a:first-of-type{
                margin-left: 10px;
            }
        }
        .social{
            a{
                margin-left: 15px;
            }
        }
    }
}
.en{
    footer{
        .downloads{
            a:first-of-type{
                margin-right: 10px;
            }
        }
        .social{
            a{
                margin-right: 15px;
            }
        }
    }
}

</style>

<template>
    <nav class="side-bar-nav">
            <span class="cursor-pointer">
                <i @click="toggleSideNav" v-if="$page.props.lang == 'ar'" class="ri-menu-3-line"></i>
                <i v-else @click="toggleSideNav" class="ri-menu-2-line"></i>
            </span>
        <div class="logo">
            <inertia-link href="/">
                <img src="/images/logo.png">
            </inertia-link>
        </div>
        <ul>
            <li custom="dashboard">
                <inertia-link href="/dashboard">
                    <span><i class="ri-home-2-line"></i></span>
                    <span>{{ switchWord('Home') }}</span>
                    <span></span>
                </inertia-link>
            </li>
            <li custom="settings">
                <inertia-link href="/dashboard/settings">
                    <span><i class="ri-settings-line"></i></span>
                    <span>{{ switchWord('settings') }}</span>
                    <span></span>
                </inertia-link>
            </li>
            <li custom="notifications">
                <inertia-link href="/dashboard/notifications">
                    <span><i class="ri-notification-2-line"></i></span>
                    <span>{{ switchWord('notifications') }}</span>
                    <span></span>
                </inertia-link>
            </li>
            <li custom="users">
                <inertia-link href="/dashboard/users">
                    <span><i class="ri-group-line"></i></span>
                    <span>{{ switchWord('users') }}</span>
                </inertia-link>
            </li>
            <li custom="categories">
                <inertia-link href="/dashboard/categories">
                    <span><i class="ri-list-check"></i></span>
                    <span>{{ switchWord('categories') }}</span>
                </inertia-link>
            </li>
            <li custom="questions">
                <inertia-link href="/dashboard/questions">
                    <span><i class="ri-question-line"></i></span>
                    <span>{{ switchWord('questions') }}</span>
                </inertia-link>
            </li>
            <li custom="statistics">
                <inertia-link  href="/dashboard/statistics">
                    <span><i class="ri-line-chart-line"></i></span>
                    <span>{{ switchWord('chart') }}</span>
                </inertia-link>
            </li>
            <li custom="packages">
                <inertia-link  href="/dashboard/packages">
                    <span><i class="ri-inbox-fill"></i></span>
                    <span>{{ switchWord('packages') }}</span>
                </inertia-link>
            </li>
            <li custom="currencies">
                <inertia-link  href="/dashboard/currencies">
                    <span><i class="ri-currency-line"></i></span>
                    <span>{{ switchWord('currencies') }}</span>
                </inertia-link>
            </li>
            <li custom="subscriptions">
                <inertia-link  href="/dashboard/subscriptions">
                    <span><i class="ri-stack-line"></i></span>
                    <span>{{ switchWord('subscriptions') }}</span>
                </inertia-link>
            </li>
            <li custom="buildings">
                <inertia-link  href="/dashboard/buildings">
                    <span><i class="ri-building-line"></i></span>
                    <span>{{ switchWord('buildings') }}</span>
                </inertia-link>
            </li>
            <li custom="pointad">
                <inertia-link  href="/dashboard/pointad">
                    <span><i class="ri-shield-flash-line"></i></span>
                    <span>{{ switchWord('ad_points') }}</span>
                </inertia-link>
            </li>
            <li custom="countries">
                <inertia-link  href="/dashboard/map/countries">
                    <span><i class="ri-bank-line"></i></span>
                    <span>{{ switchWord('countries') }}</span>
                </inertia-link>
            </li>
            <li custom="governments">
                <inertia-link  href="/dashboard/map/governments">
                    <span><i class="ri-government-line"></i></span>
                    <span>{{ switchWord('governments') }}</span>
                </inertia-link>
            </li>
            <li custom="cities">
                <inertia-link  href="/dashboard/map/cities">
                    <span><i class="ri-community-line"></i></span>
                    <span>{{ switchWord('cities') }}</span>
                </inertia-link>
            </li>
            <li custom="areas">
                <inertia-link  href="/dashboard/map/areas">
                    <span><i class="ri-map-pin-line"></i></span>
                    <span>{{ switchWord('areas') }}</span>
                </inertia-link>
            </li>
            <li custom="reports">
                <inertia-link href="/dashboard/reports">
                    <span><i class="ri-file-list-3-line"></i></span>
                    <span>{{ switchWord('reports') }}</span>
                </inertia-link>
            </li>
            <li custom="support">
                <inertia-link href="/dashboard/support">
                    <span><i class="ri-headphone-line"></i></span>
                    <span>{{ switchWord('client_support') }}</span>
                </inertia-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import SwitchLangWord from "../../mixin/SwitchLangWord";
export default {
    name: "SideNavbarComponent",
    mixins:[SwitchLangWord],
    mounted() {
        var active_li = document.URL.split('/')[document.URL.split('/').length - 1];
        $('ul').find('li[custom="'+active_li+'"]').addClass('active');
    },
    methods:{
        toggleSideNav:function(){
            $(event.target).parent().parent().toggleClass('icons_only');
            if($(event.target).parent().parent().hasClass('icons_only')){
                $('.dashboard .content').css('width',$(document).innerWidth() - 50);
            }else{
                $('.dashboard .content').css('width',$(document).innerWidth() - 200);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.ar{
    .orange_class{
        &:hover{
            padding-right: 10px;
        }
        &::before{
            left: 0px;
        }
    }

    .side-bar-nav{
        right: 0px;
        >span{
            right: 5px;
        }
        ul{
            li{
                a{
                    span:first-of-type{
                        margin-left: 10px;
                    }
                }
            }
            li.active{
                &::before{
                    left: 0px;
                }
            }
        }
    }

}
.en{
    .orange_class{
        &:hover{
            padding-left: 10px;
        }
        &::before{
            right: 0px;
        }
    }

    .side-bar-nav{
        left: 0px;
        >span{
            left: 5px;
        }
        ul{
            li{
                a{
                    span:first-of-type{
                        margin-right: 10px;
                    }
                }
            }
            li.active{
                &::before{
                    right: 0px;
                }
            }
        }
    }
}

.orange_class{
    &::before{
        content: '';
        position: absolute;
        height: 0px;
        transition: 0.5s all;
        background-color: $main_color;
        width: 4px;

    }
    &:hover::before{
        height: 100%;
    }
    &:hover span{
        color:$main_color;
    }
}


.side-bar-nav{
    transition: 0.5s all;
    position: fixed;
    background-color: #eeeeee38;
    width: 200px;
    height: 100%;
    padding: 0px !important;
    >span{
        position: absolute;
        top: 14px;
        color: $black;
    }
    .logo{
        img{
            padding-top: 10px;
            width: 115px;
            display: block;
            margin: auto;
        }
    }
    ul{
        padding-top: 50px;
        height: calc(100% - 50px);
        overflow: auto;
        li{
            transition: 0.5s all;
            position: relative;
            a{
                display: flex;
                align-items: center;
                padding: 5px;
                span{
                    color:$black;
                }
            }
            @extend .orange_class;

        }
        li.active{
            span{
                color:$main_color;
            }
            &::before{
                content: '';
                position: absolute;
                transition: 0.5s all;
                background-color: $main_color;
                width: 4px;
                height: 100%;
            }
        }
        li:not(:last-of-type){
            border-bottom: 1px solid #eeeeee;
        }
    }
}

.side-bar-nav.icons_only{
    width:50px;
    >span{
        right: 10px;
    }
    .logo{
        img{
            display: none;
        }
    }
    ul{
        li{
            a{
                align-items: center;
                justify-content: center;
                span:not(:first-of-type){
                    display: none;
                }
            }
        }
    }
}

</style>

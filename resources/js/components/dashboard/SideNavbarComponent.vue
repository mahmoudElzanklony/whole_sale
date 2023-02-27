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
            <li :custom="i['privillage']['en_name']" v-for="(i,index) in get_privillages_pages">
                <inertia-link :href="'/dashboard/'+i['privillage']['en_name'].replace(' ','-').toLocaleLowerCase()"

                              :key="index">
                    <span><i :class="i['privillage']['icon']"></i></span>
                    <span>{{ i['privillage'][$page.props.lang+'_name'].replace('-',' ') }}</span>
                    <span></span>
                </inertia-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapGetters , mapActions} from "vuex";
export default {
    name: "SideNavbarComponent",
    mixins:[SwitchLangWord],
    computed:{
        ...mapGetters({
            'get_privillages_pages':'privillages/get_data',
        })
    },
    mounted() {
        var active_li = document.URL.split('/')[document.URL.split('/').length - 1];
        $('ul').find('li[custom="'+active_li+'"]').addClass('active');
        this.get_privillages();

    },
    methods:{
        ...mapActions({
           'get_privillages':'privillages/get_privillages',
        }),
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

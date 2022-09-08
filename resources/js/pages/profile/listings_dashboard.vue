<template>
    <section class="listings_dashboard">
        <navbar-component></navbar-component>
        <div class="inner">
            <profile-nav-component></profile-nav-component>
            <div class="tabs mt-4">
                <div class="container">
                    <ul class="d-flex justify-content-between mt-3">
                        <li class="w-100 text-center" v-for="(i,index) in ['live_listings','rejected_listings','expired_listings','pending_listings','deleted_listings','draft_listings']" :key="index">
                            <inertia-link :href="'?tab='+i">
                                <span>{{ keywords[i] }}</span>
                                <span v-if="data['count'][index] > 0 && data['count'][index] <= 9">{{ data['count'][index] }}</span>
                                <span v-else-if="data['count'][index] > 9">+9</span>
                                <span style="opacity: 0" v-else></span>
                            </inertia-link>
                        </li>
                    </ul>
                </div>
            </div>

           <div class="outer_content_data">
               <div class="container">
                   <div class="content">
                       <div :class="tab +' active'">
                           <p class="mb-2">{{ data['text'] }}</p>
                           <ul v-if="data.hasOwnProperty('more_text_info')">
                               <li v-for="(more_txt,index) in data['more_text_info']" :key="index">
                                   {{ more_txt }}
                               </li>
                           </ul>
                           <div class="data-table-box">
                               <table class="myTable table table-bordered table-striped table-hover">
                                   <thead>
                                   <tr>
                                       <td
                                           v-for="name in Object.keys(data['table_keywords'])"                                                              :key="name">
                                           {{ keywords[name] }}
                                       </td>
                                   </tr>
                                   </thead>

                                   <tbody>
                                   <tr v-for="(row_val,index) in data['data']" :class="'tr_'+row_val['id']" :key="index">
                                       <td  v-for="(td_val,index) in Object.values(row_val)"
                                           :key="index">
                                           <span v-if="td_val == 0 || td_val == 1">
                                               {{ switchWord(td_val == 0 ? 'no':'yes') }}
                                           </span>
                                           <span v-else>{{ td_val }}</span>
                                       </td>
                                       <td class="actions_control" v-if="Object.keys(
                                                    data['table_keywords']
                                                ).includes('actions')">
                                           <div class="dropdown">
                                               <button class="btn btn-primary dropdown-toggle"
                                                       type="button" id="dropdownMenuButton"
                                                       data-toggle="dropdown" aria-haspopup="true"
                                                       aria-expanded="false">
                                                        <span>
                                                            <i class="ri-edit-line"></i>
                                                        </span>
                                               </button>
                                               <div class="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton">
                                                   <inertia-link
                                                       class="dropdown-item"
                                                       :href="'/listing/initialize?id='+row_val['id']">
                                                       {{ keywords.update_info }}
                                                   </inertia-link>
                                                   <inertia-link
                                                       class="dropdown-item"
                                                       :href="'/listing/photos?id='+row_val['id']">
                                                       {{ keywords.update_photos }}
                                                   </inertia-link>
                                               </div>
                                           </div>
                                           <button class="btn btn-danger">
                                                    <span  >
                                                        <i @click="delete_item('listings_infos',row_val['id'],'.tr_'+row_val['id'])" class="ri-close-line"></i>
                                                    </span>
                                           </button>
                                           <inertia-link class="complete_payment btn btn-secondary"
                                                         v-if="row_val['payment_status'] == 0"
                                               :title="keywords.complete_payment"
                                               :href="'/listing/confirm-payment?id='+row_val['id']">
                                               <span>
                                                   <i class="ri-secure-payment-line"></i>
                                               </span>
                                           </inertia-link>
                                       </td>
                                   </tr>
                                   </tbody>

                               </table>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ProfileNavComponent from "../../components/ProfileNavComponent";
import tableData from "../../mixin/tableData";
import delete_item from "../../mixin/delete_item";
import SwitchLangWord from "../../mixin/SwitchLangWord";
export default {
    name: "listings_dashboard",
    props:['keywords','data'],
    mixins:[tableData,delete_item,SwitchLangWord],
    data:function (){
        return {
           tab:null,
        };
    },
    created(){
        if(document.URL.split('tab=')[1] == undefined){
            this.tab = 'live_listings';
        }else{
            this.tab = document.URL.split('tab=')[1];
        }
    },
    components: {ProfileNavComponent, FooterComponent, NavbarComponent},
    mounted() {
        if(document.URL.split('?tab=')[1] == undefined){
            $('.listings_dashboard .inner .tabs ul li').eq(0).addClass('active');
            $('.listings_dashboard .inner .outer_content_data .content > div').eq(0).addClass('active');
        }else{
            for(let a of document.querySelectorAll('.listings_dashboard .inner .tabs ul li a')){
                if(a.getAttribute('href') == document.URL.split('dashboard')[1]){
                    a.parentElement.className = 'active w-100 text-center';
                    $('.listings_dashboard .inner .outer_content_data .content > div.'+a.getAttribute('href').replace('?tab=','')).addClass('active');
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.listings_dashboard{
    .inner{
        ul{
            border-bottom: 1px solid #ddd;
            li{
                padding: 10px;
                a{
                    span:last-of-type{
                        background-color:$red;
                        width: 22px;
                        height: 22px;
                        border-radius: 50%;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                    }
                }
            }
            li.active{
                box-shadow: 0px 0px 8px 1px #ddd;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
                a{
                    color:$main_color;
                    font-weight: bold;
                }
            }
        }
        .tabs{

        }
    }
    .outer_content_data{
        .content{
            border: 1px solid #dddddd;
            border-top: none;
            >div{
                display: none;
                padding: 15px;
                p{
                    font-weight: bold;
                }
            }
            >div.active{
                display: block;
            }
            ul{
                list-style: decimal-leading-zero;
                list-style-position: inside;
            }
        }
    }
}


table{
    thead{
        tr{
            td{
                border-bottom: none;
            }
        }
        tbody{
            tr{
                td{
                    border-bottom: none;
                }
            }
        }
    }
    td.actions_control{
        display: flex;
        justify-content: center;
        border: none;
        border-top: 1px solid #dddddd;
        button,button[data-toggle="dropdown"]{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            padding: 0;
            span{
                color:white;
            }
        }
        button[data-toggle="dropdown"]{
            margin-left: 5px;
            margin-right: 5px;
            &::after{
                display: none;
            }
        }
    }
    td{
        text-align: center;
    }
}

.complete_payment{
    padding: 0;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: 5px;
    margin-left: 5px;
    span{
        color:white;
    }
}

@media (max-width: 567px) {
    .listings_dashboard{
        .tabs{
            ul{
                flex-wrap: wrap;
                li{
                    a{
                        width:100%;
                        display: block;
                        direction: initial;
                    }
                }
            }
        }
    }
}

</style>

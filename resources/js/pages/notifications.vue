<template>
    <section class="notifications">
        <navbar-component></navbar-component>
        <div v-if="false" class="loading align-items-center justify-content-center">
            <img  src="/images/loading.gif">
        </div>
        <div class="container mt-4 mb-4">
            <div class="outer-notification">
                <p>
                    <span>{{  keywords.notifications }}</span>
                    <span>{{ data.total }}</span>
                </p>
                <div class="inner">
                    <div class="notification d-flex align-items-center justify-content-between"
                         v-for="(i,index) in vuex_data" :key="index"
                    >
                        <div class="data d-flex align-items-center">
                            <img :src="'/images/users/'+i['sender']['image']">
                            <div class="text">
                                <p>
                                    <strong>{{ i['sender']['role']['name'] == 'admin' || i['sender']['role']['name'] == 'supervisor'? 'Admin':i['sender']['role']['name'] }}</strong>
                                </p>
                                <p>
                                    {{ i['info'] }}
                                </p>
                            </div>
                        </div>
                        <p class="d-flex align-items-center">
                            <span>{{ new Date(i['created_at']).toLocaleDateString() }}</span>
                            <span><i class="ri-calendar-2-line"></i></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import {mapGetters , mapActions , mapMutations} from "vuex";
export default {
    name: "notifications",
    props:['keywords','data'],
    computed:{
        ...mapGetters({
            'vuex_data':'notifications/get_data'
        })
    },
    methods:{
        ...mapMutations({
            'inilalize_data':'notifications/inialize_data',
            'inilalize_type':'notifications/inialize_type',
        }),
        ...mapActions({
            'get_data_when_scroll':'notifications/infinite_scroll',
        })
    },
    created() {
        var com = this;
        var status_execute = 1;
        window.addEventListener("scroll", async function(e){
            let current_position  = document.documentElement.scrollTop;
            let notification_container_height = $('.outer-notification').outerHeight();
            console.log(current_position);
            console.log(notification_container_height / 2);
            if((current_position >= (notification_container_height / 2)) && status_execute == 1){
                status_execute = 0;
                console.log(com);
                await com.get_data_when_scroll();
            }
            status_execute = 1;
        });
        this.inilalize_data(this.data);
        this.inilalize_type(this.type);

    },
    components: {FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.notifications{
    .outer-notification{
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-top: 100px;
        >p{
            display: flex;
            align-items: center;
            padding: 6px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            span{
                font-size: $semi_big;
            }
            span:first-of-type{
                margin-left: 5px;
            }
            span:last-of-type{
                width: 30px;
                height: 30px;
                border-radius: 10px;
                color: white;
                background-color: $main_color;
                display: inline-flex;
                justify-content: center;
                align-items: center;
            }
        }
        .inner{
            .notification:nth-child(odd){
                background-color: #0353970a;
            }
            .notification{
                border-bottom: 1px solid #dddddd;
                padding: 8px;
                >div{
                    img{
                        border: 1px solid #eee;
                        border-radius: 8px;
                        width: 60px;
                        height: 60px;
                        margin-left: 7px;
                    }
                    p{
                        margin-bottom: 3px;
                    }
                }
                >p{
                    span:first-of-type{
                        color:$black;
                    }
                    span:last-of-type{
                        color:$dark_gray;
                        position: relative;
                        top:1px
                    }
                }
            }
        }
    }
}
.loading{
    display:none;
}
</style>

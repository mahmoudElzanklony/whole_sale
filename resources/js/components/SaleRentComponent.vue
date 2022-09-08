<template>

    <div class="sale_rent">
        <div class="container">
            <p>
                <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                <span v-else><i class="ri-arrow-left-s-fill"></i></span>
                <span>
                    {{ switchWord('search_inside_the_cities') }}
                    <strong v-if="country != ''"> {{ switchWord('in') }} {{ country['name'] }}</strong>
                </span>
                <span class="d-block w-100 mb-2"></span>
                <span class="active" @click="switch_city">{{ switchWord('rent') }}</span>
                <span @click="switch_city">{{ switchWord('sale') }}</span>
            </p>
            <div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-6 mb-2" v-for="(i,index) in rent_data" :key="index">
                        <inertia-link href="">
                            <span>{{ i['city_name'] }}</span>
                            <span>({{ i['total_listings'] }})</span>
                        </inertia-link>
                    </div>
                </div>
            </div>
            <div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-6 mb-2" v-for="(i,index) in sale_data" :key="index">
                        <inertia-link href="">
                            <span>{{ i['city_name'] }}</span>
                            <span>({{ i['total_listings'] }})</span>
                        </inertia-link>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "SaleRentComponent",
    props:['data','country'],
    mixins:[SwitchLangWord],
    computed:{
        rent_data:function(){
            return this.data.filter((e)=>{
                return e['rent_or_sale'] == 'rent'
            })
        },
        sale_data:function(){
            return this.data.filter((e)=>{
                return e['rent_or_sale'] == 'sale'
            })
        },
    },
    methods:{
        switch_city:function (){
            $(event.target).parent().find('.active').removeClass('active');
            $(event.target).addClass('active');
            $(event.target).parent().parent().find('>div').hide();
            $(event.target).parent().parent().find('>div').eq($(event.target).index() - 3).fadeIn();
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.sale_rent{
    p{
        display: flex;
        margin-bottom: 20px;
        flex-wrap: wrap;
        align-items: center;
        span:first-of-type{
            color:$main_color;
        }
        span:not(:first-of-type){
            margin-right: 10px;
            color:$dark_gray;
        }
        span:nth-of-type(4) , span:nth-of-type(5){
            padding: 6px 25px;
            border-radius: 25px;
            cursor: pointer;
            transition: 0.5s all;
            &:hover{
                background-color: $main_color;
                color:white;
            }
        }
        span.active{
            background-color: $main_color;
            color:white;
        }
    }
    .container{
        >div{
            display: none;
            transition: 0.5s all;
            a{
                span{
                    color:$dark_gray;
                    margin-left: 2px;
                }
            }
        }
        >div:first-of-type{
            display: block;
        }
    }

}

</style>

<template>
    <div class="listing-details-info">
        <!--------------if its added to favourite--------------- -->
        <span class="fav" v-if="fav">
            <i @click="toggle_fav" class="ri-heart-fill"></i>
        </span>
        <!--------------if its added to favourite--------------- -->

        <!--------------if its added to note--------------- -->
        <span class="edit" v-if="note">
            <i @click="$emit('write_note',[id,note])" class="ri-edit-fill"></i>
        </span>
        <!--------------if its added to note--------------- -->

        <inertia-link :href="link">
            <div class="image">
                <img :src="image">
                <p>
                    <span><i class="ri-image-line"></i></span>
                    <span>{{ number_of_images }}</span>
                </p>
            </div>
            <p><strong>{{ info }}</strong></p>
            <p>{{ address }}</p>
            <!--------- if this is a compound ----- -->
            <div v-if="compound" class="d-flex info_icons justify-content-around">
                <p class="d-flex align-items-center">
                    <span><i class="ri-fullscreen-line"></i></span>
                    <span>90 {{ switchWord('meter') }}</span>
                </p>
                <p class="d-flex align-items-center">
                    <span><i class="ri-hotel-bed-line"></i></span>
                    <span>1 {{ switchWord('baths') }}</span>
                </p>
                <p class="d-flex align-items-center">
                    <span><i class="ri-hotel-bed-line"></i></span>
                    <span>1 {{ switchWord('bath') }}</span>
                </p>
            </div>
            <!------------end of its a coumpond --------------- -->
            <p>
                <span>{{ price }}</span>
                <span>{{ switchWord('currency') }}</span>
            </p>
            <p v-if="average">
                <span v-if="$page.props.lang == 'ar'">متوسط سعر المتر</span>
                <span v-else>Meter average price</span>
            </p>
        </inertia-link>
    </div>
</template>

<script>
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "ListingPostComponent",
    mixins:[SwitchLangWord],
    props:['id','image','number_of_images','info','address','price','average',
        'compound','beds','baths','area','fav','note','link'],
    methods:{
        toggle_fav:function (){
            let title = '';
            if($(event.target).hasClass('ri-heart-fill')){
                $(event.target).removeClass('ri-heart-fill').addClass('ri-heart-line');
                title = this.switchWord('removed_from_fav_successfully');
                var status = 0;
            }else{
                $(event.target).removeClass('ri-heart-line').addClass('ri-heart-fill');
                title = this.switchWord('added_to_fav_successfully');
                var status = 1;
            }
            axios.post('/user/toggle-fav',{
                status:status,
                id:this.id,
            }).then((e)=>{
                Toast.fire({
                    icon:'success',
                    title:title
                })
            })

        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.listing-details-info {
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 15px;
    overflow: hidden;
    position: relative;
    >span{
        position: absolute;
        top:5px;
        z-index: 99999999999999999999999999999999;
        cursor: pointer;
    }
    >span.fav{
        color:$red;
    }
    >span.edit{
        color:$dark_gray;
    }
    .image {
        position: relative;
        img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-bottom: 1px solid #ddd;
        }
        p {
            position: absolute;
            display: flex;
            align-items: center;
            background-color: #2624244d;
            bottom: 0px;
            span {
                color: white;
            }
        }
    }
    .info_icons{
        p{
            span:nth-of-type(odd){
                color:$gray;
            }
        }
    }
    a {
        > p {
            padding: 4px 8px;
        }

        > p:first-of-type {
            strong {
                color: $dark_gray;
            }
        }

        > p:nth-of-type(2) {
            color: $dark_gray;
        }

        > p:nth-of-type(3) {
            span {
                color: $main_color;
                font-weight: bold;
            }
        }
        >p:last-of-type{
            span{
                font-weight: bold;
                color:$main_color;
            }
        }
    }

}

.ar{
    .listing-details-info {
        >span{
            left:5px;
        }
        .image {
            p {
                right: 0px;
                span {
                    margin-left: 5px;
                }
            }
        }
    }
}

.en{
    .listing-details-info {
        >span{
            right: 5px;
        }
        .image {

            p {
                left: 0px;
                span {
                    margin-right: 5px;
                }
            }
        }
    }
}

</style>

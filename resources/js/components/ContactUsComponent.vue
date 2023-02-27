<template>
    <div class="contact_us_box text-center">
        <p class="text-center">
                <span>
                    <i class="ri-headphone-line"></i>
                </span>
        </p>
        <p>
            {{ switchWord('do_you_need_help') }}
        </p>
        <a href="tel:+201112355153">{{ switchWord('please_contact_with_this_number') }} 0100566393</a>
        <p>{{ switchWord('work_daily') }}</p>
        <inertia-link href="/feedback">{{ switchWord('contact_with_us') }}</inertia-link>
    </div>
</template>

<script>
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "ContactUsComponent",
    mixins:[SwitchLangWord],
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.contact_us_box{
    width: 260px;
    box-shadow: 1px 1px 14px 4px #eee;
    position: fixed;
    left: 10px;
    bottom: 10px;
    background-color: white;
    z-index: 9999;
    padding: 10px;
    border-radius: 5px;
    p{
        span{
            i{
                font-size: $paragraph;
                color:$main_color;
                display: block;
                font-size: $semi_big;
                text-align: center;
            }
        }
    }
    p:nth-of-type(2){
        margin-bottom: 5px;
        margin-top: 5px;
        text-align: center;
    }
    p:nth-of-type(3){
        margin-bottom: 5px;
        margin-top: 5px;
        text-align: center;
    }
    a:first-of-type{
        color:$main_color;
    }
    a:last-of-type{
        color:$main_color;
    }
}
</style>

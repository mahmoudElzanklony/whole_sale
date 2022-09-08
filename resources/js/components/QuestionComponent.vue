<template>
    <div class="question">
        <p class="d-flex align-items-center justify-content-between">
            <span>{{ question }}</span>
            <span ><i @click="toggleAnswer" class="ri-arrow-down-s-line"></i></span>
        </p>
        <p>
            <inertia-link :href="'/ask-neighbours/'+id+'/answers'">
                <span>{{ switchWord('reactions_questions') }}</span>
                <span>{{ answer }}</span>
            </inertia-link>
        </p>
    </div>
</template>

<script>
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "QuestionComponent",
    props:['id','question','answer'],
    mixins:[SwitchLangWord],
    methods:{
        toggleAnswer:function(){
            if($(event.target).hasClass('ri-arrow-down-s-line')){
                $(event.target).removeClass('ri-arrow-down-s-line').addClass('ri-arrow-up-s-line');
            }else{
                $(event.target).removeClass('ri-arrow-up-s-line').addClass('ri-arrow-down-s-line');
            }
            $(event.target).parent().parent().next().slideToggle();
        }
    },
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.question {
    p {
        border-bottom: 1px solid #ddd;
        padding: 6px 18px;
    }

    p:first-of-type {
        background-color: #eeeeee;

        span:first-of-type {
            color: $dark_gray;
        }

        span:last-of-type {
            color: $gray;
            position: relative;
            top:4px;
        }
    }

    p:last-of-type {
        display: none;
    }
}
</style>

<template>
    <section>
        <navbar-component></navbar-component>

        <section class="mostquestions">
            <div class="container">
                <h2 class="text-center main-title">{{ switchWord('common_questions') }}</h2>
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-10 align-items-center justify-content-center">
                        <div class="all_questions">
                            <div class="question" v-for="q in most_questions" :key="q.id">
                                <div class="heading">
                                    <p class="d-flex align-items-center justify-content-between">
                                        <span class="txt-shadow">{{ q.question }}</span>
                                        <span>
                                            <i class="ri-arrow-down-s-line"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="content">
                                    <p>{{  q.answer }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "common_questions",
    props:['most_questions'],
    mixins:[SwitchLangWord],
    components: {FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.all_questions{
    border:1px solid #ddd;
    box-shadow: 0px 0px 3px 1px #ddd;
    border-radius: 8px;
    background-color: white;
    .question{
        .heading{
            padding: 10px 15px;
            cursor: pointer;
            span:first-of-type{
                font-size: $semi_big;
                font-weight: bold;
                color:$black;
            }
            span:last-of-type{
                i{
                    color:$main_color;
                    font-size: $semi_big;
                }
            }
        }
        .content{
            padding: 15px;
            display: none;
            p{
                font-size: $button;
            }
        }
    }
    >div:not(last-of-type){
        border-bottom: 1px solid #ddd;
    }
}
</style>

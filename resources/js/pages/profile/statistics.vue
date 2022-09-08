<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <div class="inner">
            <profile-nav-component></profile-nav-component>
            <div class="inner_content mt-4">
                <div class="container">
                    <h2 class="d-flex align-items-center mb-4 main-title justify-content-between">
                        <p class="d-flex align-items-center">
                            <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                            <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                            <span>{{ keywords.interactions_rate }}</span>
                        </p>
                        <select>
                            <option value="30">{{ keywords.last_thirty_days }}</option>
                            <option value="60">{{ keywords.last_sixty_days }}</option>
                            <option value="90">{{ keywords.last_ninety_days }}</option>
                        </select>
                    </h2>
                    <div class="box_details_numbers mt-4 mb-4">
                        <div v-for="(i,index) in Object.keys(data_numbers['statistics'])" :key="index">
                            <h2>{{ data_numbers['statistics'][i] }}</h2>
                            <p>{{ keywords[i] }}</p>
                        </div>
                    </div>
                    <h2 class="d-flex align-items-center mb-4 main-title">
                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                        <span>{{ keywords.rating }}</span>
                    </h2>
                    <line-chart   :chart_data="chart_data" :labels_data="labels"></line-chart>

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
export default {
    name: "statistics",
    props:['keywords','data_numbers'],
    data:function(){
        return {
            chart_data:this.data_numbers['total_count_data'],
            labels:[
                "يناير",
                "يناير",
                "مارس",
                "ابريل",
                "مايو",
                "يونيو",
                "يوليو",
                "اغسطس",
                "سبتمر",
                "اكتوبر",
                "نوفمبر",
                "ديسمبر"
            ],
        }
    },
    components: { ProfileNavComponent, FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.inner_content{
    select{
        border: none;
        font-size: $paragraph;
    }
}
.box_details_numbers{
    display: flex;
    flex-wrap: wrap;
    >div{
        padding: 20px;
        border: 1px solid #dddddd;
        padding-bottom: 30px;
        h2{
            font-size: $big;
            color:$main_color;
        }
        p{
            font-weight: bold;
        }
        h2,p{
            text-align: center;
        }
    }
    >div{
        width:33.333333333%;
        text-align: center;
    }
    >div:nth-of-type(4),
    >div:nth-of-type(5){
        width:50%;
    }
}

@media (max-width: 567px) {
    .box_details_numbers{
        >div{
            width:100%
        }
    }
}
</style>

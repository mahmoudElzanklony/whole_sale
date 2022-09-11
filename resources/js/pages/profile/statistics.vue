<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <div class="inner">
            <profile-nav-component></profile-nav-component>
            <div class="inner_content mt-4">
                <div class="container">
                    <h2 class="mb-4 main-title">
                        <span>{{ keywords.statistics }}</span>
                    </h2>
                    <form>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <select class="form-control" name="process_type">
                                        <option value="">{{ keywords.select_process_type }}</option>
                                        <option value="sale">{{ keywords.sale }}</option>
                                        <option value="buying">{{ keywords.buying }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <select class="form-control" name="process_type">
                                        <option value="">{{ keywords.select_year }}</option>
                                        <option v-for="(i,index) in 15" :key="index"
                                                :value="new Date().getFullYear() - index">
                                            {{ new Date().getFullYear() - index }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
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
    props:['keywords','data_statistics'],
    data:function(){
        return {
            chart_data:this.data_statistics,
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

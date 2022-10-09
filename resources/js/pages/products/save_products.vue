<template>
    <section class="save_product">
        <navbar-component></navbar-component>
        <div class="container" style="padding-top: 40px">
            <h2 class="text-center main-title">
                <span>{{ main_title }}</span>
            </h2>
            <p>
                <a href="/excels/template.csv" download>{{ keywords.you_can_press_here_to_download_file }}</a>
            </p>
            <form method="post" >
                <div class="form-group d-flex align-items-center justify-content-between radio-buttons">
                    <p>
                        <input type="radio" name="save_product_type" value="enter_data"
                               @change="change_type"
                               checked>
                        <span>{{ keywords.enter_data }}</span>
                    </p>
                    <p>
                        <input type="radio" name="save_product_type"
                               @change="change_type"
                               value="enter_file">
                        <span>{{ keywords.upload_file }}</span>
                    </p>
                </div>
                <div class="inner-form">
                    <div class="enter_data">
                        <div class="inputs">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.part_no }}</label>
                                        <input name="part_no" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.brand }}</label>
                                        <select name="brand" class="form-control" required>
                                            <option value="">{{ switchWord('select_best_choice') }}</option>
                                            <option v-for="i in ['toyta','bmw','honda','houndai']" :value="i">
                                                {{ i }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.ar_part_name }}</label>
                                        <input name="ar_part_name" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.en_part_name }}</label>
                                        <input name="en_part_name" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.ar_description }}</label>
                                        <input name="ar_description" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.en_description }}</label>
                                        <input name="en_description" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.offered_stock }}</label>
                                        <input name="offered_stock" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.min_quantity_per_transaction }}</label>
                                        <input name="min_quantity_per_transaction" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.max_quantity_per_transaction }}</label>
                                        <input name="max_quantity_per_transaction" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.unit_of_packing }}</label>
                                        <input v-model="uop" type="number"
                                               name="unit_of_packing" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.width }}</label>
                                        <input  name="unit_of_packing" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords['length'] }}</label>
                                        <input name="length" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.thickness }}</label>
                                        <input name="thickness" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>{{ keywords.quantity_per_pallet_load }}</label>
                                        <input name="quantity_per_pallet_load" class="form-control" required>
                                    </div>
                                </div>
                            </div>
                            <p v-if="uop > 0" class="alert alert-warning">{{ alert_of_slabs }}</p>
                            <div class="slabs">
                                <div class="slab input-has-delete">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label>{{ keywords.min_quantity }}</label>
                                                <input class="form-control" name="min_quantity[]" required>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label>{{ keywords.price }}</label>
                                                <input class="form-control" name="price[]" required>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button"
                                    @click="add_specific_slab"
                                    class="btn btn-outline-primary mb-3">{{ keywords.add_specific_slab }}</button>
                            <div class="drag-drop-files mb-3">
                                <input type="image" name="bank_info_document"
                                       class="preview-image">
                                <button type="button" class="btn btn-primary">
                                    <span>{{ keywords.image }}</span>
                                    <span><i class="ri-add-line"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="enter_file">
                        <div class="drag-drop-files mb-3">
                            <input type="file" name="product_file"
                                   class="preview-image">
                            <button type="button" class="btn btn-primary">
                                <span>{{ keywords.upload_file }}</span>
                                <span><i class="ri-add-line"></i></span>
                            </button>
                        </div>
                    </div>

                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" :value="switchWord('save')">

                </div>
            </form>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
export default {
    name: "save_products",
    props:['main_title','keywords'],
    data:function(){
        return {
            uop:0,
        }
    },
    computed:{
       alert_of_slabs:function (){
           return this.switchWord('part_slabs_should_be_unit_of_packing')+this.uop+' , '+this.uop * 2+' , '+this.uop*3+' , '+this.uop * 4;
       },
    },
    mixins:[SwitchLangWord],
    components: {FooterComponent, NavbarComponent},
    methods:{
        change_type:function(){
            $('.inner-form > div').fadeOut();
            $('.inner-form > div.'+event.target.value).fadeIn();
            if(event.target.value == 'enter_file'){
                $('.enter_data .inputs input , .enter_data .inputs select').removeAttr('required');
            }else{
                $('.enter_data .inputs input , .enter_data .inputs select').attr('required','required');
            }
        },
        add_specific_slab:function(){
            var html = $(event.target).prev().find('.slab').html();
            var output = '<div class="slab input-has-delete">';
            output+= html;
            output+= '<span><i class="ri-close-line delete-icon-input"></i></span></div>'
            $('.slabs').append(output);

        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../sass/variables";

.save_product{
    margin-top: 100px;
    .main-title{
        span{
            font-size: $semi_big;
            &::before , &::after{
                top:65%;
            }
        }
    }
    .inner-form{
        >div{
            display: none;
        }
        >div:first-of-type{
            display: block;
        }
    }

    a{
        font-size: $paragraph;
        font-weight: bold;
        margin-bottom: 20px;
        display: block;
    }
}
</style>

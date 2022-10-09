<template>
    <section class="products">
        <navbar-component></navbar-component>
        <div class="container" style="padding-top: 40px">
            <h2 class="text-center main-title">
                <span>{{ keywords.main_title }}</span>
            </h2>
            <div>
                <table class="myTable table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <td>{{ keywords.seq }}</td>
                            <td>{{ keywords.item_no }}</td>
                            <td>{{ keywords.brand }}</td>
                            <td>{{ keywords.ar_part_name }}</td>
                            <td>{{ keywords.en_part_name }}</td>
                            <td>{{ keywords.offered_stock }}</td>
                            <td>{{ keywords.min_quantity_per_transaction }}</td>
                            <td>{{ keywords.max_quantity_per_transaction }}</td>
                            <td>{{ keywords.unit_of_packing }}</td>
                            <td>{{ keywords.quantity_per_pallet_load }}</td>
                            <td>{{ keywords.prices }}</td>
                            <td>{{ keywords.actions }}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="(i,index) in 6" :key="index">
                            <td>{{ i }}</td>
                            <td>111</td>
                            <td>Toyta</td>
                            <td>مرايه</td>
                            <td>mirror</td>
                            <td>36.00</td>
                            <td >40.00</td>
                            <td>10.00</td>
                            <td>400.00</td>
                            <td>100</td>
                            <td>10.5</td>
                            <td class="actions">
                                <span>
                                    <i data-toggle="modal" data-target="#update_box"
                                       class="ri-edit-line">
                                    </i>
                                </span>
                                <span class="delete"><i class="ri-close-line"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <footer-component></footer-component>



        <div class="modal fade" id="update_box" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_box_data">
                            {{ switchWord('update_new_item') }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" @submit.prevent="save_category">
                            <div class="form-group">
                                <img class="box-image"
                                     src="/images/users/default.png">

                            </div>
                            <div class="form-group"
                                 v-for="input in Object.keys(keywords['data_model'])" :key="input">
                                <label>{{ keywords['data_model'][input] }}</label>
                                <input :name="input" class="form-control"
                                       >
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="slabs save_product">
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
                            <div class="form-group">
                                <div class="drag-drop-files">
                                    <input type="file" class="preview-image" name="image" accept="image/*"
                                           selector=".modal-dialog img.box-image">
                                    <button type="button" class="btn btn-primary">
                                        <span>{{ switchWord('upload_image') }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="save" class="btn btn-primary"
                                       :value="switchWord('save')">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ switchWord('close') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
export default {
    name: "my_products",
    props:['keywords'],
    mixins:[SwitchLangWord],
    methods:{
        add_specific_slab:function(){
            var html = $(event.target).prev().find('.slab').html();
            var output = '<div class="slab input-has-delete">';
            output+= html;
            output+= '<span><i class="ri-close-line delete-icon-input"></i></span></div>'
            $('.slabs').append(output);

        }
    },
    components: {FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
.alert-danger{
    display: none;
}
</style>

<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ keywords.main_title }}</span>
                    <span>
                        <i class="ri-arrow-down-s-line toggle_next"></i>
                    </span>
                </p>
                <div class="overflow-auto">
                    <table class="myTable table text-center table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <td v-for="i in handling_data['table_head_keys']" :key="i">
                                    {{ i }}
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(i,index) in handling_data['data']" :key="index" :class="'tr_'+i['id']">
                                <td v-if="false"><img :src="'/images/users/'+i['image']"></td>
                                <td>{{ i['username'] }}</td>
                                <td>{{ i['email'] }}</td>
                                <td>{{ i['phone'] }}</td>
                                <td>{{ i['country']['name'] }}</td>
                                <td>{{ switchWord(i['role']['name']) }}</td>
                                <td>
                                    <button v-if="i['role']['name'] == 'seller'"
                                        data-toggle="modal"
                                        @click="update_item(i)"
                                        data-target="#see_details"
                                        class="btn btn-outline-primary">
                                        {{ switchWord('see_details') }}
                                    </button>
                                </td>
                                <td class="actions">
                                    <span><i data-toggle="modal"
                                             data-target="#update_users"
                                             @click="update_item(i)"
                                             class="ri-edit-line"></i></span>
                                    <span class="delete"><i @click="delete_item('users',i['id'],'.tr_'+i['id'])" class="ri-close-line"></i></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        <div class="modal fade" id="see_details"
             tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="see_details_box">
                            {{ switchWord('see_details') }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" v-if="item != null && item['seller_data'] != null">
                        <p class="mb-3">
                            <strong>{{ handling_data['seller_data_keywords']['currency'] }}</strong>
                            <span>{{ item['seller_data']['currency'] }}</span>
                        </p>
                        <p>
                            <strong>{{ handling_data['seller_data_keywords']['delivery_terms'] }}</strong>
                        </p>
                        <p>{{ item['seller_data']['delivery_terms'] }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ switchWord('close') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>



        <div class="modal fade" id="update_users" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_users_box" v-if="item != null">
                            {{ keywords.update_user + item['username'] }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form v-if="item != null" @submit.prevent="save_user">
                            <input type="hidden" name="id" :value="item['id']">
                            <div class="form-group">
                                <img class="box-image"
                                     :src="'/images/users/'+item['image']">
                            </div>
                            <div class="form-group input-icon"
                                 v-for="input in modal_data"
                                 v-if="input != 'block' &&
                                  input != 'auto_publish'
                                  && input != 'country_id'"

                                 :key="input">
                                 <label>{{ handling_data['data_model'][input] }}</label>
                                 <input :name="input"
                                        :type="input == 'password' ? 'password':'text'"
                                        :placeholder="input == 'password' ? switchWord('leave_password'):''"
                                        :value="item != null ? item[input]:''"
                                        class="form-control" :required="input != 'password'">
                                <span v-if="input == 'password'">
                                    <i class="ri-eye-line show_password cursor-pointer"></i>
                                </span>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div v-else>
                                <div class="form-group d-flex align-items-center flex-wrap justify-content-between radio-buttons">
                                    <label class="w-100">{{ handling_data['data_model']['country_id'] }}</label>
                                    <select class="form-control" name="country_id" required>
                                        <option value="">{{ switchWord('select_best_choice') }}</option>
                                        <option v-for="(c,index) in handling_data['countries']" :value="c['id']" :key="index"
                                                :selected="item != null && item['country_id'] == c['id'] ">{{ c['name'] }}</option>
                                    </select>
<!--                                    <p class="d-flex align-items-center justify-content-between">
                                        <input type="radio" :name="input" value="1"
                                               :checked="item != null && item[input] == 1">
                                        <span>{{ switchWord('yes') }}</span>
                                    </p>
                                    <p class="d-flex align-items-center justify-content-between">
                                        <input type="radio" :name="input"
                                               value="0"
                                               :checked="item != null && item[input] == 0">
                                        <span>{{ switchWord('no') }}</span>
                                    </p>-->
                                    <p class="alert alert-danger w-100"></p>

                                </div>
                            </div>



                            <div class="another_data"
                                 v-if="item != null && item['role']['name'] == 'seller'">
                                <div class="form-group input-icon"
                                     v-for="input in ['currency','delivery_terms']"
                                     :key="input">
                                    <label>{{ handling_data['seller_data_keywords'][input] }}</label>
                                    <input :name="input"
                                           v-if="input == 'currency'"
                                           :value="item != null && item['seller_data'] != null ? item['seller_data'][input]:''"
                                           class="form-control" required>
                                    <textarea :name="input" v-else
                                              :value="item != null && item['seller_data'] != null ? item['seller_data'][input]:''"
                                              class="form-control" required></textarea>

                                    <p class="alert alert-danger"></p>
                                </div>
                            </div>
                            <div class="form-group input-icon"
                                 v-if="item != null && item.role.name == 'buyer'">
                                <label>{{ handling_data['serial_number'] }}</label>
                                <input name="serial_number"
                                       :value="item != null ? item['serial_number']:''"
                                       class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <div class="drag-drop-files">
                                    <input type="file" class="preview-image" name="image" accept="image/*"
                                           selector=".modal-dialog img.box-image">
                                    <button type="button" class="btn btn-primary">
                                        <span>{{ keywords.upload_image }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary"
                                       name="save" :value="switchWord('save')">
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

    </div>
</template>

<script>
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";
import tableData from "../../mixin/tableData";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import delete_item from "../../mixin/delete_item";
import update_item from "../../mixin/update_item";
import {mapActions,mapGetters,mapMutations} from "vuex";

export default {
    name: "users",
    mixins:[tableData,SwitchLangWord,delete_item,update_item],
    props:['keywords','handling_data'],
    data:function(){
        return {
            modal_data:[],
        }
    },
    computed:{
      ...mapGetters({
         'vuex':'users_dash/get_data',
      }),
    },
    methods:{
       ...mapMutations({
          'inilalize':'users_dash/inilaize',
       }),
       ...mapActions({
          'save_user':'users_dash/save_user',
       }),
    },
    created() {
        this.modal_data = Object.keys(this.handling_data['data_model']);
        this.modal_data.pop();
        this.inilalize(this.handling_data['data']);
    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.alert-danger{
    display: none;
}
</style>

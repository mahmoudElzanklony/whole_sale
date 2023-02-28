<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ keywords.main_title }}</span>
                    <button class="btn black-btn btn-outline-primary"
                            data-toggle="modal" data-target="#update_users" @click="update_item(null)">
                        {{ switchWord('add_new_item') }}
                    </button>
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
                        <tr v-for="(i,index) in data_vuex" :key="index" :class="'tr_'+i['id']">
                            <td><img :src="'/images/users/'+i['image']"></td>
                            <td>{{ i['username'] }}</td>
                            <td>{{ i['email'] }}</td>
                            <td>{{ i['phone'] }}</td>
                            <td>{{ i['country']['name'] }}</td>
                            <td>
                                <span class="priv" v-for="(p,index) in i['privileges']" :key="index">
                                    {{ p[$page.props.lang+'_name'] }}
                                </span>
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

        <div class="modal fade" id="update_users" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_users_box" v-if="item != null">
                            {{ keywords.update_user +' '+ item['username'] }}
                        </h5>
                        <h5 class="modal-title" id="update_users_box_" v-else>
                            {{ switchWord('add_new_item') }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form  @submit.prevent="save_supervisor">
                            <input type="hidden" v-if="item != null" name="id" :value="item['id']">
                            <div class="form-group">
                                <img class="box-image"
                                     :src="'/images/users/'+(item != null ?  item['image']:'default.png')">
                            </div>
                            <div class="form-group input-icon"
                                 v-for="input in modal_data"
                                 :key="input">
                                <label>{{ handling_data['data_model'][input] }}</label>
                                <select :name="input" v-if="input == 'country_id'" class="form-control">
                                    <option value="">{{ switchWord('select_best_choice') }}</option>
                                    <option v-for="(c,index) in handling_data['countries']"
                                            :selected="item != null && item[input] == c['id']"
                                            :key="index" :value="c['id']">{{ c['name'] }}</option>
                                </select>
                                <input :name="input"  v-else-if="input != 'privileges'"
                                       :type="input == 'password' ? 'password':'text'"
                                       :placeholder="input == 'password' ? switchWord('leave_password'):''"
                                       :value="item != null ? item[input]:''"
                                       class="form-control" :required="input != 'password'">
                                <div class="privillages"
                                    v-else>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6 mb-2"
                                            v-for="(pr,index) in handling_data['data']['privileges']"
                                              :key="index">
                                            <div>
                                                <input name="privillage[]"
                                                       type="checkbox"
                                                       :value="pr['id']"
                                                       :checked="(item != null && item['privileges'].find((p)=>{return p['id'] == pr['id']}) != null) == true ? 'checked':false">
                                                <p class="d-inline">{{ pr['name'] }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="alert alert-danger"></p>
                                <span v-if="input == 'password'">
                                    <i class="ri-eye-line show_password cursor-pointer"></i>
                                </span>
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
import {mapActions,mapGetters,mapMutations} from "vuex";

export default {
    name: "supervisors",
    mixins:[tableData,SwitchLangWord,delete_item],
    props:['keywords','handling_data'],
    data:function(){
        return {
            modal_data:[],
            item:null,
        }
    },
    computed:{
        ...mapGetters({
            'data_vuex':'users_dash/get_data',
        })
    },
    methods:{
        update_item:function (e){
            this.item = e;
            for(let input of $('.modal input[type="checkbox"]')){
                if(this.item['privileges'].find((p)=>{return p['id'] == $(input).attr('value')}) != null){
                    $(input).prop('checked',true)
                }else{
                    $(input).prop('checked',false)
                }
            }
        },
        ...mapMutations({
            'inilalize':'users_dash/inilaize',
        }),
        ...mapActions({
            'save_supervisor':'users_dash/save_user',
        }),
    },
    created() {
        this.modal_data = Object.keys(this.handling_data['data_model']);
        this.inilalize(this.handling_data['data']['supervisors']);
    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.alert-danger{
    display: none;
}
table{
    .priv{
        border: 1px solid $main_color;
        padding: 4px 8px;
        border-radius: 10px;
        margin: 3px;
        margin-bottom: 10px;
        display: inline-block;
    }
}
.modal{
    .privillages{
        input{
            input{
                width:17px;
                height:17px;
            }
        }
    }
}
</style>

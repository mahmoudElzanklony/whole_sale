<template>
    <div>

        <div class="modal fade" id="my_quotations"
             v-if="get_my_quotation != null"
             tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="my_quotations_box">
                            {{ switchWord('see_details') }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="loading-img">
                            <img src="/images/loading.gif">
                        </div>
                        <div class="overflow-auto">
                            <table class="myTable box-model-table table text-center table-bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <td></td>
                                    <td>{{ keywords.brand }}</td>
                                    <td>{{ keywords.part_no }}</td>
                                    <td>{{ keywords.quantity }}</td>
                                    <td>{{ keywords.actions }}</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(i,index) in get_my_quotation"
                                    :key="index" :class="'row_child_'+index"
                                    v-if="i['last_draft'] == null || i['last_draft']['deleted_at'] == null">
                                    <td>
                                        <input type="checkbox" @click="detect_row_to_export">
                                    </td>
                                    <td>{{ i['last_draft'] == null ? i['brand']['name']:
                                        i['last_draft']['brand']['name'] }}
                                    </td>
                                    <td>{{ i['last_draft'] == null ? i['part_number']:
                                        i['last_draft']['part_number'] }}</td>
                                    <td>{{ i['last_draft'] == null ? i['quantity']:i['last_draft']['quantity'] }}</td>
                                    <td class="actions" v-if="item['is_completed'] < 2">
                                        <span
                                            data-toggle="modal"
                                            data-target="#update_current_quotation"
                                            @click="update_sub_quotation(i)">
                                            <i class="ri-edit-line"></i>
                                        </span>
                                        <span class="delete"  @click="delete_item('quotations-draft-user'
                                       ,i['id'],'.row_child_'+index)"><i class="ri-close-line"></i></span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
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
import {mapGetters} from "vuex";
export default {
    name: "my_quotations",
}
</script>

<style scoped>

</style>

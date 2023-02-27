<template>
    <div class="new_questions row flex-wrap mb-2" >
        <div>
            <div class="form-group">
                <input type="hidden"  name="id" v-if="data != null"  :value="data != null ? data['id'] : ''" >
                <input class="form-control" name="ar_name"
                       :placeholder="switchWord('ar_question')" :value="data != null ? data['ar_name'] : ''" required>
                <p class="alert alert-danger"></p>
            </div>
            <div class="form-group">
                <input class="form-control" name="en_name"
                       :placeholder="switchWord('en_question')" :value="data != null ? data['en_name'] : ''" required>
                <p class="alert alert-danger"></p>
            </div>
            <div class="form-group">
                <input class="form-control" name="tu_name" style="display: none"
                       :placeholder="switchWord('tu_question')" :value="data != null ? data['tu_name'] : ''">
                <p class="alert alert-danger"></p>
            </div>
            <div class="form-group">
                <select class="form-control" name="required_status"
                        required>
                    <option v-for="(i,index) in Object.keys(required_types)"
                            :key="index" :value="required_types[i]"
                            :selected="data != null && data['required_status'] == required_types[i]"
                            >
                        {{ switchWord(i) }}
                    </option>
                </select>
                <p class="alert alert-danger"></p>
            </div>
            <div class="form-group">
                <select class="form-control" name="cover_appearance"
                        required>
                    <option v-for="(i,index) in Object.keys(cover_appearance)"
                            :key="index" :value="cover_appearance[i]"
                            :selected="data != null && data['cover_appearance'] == cover_appearance[i]"
                    >
                        {{ switchWord(i) }}
                    </option>
                </select>
                <p class="alert alert-danger"></p>
            </div>
            <div class="form-group">
                <div class="drag-drop-files">
                    <input type="file" class="preview-image" name="icon" accept="image/*"
                           >
                    <button type="button" class="btn btn-primary">
                        <span>{{ switchWord('upload_image') }}</span>
                        <span><i class="ri-add-line"></i></span>
                    </button>
                </div>
            </div>
            <div class="form-group">
                <select class="form-control" name="type"
                        @change="update_question_status"
                        required>
                    <option v-for="(i,index) in Object.keys(question_data)"
                            :key="index" :value="question_data[i]" :selected="data != null && data['type'] == question_data[i]" >
                        {{ switchWord(i) }}
                    </option>
                </select>
                <p class="alert alert-danger"></p>
            </div>
        </div>


        <div class="answers" :style="{'display':data != null && data['type'] == 'select' ? 'block':'none'}">
            <div class="inner" v-if="data != null && data['type'] == 'select'"
                 >
                <div :class="'input-has-delete row el_'+answer['id']" v-for="(answer,index) in data['answers']" :key="index">
                    <div class="col-4" >
                        <div class="form-group">
                            <input class="form-control" name="ar_answers[]" :value="answer['ar_name']"
                                   :placeholder="switchWord('question_answer_ar')"
                                   required >
                            <input type="hidden" name="ids[]" class="q_id" :value="answer['id']" required >
                        </div>
                    </div>
                    <div class="col-4" >
                        <div class="form-group">
                            <input class="form-control" name="en_answers[]"
                                   :placeholder="switchWord('question_answer_en')"
                                   :value="answer['en_name']" required >
                        </div>
                    </div>
                    <div class="col-4" style="display: none">
                        <div class="form-group">
                            <input class="form-control" name="tu_answers[]"
                                   :placeholder="switchWord('question_answer_tu')"
                                   :value="answer['tu_name']" >
                        </div>
                    </div>
                    <span class="q_delete" @click="delete_item('answers',answer['id'],'.el_'+answer['id'])"><i class="ri-close-line"></i></span>
                </div>
            </div>
            <div class="inner" v-else>
                <div class="row">
                    <div class="col-4" >
                        <div class="form-group">
                            <input class="form-control" name="ar_answers[]"
                                   :placeholder="switchWord('question_answer_ar')"
                                   required >
                        </div>
                    </div>
                    <div class="col-4" >
                        <div class="form-group">
                            <input class="form-control" name="en_answers[]"
                                   :placeholder="switchWord('question_answer_en')"
                                   required >
                        </div>
                    </div>
                    <div class="col-4" style="display: none">
                        <div class="form-group">
                            <input class="form-control" name="tu_answers[]"
                                   :placeholder="switchWord('question_answer_tu')">
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-outline-primary" type="button" @click="add_new_answer">{{ switchWord('add_question_answer') }}</button>
        </div>

    </div>
</template>

<script>
import SwitchLangWord from "../../mixin/SwitchLangWord";
import delete_item from "../../mixin/delete_item";
import $ from "jquery";
export default {
    name: "QuestionDataComponent",
    props:['data','required_false'],
    mixins:[SwitchLangWord,delete_item],
    data:function(){
        return {
            question_data:{
                question_type:'',
                question_type_text:'text',
                question_type_select:'select',
                question_type_radio:'radio'
            },
            required_types:{
                question_required:'',
                required:1,
                not_required:0
            },
            cover_appearance:{
                appearance:'',
                yes:1,
                no:0
            },
        }
    },
    created() {
        if(this.required_false == true){
            setTimeout(()=>{
                $('.new_questions').find('input,select').removeAttr('required');
            },100);
        }
    },
    methods:{
        add_new_answer:function (){
            var row = document.createElement('div');
            row.className = 'row';
            //$(event.target).prev().find('.row:first-of-type').find('input').val('');
            row.innerHTML = $('.answers .inner').find('.row:first-of-type')[0].innerHTML+'<span><i class="ri-close-line delete-icon-input"></i></span>';
            $(row).find('input[type="hidden"]').remove();
            $(row).find('span.q_delete').remove();
            $('.answers .inner').append(row);
            /*for(let input of row){
                input.value = '';
            }*/
        },

        update_question_status:function (){
            var target = $(event.target);
            var output = ''
            if(event.target.value == 'select'){
                $('.answers').find('input[name="ar_answers[]"],input[name="en_answers[]"]')
                    .attr('required','required');
                $('.answers').fadeIn();
            }else{
                $('.answers').find('input[name="ar_answers[]"],input[name="en_answers[]"]')
                    .removeAttr('required');
                $('.answers').fadeOut();
            }
        }
    },

}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.alert-danger{
    display: none;
}
.answers{
    display: none;
}
</style>

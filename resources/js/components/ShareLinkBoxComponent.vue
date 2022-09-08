<template>

    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="id+'_box'" style="font-size: 16px">
                        {{ switchWord('share_this_link') }}
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label class="d-block w-100">{{ link }}</label>
                            <inertia-link :href="'https://www.facebook.com/sharer/sharer.php?u='+link">
                                <i class="ri-facebook-line"></i>
                            </inertia-link>
                            <inertia-link :href="'https://twitter.com/intent/tweet?url='+link">
                                <i class="ri-twitter-line"></i>
                            </inertia-link>
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



</template>

<script>
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "ShareLinkBoxComponent",
    mixins:[SwitchLangWord],
    props:['id','link'],
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.modal{
    form{
        label{
            background-color: #eee;
            border-radius: 15px;
            padding: 8px;
        }
        a{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width:40px;
            height: 40px;
            border-radius: 50%;
            i{
                color:white;
                position: relative;
                top:2px;
            }
        }
        a:first-of-type{
            background-color: #3b5998;
        }
        a:last-of-type{
            background-color: #26a6d1;
        }

    }
}

</style>

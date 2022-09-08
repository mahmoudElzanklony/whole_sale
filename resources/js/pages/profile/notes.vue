<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <profile-nav-component></profile-nav-component>
        <div class="container">
            <div class="row pt-4">
                <div class="col-lg-4" v-for="(note,index) in data" :key="index" :id="note['id']">
                    <!---->
                    <ListingPostComponent @write_note="update_note"
                        note="true"
                        :id="note.id"
                        :link="'/listing/details?id='+note.listing.id"
                        :image="'/images/listings/'+note.listing.images[0].image"
                        :number_of_images="note.listing.images.length"
                        :info="note.listing.info"
                        :address="note.listing.address"
                        :price="note.listing.price"
                        :note="note.note"
                    ></ListingPostComponent>
                </div>
            </div>
        </div>

        <div class="modal fade" v-if="item != null" id="show_notes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="show_notes_box" style="font-size: 16px">{{ keywords.note_you_write_it }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" @submit.prevent="save_note">
                            <div class="form-group">
                                <label>{{ keywords.note }}</label>
                                <input v-if="item != null" type="hidden" name="id" :value="item!= null ? item['id']:0">
                                <textarea name="note" class="form-control"
                                          :value="item!= null ? item['note']:''">{{ item['note'] }}</textarea>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <input class="btn btn-primary"
                                       type="submit"
                                       name="save"
                                       :value="keywords.save" required>

                                <input type="button" class="btn btn-danger"
                                       name="delete"
                                       @click="delete_item('listings_notes',[item['id']],'.row > div#'+item['id'],true)"
                                       :value="keywords.delete_note" required>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ keywords.close }}
                        </button>
                    </div>
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
import ListingPostComponent from "../../components/ListingPostComponent";
import delete_item from "../../mixin/delete_item";
import {mapActions} from "vuex";
export default {
    name: "notes",
    props:['keywords','data'],
    mixins:[delete_item],
    data:function(){
        return {
            item:null,
        }
    },
    methods:{
        ...mapActions({
           'save_note':'notes/save_note',
        }),
        update_note:function(e){
            // update
            this.item = {};
            this.item['id'] = e[0];
            this.item['note'] = e[1];
            // show box
            setTimeout(()=>{
                $('#show_notes').modal('show');
            },100);
        }
    },
    components: {ListingPostComponent, ProfileNavComponent, FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
#show_notes{
    z-index: 99999999999;
}
.alert-danger{
    display: none;
}
</style>

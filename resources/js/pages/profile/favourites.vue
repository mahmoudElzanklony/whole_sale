<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <profile-nav-component></profile-nav-component>
        <div class="container">
            <div class="row pt-4">
                <div class="col-lg-4" v-for="(i,index) in data" :key="index">
                    <ListingPostComponent
                                          fav="true"
                                          :link="'/listing/details?id='+i['id']"
                                          :id="i['id']"
                                          :image="'/images/listings/'+i['images'][0]['image']"
                                          :number_of_images="i['images'].length"
                                          :info="i['info']"
                                          :address="i['address']"
                                          :price="i['price']"
                    ></ListingPostComponent>
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
export default {
    name: "favourites",
    props:['keywords','data'],
    components: {ListingPostComponent, ProfileNavComponent, FooterComponent, NavbarComponent},
}
</script>

<style scoped>

</style>

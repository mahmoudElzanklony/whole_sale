<template>
    <section class="contact-us">
        <navbar-component></navbar-component>
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="content">
                        <h2 class="d-flex align-items-center mb-4 main-title" data-aos="fade-down">
                            <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                            <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                            <span>{{ keywords.contact_us }}</span>
                        </h2>
                        <p class="mb-2">{{ keywords.inquiring_about_specific_property}}</p>
                        <p class="mb-4">{{ keywords.property_answer_questions}}</p>
                        <p class="mb-3">{{ keywords.contact_us_data}}</p>
                        <p class="mb-2">
                            <span>{{ keywords.phone_whatapp }}</span>
                            <span>01003123123</span>
                        </p>
                        <p class="mb-2">
                            <span>{{ keywords.email }}</span>
                            <span>info@ewaa.com</span>
                        </p>
                        <p>
                            <span>{{ keywords.address }}</span>
                            <span>{{ keywords.address_title }}</span>
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110532.89549093247!2d31.303293908062933!3d30.032468600630967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583c1380cba7ef%3A0xd541260e9e06978d!2sNasr%20City%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2snl!4v1655971023980!5m2!1sen!2snl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
export default {
    name: "contactus",
    props:['keywords'],
    components: {FooterComponent, NavbarComponent}
}
</script>

<style scoped>

</style>

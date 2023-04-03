<template>

</template>

<script>
export default {
    name: "sudia_vat",
    methods:{
        change_country:function(){
            if(event.target.value == 2){
                document.querySelector('input[name="vat"]').parentElement.style.display = 'block';
                document.querySelector('input[name="vat"]').setAttribute('required','required');
            }else{
                document.querySelector('input[name="vat"]').parentElement.style.display = 'none';
                document.querySelector('input[name="vat"]').removeAttribute('required');
            }
        }
    }
}
</script>

<style scoped>

</style>

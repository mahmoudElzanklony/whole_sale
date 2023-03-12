<template>

</template>

<script>
export default {
    name: "sudia_vat",
    methods:{
        change_country:function(){
            if(event.target.value == 2){
                document.querySelector('input[name="vat"]').parentElement.style.display = 'block';
            }else{
                document.querySelector('input[name="vat"]').parentElement.style.display = 'none';
            }
        }
    }
}
</script>

<style scoped>

</style>

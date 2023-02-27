<template>

</template>

<script>
export default {
    name: "detect_row_for_export",
    methods:{
        detect_row_to_export:function(){
            if($(event.target).is(":checked")) {
                event.target.parentElement.parentElement.classList.add('selected');
            }else{
                event.target.parentElement.parentElement.classList.remove('selected');
            }
        }
    }
}
</script>

<style scoped>

</style>

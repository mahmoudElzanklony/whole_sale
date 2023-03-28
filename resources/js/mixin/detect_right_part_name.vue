<template>

</template>

<script>
export default {
    name: "detect_right_part_name",
    methods:{
        detect_right_part_name:function(part_number){
            var data =  this.admin_quotation
                .find((e)=>{return e['part_number'] == part_number});
            if(data != null){
                return data['en_part_name']
            }else{
                return '';
            }

        }
    }
}
</script>

<style scoped>

</style>

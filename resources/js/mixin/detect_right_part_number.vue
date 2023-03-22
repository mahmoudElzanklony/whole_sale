<template>

</template>

<script>
export default {
    name: "detect_right_part_number",
    methods:{
        detect_supplied_part_name:function (part_number){
            var el = this.admin_quotation.find(function(e){
                return e['part_number'] == part_number;
            })
            if(el != null) {
                if (el['supplied_part_number'] != null) {
                    return el['supplied_part_number']['part_number'];
                } else {
                    return el['part_number'];
                }
            }else{
                return  ;
            }
        },
    }
}
</script>

<style scoped>

</style>

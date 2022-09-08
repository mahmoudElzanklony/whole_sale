<template>

</template>

<script>
export default {
    name: "update_item",
    data:function(){
        return {
            item:null,
        }
    },
    methods:{
        update_item:function (e){
            this.item = e;
        }
    }
}
</script>

<style scoped>

</style>

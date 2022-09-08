<template>

</template>

<script>
import SwitchLangWord from "./SwitchLangWord";
export default {
    name: "UpdateStatus",
    methods:{
        updateStatus:function (id,table,data = null){
            Toast.fire({
               icon:'success',
               title:this.switchWord('update_status_successfully'),
            });
        }
    }
}
</script>

<style scoped>

</style>

<template>

</template>

<script>
export default {
    name: "DeleteItemComponent",
    methods:{
        deleteRecord:function(id,table){
            Swal.fire({
                title: this.switchWord('are_you_sure_about_delete'),
                text: this.switchWord('in_case_you_delete_you_cant_retrieve_it'),
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#ff6a15',
                cancelButtonColor: '#aaa',
                confirmButtonText: this.switchWord('yes_iam_sure'),
                cancelButtonText: this.switchWord('cancel'),
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        this.switchWord('deleted_done'),
                        this.switchWord('deleted_done_successfully'),
                        'success'
                    )
                }
            })
        }
    }
}
</script>

<style scoped>

</style>

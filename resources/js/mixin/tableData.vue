<template>

</template>

<script>
export default {
    name: "tableData",
    mounted() {
        if(this.$inertia.page.props.lang == 'ar'){
            var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json';
        }else{
            var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json';
        }
        jQuery( document ).ready(function( $ ) {
            var data_table = null;
            data_table = $('.myTable').DataTable( {
                language: {
                    url: url,
                },
                dom: 'lBfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'print'
                ]
            } );
            window.table_data = data_table;
        });
    }
}
</script>

<style lang="scss" scoped>

</style>

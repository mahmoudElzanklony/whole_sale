<template>

</template>

<script>
export default {
    name: "tableData",
    mounted() {
        if(this.$inertia.page.props.lang == 'ar'){
            var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json';
            var export_selected = 'الحصول علي ملف بصيغة اكسل';
        }else{
            var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json';
            var export_selected = 'get an excel file';
        }
        jQuery( document ).ready(function( $ ) {
            var data_table = null;
            data_table = $('.myTable').DataTable( {
                stateSave: true,
                "bDestroy": true,
                language: {
                    url: url,
                },
                dom: 'lBfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'print',
                    {
                        extend: 'excel',
                        text:export_selected,
                        exportOptions: {
                            columns: ':visible:not(.not-exported)',
                            rows: '.selected',
                        }
                    }
                ]
            } );
            window.table_data = data_table;
        });
    }
}
</script>

<style lang="scss" scoped>

</style>

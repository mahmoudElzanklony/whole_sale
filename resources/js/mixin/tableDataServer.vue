<template>

</template>

<script>
export default {
    name: "tableDataServer",
    data:function (){
        return {
            tableObj:null,
        }
    },
    mounted() {
        var url_request = this.table_url;
        var table_requested = this.table_requested_table;
        var columns = this.table_columns;
        var this_component = this;
        if(this.$inertia.page.props.lang == 'ar'){
            var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json';
            var export_selected = 'الحصول علي ملف بصيغة اكسل';
        }else{
            var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json';
            var export_selected = 'get an excel file';
        }
        jQuery( document ).ready(function( $ ) {
            var data_table = null;
            data_table = $('.myTableServer').DataTable( {
                order: [[ 1, "desc" ]],
                language: {
                    url: url,
                },
                searching: false,
                serverSide:true,
                ajax: function(data, callback, settings) {
                    // check if thead has searches
                    var searches = new Object();
                    if(document.querySelectorAll('thead tr td input').length > 0){
                        for(let input of document.querySelectorAll('thead tr td input')){
                            searches[input.name] = input.value;
                        }
                    }
                    if($('.last-quotations-filter form div:last-of-type div input').length > 0){
                        for(let input of
                            document.querySelectorAll('.last-quotations-filter form div:last-of-type div input')){
                            searches[input.name] = input.value;
                        }
                    }
                    axios.post(url_request+'?page='+(Number(data_table.page.info().page)+1),{
                        length:data.length,
                        table:table_requested,
                        searches:searches
                    }).then((e)=>{
                        this_component.page_data = e.data.data;
                        callback({
                            recordsTotal: e.data.total,
                            recordsFiltered: e.data.total,
                            data: e.data.data
                        });
                    })
                },
                columns: columns,
                createdRow: function( row, data, dataIndex ) {
                    if(data.is_completed == 2){
                        console.log(data);
                    }
                    var class_name = '';
                    if(data.hasOwnProperty('is_completed') && data.is_completed > 2 && data.is_completed != 11){
                        class_name = 'active';
                    }else if(data.hasOwnProperty('my_receipt_count') &&
                        data.my_receipt_count == 0 &&
                        data.hasOwnProperty('is_completed') &&  data.is_completed == 2 ){
                        class_name = 'bk-lines-gray';
                    }
                    $(row).addClass(class_name).find('span[name="order"]').html(dataIndex+1)
                    $(row).find('td:last-of-type').addClass('actions');
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
                ],
            } );
            this_component.tableObj = data_table;
            window.table_data = data_table;
        });
    },
    methods:{
        get_obj_wanted:function (id){
             return this.page_data.find((e)=>{
                 return e['id'] == id;
             })
        }
    }
}
</script>

<style scoped>

</style>

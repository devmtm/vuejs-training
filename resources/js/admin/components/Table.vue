<template>
    <div class="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--loaded">
        <table class="kt-datatable__table">
            <slot name='table-header'>
                <thead class="kt-datatable__head">
                <tr class="kt-datatable__row">
                    <th v-for="field in fields" :key="field.name"
                    class="kt-datatable__cell"
                    > {{ field.name }}</th>

                    <th v-if="actions">Actions</th>

                </tr>

                </thead>
            </slot>
            <tbody class="kt-datatable__body">
                <table_row v-for="resource in resources" :resource="resource" :actions="actions" :key="resource.name" class="kt-datatable__row" style="left: 0px;"></table_row>
            </tbody>

        </table>

        <div class="kt-datatable__pager kt-datatable--paging-loaded"></div>

    </div>

</template>

<script>
    export default {
        props: {
            fields: {
                required: true,

            },
            actions: {
                required: true,

            },
            resources: {
                required: true,
            }
        },


    }


</script>

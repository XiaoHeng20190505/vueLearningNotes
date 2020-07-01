<template>
    <div class="templateContainer">
        <select v-model="value" name="anySelect" id="anySelectID" @change="handleChange">
            <option v-for=" item in dataList" :value="item.key" :key="item.key"> {{ item.key }}</option>
        </select>
    </div>
</template>
<script>
module.exports = {
    name: 'mySelect',
    data(){
        return {
            dataList: [
                {
                    key: 'nelson',
                    value: 'n'
                },
                {
                    key: 'peter',
                    value: 'p'
                },
                {
                    key: 'sweety',
                    value: 's'
                }
            ],
            value: ''
        }
    },
    model: {
        props: 'value',
        event: 'selectChange'

    },
    methods: {
        /**
         * @description 触发 select 的 change 方法，将 model 值传出去。只调用方法，不行需要将值传出去
         * 
         * @returns {void}
         */
        handleChange(){
            this.$emit('selectChange', this.value);
        }
    }
}
</script>
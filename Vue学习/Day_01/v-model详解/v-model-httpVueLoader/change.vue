<template>
    <div id="change">
        <p>{{ temObject.attributes.address }}</p>
        <button @click="changeAddress">更新地址</button>
    </div>
</template>
<script>
module.exports =  {
    name: 'change',
    model: {    //用于传给父组件 v-model 的值
        props: 'temObject',
        event: 'change'
    },
    data(){
        return {
            temObject: {
                name: 'nelson',
                age: 25,
                attributes: {
                    friend: 'peter',
                    address: '郑州'
                }
            }
        }
    },
    methods: {
        /**
         * @description 用于修改对象中包含对象的属性值
         * 
         * @returns {void}
         */
        changeAddress(){
            this.temObject.attributes.address = '南阳';
            this.$emit('change', this.temObject)
        }
    }
}
</script>
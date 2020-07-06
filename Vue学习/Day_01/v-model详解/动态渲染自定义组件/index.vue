<template>
    <div class="templateContainer">
       <p>我是一个小方块，下面是我的值</p>
       <p>{{ data.name }}</p>
    </div>
</template>
<script>
module.exports = {
    name: 'mySelect',
    props: {
        data: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data(){
        return {}
    }
}
</script>
<style>
.templateContainer {
    border: 1px solid #3598db;
    margin: 10px 0;
}
</style>
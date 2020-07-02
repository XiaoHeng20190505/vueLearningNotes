## INTRODUCTION
vue-model的详细学习

## USAGE

v-model 的本质不过是语法糖，它负责监听用户输入的事件以更新数据，并对一些极端场景进行一些特殊处理。
    props 和 event 的语法糖：props用于监听数据变化，event用于处理数据。

v-model的限制适用范围：
    表单元素：
        input，textarea,select,checkBox,radio...
    自定义组件:
        components.
修饰符
    .lazy 取代 input 监听change 事件
        默认情况 input 的 v-model 是在输入时，就同步 input 的值。而 v-model.lazy 时在 input 的值改变，即input 失去焦点时触发
    .number 输入字符串转换为有效的数字
        默认情况下，v-model 的返回值都是字符串。而 v-model.number 会将输入的内容转换成 number 类型
    .trim 输入首尾空格过滤

v-model 会忽略表单元素的 value，checked，selected attribute 的初始值，而总是使用Vue实例中的数据来源作为初始值。应该通过data选项中声明初始值。

v-model 在内部为不同的元素使用不同的属性，并抛出不同的事件：
    text 和 textarea 使用value 属性 和 input 事件
    checkbox 和 radio 使用 checked 属性 和 change 事件
    select 使用 value 属性 和 change 事件

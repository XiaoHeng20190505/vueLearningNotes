import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'  

$(function(){
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor','pink')
})
console.log('nelson')
class Person{
     name = 'nelson'
}
console.log(Person.name)

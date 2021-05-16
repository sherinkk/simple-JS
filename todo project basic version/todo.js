$("ul").on("click","li",function(){

$(this).toggleClass("completed");

});



$("ul").on("click","span",function(event){

$(this).parent().fadeOut();

event.stopPropagation();

});

$("input").on("keypress",function(event){

if(event.which==13)
{
var nextTodo=$(this).val();
$(this).val("");

$("ul").append("<strong><li><span><i class=\"far fa-trash-alt\"  style=\"color: red;\"></i> "+nextTodo+"</span></li></strong>");




}

});
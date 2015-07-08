
$("#first_paragraph").on('click', function() {
    event.preventDefault();
    $("body").css("background-color", "magenta");
});
$("#second_paragraph").on("click", function(){
    event.preventDefault();
    $(".second_paragraph").css("display", "block");
});

$("p a").attr("href", "#");

$("#first_chorus").on("click", function(){
    event.preventDefault();
    $(".first_chorus").css("display", "block");

});
$("#third_paragraph").on("click", function(){
    event.preventDefault();
    $(".third_paragraph").css("display", "block");

});

$("#fourth_paragraph").on("click", function(event){
    event.preventDefault();
    $(".fourth_paragraph").css("display", "block");

});
var clickCounter = 0;
$("#second_chorus").on("click", function(event){
    event.preventDefault();
    if (clickCounter < 6){
    $(".second_chorus").eq(clickCounter).css("display", "block");
    clickCounter++;
    }
})

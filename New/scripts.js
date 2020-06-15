//$(selector).action()
//$("div").text("Kati");
$("div").css("background", "pink")

//to remove things: toggle=switch "first" with "hidden"
$(".first").toggleClass("hidden")
$("p").html("<strong>Hurrá! Fog ez menni!</strong>")

//append: puts it to the end, remove: removes
$("p").append(" I'm great!")

$("button").click((event) => {
    $(".first").toggleClass("hidden")
})
$("button").click((event) => {
    $(".first").toggleClass("third")
})


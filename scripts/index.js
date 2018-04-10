$(".content-type").click(function (event) {
    console.log("clicked");
    $(".content-type").next().hide();
    
    $(this).next().show();
    $(this).next().addClass("")
    // $(this).prevUntil(".group-content-type").css("width:115px;");
    $(this).prev().css("background","red");
    $(this).prev().hide();
});

  $(".group-schema-example").hide();


  $(".featured.module").filter(function(index, element){
    return index % 3 == 2;
}).addClass("third");

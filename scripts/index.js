$(".content-type").click(function (event) {   
    var contentType = $(this);       
    $(".content-type").next().hide();
    $(".content-type-selected").removeClass("content-type-selected");
    $(this).addClass("content-type-selected");
    var groupContentTypeElement = $(this).next();
    groupContentTypeElement.show();
    /* 
    Get the first element position left and assign to it.
    
    or set the default position left to 2
    */    
    var offset = groupContentTypeElement.offset();
    //set the position
    groupContentTypeElement.offset({ top: offset.top, left: 2 });
});


$(".header-example-schema").click(function (event) {   
    var headerExampleSchema = $(this);     
    var isActivated = headerExampleSchema.hasClass("header-example-schema-activated");
    if(isActivated){
        return;
    }
   

    headerExampleSchema.parent()
   .closest(".schema-or-example").find(".header-example-schema");

   headerExampleSchema.parent().parent()
   .closest(".schema-or-example").find(".header-example-schema")
   .removeClass("header-example-schema-activated");
   
   //$(".header-example-schema-activated").removeClass("header-example-schema-activated");
    headerExampleSchema.addClass("header-example-schema-activated");

    var schemaExample = $(this).next();    
    schemaExample.show();

    var offset = schemaExample.offset();
    //set the position
    schemaExample.offset({ top: offset.top, left: 2 });
    
});

$(".group-schema-example").hide();
$(".header-example-schema").next().hide();
$(".header-example-schema.header-example-schema-activated").next().show();


$(".featured.module").filter(function (index, element) {
    return index % 3 == 2;
}).addClass("third");

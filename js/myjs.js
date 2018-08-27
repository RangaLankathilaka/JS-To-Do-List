
var tableclick=true;
$(document).on("mouseenter","#tablelist",function(){
    console.log("tbody");
    tableclick=false;
});
$(document).on("mouseleave","#tablelist",function(){
    console.log("tbody");
    tableclick=true;
});
$(document).on("click",function(eventData){

    if(eventData.clientX<750){
    console.log(eventData.clientX); 
    console.log(eventData);
    
   if(tableclick){
console.log("hi");

// var tabletodo='<table id="tablelist" class="table col-12"><thead><tr><th scope="col">Title</th></tr> </thead><tbody id="listtb"> <tr><td><i class="fas fa-plus"></i>&nbsp&nbsp&nbspList item</td></tr> </tbody><tfoot><tr><td colspan="5" class="center aligned"><p id="norec">close</p></td></tr></tfoot></table>'

var tabletodo='<table id="tablelist" class="table col-12"><thead><tr><th scope="col" contenteditable="true">Title</th></tr></thead><tbody id="listtb"></tbody><tfoot><tr><td id="textv"><i class="fas fa-plus"></i>&nbsp&nbsp&nbspList item</td></tr><tr><td colspan="5" class="center aligned"><p id="close">close</p></td></tr></tfoot></table>'



$("#firstcol").append(tabletodo);
   }}




   if(eventData.clientX>750 && eventData.clientX<1140 ){
    console.log(eventData.clientX); 
    console.log(eventData);
    
   if(tableclick){
console.log("hi");

// var tabletodo='<table id="tablelist" class="table col-12"><thead><tr><th scope="col">Title</th></tr> </thead><tbody id="listtb"> <tr><td><i class="fas fa-plus"></i>&nbsp&nbsp&nbspList item</td></tr> </tbody><tfoot><tr><td colspan="5" class="center aligned"><p id="norec">close</p></td></tr></tfoot></table>'

var tabletodo='<table id="tablelist" class="table col-12"><thead><tr><th scope="col" contenteditable="true">Title</th></tr></thead><tbody id="listtb"></tbody><tfoot><tr><td id="textv"><i class="fas fa-plus"></i>&nbsp&nbsp&nbspList item</td></tr><tr><td colspan="5" class="center aligned"><p id="close">close</p></td></tr></tfoot></table>'



$("#seccol").append(tabletodo);
   }}


   if(eventData.clientX>1140){
    console.log(eventData.clientX); 
    console.log(eventData);
    
   if(tableclick){
console.log("hi");

// var tabletodo='<table id="tablelist" class="table col-12"><thead><tr><th scope="col">Title</th></tr> </thead><tbody id="listtb"> <tr><td><i class="fas fa-plus"></i>&nbsp&nbsp&nbspList item</td></tr> </tbody><tfoot><tr><td colspan="5" class="center aligned"><p id="norec">close</p></td></tr></tfoot></table>'

var tabletodo='<table id="tablelist" class="table col-12"><thead><tr><th scope="col" contenteditable="true">Title</th></tr></thead><tbody id="listtb"></tbody><tfoot><tr><td id="textv"><i class="fas fa-plus"></i>&nbsp&nbsp&nbspList item</td></tr><tr><td colspan="5" class="center aligned"><p id="close">close</p></td></tr></tfoot></table>'



$("#thcol").append(tabletodo);
   }}








});


$(document).on("click","#tablelist tfoot tr td p",function(){
    console.log("close");
    $(this).parents("#tablelist").remove();
    // tableclick=true;
});



   
$(document).on("click","#tablelist tfoot tr:first-child()",function(){
    var trval='<tr><td ><input id="tic" type="checkbox">&nbsp&nbsp&nbsp<span contenteditable="true"></span></td></tr>'
//$("#listtb").append(trval);
$(this).parents("#tablelist").append(trval);


});

$(document).on("mouseenter","#tablelist tfoot tr:first-child()",function(){
   $(this).addClass("textv");

});




$(document).click(function(){
    
    //tableclick=true;
});

$(document).on("click","#tablelist tbody tr td #tic",function(){
    //console.log("tic"+$("#tic").val());
       if ($(this).is(":checked")){
      // it is checked
      console.log("bbbbbbbbbbbbbbnnnnnnnnnnnnn");
      $(this).parents("td").addClass("cross");

    }else{
        $(this).parents("td").removeClass("cross");
    }

});

// if($(this).parents("td").addClass("cross")){
   
//     $(document).on("click","#tablelist tbody tr td #tic",function(){
//         $(this).parents("td").removeClass("cross");
//     });
// }

$(document).on("click","#firstcol",function(){
    // $(this).css("position","static");
});
$(document).on("click","#tablelist tbody tr td ",function(){
   console.log("txttic");
//    var dd=$(this).css("position","static").val();
//    console.log("zzzzzzzzzzzzzzzzz"+dd);
   
if($(this).length>40){
confirm("gkgjkj");
}
   
  // $(this).css("text-decoration" ,"line-through");
});
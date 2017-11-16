$(document).on("pagecreate","#pageone",function(){
  $('#button1').on("click", function(){
    random();
  });            
});            

function random() {
     return !Math.round(Math.random());
}

}
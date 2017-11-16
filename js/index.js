$(document).on("pagecreate","#pageone",function(){
  $('#button1').on("click", function(){
    click();
  });            
});            

function random() {
   
    return !Math.round(Math.random());
}

function click(){
    
    var rand = random();
    
    if(rand) {
        
        
        navigator.notification.beep(1);
 
    }
    else {
        
       navigator.notification.beep(2);
    }
    
}
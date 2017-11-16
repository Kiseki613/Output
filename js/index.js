$(document).on("pagecreate","#pageone", onDeviceReady);        

document.addEventListener("deviceready",onDeviceReady);

function onDeviceReady(){
    //alert("onDeviceReady");
    $('#button1').on("click", function(){
    click();
  });
}

function random() {
   
    return !Math.round(Math.random());
}

function click(){
    
    var rand = random();
    
    if(rand) {
        
        alert("true");
        navigator.notification.beep(1);
 
    }
    else {
        alert("false");
       navigator.notification.beep(2);
    }
    
}
console.log("page loaded...");
function remov(e){
    e.parentElement.parentElement.remove();
    console.log(e.closest('.bage'));
    
}
var username=document.querySelector("#user_name");
function change_user(){
    console.log(username);
username.innerHTML="Omran Luv";
}
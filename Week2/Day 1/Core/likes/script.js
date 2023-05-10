var like=document.querySelector("#like1");
var stringoflikes=like.textContent.charAt(0)
var count=parseInt(stringoflikes)
function incrementlikes1(){
    console.log(like.textContent);
    console.log(count);
    count++;
    like.textContent=count+" like(s)"
}
var like2=document.querySelector("#like2");
var stringoflikes2=like2.textContent.charAt(0)+like2.textContent.charAt(1)
var count2=parseInt(stringoflikes2)
function incrementlikes2(){
    console.log(like2.textContent);
    console.log(count2);
    count2++;
    like2.textContent=count2+" like(s)"
}
var like3=document.querySelector("#like3");
var stringoflikes3=like3.textContent.charAt(0)
var count3=parseInt(stringoflikes3)
function incrementlikes3(){
    console.log(like3.textContent);
    console.log(count3);
    count3++;
    like3.textContent=count3+" like(s)"
}

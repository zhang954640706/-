var mores=document.querySelectorAll(
  "[data-more]"
);
for(var more of mores){
  more.onclick=function(){
    var list=document.querySelector(
      "[data-mylist]"
    )
    if(this.innerHTML=="更多∨"){
      list.style.display="block";
      this.innerHTML="更多^"
      this.style.backgroundColor="#ff621f";
      this.style.color="#fff";
    }else{
      list.style.display="none";
      this.innerHTML="更多∨"
      this.style.backgroundColor="#fff";
      this.style.color="#000";
    }
  }
}




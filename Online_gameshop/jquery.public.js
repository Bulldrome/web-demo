//����ʾ���ӿ�
window.onload=function()
{
for(var i=0; i<document.links.length; i++)
document.links[i].onfocus=function(){this.blur()}
}

//��ҳ
function pages(showContent,selfObj){ 
var tag = document.getElementById("pages").getElementsByTagName("div"); 
var taglength = tag.length; 
for(i=0; i<taglength; i++){ 
tag[i].className = "page"; 
} 
selfObj.parentNode.className = "page on"; 

for(i=0; j=document.getElementById("page"+i); i++){ 
j.style.display = "none"; 
} 
document.getElementById(showContent).style.display = "block"; 
}
//չ������
function synthetic(showContent,selfObj){ 

var tag = document.getElementById("sec").getElementsByTagName("div"); 
var taglength = tag.length; 
for(i=0; i<taglength; i++){ 
tag[i].className = "libox"; 
} 
selfObj.parentNode.className = "libox active"; 

for(i=0; j=document.getElementById("sec"+i); i++){ 
j.style.display = "none"; 
} 
document.getElementById(showContent).style.display = "block"; 
}

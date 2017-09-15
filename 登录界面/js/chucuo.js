/*
* @Author: Machenike
* @Date:   2017-09-15 17:09:14
* @Last Modified by:   Machenike
* @Last Modified time: 2017-09-15 17:50:04
*/


let info=document.getElementById('info');
setInterval(function(){
	if(info.innerText<=0){
		location.replace('login.html')
	}else{
		info.innerText-=1;
	}
}, 1000);
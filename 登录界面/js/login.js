/*
* @Author: Machenike
* @Date:   2017-09-15 17:32:53
* @Last Modified by:   Machenike
* @Last Modified time: 2017-09-15 17:45:47
*/
let u =document.getElementById('user');
let p =document.getElementById('pass');
let button =document.getElementById('button');

button.onclick =function(){
	if(u.value=='zhangsan'&&p.value=='123456'){
		alert('success');
	}else{
		location.replace('chucuo.html');
	}
}
window.onload=function(){
	let table=document.querySelector('tbody');
	let box=document.querySelector('div.box');
	let studens=[
	{name:'张三',age:'18',address:'山西太原',min:'汗',birth:'1998-1-1',class:'wuif-1707'},
	{name:'张三',age:'18',address:'山西太原',min:'汗',birth:'1998-1-1',class:'wuif-1707'},
	{name:'张三',age:'18',address:'山西太原',min:'汗',birth:'1998-1-1',class:'wuif-1707'},
	{name:'张三',age:'18',address:'山西太原',min:'汗',birth:'1998-1-1',class:'wuif-1707'},
	{name:'张三',age:'18',address:'山西太原',min:'汗',birth:'1998-1-1',class:'wuif-1707'}
	]
	studens.forEach(index=>{add(index)})
		function add(obj){
				let trs=document.createElement('tr');
				trs.innerHTML=`
					<td>${obj.name}</td>
					<td>${obj.age}</td>
					<td>${obj.address}</td>
					<td>${obj.min}</td>
					<td>${obj.birth}</td>
					<td>${obj.class}</td>
					<td class="btn"><button>删除</button></td>
				`
				table.appendChild(trs);
			}
	table.ondblclick=function(e){
		let element=e.target;
		if(element.nodeName=='TD'&&element.className!='btn'){
			let oldv=element.innerText;
			element.innerText='';
			let inputs=document.createElement('input');
			inputs.style.width='70px';
			inputs.value=oldv;
			element.appendChild(inputs);
			inputs.onblur=function(){
				element.removeChild(inputs);
				inputs=null;
				element.innerText=this.value.trim();
				
			}
		}else if(element.nodeName =='BUTTON'){
			let trs=element.parentNode.parentNode;
			table.removeChild(trs);
		}

	}
	box.onclick=function(e){
		let element=e.target;
		if(element.nodeName=='BUTTON'&&element.className=='add'){
			let inputs=document.createElement('input');
			inputs.style.width='70px';
			adds();
			function adds(){
				let trs=document.createElement('tr');
				trs.innerHTML=`
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td class="btn"><button>删除</button></td>
				`
				table.appendChild(trs);
			}
		}
	}
}
	


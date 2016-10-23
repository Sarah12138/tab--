function $(id){
	return typeof id === 'string'?document.getElementById(id):id;
}

window.onload = function(){
	//获取所有标签和所有内容块
	var tits = $('tit').getElementsByTagName('li'),
		mains = $('cont').getElementsByTagName('div');
	//若标签个数和内容块个数不相等，什么都不做
	if(tits.length != mains.length){
		return;
	}
	//否则，改变标签样式
	else{
		//遍历标签，并给标签添加id，同时给标签绑定事件
		for(var i=0; i<tits.length; i++){
			tits[i].id = i;
			tits[i].onmouseover = function(){
				for(var j=0; j<tits.length; j++){
					tits[j].className = '';
					mains[j].style.display = 'none';
				}
				//为当前鼠标悬浮的标签添加类名，用于改变其样式
				this.className = 'select';
				//将内容块显示在对应的标签下，利用标签的id来找到对应的内容块
				mains[this.id].style.display = 'block';
			}
		}

	}
}
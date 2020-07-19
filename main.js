//jshint esversion:6
var img = document.getElementById("figure");
var list = [];
var listIterator = null;
function showNextFigure(){
	let curItem = listIterator.next().value;
	img.setAttribute("src",curItem.src);
	img.setAttribute("alt",curItem.alt);
	document.getElementById("figureCaption").innerText=curItem.caption;
}
/**
 * 
 * @param {Array<any>} arr 
 */
function* loopGenerator(arr){
	while(true){
		for(let ele of arr){
			yield ele;
		}
	}
}
fetch("./info/imagelist.json",{}).then(
	function (res){
		return res.json();
	}
).then(
	function (data){
		if(data&&data instanceof Array){
			list = data;
			listIterator = loopGenerator(data);
			setInterval(showNextFigure,5000);
		}else{
			throw new TypeError("Invalid data");
		}
	}
);
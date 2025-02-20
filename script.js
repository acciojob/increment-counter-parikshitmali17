//your JS code here. If required.
let p= document.querySelector("#counter")
let i=0;
document.querySelector("#incrementBtn").addEventListener('click',()=>{
	alert(i);
	i++
	p.innerText=i
})

// JavaScript Document
var maxF=4;//最大帧数=多少张图片
var nowF=1;//当前帧数
var myTime;
function move(op){ //显示的帧数
	if(Number(op)){
		nowF=op;
		clearTimeout(myTime);
		}
	for(var i=1;i<=maxF;i++)
	{
			if(nowF==i)//判断当前显示的帧
			{
				document.getElementById("pic"+i).style.display="block";
			}else{ //其他的全部隐藏
				document.getElementById("pic"+i).style.display="none";
				}
	}
	nowF++;//当前帧进行改变
	if(nowF>maxF)
	{
		nowF=1;//从头开始
	}
	myTime=setTimeout("move()",2000);
	}
	function stopPlay()
	{
		clearTimeout(myTime);
	}

var speed=15; //数字越大速度越慢 
var tab=document.getElementById("demo"); 
var tab1=document.getElementById("demo1"); 
var tab2=document.getElementById("demo2"); 
tab2.innerHTML=tab1.innerHTML; 
function Marquee(){ 
if(tab2.offsetWidth-tab.scrollLeft<=0) 
tab.scrollLeft-=tab1.offsetWidth 
else{ 
tab.scrollLeft++; 
} 
} 
var MyMar=setInterval(Marquee,speed); 
tab.onmouseover=function() {clearInterval(MyMar)}; 
tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)}; 

function openWin(){
		var url="userReg.html";
		open(url,"","width=1024px,height=748px")
	}
	
	function openWin1(){
		var url="userlogin.html";
		open(url,"","width=1024px,height=748px")
	}
	
//检验所有的用户输入信息完整性
function checkAll(){
	if(checkName() && checkPwd() && checkPwd2() && checkMail()){
		alert("恭喜您，信息录入有效，提交成功！");
		return true;
	}else{
		return false;
	}
}

//检验用户名
function checkName(){
	var exp2=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{3,6}$/;
	///^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
	//获取用户输入的用户名
	var name=document.getElementById("txtname");
	//获取显示用户名相关信息div对象
	var div=document.getElementById("rig");
	var div1=document.getElementById("tips");
	if(name.value.length<6){
		div.style.display="inline";
		div.src="img/err.png";
		div1.innerHTML="您输入的用户名长度不足！";
		div1.style.color="red";
		name.focus();
		return false;
	}
	else if(name.value.match(exp2))
	{
			div.style.display="inline";
			div.src="img/right.png";
			div1.innerHTML="您输入的用户名长度及格式合法！";
			div1.style.color="green";
			return true;
	}
	else{
			div.style.display="inline";
			div.src="img/err.png";
			div1.innerHTML="用户名必须由英文字母和数字组成！";
			div1.style.color="red";
			name.focus();
			return false;
		
	}
	
}
//检验输入的密码长度
function checkPwd(){
	
	var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,11}$/;
	//获取用户输入的密码
	var pwd=document.getElementById("txtpwd");
	//获取显示密码相关信息div对象
	var div=document.getElementById("rig1");
	var div1=document.getElementById("tips1");
	if(pwd.value.length<6 || pwd.value.length>12 || pwd.value==""){
		div.style.display="inline";
		div.src="img/err.png";
		div1.innerHTML="您输入的密码长度不足或密码为空！";
		div1.style.color="red";
		name.focus();
		return false;
	}
	else if(pwd.value.match(reg))
	{
		div.style.display="inline";
		div.src="img/right.png";
		div1.innerHTML="您输入的密码有效！";
		div1.style.color="green";
	}
	else{
		div.style.display="inline";
		div.src="img/err.png";
		div1.innerHTML="您输入的密码必须包含数字和英文字母，不得有特殊字符！";
		div1.style.color="red";
	}
	return true;
}
//检验两次密码是否一致
function checkPwd2(){
	//获取用户第一次输入的密码
	var pwd=document.getElementById("txtpwd");
	var pwd2=document.getElementById("txtpwd2");
	var div=document.getElementById("rig2");
	var div1=document.getElementById("tips2");
	if(pwd.value!=pwd2.value){
		div.src="img/err.png";
		div.style.display="inline";
		div1.innerHTML="你输入两次密码不一致！";		
		div1.style.color="red";
		pwd2.value="";//清空第二个密码框
		pwd.focus();//聚焦
		pwd.select();//选中第一个密码框
		return false;
		
	}else if(pwd2.value=="")
	{
		div.src="img/err.png";
		div.style.display="inline";
		div1.innerHTML="确认密码不能为空！";		
		div1.style.color="red";
		pwd2.value="";//清空第二个密码框
		pwd.focus();//聚焦
		pwd.select();//选中第一个密码框
		return false;
	}else{
		div.src="img/right.png";
		div.style.display="inline";
		div1.innerHTML="你输入两次密码一致！";		
		div1.style.color="green";
	}
	return true;
}
//验证电子邮箱
function checkMail(){
			var exp1=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			var mail=document.getElementById("txtmail").value;
			var div=document.getElementById("rig3");
			var tip=document.getElementById("tips3");
			if(exp1.test(mail))
			{
					div.src="img/right.png";
					div.style.display="inline";
					tip.innerHTML="邮箱格式符合！";
					tip.style.color="green";
			}
			else
			{
					div.src="img/err.png";
					div.style.display="inline";
					tip.innerHTML="邮箱格式不符合！";
					tip.style.color="red";
			}
	}
			
			

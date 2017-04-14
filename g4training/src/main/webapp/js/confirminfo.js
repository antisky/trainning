var thisURL = document.URL; 
var getval =thisURL.split('?')[1];  
var btsr= getval.split("=")[1];  

function confirmme()
{
	/**
	 * 或者在本页中修改提示，如果读取到身份证，进入下一页，并且自动跳转到下一步，否则提示读取失败
	 * 下一页为 左面是提示取走身份证，右面是个人信息确认，包括姓名，头像，出生年月等
	 * 1 读取身份证，如果读取失败，弹出请重试按钮，或者刷新按钮
	 * 如果读取的内容非空，则进行下一步
	 * 读取的身份证信息，如果图片大小过大，会导致长度过大
	 */
	//ID100Control.DisConnect();

	/*
	var headimg = document.getElementById("headimg");
	var base64f = "data:image/jpeg;base64";
	//headimg.src=myimg;
	headimg.src = 'images/heads.jpg';
	*/
	
	var idJson = eval("(" + btsr + ")");
	//头像字符长度超过IE的get限制，无法使用get方式
    var retInfo = idJson;
    alert(retInfo.info.name);
    //alert(retInfo.ret);
	//alert(btsr);
    
	//alert(retInfo.info.name) 
	var headimg = document.getElementById("headimg");
	headimg.src = 'images/heads.jpg';
	var username = document.getElementById("username");
	var birth = document.getElementById("birthtdate");
	var gender = document.getElementById("gender");
	
	username.innerHTML="姓名:李*";
	gender.innerHTML="性别:男";
	birth.innerHTML="出生年月:2017年4月12日";
}	

function goprint()
{
	/**
	 * 或者在本页中修改提示，如果读取到身份证，进入下一页，并且自动跳转到下一步，否则提示读取失败
	 * 下一页为 左面是提示取走身份证，右面是个人信息确认，包括姓名，头像，出生年月等
	 * 1 读取身份证，如果读取失败，弹出请重试按钮，或者刷新按钮
	 * 如果读取的内容非空，则进行下一步
	 * 读取的身份证信息，如果图片大小过大，会导致长度过大
	 */
	location.href='viewmedia.html';
}	

//当前状态机
var state="s_readcard";
//用户信息
var udata;
var sampleRet =  {"ret":"0",  "info":{"cardno":"35058319851005547X","name":" 陈**","sex":"男","nation":" 汉","birth":"1985年*月* 日","address":"福建省南安市*","org":"南安市公安局"}};
var i_siq=1;

function backward2main()
{
	//location.href=history.go(-1);
	location.href='trainmain.html';
	//alert("next");
	//location.href='readcard.html';
	//window.open('readcard.html','','width=720,height=500,resizable=yes,scrollbars=yes,status=no');
	
}	

//获取当前时间，格式YYYY-MM-DD
function getNowFormatDate( seperator1) {
        var date = new Date();
       // var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
}
    
	
function change2confrimtate(){
	
	//changetip2confirm();
    changeview2takeof();
	showcardtip();
	var tisptile = document.getElementById("tipstitle");
	tisptile.innerHTML="核对个人信息";
	
	var readtip = document.getElementById("readcardtip");
	readtip.style.display="none";
  
    var conftip = document.getElementById("confirmtip");
    conftip.style.display="block";
	
	state = "s_confirm";
	
/*	
	var divread = document.getElementById("readidimg");
	divread.style.display="none";
    
    var bgdiv = document.getElementById("viewvidio");
    bgdiv.style.display="block";
	state="s_viewppt";
	*/
}

/**
 * 显示回执单
 */
function setReceipt(){
	
	var rphoto = document.getElementById("uphoto");
	var rname = document.getElementById("uname");
	var rbirth = document.getElementById("ubdate");
	var rgender = document.getElementById("ugender");
	var ruid    = document.getElementById("uid");
	var runo   =  document.getElementById("uno");
	
	rphoto.src = 'images/heads.jpg';
	rname.innerHTML=udata.name;
	rgender.innerHTML=udata.sex;
	rbirth.innerHTML=udata.birth;
	ruid.innerHTML=udata.cardno;
	runo.innerHTML='X-'+getNowFormatDate('')+i_siq;
	i_siq++;
	
	//uid
	//ugender
	//ubdate
	//uno

	/*
	headimg.src = 'images/heads.jpg';
	username.innerHTML="李*";
	gender.innerHTML="男";
	birth.innerHTML="2017年4月12日";
	*/
	

	
	
}


function change2viewstate(){
	
	var tisptile = document.getElementById("tipstitle");
	tisptile.innerHTML="上岗培训";
	

	
	var divread = document.getElementById("readidimg");
	divread.style.display="none";
    
    var bgdiv = document.getElementById("viewvidio");
    bgdiv.style.display="block";
	
	var ppttip = document.getElementById("ppttip");
	ppttip.style.display="block";
    
    var confirmtip = document.getElementById("confirmtip");
    confirmtip.style.display="none";
	
	state="s_viewppt";
}

/**
转换到打印视图，提示改成打印提示，表格改成打印表格
*/
function change2printstate(){
	
	//更新回执信息
	setReceipt();
	
	var tisptile = document.getElementById("tipstitle");
	tisptile.innerHTML="打印预览";
	
	var printdiv = document.getElementById("printdiv");
	printdiv.style.display="block";
    
    var bgdiv = document.getElementById("viewvidio");
    bgdiv.style.display="none";
	
	var ppttip = document.getElementById("ppttip");
	ppttip.style.display="none";
    
    var previewtip = document.getElementById("previewtip");
    previewtip.style.display="block";
	
	//var signDatestr=new Date();
	var spanSignDate = document.getElementById("signDate");
	spanSignDate.innerHTML=getNowFormatDate('-');
	
	
	state="s_printpreview";
	
}

/**
转换到打印视图
**/
function goprint()
{
	//调用打印程序后，跳转到打印页面
	/**
	 * 或者在本页中修改提示，如果读取到身份证，进入下一页，并且自动跳转到下一步，否则提示读取失败
	 * 下一页为 左面是提示取走身份证，右面是个人信息确认，包括姓名，头像，出生年月等
	 * 1 读取身份证，如果读取失败，弹出请重试按钮，或者刷新按钮
	 * 如果读取的内容非空，则进行下一步
	 * 读取的身份证信息，如果图片大小过大，会导致长度过大
	 */
	//preview(); 
	location.href='getpaper.html';
}

function preview() { 

	bdhtml=window.document.body.innerHTML; 
	//<!-----------start print----------->
	sprnstr="<!--startprint-->"; 
	eprnstr="<!--endprint-->"; 
	prnhtml=bdhtml.substr(bdhtml.indexOf(sprnstr)+17); 
	prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr)); 
	window.document.body.innerHTML=prnhtml; 
	window.print(); 

	} 

function changeview2takeof(){
	
	var tisptile = document.getElementById("tipstitle");
	tisptile.innerHTML="收取证件";
	
	var divread = document.getElementById("readidimg");
	//divread.style.display="none";
    divread.src = "images/takeof.jpg";
  //  var bgdiv = document.getElementById("viewvidio");
  //  bgdiv.style.display="block";
}

function changetip2confirm(){
	
	var tisptile = document.getElementById("tipstitle");
	tisptile.innerHTML="核对个人信息";
	
	var readtip = document.getElementById("readcardtip");
	readtip.style.display="none";
  
    var conftip = document.getElementById("confirmtip");
    conftip.style.display="block";
}

function showcardtip()
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
	
	var headimg = document.getElementById("headimg");
	var username = document.getElementById("username");
	var birth = document.getElementById("birthtdate");
	var gender = document.getElementById("gender");
	

	/*
	headimg.src = 'images/heads.jpg';
	username.innerHTML="李*";
	gender.innerHTML="男";
	birth.innerHTML="2017年4月12日";
	*/
	
	headimg.src = 'images/heads.jpg';
	username.innerHTML=udata.name;
	gender.innerHTML=udata.sex;
	birth.innerHTML=udata.birth;
	
}	

function readCard()
{
	//弹出身份证页面，包括照片，姓名，出生年月
	//图片提示用户取走身份证的照片
	//用户确认前提示用户取走身份证
	//location.href=history.go(-1);
	//alert("next");
	//location.href='readcard.html';
	//window.open('readcard.html','','width=720,height=500,resizable=yes,scrollbars=yes,status=no');
	/**
	 * 或者在本页中修改提示，如果读取到身份证，进入下一页，并且自动跳转到下一步，否则提示读取失败
	 * 下一页为 左面是提示取走身份证，右面是个人信息确认，包括姓名，头像，出生年月等
	 * 1 读取身份证，如果读取失败，弹出请重试按钮，或者刷新按钮
	 * 如果读取的内容非空，则进行下一步
	 * 读取的身份证信息，如果图片大小过大，会导致长度过大
	 */
	//ID100Control.DisConnect();
	//
	/**
	 * 1,初始化连接，如果连接不成功，提示未初始化，请检查读卡器连接情况。不进行跳转
	 * 2，如果读取身份证信息不成功，提示读取失败，提示请重新放置
	 * 3，如果读取身份证成功，跳转
	 
	 改成直接修改div的显示方式
	 */
	 
	 alert(state);
	 if(state == "s_confirm"){
		 change2viewstate();
		 return;
	 }
	 if(state == "s_viewppt"){
		change2printstate();
		return;
	 }
	 
	 if(state == "s_printpreview"){
		 goprint();
		 return;
	 }
	 
	//readcardstate
	 
	var retCnt = ID100Control.Connect();
	alert(retCnt);
	if(retCnt){
	    var btsr = ID100Control.ReadContentEx();
	    var idJson = eval("(" + btsr + ")");
	    var retInfo = idJson;
	    alert(retInfo.ret);
	    var retv = retInfo.ret;
	 // ID100Control.disconect();
	    if(retv == 0){
	    	alert(retInfo.info.name);
	    	udata = retInfo.info;
	    	//location.href='confirminfo.html?cc='+retInfo.info.name;
	    	//不使用跳转方式//
	    	//location.href='confirminfo.html?retinfo='+btsr;
	    	//改用元素修改方式
			change2confrimtate();

	    	
	    }else
	    {
	     //改提示	
	    	var bgdiv = document.getElementById("redcarrev");
	    	//bgdiv.innerHTML=retv;
			bgdiv.innerHTML="读卡失败:"+retv;
	    }
	   
	}else{
			var bgdiv = document.getElementById("redcarrev");
	    	bgdiv.innerHTML="读卡器未连接";
			
			//跳过读卡器检测，在没有读卡器的情况下test
	    	{
	    	udata = sampleRet.info;
			change2confrimtate();
	    	}
			//此时状态机要转换成视频状态
	}
	/*
	var retCnt = ID100Control.Connect();
	//alert(retCnt);
	if(retCnt){
	    var btsr = ID100Control.ReadContentEx();
	    ID100Control.disconect();
	}else{
		//alert unable to read card!
		var msg = ID100Control.getLastErr();
		alert(msg);
		return;
	}
	*/
	/*
	读取不成功时不进行下一步
	*/
	//location.href='confirminfo.html';
	
}	
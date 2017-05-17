function go2main()
{
	location.href='main.html';	
}


function go2readCard()
{
	location.href='readcard.html';	
}


function go2sheet()
{
	location.href='multiview.html';	
}

/**----------------状态转换-------------------*/

var curstate = "s_main";

function backward2main(){
	location.href='main.html';
	curstate = "s_main";
}

//点击返回
function back2start(){
	curstate = "s_main";
	location.href='wellcome.html';
}


//点击下一步
function nextstep(){
	//alert(curstate);
	if(curstate == "s_start"){
		curstate = "s_main";	
		location.href='main.html';
	}
	else if(curstate == "s_main"){
		curstate = "s_readcard";
		hideview("userguide");
		showview("readcard");
		//
	}else if(curstate == "s_readcard"){
		
		curstate = "s_playmovie";
		showview("viewmovie");
		
		hideview("userguide");
		hideview("readcard");
		hideview("usersheet");
		

	}else if(curstate == "s_playmovie"){
		curstate = "s_listuser";
		hideview("viewmovie");
		hideview("userguide");
		hideview("readcard");
		showsheet();
		showview("usersheet");
		
	}
	else if(curstate == "s_listuser"){
		curstate = "s_main";
		location.href='wellcome.html';
		
	}
	
	//alert(curstate);
}

//把某个控件设置为不可见
function hideview(divname){
	var ppttip = document.getElementById(divname);
	ppttip.style.display="none";
}

function showview(divname){
	var ppttip = document.getElementById(divname);
	ppttip.style.display="block";
}



function change2confrimstate(){
	
	//changetip2confirm();
    changeview2takeof();
	showcardtip();
	var tisptile = document.getElementById("tipstitle");
	tisptile.innerHTML="核对个人信息";
	
	var readtip = document.getElementById("readcardtip");
	readtip.style.display="none";
  
    var conftip = document.getElementById("confirmtip");
    conftip.style.display="block";
	
    curstate = "s_confirm";
	
}
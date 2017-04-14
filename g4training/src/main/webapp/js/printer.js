/*
function printsht( headphoto){
OpenWindow=window.open("", "newwin", "height=250, width=250,toolbar=no ,scrollbars="+scroll+",menubar=no"); 
OpenWindow.document.write("<TITLE>回执表</TITLE>");  
OpenWindow.document.write("<BODY BGCOLOR=#ffffff>");  
OpenWindow.document.write("<h1>Hello!</h1>");  
OpenWindow.document.write("New window opened!<br> is Good"); 
//var headdata="data:image/jpg;base64,+img
//<img src="readid.jpg" />
//</image>
var imgsrc = '<img src='+'"readid.jpg"'+'/>';
var imgsrc2 = '<img src='+headdata+'/>';
var imgsrc3 = '<img src='+headphoto+'/>';
OpenWindow.document.write("<br/>")
OpenWindow.document.write(imgsrc3);
OpenWindow.document.write("</BODY>");  
OpenWindow.document.write("</HTML>");  
OpenWindow.document.close();
}  
*/
/**
 *
 * open一个已有页面，页面onload的时候，自动打印
 * 
 */
function onprint( ){
	var headphoto = "goodby";
	//alert(headphoto);
	//Window.showModalDialog("sheet.html",headphoto,"dialogWidth=200px;dialogHeight=100px");
	window.open("sheet.html",headphoto,"dialogWidth=200px;dialogHeight=100px");
}

function next2printer(){
	/*
	//打开将会打印
	preview();
	*/
	location.href='getpaper.html';
}

function ondivprint(){
	//在打印的时候，把图片部分更换成个人信息
	//getDiv，设置为可见，另外一个div为不可见
	var printDiv = document.getElementById("printdiv");
	printDiv.style.display="block";
    bdhtml = window.document.body.innerHTML;
    var bgdiv = document.getElementById("printerbg");
    bgdiv.style.display="none";
    //设定打印内容并且打印
    /*
    sprnstr = "<!--startprint-->";
    eprnstr = "<!--endprint-->";
    prnhtml = bdhtml.substr(bdhtml.indexOf(sprnstr) + 17);
    prnhtml = prnhtml.substring(0, prnhtml.indexOf(eprnstr));
    window.document.body.innerHTML = prnhtml;
    window.print();
    */
}

function setPrintdir(content){
	//设定table的值
	//头像
	//文本
	//抬头
	//下标
	var retContent =  {"ret":"0",  "info":{"cardno":"35058319851005547X","name":" 陈**","sex":"男","nation":" 汉","birth":"1985年*月* 日","address":"福建省南安市*","org":"南安市公安局","photo":"nopic"}};
	   
	
}

function onprintsheet( headphoto){
	OpenWindow=window.open("", "newwin", "height=250, width=250,toolbar=no ,scrollbars="+scroll+",menubar=no"); 
	OpenWindow.document.write("<TITLE>dollare雄仔工作室</TITLE>");  
	OpenWindow.document.write("<BODY BGCOLOR=#ffffff>");  
	OpenWindow.document.write("<h1>Hello!</h1>");  
	OpenWindow.document.write("New window opened!<br> is Good"); 
	//var headdata="data:image/jpg;base64,+img
	//<img src="readid.jpg" />
	//</image>
	var imgsrc = '<img src='+'"readid.jpg"'+'/>';
	var imgsrc2 = '<img src='+headdata+'/>';
	var imgsrc3 = '<img src='+headphoto+'/>';
	OpenWindow.document.write("<br/>")
	OpenWindow.document.write(imgsrc3);
	OpenWindow.document.write("</BODY>");  
	OpenWindow.document.write("</HTML>");  
	OpenWindow.document.close();
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
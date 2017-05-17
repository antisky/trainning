

//点击确认的时候，读取读卡器并生成一个person对象
function createPerson(name,cardno,photo)//,birth,gender)
{
    var o = new Object();
    o.name=name;
    o.cardno=cardno;
    o.photo=photo;
    o.company="Company";
    o.position="";
    o.contact="";
    o.signature="";
   // o.birth=birth;
   // o.gender=gender;
    //读卡显示
    o.showinfo=function()
    {
        //alert(this.name);
    	/**
    	 * 获取显示的区域div，设置区域的姓名，身份证，出生年月，头像
    	 */
    	//var vphoto = document.getElementById("photo");
    	var vname = document.getElementById("username");
    	//var vbirth = document.getElementById("birthtdate");
    	//var vgender = document.getElementById("gender");
    	var vcardno = document.getElementById("cardno");
    	
    	//vphoto.innerHTML=photo;
    	vname.innerHTML=name;
    	vcardno.innerHTML=cardno;
    	//vender=gender;
    };
    
    //表格显示
    o.sheetshow=function(){
    	
    };
    return o;
}


var idn=0;
var userarr = new Array();
/**
 * 从json对象解析
 * @param jsonstr
 * @returns {___anonymous924_924}
 */
function personFromJson(jsonstr){
	 var o = new Object();
	 /*
		rname.innerHTML=udata.name;
		rgender.innerHTML=udata.sex;
		rbirth.innerHTML=udata.birth;
		//身份证敏感信息需要用****替换
		var sidShow = udata.cardno.substr(0,udata.cardno.length-8);
		sidShow = sidShow+"********";
		*/
	    var udata = jsonstr.info;
	    o.name=udata.name;
	    o.cardno=udata.cardno;
	    o.photo=udata.photo;
	    
	    o.showinfo=function()
	    {
	        //alert(this.name);
	    	/**
	    	 * 获取显示的区域div，设置区域的姓名，身份证，出生年月，头像
	    	 */
	    	var vphoto = document.getElementById("uphoto");
	    	var vname = document.getElementById("name");
	    	//var vbirth = document.getElementById("birthtdate");
	    	//var vgender = document.getElementById("gender");
	    	var vcardno = document.getElementById("cardno");
	    	
	    	//vphoto.innerHTML="<img height='200px' id='headimg' src="+myimg+" />";
	    	//vphoto.innerHTML=myimg;
	    	//vphoto.innerHTML=o.photo;
	    	//vphoto.innerHTML=o.photo;
	    	vname.innerHTML=o.name;
	    	vcardno.innerHTML=o.cardno+idn;
	    	idn++;
	    	// <img id="photo" src="../img/testhead.jpg" height="200px"/>
	    	//vphoto.innerHTML="<img id='uphoto' height='200px' src="+'../img/bill.jpg'+" />";
	    	vphoto.src="../img/bill.jpg";
	    	
	    };
	    
	   return o;
}


var sampleUser;
/**
 * 调用读卡器的读卡程序，读出一个一串字符串并生成一个user对象，添加到数据中，如果数组长度为0
 * 清除读卡器的view，并显示内容为读卡信息
 */
function readCard(){
	var sampleRet =  {"ret":"0",  "info":{"cardno":"35058319851005547X","name":" 陈**","sex":"男","nation":" 汉","birth":"1985年*月* 日","address":"福建省南安市*","org":"南安市公安局","photo":"x"}};
    //readidimg 把该控件设置为不可见
	hidediv("guaidview");
	showdiv("printdiv");
	sampleUser = personFromJson(sampleRet);
	sampleUser.showinfo();
	userarr.push(sampleUser);
}

/**
 * 从读卡器读入用户数据并显示
 */
function readUserAndShow(){
	
	//读入
	var sampleRet =  {"ret":"0",  "info":{"cardno":"35058319851005547X","name":" 陈**","sex":"男","nation":" 汉","birth":"1985年*月* 日","address":"福建省南安市*","org":"南安市公安局","photo":"x"}};
    //readidimg 把该控件设置为不可见
	sampleUser = personFromJson(sampleRet);
	userarr.push(sampleUser);
	
	//显示
	hidediv("guaidview");
	showdiv("printdiv");
	
	sampleUser.showinfo();
	
}

/**
 * 测试表格显示用，
 */
function testRead(){
	for(var i=0; i<5;i++){
	var sampleRet =  {"ret":"0",  "info":{"cardno":"35058319851005547X","name":" 陈**","sex":"男","nation":" 汉","birth":"1985年*月* 日","address":"福建省南安市*","org":"南安市公安局","photo":"x"}};
    //readidimg 把该控件设置为不可见
	sampleUser = personFromJson(sampleRet);
	userarr.push(sampleUser);
	}
}

//把某个控件设置为不可见
function hidediv(divname){
	var ppttip = document.getElementById(divname);
	ppttip.style.display="none";
}

function showdiv(divname){
	var ppttip = document.getElementById(divname);
	ppttip.style.display="block";
}

/**
Name	Company		Position	Contact		ID		Signature
姓名	    公司		    职务/工种	    联系方式		证件号码	签名
 */
var usersheet=["Name",	"Company",		"Position",	"Contact",		"ID",		"Signature"];
function showsheet(){
	var col = 6;
	//var sheethead=["Name",	"Company",	"Position",	"Contact", "ID", "Signature"];
	//var sheethead=["姓名",	    "公司",		    "职务/工种",	    "联系方式",		"证件号码",	"签名"];
	var sheethead=["姓    名","公    司","联系方式","证件号码","签 	名"];
    var str="";
    //var sheetname="datasheet";
    //var border = "2";
     var sheetcss5="sheetcss5";
//    str += "<table id= 'datasheet' class='sheetcss5' >";
    str += "<table id= 'datasheet' >";
    //headimg.innerHTML="<img height='200px' id='uphoto' src="+headimgsrc+" />";

	str +="<thead>";
	str +=addtitle(sheethead,"HSSE培训签到表");
	
	str +="<tr>";
	for(var ti=0; ti<sheethead.length; ti++){
		str+="<th>";
		str+=sheethead[ti];
		str+="</th>";
	}
	str +="</tr>";
	str +="</thead>";
	
	str +="<tbody>";
	
	/*
	str +="<tr>";
	for(var ti=0; ti<sheethead.length; ti++){
		str+="<th>";
		str+=sheethead[ti];
		str+="</th>";
	}
	str +="</tr>";
	*/
	//测试用输入数据
	testRead();
	str +=userarr2sheet(userarr);
	
	
	str +="</tbody>";
	str +="</table>";

	
	sheetdiv=document.getElementById("datasheet");
	sheetdiv.innerHTML=str;
	//sheetdiv.style.class=sheetcss5;
	showdiv("sheetdiv");
	//alert(str);

}

function addtitle(arr,title){
	var str = "";
	str +="<tr>";
	str +="<th colspan='"+arr.length+"'>";
	str += title;
	str +="</th>";
	return str;
		
}

function userarr2sheet(uArr){
	var str = "";
	for(var i=0; i<uArr.length; i++){
		str+=user2sheet(uArr[i]);
	}
	return str;
}

/*
     o.name=name;
    o.cardno=cardno;
    o.photo=photo;
    o.company="Company";
    o.position="";
    o.contact="";
 */
//var sheethead=["Name",	"Company",	"Position",	"Contact", "ID", "Signature"];
function user2sheet(user){
	var str  ="<tr>";
	str+="<td>";
	str+=var2str(user.name);
	//str+=user.name;
	str+="</td>";
	str+="<td>";
	str+=var2str(user.company);
	str+="</td>";
	
	/*
	str+="<td>";
	str+=var2str(user.position);
	str+="</td>";
	*/
	str+="<td>";
	str+=var2str(user.contact);
	str+="</td>";
	
	str+="<td>";
	str+=var2str(user.cardno);
	str+="</td>";
	
	str+="<td>";
	str+=var2str(user.signature);
	str+="</td>";
	
	str+="</tr>";
	return str;
	
}

function var2str(varstr){
	if(typeof varstr=="undefined"){return "&nbsp";} 
	return varstr;
}

/**
 * 打印表格的内容，
 */
/*
function printSheet(){
	document.body.innerHTML=document.getElementById('sheetdiv').innerHTML+'<br/>'+document.getElementById('sheetprint').innerHTML;
	window.print();
}
*/

function SetPrintSettings() {
	// -- advanced features
	factory.printing.SetMarginMeasure(2) // measure margins in inches
	factory.SetPageRange(false, 1, 3) // need pages from 1 to 3
	factory.printing.printer = "HP DeskJet 870C"
	factory.printing.copies = 2
	factory.printing.collate = true
	factory.printing.paperSize = "A4"
	factory.printing.paperSource = "Manual feed"
	// -- basic features
	factory.printing.header = "This is MeadCo"
	factory.printing.footer = "Advanced Printing by ScriptX"
	factory.printing.portrait = false
	factory.printing.leftMargin = 1.0
	factory.printing.topMargin = 1.0
	factory.printing.rightMargin = 1.0
	factory.printing.bottomMargin = 1.0
}




function previewPrint(){
	//这种方式会修改原始页面，要重新刷新，不好
	//document.body.innerHTML=document.getElementById('sheetdiv').innerHTML+'<br/>'+document.getElementById('sheetprint').innerHTML;
	//打印预览
	
	bdhtml=window.document.body.innerHTML; 
	sprnstr="<!--startprint-->"; 
	eprnstr="<!--endprint-->"; 
	prnhtml=bdhtml.substr(bdhtml.indexOf(sprnstr)+17); 
	prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr)); 
	prnhtml=prnhtml.replace("viewprintdiv.css","gpprint.css");
	//var sheetdiv=document.getElementById("datasheet");
	//var sheetcss5="printcss";
	//sheetdiv.style.class=sheetcss5;
	
	window.document.body.innerHTML=prnhtml; 
	//打印
	//wb.execwb(6,6);
	//window.print();
	//打印预览
	wb.execwb(7,1);
	//打印完毕后要重设回去
	window.document.body.innerHTML=bdhtml; 

}


/**
 Gprinter80(72) x 297 mm
 203dpi
 
 */



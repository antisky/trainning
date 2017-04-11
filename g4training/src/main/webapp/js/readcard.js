
	
function backward2main()
{
	location.href=history.go(-1);
	//alert("next");
	//location.href='readcard.html';
	//window.open('readcard.html','','width=720,height=500,resizable=yes,scrollbars=yes,status=no');
	
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
	location.href='confirminfo.html';
	
}	

theObjects = document.getElementsByTagName("object");
for (var i = 0; i < theObjects.length; i++)
{
	theObjects[i].outerHTML = theObjects[i].outerHTML;
}



/*
function changemovie() {

  
  theObjects = document.getElementsByTagName("object");
  for (var i = 0; i < theObjects.length; i++)
  {
	 theObjects[i].outerHTML = theObjects[i].outerHTML.replace("ase1","ase2");
	 //theObjects[i].outerHTML = theObjects[i].outerHTML; 
  }
  
}
*/
var curvideo="ase1";
function changemovie(pvideo,obj) {

  //alert(pvideo);
  theObjects = document.getElementsByTagName("object");
  for (var i = 0; i < theObjects.length; i++)
  {
	 theObjects[i].outerHTML = theObjects[i].outerHTML.replace(curvideo,pvideo);
	 //theObjects[i].outerHTML = theObjects[i].outerHTML; 
  }
  //替换当前播放的视频
  curvideo = pvideo;
  
}
   

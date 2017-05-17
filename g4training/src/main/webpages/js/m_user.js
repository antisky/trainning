function Person(){
 
}
//var sampleRet =  {"ret":"0",  "info":{"cardno":"35058319851005547X","name":" 陈**","sex":"男","nation":" 汉","birth":"1985年*月* 日","address":"福建省南安市*","org":"南安市公安局","photo":"x"}};

Person.prototype = {
  constructor:Person,
  name:"陈**",
  birth:"1985年*月*日",
  photo:"teacher",
  cardno:"35058319851005547X",
  
  getName:function(){
    return this.name;
  },
  
  getPhoto:function(){
    return this.photo;
  },
  getCardno:function(){
	 return this.cardno;
  },
}
 

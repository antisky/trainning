function User(name,id){
var myuser = new Object;
myuser.name = name;
myuser.id = id;
myuser.showUser = function(){
document.write(this.id)
};
return myuser;
}
const mysql = require('mysql');
//連接池

let db = mysql.createPool(host: "localhost", user: "root", password: "" , port: "3306", maxconection:10);
db.query();
--------------
// 服务端接收
const http = require('http');
const io = require('socket.io');
const fs = require('fs');
let httpServer = http.createServer();
httpServer.listen(8080);
let wsServer = io.listen(httpServer);
let aSock=[];
wsServer.on('connection',sock=>{
aSock.push(sock);
sock.on('msg',str=>{
aSock.forEach(s=>{
if (s!=sock) {
sock.emit('msg',str);//发送给非自己的客户端数据
}
})
})
});
sock.on('disconnect',()=>{
var n = aSock.indexOf(sock);
if (n>-1) {
aSock.splice(n,1);//当客户端断开连接时从第n位删除一个元素
}
})
//客户端发送和接收
const http = require('http');
const io = require('socket.io');
const fs = require('fs');
sock.emit('msg',oTxt.value);//把填入的数据发给服务端
sock.on('msg',str=>{
...
})//接收服务端发送过来的数据
//客户端判断连接状态
sock.on('connect',()=>{
console.log('已连接');
})
sock.on('disconnect',()=>{
console.log('连接断开');
})

---------------------------------------------------------------------------
跨域 
不存在跨域，跨域是浏览器的限制

---------------------------------------------------------------------------
//
let data = new FormData();
Array.from(ev.dataTransfer.files).forEach(file=>{
	data.append('f1',file);
});

//原生Ajax 
let oAjax = new XMLHttpRequest();
oAjax.open('GET',url,true);
oAjax.send();
oAjax.onreadystatechange=function(){
if (oAjax.readyState==4) {
if (oAjax.status>=200 && oAjax.status<300 || oAjax.status=304) {
alert("seccess");
}else{
alert("fail");
}
}
}
---------------------------------------------------------------------------                                                                                                                          
multiple
<input type="file" id="fi" multiple/>

---------------------------------------------------------------------------   

拖拽事件
ondragenter 拖着东西进入    addEventListener('dragenter',()=>{},false);
ondragleave 拖着东西离开	   addEventListener('dragleave',()=>{},false);
ondragover  悬浮			   addEventListener('dragover',()=>{},false);
ondrop      松手上傳		   addEventListener('drop',()=>{},false);

oBox.ondragenter =function(){
	oBox.innerHTML="松手上传";
	return false;//阻止默认事件
}//鼠标进入oBox范围是就会变化

oBox.ondragover = function(){
      console.log("aaa");
      return false;//阻止默认事件,不阻止那么ontrop永远不会发生
    }//


oBox.ondrop =function(ev){
	
	console.log(ev.dataTransfer.files);
	return false;//阻止默认事件
}

(addEventListener)綁定之後的阻止默認事件

//ev事件对象，是事件里传递数据的对象

--------------------------------------------------------------------------- 
//文件上传进度监控 
oAjax.upload.onprogress = function(ev){//function 放在前面 放在AJAX创建的位置 open 和 send之间
 ev.loaded   //完成
 ev.total	 //总共

 ev.loaded/ev.total   =>0-1
}  
//AJAX 2.0才有进度监控
oAjax.upload.addEventListener('progress',function(ev){
	console.log(ev);
},false);


1.upload必须放在send前面
2.以前上传--POST
加了upload--option、POST

--------------------------------------------------------------------------- 
數據庫結構：  數據字典
接口格式：    接口文檔


--------------------------------------------------------------------------- 
oAjax.onprogress 下載進度
oAjax.upload.onprogress 上傳進度
--------------------------------------------------------------------------- 
HTML5--DOM3
官方：所有DOM3(HTML5)事件都得綁定
--------------------------------------------------------------------------- 
斷點上傳--普通html做不到，客戶端ok
移動端web不行
移動端app可以
通過content-range頭實現
--------------------------------------------------------------------------- 
如果兩次上傳同一個文件，第二次還會上傳嗎
瀏覽器：每次都得重新上傳
客戶端檢測文件內容
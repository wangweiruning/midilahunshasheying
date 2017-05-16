window.onload=function(){

  function SelectPullDown(box){
    this.selectBox = document.getElementById(box);
    this.selectIpt = document.getElementById(box).getElementsByTagName("input")[0];//传值表单
    this.selectDivBtn = document.getElementById(box).getElementsByTagName("div")[0];//选中显示框
    this.selectDivList = document.getElementById(box).getElementsByTagName("div")[1];////下拉框
    this.selectSpan = document.getElementById(box).getElementsByTagName("span");//选项
}
SelectPullDown.prototype ={
    selectBox : '',//document.getElementById('selectYear').getElementsByTagName("input")[0],
    selectIpt : '',//document.getElementById('selectYear').getElementsByTagName("input")[0],
    selectDivBtn : '',//document.getElementById('selectYear').getElementsByTagName("div")[0],
    selectDivList : '',//document.getElementById(box).getElementsByTagName("div")[1];
    selectSpan : '',//document.getElementById('selectYear').getElementsByTagName("span"),
    iptEven : function(){
        var self = this;
        this.selectBox.onmouseover = function(){
            self.selectListShow();
        }    
        this.selectBox.onmouseout = function(){
            self.selectListHide();
        }
        return this;    
    },
    selectListShow: function(){
        this.selectDivList.style.display = "block";
    },
    selectListHide: function(){
        this.selectDivList.style.display = "none";
    },
    selectPick : function() {
        var span = this.selectSpan,
        self = this;
        function trimStr(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
        for(var i=0;i<span.length;i++){
            span[i].onclick = function(){
                self.selectDivBtn.innerHTML = trimStr(this.innerHTML);
                self.selectIpt.value= trimStr(this.id);
                self.selectListHide();
                //chang事件触发
                if (self.selectIpt.fireEvent) self.selectIpt.fireEvent('onchange');
                else{ 
                    var evt;
                    evt = document.createEvent("HTMLEvents");  
                    evt.initEvent("change", true, true);  
                    self.selectIpt.dispatchEvent(evt);
                };
            }
        }    
        return this;
    },
    init : function(){
        this.iptEven().selectPick();    
    }
};
//调用方法
var year = new SelectPullDown('selectYear');
year.init();

  function isuseName(){
    var obj=document.getElementById("useName");
    if(/^\W{2,}$/.test(obj.value)){
       obj.className="green_color";
       return true;
    }else{
   obj.className="red_color";
       return false;
    }
}
// 手机号码
 function ints(){
    var obj=document.getElementById("int");
    if(/^\s*[0-9]{8,11}\s*$/.test(obj.value)){
       obj.className="green_color";
       return true;
    }else{
   obj.className="red_color";
       return false;
    }
}
// 邮箱
function isEmail(){
    var obj=document.getElementById("useEmail");
    // var filter=/^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
    if(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(obj.value)){
       obj.className="green_color";
       return true;
    }else{
       obj.className="red_color";
       return false;
    }
}
// QQ号码
function isQQ(){
    var obj=document.getElementById("useQQ");
    if(/^\s*[0-9]{5,11}\s*$/.test(obj.value)){
      obj.className="green_color";
       return true;
    }else{
    obj.className="red_color";
       return false;
    }
}
// 日期
function isDate(){
    var obj=document.getElementById("intdate");
    if(!obj.value==""){
      obj.className="green_color";
       return true;
    }else{
    obj.className="red_color";
       return false;
    }
}
// 风格
function isstyle(){
    var obj=document.getElementById("styles");
    if(!obj.value==""){
      obj.className="green_color";
       return true;
    }else{
    obj.className="red_color";
       return false;
    }
}
// 多行文本
function moreTst(){
    var obj=document.getElementById("moreText");
    if(obj.value != ""){
       return true;
    }else{
       return false;
    }
}
// 整体验证
function allinput(){
    return isuseName()　&&  isEmail() && isTel() && isQQ() && isDate() && isstyle() && moreTst();
}
}